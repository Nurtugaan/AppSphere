import React from 'react';
import styles from './SocialMediaCard.module.css';
import whatsAppImg from '../images/whatsAppImg.png';
import likeImg2 from '../images/likeImg2.png';
import basketImg from '../images/basketImg.png';
import starImg2 from '../images/starImg2.png';

const SocialMediaCard = () => {
    const items = [
        { id: 1, title: 'WhatsApp', description: 'Социальные сети', rating: '3,9' },
        { id: 1, title: 'WhatsApp', description: 'Социальные сети', rating: '3,9' },
        { id: 1, title: 'WhatsApp', description: 'Социальные сети', rating: '3,9' },
        { id: 1, title: 'WhatsApp', description: 'Социальные сети', rating: '3,9' },
    ];
        return (
        <>
           {items.map(item => (
               <div className={styles.cardBox} key={item.id}>
                    <div className={styles.cardImage}>
                        <img src={whatsAppImg} alt="whatsAppAvatar" />
                    </div>
                    <div>
                        <div className={styles.cardTitle}>
                            {item.title}
                        </div>
                        <div className={styles.cardDescription}>
                            {item.description}
                        </div>
                        <button className={styles.cardButton}>
                            Бесплатно
                        </button>
                        <div className={styles.cardLike}>
                            <img src={likeImg2} alt="" />
                        </div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.cardRating}>
                                {item.rating}
                                <img src={starImg2} alt="" />
                            </div>
                            <button className={styles.cardBasket}>
                                В корзину
                                <img src={basketImg} alt="" />
                            </button>
                        </div>
                    </div>
               </div>
           ))}
       </>
    );
};

export default SocialMediaCard;