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
app.use('/applications', routes.applications);
app.use('/groups', routes.groups);
app.use('/opportunities', routes.opportunities);

export default app;