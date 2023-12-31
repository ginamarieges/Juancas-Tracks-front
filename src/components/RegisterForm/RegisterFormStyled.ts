import { styled } from "styled-components";

const RegisterFormStyled = styled.form`
  padding: 20px 0;
  color: ${(props) => props.theme.color.text};
  display: flex;
  flex-direction: column;

  .form {
    &__controls {
      display: flex;
      flex-direction: column;
      padding-bottom: 10px;
    }

    &__label {
      padding: 5px 0;
    }

    &__input {
      padding: 10px;
      background-color: ${(props) => props.theme.color.secondary};
      border: 1px solid ${(props) => props.theme.color.text};
      @media (min-width: 600px) {
        width: 270px;
        background-color: ${(props) => props.theme.color.primary};
        border: 1px solid ${(props) => props.theme.color.text};
      }
    }
  }

  .button {
    min-width: 270px;
    text-transform: uppercase;
    padding: 15px;
    border-radius: 25px;
    border: 1px solid ${(props) => props.theme.color.text};
    margin-top: 20px;
    background-color: ${(props) => props.theme.color.nonSelectedButtons};
    font-weight: bold;

    :disabled {
      opacity: 0.5;
    }

    @media (min-width: 600px) {
      background-color: ${(props) => props.theme.color.primary};

      :disabled {
        opacity: 0.5;
      }
    }
  }
`;

export default RegisterFormStyled;
