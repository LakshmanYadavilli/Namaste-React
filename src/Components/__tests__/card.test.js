import Card from "../Card";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import restaurant_mock_data from "../../mocks/RestaurantData.json";

describe("card component", () => {
  it("should have the correct restaurant name", () => {
    render(
      <BrowserRouter>
        <Card restaurant={restaurant_mock_data} />
      </BrowserRouter>
    );
    const restaurantName = screen.getByText("Pizza Hut");
    expect(restaurantName).toBeInTheDocument();
  });
  it("should have the correct costForTwo", () => {
    render(
      <BrowserRouter>
        <Card restaurant={restaurant_mock_data} />
      </BrowserRouter>
    );
    const costForTwo = screen.getByText("₹300 for two");
    expect(costForTwo).toBeInTheDocument();
  });
});
