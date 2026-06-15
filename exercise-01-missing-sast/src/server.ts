import express from 'express';

export const app = express();
app.use(express.json());

// TODO: Claude will add endpoints here via src/api.ts

export const startServer = (port = 3000) => {
  return app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

if (require.main === module) {
  startServer();
}
