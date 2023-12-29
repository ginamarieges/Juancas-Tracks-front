import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Form from "./Form";
import { vi } from "vitest";

describe("Given a Form component", () => {
  const onSubmit = vi.fn();
  describe("When it is rendered", () => {
    test("Then it should show the album, singer, notes, image, music type and songs inputs", () => {
      const albumLabel = "Álbum";
      const singerLabel = "Cantante";
      const notesLabel = "Notas";
      const musicTypeLabel = "Tipo de música";
      const imageLabel = "Portada";
      const songsLabel = "Canciones";

      renderWithProviders(<Form onSubmit={onSubmit} />);

      const albumField = screen.getByLabelText(albumLabel);
      const singerField = screen.getByLabelText(singerLabel);
      const notesField = screen.getByLabelText(notesLabel);
      const musicField = screen.getByLabelText(musicTypeLabel);
      const imageField = screen.getByLabelText(imageLabel);
      const songsField = screen.getByLabelText(songsLabel);

      expect(albumField).toBeInTheDocument();
      expect(singerField).toBeInTheDocument();
      expect(notesField).toBeInTheDocument();
      expect(musicField).toBeInTheDocument();
      expect(imageField).toBeInTheDocument();
      expect(songsField).toBeInTheDocument();
    });
    test("Then it should show the button with the text 'Enviar'", () => {
      const buttonText = "Enviar";

      renderWithProviders(<Form onSubmit={onSubmit} />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
