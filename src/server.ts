import 'dotenv/config';
import { app } from './app.js';
import { connectToDB } from './lib/prisma.utils.js';

const PORT = process.env.PORT ?? 3000;

const start = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () =>
      console.log(`[server]: server is listening on port ${String(PORT)}`),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
