import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  status: '',
  error: null,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUp(state) {
      return set('status', ACTION_STATUS.PENDING)(state);
    },

    signUpSuccess(state, action) {
      return flow(
        set('user', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    signUpFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },

    resetState() {
      return initialState;
    },
  },
});

export const { actions, reducer, name: sliceKey } = signUpSlice;
