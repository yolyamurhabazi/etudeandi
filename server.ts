import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

// Charger les variables d'environnement si nécessaire
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// -------------------------------------------------------------
// API ENDPOINTS (Désactivés pour fonctionnement local autonome)
// -------------------------------------------------------------

// 1. Générer une nouvelle question ENAFEP (Non disponible localement)
app.post('/api/gemini/generate', (req, res) => {
  res.status(501).json({
    error: "Le système est configuré pour s'exécuter en mode 100% hors-ligne local. Aucune clé d'API n'est requise."
  });
});

// 2. Obtenir une explication de Maître Jean-Pierre (Non disponible localement)
app.post('/api/gemini/explain', (req, res) => {
  res.status(501).json({
    error: "Le système est configuré pour s'exécuter en mode 100% hors-ligne local. Aucune clé d'API n'est requise."
  });
});

// -------------------------------------------------------------
// VITE INTEGRATION
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

startServer();
