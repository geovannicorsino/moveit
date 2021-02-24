import { Profile } from '../components/Profile';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompleteChallenge } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import Head from 'next/head';
import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompleteChallenge />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
