import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

const selectSignInState = (state) => state.authentication;

export const getSignInStatus = createSelector(selectSignInState, (state) =>
  get('status', state),
);

export const getSignInUser = createSelector(selectSignInState, (state) =>
  get('user', state),
);

export const getResetPasswordStatus = createSelector(
  selectSignInState,
  (state) => get('resetPassword.status', state),
);
