export interface IChallenge {
  name: string;
  img: string;
  component: string;
}

export const challengesList: IChallenge[] = [
  {
    name: 'Stats preview card component',
    img: 'mobile-preview.png',
    component: 'StatsPreviewCard',
  },
  {
    name: 'Test Component',
    img: 'mobile-preview.png',
    component: 'TestComponent',
  },
];
