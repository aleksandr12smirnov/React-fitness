import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

const selectSignUpState = (state) => state.signUp;

export const getSignUpStatus = createSelector(selectSignUpState, (state) =>
  get('status', state),
);
