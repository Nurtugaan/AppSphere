import React from 'react';
import Category from '../Buttons/CategoryButton';
import EntertainmentCard from '../Cards/EntertainmentCard';
import styles from './Catalog.module.css';
import atomIcon from '../images/atomIcon.png';
import SocialMediaCard from '../Cards/SocialMediaCard';
import showMoreImg from '../images/showMoreImg.png';

const Catalog = () => {
    return (
        <div className={styles.categoryPage}>
            <div className={styles.categoryBox}>
                <Category/>
            </div>

            <div className={styles.entertainmentBox}>
                <div className={styles.title}>
                    Развлечение
                </div>

                <div className={styles.cards}>
                    <EntertainmentCard/>
                </div>

                <div className={styles.showMoreButton}>
                    Показать больше 
                    <img src={showMoreImg} alt="" />
                </div>
            </div>

            <div className={styles.topFreeAppsBox}>
                <div className={styles.title}>
                    Топ бесплатных
                </div>
                <div className={styles.apps}>
                    <SocialMediaCard/>
                </div>

                <button className={styles.showMoreButton}>
                    Показать больше 
                    <img src={showMoreImg} alt="" />
                </button>

            </div>

            <div className={styles.selectionBox}>
                <div className={styles.selectionBoxTitle}>
                    Всё для продуктивности
                </div>

                <div className={styles.selectionBoxText}>
                    Работайте по-новому с новыми помощниками на любой вкус - нейросетями.
                </div>

                <button className={styles.selectionBoxButton}>
                    Просмотреть подборку 
                </button>
                <img src={atomIcon} alt="Фото атома" />
            </div>
        </div>
    );
};

export default Catalog;