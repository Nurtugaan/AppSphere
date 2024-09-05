import React from 'react';
import styles from './CallToRegister.module.css';

const CallToRegister = (props) => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
            {props.children}
        </div>
    );
};

export default CallToRegister;