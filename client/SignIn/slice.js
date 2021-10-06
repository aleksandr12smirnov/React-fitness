import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { getUserFromStorage } from 'utils/localStorageUtils';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  user: getUserFromStorage(),
  status: '',
  error: null,
  resetPassword: {
    status: '',
    error: null,
  },
};

const signInSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signIn(state) {
      return set('status', ACTION_STATUS.PENDING)(state);
    },

    signInSuccess(state, action) {
      return flow(
        set('user', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    signInFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },

    logout(state) {
      return flow(
        set('user', null),
        set('status', ''),
        set('error', null),
      )(state);
    },

    resetPassword(state) {
      return set('resetPassword.status', ACTION_STATUS.PENDING)(state);
    },

    resetPasswordSuccess(state) {
      return set('resetPassword.status', ACTION_STATUS.SUCCESS)(state);
    },

    resetPasswordFailed(state, action) {
      return flow(
        set('resetPassword.error', action.payload),
        set('resetPassword.status', ACTION_STATUS.FAILED),
      )(state);
    },

    resetState(state) {
      return flow(
        set('resetPassword.error', null),
        set('resetPassword.status', ''),
      )(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = signInSlice;
