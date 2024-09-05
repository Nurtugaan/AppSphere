import React from 'react';
import styles from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <div className={styles.myInput}>
            <div className={styles.inputType}>
                {props.title}
            </div>
            <input type="text" />
        </div>
    );
};

export default MyInput;