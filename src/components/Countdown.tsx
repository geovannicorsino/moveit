import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinish,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinish ? (
                <>
                    <button disabled
                        className={styles.countdownButton}>
                        Ciclo encerrado <img src="icons/check_circle.svg" alt="" />
                    </button>

                </>
            ) : (
                    <>
                        {isActive ? (
                            <button type="button"
                                onClick={resetCountdown}
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                Abandonar ciclo
                            </button>)
                            :
                            (<button type="button"
                                onClick={startCountdown}
                                className={styles.countdownButton}>
                                Iniciar um ciclo
                            </button>)}
                    </>
                )}


        </div>
    );
}