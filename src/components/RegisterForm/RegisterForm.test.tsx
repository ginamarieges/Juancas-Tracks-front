import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import RegisterForm from "./RegisterForm";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a RegisterForm component", () => {
  const onSubmit = vi.fn();
  describe("When it is rendered", () => {
    test("Then it should show the name, lastname, username and password fields", () => {
      const nameText = "Nombre";
      const lastnameText = "Apellidos";
      const usernameText = "Username";
      const passwordText = "Password";

      renderWithProviders(<RegisterForm onSubmit={onSubmit} />);

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

      renderWithProviders(<RegisterForm onSubmit={onSubmit} />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });

    test("Then the button should be disabled", () => {
      const buttonText = "Registrar";
      renderWithProviders(<RegisterForm onSubmit={onSubmit} />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and all the fields are field", () => {
    const nameText = "Nombre";
    const lastnameText = "Apellidos";
    const usernameText = "Username";
    const passwordText = "Password";
    const buttonText = "Registrar";
    test("Then the button should be enabled", async () => {
      renderWithProviders(<RegisterForm onSubmit={onSubmit} />);

      const nameField = screen.getByLabelText(nameText);
      const lastnameField = screen.getByLabelText(lastnameText);
      const usernameField = screen.getByLabelText(usernameText);
      const passwordField = screen.getByLabelText(passwordText);
      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.type(nameField, "Ana");
      await userEvent.type(lastnameField, "Banana");
      await userEvent.type(usernameField, "Andana");
      await userEvent.type(passwordField, "Palangana");

      expect(button).toBeEnabled();
    });
  });
  describe("When it is rendered, the fields are field, and the user clicks the button", () => {
    test("Then the button should be disabled ant the fields empty", async () => {
      const nameText = "Nombre";
      const lastnameText = "Apellidos";
      const usernameText = "Username";
      const passwordText = "Password";
      const buttonText = "Registrar";

      renderWithProviders(<RegisterForm onSubmit={onSubmit} />);

      const nameField = screen.getByLabelText(nameText);
      const lastnameField = screen.getByLabelText(lastnameText);
      const usernameField = screen.getByLabelText(usernameText);
      const passwordField = screen.getByLabelText(passwordText);
      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.type(nameField, "Ana");
      await userEvent.type(lastnameField, "Banana");
      await userEvent.type(usernameField, "Andana");
      await userEvent.type(passwordField, "Palangana");

      await userEvent.click(button);

      expect(button).toBeDisabled();
      expect(nameField).toHaveValue("");
      expect(lastnameField).toHaveValue("");
      expect(usernameField).toHaveValue("");
      expect(passwordField).toHaveValue("");
    });
  });
});
