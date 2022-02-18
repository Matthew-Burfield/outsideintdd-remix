import type { Restaurant } from "../routes/index";

export const API_KEY = "GqG1qDtzee6CBqSNbjUgU4XmJwb3MlbA";

export async function loadRestaurants() {
  const response = await fetch(
    `https://outside-in-dev-api.herokuapp.com/${API_KEY}/restaurants`
  );
  const restaurants: Restaurant[] = await response.json();
  return {
    restaurants,
  };
}

export async function loadRestaurant(id: number) {
  return Promise.resolve(id);
}
