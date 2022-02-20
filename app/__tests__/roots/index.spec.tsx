import { render } from "@testing-library/react";
import { Index, loader } from "~/routes/index";
import * as api from "~/api";
import type { Restaurant } from "~/routes/index";

jest.mock("~/api");
const mockLoadRestaurants = api.loadRestaurants as jest.Mock;

describe("RestaurantList", () => {
  const restaurants: Restaurant[] = [
    { id: 1, name: "Sushi Place" },
    { id: 2, name: "Pizza Place" },
  ];

  describe("initially", () => {
    it("should display the restaurants", () => {
      const { queryByText } = render(<Index restaurants={restaurants} />);
      expect(queryByText("Sushi Place")).toBeInTheDocument();
      expect(queryByText("Pizza Place")).toBeInTheDocument();
    });
  });

  describe("loader", () => {
    let request: Request;

    beforeEach(() => {
      request = new Request("/");
    });

    it("should call loadRestaurants", async () => {
      await loader({ request, params: {}, context: {} });

      expect(mockLoadRestaurants).toHaveBeenCalled();
    });

    it("should return an array of restaurants", async () => {
      mockLoadRestaurants.mockResolvedValueOnce(restaurants);
      const response = await loader({ request, params: {}, context: {} });

      expect(response).toEqual(restaurants);
    });
  });
});
