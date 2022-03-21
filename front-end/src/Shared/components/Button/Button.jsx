import styles from './Button.module.css';
const Button = (props) => {
    const { children, onClick } = props;

    const COLORS = {
        cyan: 'cyan',
        white: 'white',
        black: 'black',
        orange: '#F04625',
        peach: '#F19B88',
        mainBlue: '#68a6ad',
        darkBlue: '#3C5A68',
        chocolate: '#1D170B',
        olive: '#47381D',
        offWhite: '#F2EFEB',
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
