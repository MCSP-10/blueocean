import styles from '../Applications/ApplicationDetails.module.css';


const AppOppoDetail = (props) => {
    console.log(props)
    return(
        <>
        <div className={styles.container}>
            <div className={styles.details}>
                <h3>Group: {props.group}</h3>
                <h3>Company Name: {props.name}</h3>
                <h3>Location: {props.location}</h3>
                <h3>Descript: {props.descript}</h3>
                <h3>Salary: $ {props.salary}</h3>
                <h3>Deadline: {props.deadline}</h3>
            </div>
        </div>
        </>
    );
};

export default AppOppoDetail;