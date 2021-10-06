import useActions from 'hooks/useActions';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getSignInStatus,
  getSignInUser,
  getResetPasswordStatus,
} from './selectors';
import { actions } from './slice';
import { useHistory, useLocation } from 'react-router-dom';
import {
  storeAuthInfo,
  removeAuthInfo,
  isAuthenticated,
} from 'utils/localStorageUtils';
import { ACTION_STATUS } from 'utils/constants';

export const useHooks = () => {
  const history = useHistory();
  const location = useLocation();
  const status = useSelector(getSignInStatus);
  const user = useSelector(getSignInUser);
  const resetPasswordStatus = useSelector(getResetPasswordStatus);
  const query = new URLSearchParams(location.search);
  const mode = query.get('mode');

  if (isAuthenticated()) history.replace('/');

  const { signIn, resetPassword, resetState } = useActions(
    {
      signIn: actions.signIn,
      resetPassword: actions.resetPassword,
      resetState: actions.resetState,
    },
    [actions],
  );

  const handleSignIn = useCallback(
    (values) => {
      signIn(values);
    },
    [signIn],
  );

  const handleResetPassword = useCallback(
    (values) => {
      resetPassword(values);
    },
    [resetPassword],
  );

  useEffect(() => {
    if (status === ACTION_STATUS.SUCCESS) {
      storeAuthInfo(user);
      history.replace('/');
    }
  }, [history, status, user]);

  useEffect(() => () => resetState(), [mode, resetState]);

  return {
    selectors: {
      status,
      mode,
      resetPasswordStatus,
    },
    handlers: {
      handleSignIn,
      handleResetPassword,
    },
  };
};

export const useLogout = () => {
  const history = useHistory();
  const { logout } = useActions(
    {
      logout: actions.logout,
    },
    [actions],
  );

  const handleLogout = useCallback(() => {
    removeAuthInfo();
    logout();
    history.push('/sign-in');
  }, [history, logout]);

  return {
    handleLogout,
  };
};

export default useHooks;
