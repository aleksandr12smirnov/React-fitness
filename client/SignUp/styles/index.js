import styled from 'styled-components';
import color from 'styles/colorPalette';
import { sizes } from 'styles/media';

export const StyledSignUp = styled.div`
  padding-top: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .sign-up-content {
    position: relative;
    z-index: 5;
    flex: 1;
    min-height: 496px;
    max-width: 900px;
    padding: 50px 20px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
  }

  .sign-up-left-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .sign-up-title {
      margin-bottom: 17px;
    }

    .sign-up-form {
      .ant-form-item {
        margin-bottom: 20px;
      }
    }

    .sign-up-policy {
      text-align: center;
      max-width: 292px;
      font-size: 12px;
      margin-bottom: 30px;
    }

    .sign-up-submit-button {
      padding: 10px 12px;
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
  }

  .sign-up-right-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .verify-email-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .verify-email-title {
      text-align: center;
      margin-bottom: 50px;
    }

    .verify-email-sub-title {
      max-width: 194px;
      text-align: center;
      margin-bottom: 30px;
    }

    .verify-email-button {
      padding: 10px 70px;
    }
  }

  @media (max-width: ${sizes.size1060}px) {
    align-items: flex-start;

    .sign-up-content {
      align-self: flex-start;
      min-height: unset;
      max-width: unset;
      padding: 25px 15px;
    }

    .sign-up-left-section {
      .sign-up-title {
        font-size: 24px;
      }
    }

    .sign-up-submit-button {
      width: 100%;
      max-width: 318px;
    }

    .verify-email-content {
      .verify-email-title {
        font-size: 24px;
        margin-bottom: 40px;
      }

      .verify-email-sub-title {
        font-size: 12px;
        max-width: 146px;
      }

      .verify-email-button {
        width: 100%;
      }
    }
  }

  @media (max-width: ${sizes.size991}px) {
    .container {
    }

    .sign-up-content {
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
  }
`;

export const StyledThirdSignUp = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;

  .thirty-sign-up-icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${color.green};
    margin-right: 20px;
    transition: ease-in-out 0.2s;
  }

  .thirty-sign-up-text {
    font-size: 16px;
    transition: ease-in-out 0.2s;
  }

  &:hover {
    .thirty-sign-up-icon {
      border-color: ${color.red};
    }

    .thirty-sign-up-text {
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
