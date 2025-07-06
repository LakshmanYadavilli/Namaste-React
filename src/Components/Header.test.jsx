import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// Mock store creator
const createMockStore = (totalItems = 0) => ({
  getState: () => ({
    cart: { totalItems },
  }),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
});

describe("Header component", () => {
  it("renders logo image with correct alt text", () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const logo = screen.getByAltText("Food App Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText(/Cart/)).toBeInTheDocument();
  });

  it("shows the correct number of items in cart", () => {
    const store = createMockStore(5);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Cart.*\(5\)/)).toBeInTheDocument();
  });

  it("shows zero items in cart by default", () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Cart.*\(0\)/)).toBeInTheDocument();
  });
});

// We recommend installing an extension to run jest tests.
