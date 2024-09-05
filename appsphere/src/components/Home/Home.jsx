import React from 'react';
import Category from '../Buttons/CategoryButton';
import Reviews from './Reviews';
import EntertainmentCard from '../Cards/EntertainmentCard';
import styles from './Home.module.css';
import internetWorldwide from '../images/internet-on-a-worldwide-globe (1).png';
import group3Photo from '../images/group3Photo.png';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.secondScreen}>
                <div className={styles.callForRegister}>
                    <div className={styles.joinUs}>
                        Присоединяйтесь к нам
                    </div>
                    <div className={styles.joinInfo}>
                        Получите доступ к эксклюзивным предложениям,
                        сохраните избранные приложения и будьте первыми,
                        кто узнает о новинках.
                    </div>
                </div>
                <button className={styles.registerButton}>Регистрация</button>
                <div className={styles.secondScreenPhoto}>
                    <img src={internetWorldwide} alt="internetWorldwidephoto" />
                </div>
            </div>

            <div className={styles.cardCatalog}>
                <div className={styles.popularCategories}>Популярные категории</div>
                <Category/>
                <div className={styles.entertainmentCards}>
                    <EntertainmentCard/>
                </div>
            </div>

            <div className={styles.group3}>
                <div className={styles.group3Title}>  
                    Отдохните от суеты современного мира 
                    с нашей подборкой
                </div>
                <div className={styles.group3Text}>
                    Фильмы, игры, книги и многое другое.
                </div>
                <button className={styles.group3Button}>
                    Просмотреть подборку
                </button>
                <img className={styles.group3Photo} src={group3Photo} alt="Фото джойстика" />
            </div>

            <div className={styles.reviewsTitle}>
                    Отзывы наших клиентов
                </div>
            <Reviews/>
      </div>
    );
};

export default Home;