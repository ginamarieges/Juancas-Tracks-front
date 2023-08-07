import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the home, add and logout link", () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const homeLink = screen.getByRole("link", { name: "home" });
      const addLink = screen.getByRole("link", { name: "add-track" });
      const logLink = screen.getByRole("link", { name: "login" });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(logLink).toBeInTheDocument();
    });
  });
});
