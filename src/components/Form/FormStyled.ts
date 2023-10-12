import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .form {
    color: ${(props) => props.theme.color.text};
    &__controls {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__input {
      padding: 10px;
      background-color: ${(props) => props.theme.color.secondary};
      border: 1px solid ${(props) => props.theme.color.text};
      @media (min-width: 600px) {
        background-color: ${(props) => props.theme.color.primary};
      }
    }

    &__button {
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
  }

  .checkbox {
    display: flex;
    flex-direction: row;
    gap: 50px;

    &__input {
      transform: scale(2);
      padding-right: 5px;
      margin: 0;
    }
  }
`;

export default FormStyled;
