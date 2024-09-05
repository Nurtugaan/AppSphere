import React from 'react';
import styles from './SocialMediaCategory.module.css';
import SocialMediaCard from '../Cards/SocialMediaCard';

const SocialMediaCategory = () => {
    return (
        <div className={styles.categoryBox}>
            <div className={styles.title}>
                Всё о социальных сетях
            </div>
            <div className={styles.text}>
                Присоединяйтесь, участвуйте, делитесь и учитесь. Социальные сети для всех ваших нужд.
            </div>
            <div className={styles.cards}>
                <SocialMediaCard/>
                <SocialMediaCard/>
            </div>
        </div>
    );
};

export default SocialMediaCategory;