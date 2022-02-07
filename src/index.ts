import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import questionRoutes from "./routes/questions";

const app = express();




mongoose
  .connect('mongodb+srv://admin:jamesdjnarcis@grandcircus.44u5y.mongodb.net/NBA?retryWrites=true&w=majority', { 
  })
  .then(() => console.log(`Database connected successfully`))
  .catch((err: any) => console.log(err));

//   middleware before routes
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', questionRoutes);

const port = 3999;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
