import { application } from 'express';
import pool from './connection.js';

const applicationsModel = {};

applicationsModel.createApplication = async (applicationObj) => {
    const {
        user_id,
        company,
        status,
        job_title,
        deadline,
        post_url,
        description,
        note,
        salary,
        location,
    } = applicationObj;
    const { rows } = await pool.query(
        'INSERT INTO applications (user_id, company, status, job_title, deadline, post_url, description, note, salary, location) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *',
        [
            user_id,
            company,
            status,
            job_title,
            deadline,
            post_url,
            description,
            note,
            salary,
            location,
        ]
    );
    return rows[0];
};

applicationsModel.updateApplication = async (id, body) => {
    const {
        user_id,
        company,
        status,
        job_title,
        deadline,
        post_url,
        description,
        note,
        salary,
        location,
    } = body;
    const { rows } = await pool.query(
        'UPDATE applications SET user_id=$1, company=$2, status=$3, job_title=$4, deadline=$5, post_url=$6, description=$7, note=$8, salary=$9, location=$10 WHERE application_id=$11 RETURNING *',
        [
            user_id,
            company,
            status,
            job_title,
            deadline,
            post_url,
            description,
            note,
            salary,
            location,
            id,
        ]
    );
    return rows[0];
};

applicationsModel.deleteApplication = async (id) => {
    const { rows } = await pool.query(
        'DELETE FROM applications WHERE application_id=$1 RETURNING *',
        [id]
    );
    return rows[0];
};

export default applicationsModel;
