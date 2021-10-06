import { memo } from 'react';
import { StyledSignIn, StyledThirdSignIn, StyledBackground } from './styles';
import { useInjectReducer, useInjectSaga } from 'utils/reduxInjectors';
import { reducer, sliceKey } from './slice';
import saga from './saga';
import useHooks from './hooks';
import SectionTitle from 'app/components/SectionTitle';
import { Col, Form, Row } from 'antd';
import Input from 'app/components/Input';
import InputPassword from 'app/components/InputPassword';
import Divider from 'app/components/Divider';
import Button from 'app/components/Button';
import { ACTION_STATUS } from 'utils/constants';
import { Link } from 'react-router-dom';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as AppleIcon } from 'assets/icons/apple.svg';
import { ReactComponent as MetamaskIcon } from 'assets/icons/metamask.svg';
import signInBackground from 'assets/images/home-sign-in-up-background.jpg';

export const SignIn = memo(() => {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });

  const { selectors, handlers } = useHooks();
  const { status, mode, resetPasswordStatus } = selectors;
  const { handleSignIn, handleResetPassword } = handlers;

  const thirdSignIn = [
    {
      key: 'google',
      icon: <GoogleIcon />,
      text: 'Sign In with Google',
    },
    {
      key: 'apple',
      icon: <AppleIcon />,
      text: 'Sign In with Apple',
    },
    {
      key: 'metamask',
      icon: <MetamaskIcon />,
      text: 'Sign In with Metamask',
    },
  ];

  return (
    <StyledSignIn>
      <Row justify="center" align="middle" className="container">
        <Row className="sign-in-content">
          <Col xs={24} lg={11} className="sign-in-left-section">
            <SectionTitle size={48} className="sign-in-title">
              Sign In
            </SectionTitle>
            {mode === 'reset' ? (
              <>
                <Form
                  id="reset"
                  className="reset-form"
                  onFinish={handleResetPassword}
                >
                  <Form.Item name="email">
                    <Input type="simple" placeholder="Email" />
                  </Form.Item>
                </Form>
                {resetPasswordStatus === ACTION_STATUS.FAILED && (
                  <div className="reset-error">
                    That email address does not have an account associated with
                    it. Please check and try again.
                  </div>
                )}
                <Button
                  loading={resetPasswordStatus === ACTION_STATUS.PENDING}
                  form="reset"
                  htmlType="submit"
                  className="reset-button"
                  type="primary"
                >
                  RESET PASSWORD
                </Button>
                <p className="sign-in-sign-up">
                  <span>You don't have an account yet?</span>
                  <Link to="/sign-up">Sign up</Link>
                </p>
              </>
            ) : (
              <>
                <Form
                  id="sign-in"
                  className="sign-in-form"
                  onFinish={handleSignIn}
                >
                  <Form.Item name="email">
                    <Input type="simple" placeholder="Email" />
                  </Form.Item>
                  <Form.Item name="password">
                    <InputPassword type="simple" placeholder="Password" />
                  </Form.Item>
                </Form>
                <Link className="sign-in-forgot" to="/sign-in?mode=reset">
                  Forgot password?
                </Link>
                <Button
                  loading={status === ACTION_STATUS.PENDING}
                  form="sign-in"
                  htmlType="submit"
                  className="sign-in-submit-button"
                  type="primary"
                >
                  SIGN IN
                </Button>
                <p className="sign-in-sign-up">
                  <span>You don't have an account yet?</span>
                  <Link to="/sign-up">Sign up</Link>
                </p>
              </>
            )}
          </Col>
          <Col xs={24} lg={2}>
            <Divider title="OR" />
          </Col>
          <Col xs={24} lg={11} className="sign-in-right-section">
            <div>
              {thirdSignIn.map((item) => (
                <StyledThirdSignIn key={item.key}>
                  <div className="thirty-sign-in-icon">{item.icon}</div>
                  <div className="thirty-sign-in-text">{item.text}</div>
                </StyledThirdSignIn>
              ))}
            </div>
          </Col>
        </Row>
      </Row>

      <StyledBackground>
        <img src={signInBackground} alt="sign-in-background" />
      </StyledBackground>
    </StyledSignIn>
  );
});

export default SignIn;
