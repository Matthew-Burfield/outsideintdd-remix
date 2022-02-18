import { rest } from "msw";
import { API_KEY } from "../app/api";
import { Restaurant } from "../app/routes";

export const handlers = [
  rest.get(
    `https://outside-in-dev-api.herokuapp.com/${API_KEY}/restaurants`,
    (_, res, ctx) => {
      const restaurants: Restaurant[] = [
        { id: 1, name: "Sushi Place" },
        { id: 2, name: "Pizza Place" },
      ];
      return res(ctx.json(restaurants));
    }
  ),
];
