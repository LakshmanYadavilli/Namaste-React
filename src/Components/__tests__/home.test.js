import Home from "../Home";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RouterProvider, MemoryRouter, BrowserRouter } from "react-router-dom";
import restaurants from "../../utils/restaurants.json";

describe("Home Component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(restaurants) })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders Home component", async () => {
    // You need to import or create a router instance here
    // For example, if you use createMemoryRouter from react-router-dom:
    // import { createMemoryRouter } from "react-router-dom";
    // const router = createMemoryRouter([{ path: "/", element: <Home /> }], { initialEntries: ["/"] });
    // Replace the following line with your actual router instance
    const router = {
      /* your router instance here */
    };
    await act(async () =>
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
    );

    const btn = screen.getAllByRole("button");
    expect(btn.length).toBe(2);

    // Add your assertions here
  });

  it("should render restaurnat cards by seraching keyword", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
    );
    const restaurantCards = screen.getAllByTestId("restaurant-card");
    expect(restaurantCards.length).toBe(20);

    expect(restaurantCards.length).toBeGreaterThan(4);
    const searchInput = screen.getByPlaceholderText("Search for food items");
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    const searchBtn = screen.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    // const restaurantCards = screen.getAllByTestId("restaurant-card");

    expect(restaurantCards.length).toBeGreaterThan(4);
  });
});
