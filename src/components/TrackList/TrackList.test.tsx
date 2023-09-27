import { screen } from "@testing-library/react";
import { tracksMock } from "../../mocks/tracksMocks";
import { renderWithProviders } from "../../utils/testUtils";
import TrackList from "./TrackList";

describe("Given a TrackList component", () => {
  describe("When it is rendered and there is a track in the store named 'Abbey Road'", () => {
    test("Then it should show a heading with the text 'Abbey Road'", () => {
      const tracks = { tracks: tracksMock };
      const expectedText = "Abbey Road";

      renderWithProviders(<TrackList />, { tracksStore: tracks });

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there are no tracks to show", () => {
    test("Then it shoud show the text 'No se ha encontrado ningún vinilo...'", () => {
      const expectedText = "No se ha encontrado ningún vinilo...";

      renderWithProviders(<TrackList />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
