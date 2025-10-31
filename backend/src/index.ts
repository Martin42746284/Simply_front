import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import prisma from './prisma';
import authRoutes from './routes/auth';
import usersRoutes from './routes/users';
import fansRoutes from './routes/fans';
import imagesRoutes from './routes/images';
import contenuRoutes from './routes/contenu';
import messagesRoutes from './routes/messages';

// Charger les variables d'environnement
dotenv.config();

async function main() {
  try {
    // Vérifier la connexion à la base de données
    await prisma.$connect();
    console.log('✅ Connected to database');

    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); // Serve uploaded files

    // Routes
    app.use('/auth', authRoutes);
    app.use('/users', usersRoutes);
    app.use('/fans', fansRoutes);
    app.use('/images', imagesRoutes);
    app.use('/contenu', contenuRoutes);
    app.use('/messages', messagesRoutes);

    // Error handler
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Something broke!' });
    });

    // Start server
    const port = Number(process.env.PORT || 3000);
    app.listen(port, () => {
      console.log(`✅ Server listening on http://localhost:${port}`);
    });

  } catch (error) {
    console.error('❌ Server failed to start:', error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

