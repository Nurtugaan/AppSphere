import React from 'react';
import styles from './EntertainmentCard.module.css';
import chatgptWriter from '../images/chatgptWriter.png';
import likeImg from '../images/likeImg.png';
import starImg from '../images/starImg.png';

const EntertainmentCard = () => {
    const items = [
        {   id: 1, 
            title: 'ChatGPT Writer - Write mail, ...',
            text: 'Write emails, messages, and more using ChatGPT AI (privacy-frendly). Works on all sites.', 
            image: chatgptWriter, 
            rating: '4,8',},

        {   id: 1, 
            title: 'ChatGPT Writer - Write mail, ...',
            text: 'Write emails, messages, and more using ChatGPT AI (privacy-frendly). Works on all sites.', 
            image: chatgptWriter, 
            rating: '4,8',},

            {   id: 1, 
                title: 'ChatGPT Writer - Write mail, ...',
                text: 'Write emails, messages, and more using ChatGPT AI (privacy-frendly). Works on all sites.', 
                image: chatgptWriter, 
                rating: '4,8',},
    ]

    return (
        <div className={styles.entertainmentBox}>
            {items.map(item => (
               <div className={styles.entertainmentContent} key={item.id}>

                   <div className={styles.entertainmentImgBox}>
                        <div className={styles.entertainmentImg}>
                            <img src={item.image} alt="" />
                        </div>
                            <div className={styles.entertainmentLike}>
                                <img src={likeImg} alt="" />
                            </div>
                            <div className={styles.entertainmentRating}>
                                <div className={styles.rating}>
                                    {item.rating}
                                </div>
                                <img src={starImg} alt="" />
                            </div>
                    </div>
                    
                   <button className={styles.entertainmentButton}>Бесплатно</button>
                   <div className={styles.entertainmentTitle}>{item.title}</div>
                   <div className={styles.entertainmentText}>{item.text}</div>
               </div>
           ))}
        </div>
    );
};

export default EntertainmentCard;