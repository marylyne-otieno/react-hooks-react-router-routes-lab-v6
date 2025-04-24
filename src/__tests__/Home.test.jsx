
import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen, waitFor, within } from "@testing-library/react";
import routes from "../routes";

const router = createMemoryRouter(routes, {
  initialEntries: ["/"],
  initialIndex: 0,
});

test("renders 'Home Page' inside of an <h1 />", () => {
  render(<RouterProvider router={router} />);
  const h1 = screen.queryByText(/Home Page/);

  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("Displays a list of movie titles", async () => {
  render(<RouterProvider router={router} />);
  const titleList = await screen.findAllByRole("heading", { level: 2 });
  expect(titleList.length).toBeGreaterThan(2);
  expect(titleList[0].tagName).toBe("H2");
  expect(titleList[0].textContent).toBe("Doctor Strange");
});

test("Displays links for each movie", async () => {
  render(<RouterProvider router={router} />);

  await waitFor(() => {
    screen.debug(); // Log the DOM
    const movieList = screen.getByRole("main");
    const linkList = within(movieList).getAllByRole("link", {
      name: /View Details/i,
    });
    console.log("Links found:", linkList.length); // Log number of links
    expect(linkList).toHaveLength(3);
    expect(linkList[0]).toHaveTextContent("View Details");
    expect(linkList[0]).toHaveAttribute("href", "/movie/1");
    expect(linkList[1]).toHaveTextContent("View Details");
    expect(linkList[1]).toHaveAttribute("href", "/movie/2");
    expect(linkList[2]).toHaveTextContent("View Details");
    expect(linkList[2]).toHaveAttribute("href", "/movie/3");
  }, { timeout: 2000 }); // Increase timeout
});

test("renders the <NavBar /> component", () => {
  render(<RouterProvider router={router} />);
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});


