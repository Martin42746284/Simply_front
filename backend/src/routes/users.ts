import { Router, Request, Response } from 'express';
import prisma from '../prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// GET /users/me
router.get('/me', requireAuth, async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user?.id;
  if (!userId) return res.status(401).json({ error: 'Not authenticated' });

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return res.status(404).json({ error: 'User not found' });

  return res.json({ data: { id: user.id, email: user.email, name: user.name } });
});

export default router;
