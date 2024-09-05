import React from 'react';
import styles from './CategoryButton.module.css'
import purchasesIcon from '../images/purchasesIcon.png'
import entertainmentIcon from '../images/entertainmentIcon.png'
import artIcon from '../images/artIcon.png'
import toolsIcon from '../images/toolsIcon.png'

const Category = () => {
    return (
        <div className={styles.categories}>
            <button className={styles.categoryButton}>Покупки <img className={styles.purchasesIcon} src={purchasesIcon} alt="purchasesIcon" /></button>
            <button className={styles.categoryButton}>Развлечения <img className={styles.entertainmentIcon} src={entertainmentIcon} alt="entertainmentIcon" /></button>
            <button className={styles.categoryButton}>Искусство <img className={styles.artIcon} src={artIcon} alt="artIcon" /></button>
            <button className={styles.categoryButton}>Инструменты <img className={styles.toolsIcon} src={toolsIcon} alt="toolsIcon" /></button>
        </div>
    );
};

export default Category;