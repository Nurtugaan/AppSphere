import React from 'react';
import styles from './AuthBox.module.css'

const AuthBox = (props) => {
    return (
        <div className={styles.authBox}>
            <div className={styles.title}>
                {props.title}
            </div>
            {props.children}

            {props.uniqueContent}

            <button className={styles.authButton}>
                {props.buttonText}
            </button>
        </div>
    );
};

export default AuthBox;