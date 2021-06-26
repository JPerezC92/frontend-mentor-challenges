import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { challengesList, IChallenge } from '@/helpers/challengesList';
import { nameToURL } from '@/helpers/nameToURL';
import challengeComponents from '@/components/index';

const Component: React.FC = () => {
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
        <link
          rel="icon"
          href="/challenges/stats-preview-card-component/favicon-32x32.png"
        />
      </Head>
      <Component />
    </>
  );
};

export default Component;
