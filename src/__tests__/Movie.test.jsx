
import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import routes from "../routes";

const router = createMemoryRouter(routes, {
  initialEntries: ["/"],
  initialIndex: 0,
});

test("Displays links for each associated movie", async () => {
  render(<RouterProvider router={router} />);

  // Wait for the links to appear
  await waitFor(() => {
    const movieLinks = screen.getAllByRole("link", {
      name: /View Details/i, // Updated to match the actual link text
    });

    expect(movieLinks).toHaveLength(3); // Adjust based on the number of movies

    expect(movieLinks[0]).toHaveTextContent("View Details");
    expect(movieLinks[0]).toHaveAttribute("href", "/movie/1");

    expect(movieLinks[1]).toHaveTextContent("View Details");
    expect(movieLinks[1]).toHaveAttribute("href", "/movie/2");

    expect(movieLinks[2]).toHaveTextContent("View Details");
    expect(movieLinks[2]).toHaveAttribute("href", "/movie/3");
  });
});


