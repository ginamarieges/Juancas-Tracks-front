import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show Juancas logo", () => {
      const expectedText = "juancas logo";

      renderWithProviders(wrapWithRouter(<App />));

      const logo = screen.getByRole("img", { name: expectedText });

      expect(logo).toBeInTheDocument();
    });
  });
});
