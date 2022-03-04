import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

const corsConfig = {
    origin: '*',
};

app.use(cors(corsConfig));

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});
