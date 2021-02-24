import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/61216899?s=400&u=47065d221b9f9b362b8732d6b95c2d34ba1c7fb1&v=4" alt="Geovanni Corsino" />
            <div>
                <strong>Geovanni Corsino</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}