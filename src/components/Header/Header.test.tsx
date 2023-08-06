import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show Juancas logo", () => {
      const expectedLogo = "juancas logo";

      render(<Header />);

      const logo = screen.getByRole("img", { name: expectedLogo });

      expect(logo).toBeInTheDocument();
    });
  });
});
