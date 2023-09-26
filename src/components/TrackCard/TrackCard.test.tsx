import { screen } from "@testing-library/react";
import { TrackStructure } from "../../store/tracks/types";
import { renderWithProviders } from "../../utils/testUtils";
import TrackCard from "./TrackCard";

describe("Given a TrackCard component", () => {
  describe("When it is rendered with the track 'Baby one more time'", () => {
    const track: TrackStructure = {
      album: "Baby one more time",
      singer: "Britney",
      id: "4536433345",
      image: "britney.jpg",
      musicType: "pop",
      notes: "some notes",
      repeat: false,
      songs: ["baby"],
      user: "384hr39829",
    };
    test("Then it should show the heading 'Baby one more time'", () => {
      const expectedText = "Baby one more time";
      renderWithProviders(<TrackCard track={track} />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the heading 'Britney'", () => {
      const expectedText = "Britney";

      renderWithProviders(<TrackCard track={track} />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the image of the album 'Baby one more time'", () => {
      const expectedAlternativeText = "Baby one more time cover";

      renderWithProviders(<TrackCard track={track} />);

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
