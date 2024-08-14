import 'dotenv/config';
import { app } from './app.js';
import { config } from './config.js';
import { connectToDB } from './lib/prisma.utils.js';

const { PORT } = config;

const start = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () =>
      console.log(`[server]: listening on port ${String(PORT)}`),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
