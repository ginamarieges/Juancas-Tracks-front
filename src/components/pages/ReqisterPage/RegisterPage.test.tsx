import { screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";

describe("Given a RegisterPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the heading 'Crea tu cuenta'", () => {
      const text = "Crea tu cuenta";

      renderWithProviders(wrapWithRouter(<RegisterPage />));

      const heading = screen.getByRole("heading", { name: text });

      expect(heading).toBeInTheDocument();
    });
  });
});
