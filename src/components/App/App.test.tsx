import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show Juancas logo", () => {
      const expectedText = "juancas logo";

      renderWithProviders(<App />);

      const logo = screen.getByRole("img", { name: expectedText });

      expect(logo).toBeInTheDocument();
    });
  });
});
