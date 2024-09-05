import React from 'react';
import styles from './Login.module.css'
import AuthBox from './AuthBox';
import MyInput from './MyInput';
import CallToRegister from './CallToRegister';

const Login = () => {
    const uniqueContent = 
    <div className={styles.uniqueContent}>
        Забыли пароль?
    </div>

    const title = 'Я - новый покупатель'

    const text = 'Регистрация на сайте позволит быстро оформлять заказы, управлять заказами через личный кабинет, в полном объеме использовать возможности нашего интернет магазина.'

    return (
        <div className={styles.loginBox}>
            <AuthBox title='Авторизация' buttonText='Войти' uniqueContent={uniqueContent}>
                <MyInput title='E-mail:'/>
                <MyInput title='Пароль:'/>
            </AuthBox>
            <CallToRegister title={title} text={text}>
                <button className={styles.registerButton}>Регистрация</button>
            </CallToRegister>
        </div>
    );
};

export default Login;