import { number, string, shape } from 'prop-types';

export const matchPropType = shape({
  playerOne: string,
  playerTwo: string,
  winner: string,
  createdAt: string,
  id: number
});

export const settingsPropType = shape({
  playerOne: string,
  playerTwo: string
});
