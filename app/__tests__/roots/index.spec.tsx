import { render } from "@testing-library/react";
import { Index, loader } from "~/routes/index";
import * as api from "~/api";
import type { Restaurant } from "~/routes/index";
import { server, rest } from "~/msw/server";

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
    let response: Response;

    describe("when loader is successful", () => {
      beforeEach(async () => {
        request = new Request("/");
        response = await loader({ request, params: {}, context: {} });
      });

      it("should return an array of restaurants", () => {
        expect(response).toEqual({ restaurants });
      });
    });

    describe("when the loader is unsuccessful", () => {
      it("should throw an API Error when there is a server error", () => {
        request = new Request("/");
        const testErrorMessage = "THIS IS A TEST FAILURE";
        server.use(
          rest.get(
            `${api.BASE_URL}/${api.API_KEY}/restaurants`,
            async (_, res, ctx) => {
              return res(
                ctx.status(500),
                ctx.json({ message: testErrorMessage })
              );
            }
          )
        );
        return expect(
          loader({ request, params: {}, context: {} })
        ).rejects.toThrowError(testErrorMessage);
      });
    });
  });
});
