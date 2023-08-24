import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the 'Accede a tu cuenta' heading", () => {
      const headingText = "Accede a tu cuenta";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
