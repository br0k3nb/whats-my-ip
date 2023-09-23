import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', true);
app.use(cors());
app.use(routes);

app.listen(3001, () => console.log(`Server is running at port 3001`));

export default app;