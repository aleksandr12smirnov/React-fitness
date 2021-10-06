import { memo } from 'react';
import { StyledSignUp, StyledThirdSignUp, StyledBackground } from './styles';
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

export const SignUp = memo(() => {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });

  const { selectors, handlers } = useHooks();
  const { status } = selectors;
  const { handleSignUp, handleGoToSignIn } = handlers;

  const thirdSignUp = [
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
    <StyledSignUp>
      <Row justify="center" align="middle" className="container">
        {status === ACTION_STATUS.SUCCESS ? (
          <div
            justify="center"
            className="sign-up-content verify-email-content"
          >
            <SectionTitle size={48} className="verify-email-title">
              Verify your email
            </SectionTitle>
            <div className="verify-email-sub-title">
              Please check your email and verify your account
            </div>
            <Button
              onClick={handleGoToSignIn}
              className="verify-email-button"
              type="primary"
            >
              ALRIGHT
            </Button>
          </div>
        ) : (
          <Row className="sign-up-content">
            <Col xs={24} lg={11} className="sign-up-left-section">
              <SectionTitle size={48} className="sign-up-title">
                Sign Up
              </SectionTitle>
              <Form
                id="sign-up"
                className="sign-up-form"
                onFinish={handleSignUp}
              >
                <Form.Item name="first_name">
                  <Input type="simple" placeholder="First name" />
                </Form.Item>
                <Form.Item name="last_name">
                  <Input type="simple" placeholder="Last name" />
                </Form.Item>
                <Form.Item name="email">
                  <Input type="simple" placeholder="Email" />
                </Form.Item>
                <Form.Item name="password">
                  <InputPassword type="simple" placeholder="Password" />
                </Form.Item>
                <Form.Item name="confirm_password">
                  <InputPassword type="simple" placeholder="Confirm password" />
                </Form.Item>
              </Form>
              <div className="sign-up-policy">
                By creating an account, you agree to the Privacy Policy and
                receiving our updates.
              </div>
              <Button
                loading={status === ACTION_STATUS.PENDING}
                form="sign-up"
                htmlType="submit"
                className="sign-up-submit-button"
                type="primary"
              >
                CREATE AN ACCOUNT
              </Button>
              <p className="sign-in-sign-up">
                <span>Have an account?</span>
                <Link to="/sign-in">Sign in</Link>
              </p>
            </Col>
            <Col xs={24} lg={2}>
              <Divider title="OR" className="divider" />
            </Col>
            <Col xs={24} lg={11} className="sign-up-right-section">
              <div>
                {thirdSignUp.map((item) => (
                  <StyledThirdSignUp key={item.key}>
                    <div className="thirty-sign-up-icon">{item.icon}</div>
                    <div className="thirty-sign-up-text">{item.text}</div>
                  </StyledThirdSignUp>
                ))}
              </div>
            </Col>
          </Row>
        )}
      </Row>

      <StyledBackground>
        <img src={signInBackground} alt="sign-up-background" />
      </StyledBackground>
    </StyledSignUp>
  );
});

export default SignUp;
