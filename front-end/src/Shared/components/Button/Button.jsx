import styles from './Button.module.css';
const Button = (props) => {
    const { children, onClick } = props;

    const COLORS = {
        cyan: 'cyan',
        white: 'white',
        black: 'black',
    };
    return (
        <button
            className={styles.container}
            onClick={onClick}
            style={{
                backgroundColor: COLORS[props.color] ?? 'none',
                color: COLORS[props.textColor] ?? 'black',
            }}
        >
            {props.icon}
            {props.text}
        </button>
    );
};

export default Button;
