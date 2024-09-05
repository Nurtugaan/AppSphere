import React from 'react';
import styles from './Register.module.css'
import AuthBox from './AuthBox';
import MyInput from './MyInput';
import CallToRegister from './CallToRegister';

const Register = () => {
    const uniqueContent = 
    <div className={styles.uniqueContent}>
        Забыли пароль?
    </div>

    const title = 'Зачем нужна регистрация?'

    const text = 'Зарегистрировавшись на сайте Вы сможете получить личный кабинет, что позволит Вам отслеживать историю заказов, быстрее оформлять заказы в нашем Интернет магазине, так как вся информация о Вас будет доступна в нашем магазине и ее не нужно будет повторно вносить'
    return (
        <div className={styles.registerBox}>
            <AuthBox title='Регистрация' buttonText='Регистрация' uniqueContent={uniqueContent}>
                <MyInput title='Имя:'/>
                <MyInput title='Фамилия:'/>
                <MyInput title='E-mail:'/>
                <MyInput title='Пароль:'/>
                <MyInput title='Пароль (еще раз):'/>
            </AuthBox>
            <div className={styles.secondBox}>
                <CallToRegister title={title} text={text}/>
            </div>
        </div>
    );
};

export default Register;