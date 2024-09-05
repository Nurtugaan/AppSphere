import React from 'react';
import AuthButton from '../Buttons/AuthButton';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContent}> 
            <nav>
                <ul>
                    <a>Главная</a>
                    <a>Магазин</a>
                    <a>FAQ</a>
                </ul>
            </nav>
            <div className={styles.companyName}>AppSphere</div>
            <AuthButton/>
        </header>
    );
};

export default Header;