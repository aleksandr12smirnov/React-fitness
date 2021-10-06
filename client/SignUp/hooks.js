import useActions from 'hooks/useActions';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSignUpStatus } from './selectors';
import { actions } from './slice';

export const useHooks = () => {
  const history = useHistory();
  const status = useSelector(getSignUpStatus);

  const { signUp, resetState } = useActions(
    {
      signUp: actions.signUp,
      resetState: actions.resetState,
    },
    [actions],
  );

  const handleSignUp = useCallback(
    (values) => {
      signUp(values);
    },
    [signUp],
  );

  const handleGoToSignIn = useCallback(() => {
    history.push('/sign-in');
  }, [history]);

  useEffect(() => () => resetState(), [resetState]);

  return {
    selectors: {
      status,
    },
    handlers: {
      handleSignUp,
      handleGoToSignIn,
    },
  };
};

export default useHooks;
