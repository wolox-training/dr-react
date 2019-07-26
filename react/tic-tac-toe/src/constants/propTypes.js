import { number, string, shape } from 'prop-types';

import { SETTINGS_FIELDS } from '~constants/form';

export const matchPropType = shape({
  playerOne: string.isRequired,
  playerTwo: string.isRequired,
  winner: string.isRequired,
  createdAt: string.isRequired,
  id: number.isRequired
}).isRequired;

export const settingsPropType = shape({
  [SETTINGS_FIELDS.PLAYER_ONE]: string.isRequired,
  [SETTINGS_FIELDS.PLAYER_TWO]: string.isRequired
});
