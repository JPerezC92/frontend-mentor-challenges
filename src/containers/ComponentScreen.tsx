import React, { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { challengesList, IChallenge } from '@/helpers/challengesList';
import { nameToURL } from '@/helpers/nameToURL';
import challengeComponents from '../components';
import styles from './ComponentScreen.module.scss';
import Link from 'next/link';

const ComponentScreen: FC = () => {
  const router = useRouter();
  const [challenge, setChallenge] = useState<IChallenge | null>(null);

  const Component: React.FC | null = challenge?.component
    ? challengeComponents[challenge.component]
    : null;

  useEffect(() => {
    const challengeId = router.query.cid;

    if (challengeId && typeof challengeId === 'string')
      setChallenge(() =>
        challengesList.find(
          (challenge) => nameToURL(challenge.name) === challengeId
        )
      );
  }, [router.query]);

  if (!Component) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenges | {challenge.name}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Component />

      <footer aria-label="footer" className={styles.attribution}>
        Challenge by{' '}
        <Link href="https://www.frontendmentor.io?ref=challenge">
          <a target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
        </Link>
        . Coded by{' '}
        <Link href="https://www.frontendmentor.io/profile/JPerezC92">
          <a>Philip Perez Castro</a>
        </Link>
        .
      </footer>
    </>
  );
};

export default ComponentScreen;
