import 'dotenv/config';
import { app } from './app.js';

const PORT = process.env.PORT ?? 3000;

const start = () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${String(PORT)}...`),
    );
  } catch (error) {
    console.error(error);
  }
};

start();
