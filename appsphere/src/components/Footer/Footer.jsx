import React from 'react';
import styles from './Footer.module.css';
import telegramIcon from '../images/telegramIcon.png';
import vkIcon from '../images/vkIcon.png';
import instagramIcon from '../images/intagramIcon.png';
import whatsAppIcon from '../images/whatsAppIcon.png';

const Footer = () => {
    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.routes}>
                    <div className={styles.routeBox}>
                        <div className={styles.title}>
                            Каталог
                        </div>
                        <div className={styles.text}>
                            Категории
                        </div>
                        <div className={styles.text}>
                            Приложения
                        </div>
                        <div className={styles.text}>
                            Игры
                        </div>
                    </div>
                    <div className={styles.routeBox}>
                        <div className={styles.title}>
                            Информация
                        </div>
                        <div className={styles.text}>
                            Аккаунт
                        </div>
                        <div className={styles.text}>
                            Оплата
                        </div>
                        <div className={styles.text}>
                            Центр помощи
                        </div>
                        <div className={styles.text}>
                            Партнёрам
                        </div>
                    </div>
                    <div className={styles.routeBox}>
                        <div className={styles.title}>
                            Права и политика
                        </div>
                        <div className={styles.text}>
                            Правила пользования
                        </div>
                        <div className={styles.text}>
                            Политика конфиденциальности
                        </div>
                    </div>

                    <div className={styles.socialMediaList}>
                        <img src={telegramIcon} alt="" />
                        <img src={vkIcon} alt="" />
                        <img src={instagramIcon} alt="" />
                        <img src={whatsAppIcon} alt="" />
                    </div>
                </div>
                
                <div className={styles.line}></div>

                <div className={styles.logo}>AppSphere</div>

                <div className={styles.year}>@2024</div>

            </div>
        </footer>
    );
};

export default Footer;