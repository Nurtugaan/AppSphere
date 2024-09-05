import React from 'react';
import styles from './CategoryOverview.module.css';
import instagramCategoryImg from '../images/instagramCategoryImg.png';
import starImg2 from '../images/starImg2.png';
import galleryImg1 from '../images/galleryImg.png';
import galleryImg2 from '../images/galleryImg2.png';

const CategoryOverview = () => {

    const title = 'Instagram';

    const subtitle = 'Instagram от Meta: любимые люди и вещи теперь ещё ближе.'

    const text = <div>
        <p>Общайтесь с друзьями, рассказывайте о своих планах и узнавайте, 
            что нового у других людей по всему миру. Станьте частью нашего сообщества, 
            в котором можно быть собой и делиться как будничными историями, 
            так и знаковыми моментами своей жизни.</p> 
        <p>Самовыражайтесь и общайтесь с друзьями:</p>
        <ul>
            <li>
                <p>Публикуйте в ленте фото и видео, которые хотите разместить в своем профиле.</p>
            </li>
            <li>
                <p>Отправляйте сообщения друзьям, используя Messenger. 
                    Делитесь контентом, уведенным в ленте или историях, и обсуждайте его</p>
            </li>
        </ul>
    </div>

    const categoryInfo = { 
        image: instagramCategoryImg,
        title: title, 
        subtitle: subtitle,
        text: text,
        rating: '4,5',
    }

    const publisher = 'Instagram'

    const capacity = '1,7 МБ'

    const category = 'Социальные сети'

    const ram = '2 ГБ минимум'

    const additionalInfo = {
        publisher: publisher,
        capacity: capacity,
        category: category,
        ram: ram,
    };
 
    return (
        <div className={styles.categoryBox}>
            <div className={styles.categoryContent}>
                <div className={styles.categoryImg}>
                    <img src={categoryInfo.image} alt="Фото категории" />
                </div>
                
                <div className={styles.categoryInfo}>
                    <div className={styles.categoryTitle}>
                        {categoryInfo.title}
                    </div>
                    <div className={styles.categoryInfoButtons}>
                        <div className={styles.categoryViewButton}>
                            Бесплатно
                        </div>
                        <div className={styles.categoryRating}>
                            {categoryInfo.rating}
                            <img src={starImg2} alt="Звезда рейтинга" />
                        </div>
                    </div>
                    <div className={styles.categorySubtitle}>
                        {categoryInfo.subtitle}
                    </div>
                    <div className={styles.categoryText}>
                        {categoryInfo.text}
                    </div>
                    <div className={styles.categoryInfoButtons}>
                        <div className={styles.categoryBasketButton}>
                            Добавить в корзину
                        </div>
                        <div className={styles.categoryBuyButton}>
                            Купить
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.galleryBox}>
                <div className={styles.galleryTitle}>
                    Галерея
                </div>
                <div className={styles.galleryImages}>
                    <img src={galleryImg1} alt="" />
                    <img src={galleryImg2} alt="" />
                </div>
            </div>

            <div className={styles.additionalInfoBox}>
                <div className={styles.additionalInfoTitle}>
                    Дополнительные сведения
                </div>
                <div className={styles.additionalInfoContent}>
                    <div className={styles.publisher}>
                        <div className={styles.title}>
                            Издатель
                        </div>
                        <div className={styles.info}>
                            {additionalInfo.publisher}
                        </div>
                    </div>
                    <div className={styles.capacity}>
                        <div className={styles.title}>
                            Объём
                        </div>
                        <div className={styles.info}>
                            {additionalInfo.capacity}
                        </div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.title}>
                            Категория
                        </div>
                        <div className={styles.info}>
                            {additionalInfo.category}
                        </div>
                    </div>
                    <div className={styles.ram}>
                        <div className={styles.title}>
                            Оперативная память
                        </div>
                        <div className={styles.info}>
                            {additionalInfo.ram}
                        </div>
                    </div>
                </div>

                <div className={styles.additionalInfoMore}>
                    <div className={styles.report}>
                        <div className={styles.title}>
                            Сообщить
                        </div>
                        <div className={styles.info}>
                            Сообщить о нарушении политики пользования
                        </div>
                        <div className={styles.info}>
                            Сообщить о незаконном содержимом
                        </div>
                    </div>
                    <div className={styles.fromPublisher}>
                        <div className={styles.title}>
                            От издателя
                        </div>
                        <div className={styles.info}>
                            Поддержка
                        </div>
                        <div className={styles.info}>
                            Веб-сайт
                        </div>
                        <div className={styles.info}>
                            Контактная информация
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryOverview;