import React from 'react';

const AuthButton = () => {

    const styles = {
        width: "182px",
        height: "48px",
        borderRadius: "10px",
        backgroundColor: "#E4D9FF",
        border: "none",
        cursor: "pointer",

        fontFamily: "Ubuntu",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "24px",
        fontColor: "#333333",
    }

    return (
        <button style={styles}>
            Авторизация
        </button>
    );
};

export default AuthButton;