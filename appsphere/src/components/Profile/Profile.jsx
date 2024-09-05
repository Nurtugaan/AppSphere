import profileImage from '../images/profileImage.png';
import styles from './Profile.module.css'
import settingIcon from '../images/settingIcon.png';

const Profile = () => {
    const info = {
        name: 'Имя',
        surname: 'Фамилия',
        email: 'profile-email@gmail.com',
        birthday: '01.01.1991',
        image: profileImage,
    }
    return (
        <div className={styles.profileBox}>
            <div className={styles.title}>
                Мой профиль
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileImage}>
                    <img src={profileImage} alt="" />
                </div>
                <div className={styles.profileInfo}>
                    <div className={styles.fullname}>{info.name} {info.surname}</div>
                    <div className={styles.email}>{info.email}</div>
                    <div className={styles.birthday}>{info.birthday}</div>
                </div>
                <button className={styles.editButton}>
                    <img src={settingIcon} alt="" />
                    Редактировать
                </button>
            </div>

            <div className={styles.orders}>
                <div className={styles.title}>
                    Заказы
                </div>
                <div className={styles.buttons}>
                    <button className={styles.myButton}>Мои покупки</button>
                    <button className={styles.myButton2}>Избранное</button>
                    <button className={styles.myButton}>Мои отзывы</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
