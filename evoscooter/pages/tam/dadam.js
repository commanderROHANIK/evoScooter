import styles from '../../styles/Login.module.css';

export default function() {
    return (
        <div className={styles.login}>
            <form>
                <input type="text" className={styles.userName}></input>
                <input type="password" className={styles.password}></input>
                <button className={styles.loginButton}>Bejelentkezés</button>
                <button className={styles.registrationButton}>Regisztráció</button>
            </form>
        </div>
    );
}