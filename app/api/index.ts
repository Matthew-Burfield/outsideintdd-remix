import type { Restaurant } from "../routes/index";

export const BASE_URL = "https://outside-in-dev-api.herokuapp.com";
export const API_KEY = "GqG1qDtzee6CBqSNbjUgU4XmJwb3MlbA";

export const ApiError = new Error("API Error");

export async function loadRestaurants() {
  const response = await fetch(`${BASE_URL}/${API_KEY}/restaurants`);
  if (response.status !== 200) {
    const body: { message: string } = await response.json();
    throw new Error(body.message);
  }
  const restaurants: Restaurant[] = await response.json();
  return {
    restaurants,
  };
}

export async function loadRestaurant(id: number) {
  return Promise.resolve(id);
}
