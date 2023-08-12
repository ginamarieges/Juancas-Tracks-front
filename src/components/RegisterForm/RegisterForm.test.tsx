import { screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the name, lastname, username and password fields", () => {
      const nameText = "Nombre";
      const lastnameText = "Apellidos";
      const usernameText = "Username";
      const passwordText = "Password";

      renderWithProviders(<RegisterForm />);

      const nameField = screen.getByLabelText(nameText);
      const lastnameField = screen.getByLabelText(lastnameText);
      const usernameField = screen.getByLabelText(usernameText);
      const passwordField = screen.getByLabelText(passwordText);

      expect(nameField).toBeInTheDocument();
      expect(lastnameField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Registrar'", () => {
      const buttonText = "Registrar";

      renderWithProviders(<RegisterForm />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
