import pgPromise from 'pg-promise';

if (!process.env.DATABASE_URL) {
    console.error('No DATABASE_URL found');
    process.exit();
}
console.log(process.env.DATABASE_URL, 'this is the database url!')

const initOptions = {
    query(e) {
        console.log(e.query);
    },
};
const pgp = pgPromise(initOptions);
const helpers = pgp.helpers;
const QueryFile = pgp.QueryFile;

const db = pgp(process.env.DATABASE_URL);

export default db;
export { helpers, QueryFile };
