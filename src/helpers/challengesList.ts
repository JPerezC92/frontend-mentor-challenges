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
    name: '3-column preview card component',
    img: 'mobile-preview.png',
    component: 'ColumnPreviewCardComponent',
  },
  {
    name: 'Test Component',
    img: 'mobile-preview.png',
    component: 'TestComponent',
  },
];
