import { Router, Request, Response } from 'express';
import prisma from '../prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// GET /contenu
router.get('/', requireAuth, async (req: Request, res: Response) => {
  const contenus = await prisma.contenu.findMany();
  return res.json({ data: contenus });
});

// POST /contenu
router.post('/', requireAuth, async (req: Request, res: Response) => {
  const { titre, urlImage, prix } = req.body;
  const c = await prisma.contenu.create({ data: { titre, urlImage, prix: Number(prix || 0) } });
  return res.json({ data: c });
});

export default router;
