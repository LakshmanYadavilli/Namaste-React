// import Header from "../Header";
// import { render, screen } from "@testing-library/react";

// test("Should render Header component", () => {
//   render(<Header />);
//   //   const logo = screen.getByTestId("logo");
//   const title = screen.getByText("Namaste React");
//   const cartIcon = screen.getByTestId("cart");

//   //   expect(logo).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
//   expect(cartIcon).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import Header from "../Header";
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
    expect(screen.getByRole("link", { name: /Cart/ })).toHaveTextContent("(5)");
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
    expect(screen.getByRole("link", { name: /Cart/ })).toHaveTextContent("(0)");
  });
});

// We recommend installing an extension to run jest tests.
