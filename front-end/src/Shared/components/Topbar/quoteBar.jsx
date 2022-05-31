import styles from './Topbar.module.css';

export default function Quote  () {
    const today = new Date();

    const quote = [
        `“If you spend too much time thinking about a thing, you’ll never get it done.” – Bruce Lee`,
        `“The future depends on what you do today.” – Mahatma Gandhi`,
        `“It always seems impossible until it’s done.” —Nelson Mandela`,
        `“You miss 100% of the shots you don’t take.” – Wayne Gretzky`,
        `“Never put off till tomorrow what you can do today.” – Thomas Jefferson`,
        `“Every strike brings me closer to the next home run.” —Babe Ruth`,
        `“A person who never made a mistake never tried anything new.” – Albert Einstein`,
    ];

    return  <h3 className={styles.title}>{quote[today.getDay()]}</h3>;
};