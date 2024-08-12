import cors from 'cors';
import express from 'express';

export const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('Hello world');
});
