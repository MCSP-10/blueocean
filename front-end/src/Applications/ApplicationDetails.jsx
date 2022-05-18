import { useState } from 'react';
import styles from 'Applications/styles/Card.module.css';
import Modal from 'Shared/components/Modal';

const ApplicationDetails = (props) => {
    // console.log(props)
    return(
        <>
        <div className='appDetails'>
            <div>
                <h3>Company Name: {props.name}</h3>
                <h3>Title: {props.subText}</h3>
                <h3>Link: {props.url}</h3>
                <h3>Comments: {props.note}</h3>
                <input></input>
            </div>
            <div>
                <img src={props.image}></img>
            </div>
        </div>
        </>
    );
};

export default ApplicationDetails;