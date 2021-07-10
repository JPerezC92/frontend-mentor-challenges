import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { nameToURL } from '@/helpers/nameToURL';
import { challengesList } from '@/helpers/challengesList';
import { BASE_URL } from '@/helpers/globals';
import Layout from '../components/shared/Layout';
import styles from './HomeScreen.module.scss';

const HomeScreen: FC = () => {
  const cardURL = `${BASE_URL}challenges/`;
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenges</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Layout>
        <div className={styles.home}>
          <h1 className={styles.home__title}>
            Frontend Mentor Challenges by Philip Pérez Castro
          </h1>

          <ul className={`${styles.home__content} ${styles.card__grid}`}>
            {challengesList.map((challenge) => (
              <li key={challenge.name} className={styles.card}>
                <div className={styles.card__img}>
                  <Image
                    src={`/challenges/${nameToURL(challenge.name)}/${
                      challenge.img
                    }`}
                    height="500"
                    width="500"
                    layout="intrinsic"
                    alt={challenge.name}
                  />
                </div>

                <Link href={`${cardURL}${nameToURL(challenge.name)}`}>
                  <a className={styles.card__heading} target="_blank">
                    {`${challenge.name}`}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default HomeScreen;
