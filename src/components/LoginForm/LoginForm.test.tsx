import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const usenrameText = "Username";
  const passwordText = "Password";
  const buttonText = "Enviar";
  describe("When it is rendered", () => {
    test("Then it should show username and password fields and enviar button", () => {
      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(usenrameText);
      const passwordField = screen.getByLabelText(passwordText);
      const button = screen.getByRole("button", { name: buttonText });

      expect(usernameField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    test("Then the button should be disabled", () => {
      renderWithProviders(<LoginForm />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and the fields are field", () => {
    test("Then the button should be enabled", async () => {
      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(usenrameText);
      const passwordField = screen.getByLabelText(passwordText);

      await userEvent.type(usernameField, "Gina");
      await userEvent.type(passwordField, "hello");

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeEnabled();
    });
  });
});
