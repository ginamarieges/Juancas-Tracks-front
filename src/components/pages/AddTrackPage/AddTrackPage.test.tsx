import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";
import AddTrackPage from "./AddTrackPage";

describe("Given a AddTrackPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the heading 'Añade tu vinilo'", () => {
      const text = "Añade tu vinilo";

      renderWithProviders(wrapWithRouter(<AddTrackPage />));

      const heading = screen.getByRole("heading", { name: text });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the button with the text 'Enviar'", () => {
      const buttonText = "Enviar";

      renderWithProviders(wrapWithRouter(<AddTrackPage />));

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
