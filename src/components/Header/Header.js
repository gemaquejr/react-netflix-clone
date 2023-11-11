import React from "react";
import styles from './Header.module.css'

export default function Header({black}) {
    return (
        <header className={black ? styles.black : ''}>
            <div className={styles.header_logo}>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Netflix_Logomark.png/800px-Netflix_Logomark.png" alt="Logo Netflix" />
                </a>  
            </div>
            <div className={styles.header_user}>
                <a href="/">
                    <img src="https://pbs.twimg.com/card_img/1721179427315261440/kStpI0eh?format=png&name=small" alt="Logo Usuário" />
                </a>  
            </div>
        </header>
    )
}