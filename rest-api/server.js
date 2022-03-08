import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

const corsConfig = {
    origin: '*',
};

app.use(cors(corsConfig));

app.use('/users', routes.users);

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});
