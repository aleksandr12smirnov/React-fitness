import styled from 'styled-components';
import color from 'styles/colorPalette';
import { sizes } from 'styles/media';

export const StyledSignIn = styled.div`
  padding-top: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .sign-in-content {
    position: relative;
    z-index: 5;
    flex: 1;
    min-height: 496px;
    max-width: 900px;
    padding: 50px 20px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
  }

  .sign-in-left-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .sign-in-title {
      margin-bottom: 17px;
    }

    .sign-in-form {
      .ant-form-item {
        margin-bottom: 20px;
      }
    }

    .sign-in-forgot {
      font-size: 12px;
      color: ${color.white};
      margin-bottom: 30px;
    }

    .sign-in-submit-button {
      padding: 12px 75px;
      margin-bottom: 20px;
    }

    .sign-in-sign-up {
      font-size: 12px;

      span {
        margin-right: 6px;
      }

      a {
        color: ${color.white};
        text-decoration: underline;
      }
    }

    .reset-form {
      margin-top: 26px;
      .ant-form-item {
        margin-bottom: 20px;
      }
    }

    .reset-button {
      padding: 10px 28px;
      margin-top: 10px;
      margin-bottom: 20px;
    }

    .reset-error {
      color: ${color.red};
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .sign-in-right-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${sizes.size1060}px) {
    .sign-in-content {
      min-height: unset;
      max-width: unset;
      padding: 25px 15px;
    }

    .sign-in-left-section {
      .sign-in-title {
        font-size: 24px;
      }
    }

    .sign-in-submit-button {
      width: 100%;
      max-width: 318px;
    }
  }

  @media (max-width: ${sizes.size991}px) {
    .container {
      width: unset;
    }

    .sign-in-content {
      .sign-in-sign-up {
        margin-bottom: 20px;
      }
    }

    .divider {
      flex-direction: row;

      .divider-text {
        margin: 0 20px;
      }

      .divider-line {
        width: 100px;
        height: 3px;
      }
    }

    .reset-button {
      width: 100%;
      max-width: 318px;
    }

    .reset-error {
      max-width: 318px;
    }
  }
`;

export const StyledThirdSignIn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;

  .thirty-sign-in-icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${color.green};
    margin-right: 20px;
    transition: ease-in-out 0.2s;
  }

  .thirty-sign-in-text {
    font-size: 16px;
    transition: ease-in-out 0.2s;
  }

  &:hover {
    .thirty-sign-in-icon {
      border-color: ${color.red};
    }

    .thirty-sign-in-text {
      color: ${color.red};
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${sizes.size991}px) {
    margin-top: 20px;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  top: -83px;
  right: 0;
  bottom: -198px;
  left: 0;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${sizes.size1060}px) {
    top: -63px;
  }

  @media (max-width: ${sizes.size991}px) {
    bottom: 0;
  }
`;
