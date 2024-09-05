import React from 'react';
import styles from './Reviews.module.css'
import review1Image from '../images/review1.png'
import review2Image from '../images/review2.png'

const Reviews = () => {
    return (
        <div className={styles.reviewsBox}>

            <div className={styles.reviewsContent}>
                <div className={styles.reviewsImage}>
                    <img src={review1Image} alt="Фото отзыв 1" />
                </div>
                <div className={styles.reviewsText}>
                    Этот сайт – глоток свежего воздуха в мире веб-приложений!
                    Он интуитивно понятен, увлекателен и полон возможностей.
                </div>
                <div className={styles.reviewsClient}>
                    Команда Women in IT
                </div>
            </div>

            <div className={styles.reviewsContent}>
                <div className={styles.reviewsImage}>
                    <img src={review2Image} alt="Фото отзыв 2" />
                </div>
                <div className={styles.reviewsText}>
                    Это универсальный магазин для всех ваших 
                    потребностей в веб-приложениях, настоящий прорыв!
                </div>
                <div className={styles.reviewsClient}>
                    WEBWORKS
                </div>
            </div>

        </div>
    );
};

export default Reviews;