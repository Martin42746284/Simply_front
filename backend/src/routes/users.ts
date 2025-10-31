import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../prisma';
import { requireAuth } from '../middleware/auth';
import { upload } from '../middleware/upload';
import { validateRequest } from '../middleware/validation';
import { 
  updateProfileSchema, 
  updateSettingsSchema, 
  updateSocialSchema
} from '../validators/userSchemas';
import { sendSuccess, sendError, formatUserResponse } from '../utils/apiResponse';
import { 
  ProfileUpdateData, 
  SettingsUpdateData, 
  SocialUpdateData 
} from '../types/userTypes';

const router = Router();

// Middleware de vérification d'authentification avec type checking
const checkAuth = (req: Request & { user?: { id: string }; userId?: string }, res: Response, next: NextFunction) => {
  const userId = req.user?.id;
  if (!userId) return sendError(res, 'Not authenticated', 401);
  req.userId = userId;
  next();
};

// GET /users/me - Obtenir le profil complet
router.get('/me', requireAuth, checkAuth, async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({ 
      where: { id: req.userId }
    });
    
    if (!user) {
      return sendError(res, 'User not found', 404);
    }

    sendSuccess(res, formatUserResponse(user));
  } catch (err) {
    sendError(res, err as Error);
  }
});

// PUT /users/me - Mettre à jour le profil
// Helper pour la mise à jour du profil
async function updateUserProfile(
  userId: string, 
  data: ProfileUpdateData, 
  avatarPath?: string
) {
  return prisma.user.update({
    where: { id: userId },
    data: {
      ...data,
      ...(avatarPath && { avatar: avatarPath })
    }
  });
}

router.put('/me',
  requireAuth,
  checkAuth,
  upload.single('avatar'),
  validateRequest(updateProfileSchema),
  async (req: Request, res: Response) => {
    try {
      const avatarPath = req.file ? `/uploads/avatars/${req.file.filename}` : undefined;
      const updatedUser = await updateUserProfile(
        req.userId!,
        req.validatedData as ProfileUpdateData,
        avatarPath
      );
      sendSuccess(res, formatUserResponse(updatedUser));
    } catch (err) {
      sendError(res, 'Erreur lors de la mise à jour du profil', 500);
    }
  }
);

// PUT /users/me/settings - Mettre à jour les paramètres
// Helper pour la mise à jour des settings
async function updateUserSettings(userId: string, settings: SettingsUpdateData) {
  return prisma.user.update({
    where: { id: userId },
    data: settings
  });
}

router.put('/me/settings',
  requireAuth,
  checkAuth,
  validateRequest(updateSettingsSchema),
  async (req: Request, res: Response) => {
    try {
      const updatedUser = await updateUserSettings(
        req.userId!,
        req.validatedData as SettingsUpdateData
      );
      sendSuccess(res, formatUserResponse(updatedUser));
    } catch (err) {
      sendError(res, 'Erreur lors de la mise à jour des paramètres', 500);
    }
  }
);

// PUT /users/me/social - Mettre à jour les réseaux sociaux
// Helper pour la mise à jour des réseaux sociaux
async function updateUserSocial(userId: string, social: SocialUpdateData) {
  return prisma.user.update({
    where: { id: userId },
    data: social
  });
}

router.put('/me/social',
  requireAuth,
  checkAuth,
  validateRequest(updateSocialSchema),
  async (req: Request, res: Response) => {
    try {
      const updatedUser = await updateUserSocial(
        req.userId!,
        req.validatedData as SocialUpdateData
      );
      sendSuccess(res, formatUserResponse(updatedUser));
    } catch (err) {
      sendError(res, 'Erreur lors de la mise à jour des réseaux sociaux', 500);
    }
  }
);

export default router;
