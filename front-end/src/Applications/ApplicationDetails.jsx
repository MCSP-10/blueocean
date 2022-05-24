import { useState } from 'react';
import styles from './ApplicationDetails.module.css';
import  Comments  from '../Shared/components/Form/Comments'

const ApplicationDetails = (props) => {
    // console.log(props)
    // const [ comment, makeComment ] = useState('')

    // const postComment = (e) => {
    //     e.preventDefault()
    //     console.log(comment)
    // }

    // const getComments = () => {

    // }



    return(
        <>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={props.image}></img>
            </div>
            <div className={styles.details}>
                <h3>Company Name: {props.name}</h3>
                <h3>Title: {props.subText}</h3>
                <h3>Link: {props.url}</h3>
                <h3>Comments: {props.note}</h3>
                {/* <form onSubmit={((e)=>postComment(e))}>
                    <input type='text' onChange={((e)=> makeComment(e.target.value))}></input>
                    <button type='submit'>post comment</button>
                </form> */}
                <Comments/>
            </div>
        </div>
        </>
    );
};

export default ApplicationDetails;