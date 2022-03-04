import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.DATABASE_URL) {
    console.error('No DATABASE_URL found');
    process.exit();
}

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

export default pool;
