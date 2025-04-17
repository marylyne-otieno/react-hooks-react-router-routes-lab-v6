
/*import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter, MemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes";



test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes)
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/actors']
    })
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText(/Actors Page/)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/directors']
    })
  render(
      <RouterProvider router={router}/>
  );
  expect(screen.queryByText(/Directors Page/)).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', async () => {
    const id = 1
    const router = createMemoryRouter(routes, {
        initialEntries: [`/movie/${id}`]
    })
  render(
    <RouterProvider router={router}/>
);
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () =>{
  const router = createMemoryRouter(routes, {
      initialEntries: ["/bad-route"]
  })
  render(
      <RouterProvider router={router} />
  )
  expect(screen.getByText(/Oops! Looks like something went wrong./)).toBeInTheDocument()
})
  */
import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routes from "../routes";  // Ensure your routes file is correctly imported

// Test: renders the Home component on route "/"
test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes);
  render(
    <RouterProvider router={router} />
  );
  expect(screen.getByText(/Home Page/)).toBeInTheDocument(); // Ensure "Home Page" text is in your Home component
});

// Test: renders the Actors component on route "/actors"
test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/actors']
  });
  render(
    <RouterProvider router={router} />
  );
  expect(screen.getByText(/Actors Page/)).toBeInTheDocument(); // Ensure "Actors Page" text is in your Actors component
});

// Test: renders the Directors component on route "/directors"
test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/directors']
  });
  render(
    <RouterProvider router={router} />
  );
  expect(screen.getByText(/Directors Page/)).toBeInTheDocument(); // Ensure "Directors Page" text is in your Directors component
});

// Test: renders the Movie component on route "/movie/:id"
test('renders the Movie component on route "/movie/:id"', async () => {
  const id = 1;
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`]
  });
  render(
    <RouterProvider router={router} />
  );
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument(); // Ensure "Doctor Strange" is rendered for the movie
});

// Test: renders an error page when given a bad URL
test("renders an error page when given a bad URL", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/bad-route"]
  });
  render(
    <RouterProvider router={router} />
  );
  expect(screen.getByText(/Oops! Looks like something went wrong./)).toBeInTheDocument(); // Ensure error text is shown in your error page
});

// Test: renders without crashing
test("renders without crashing", () => {
  // Create a fake root element in the document
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  document.body.appendChild(root);

  // Try rendering the app
  const container = createRoot(root);
  container.render(<RouterProvider router={routes} />);
});

