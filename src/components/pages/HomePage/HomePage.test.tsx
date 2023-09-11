import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";
import HomePage from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the heading 'Todos tus vinilos'", () => {
      renderWithProviders(wrapWithRouter(<HomePage />));
      const headingText = "Todos tus vinilos";
      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
