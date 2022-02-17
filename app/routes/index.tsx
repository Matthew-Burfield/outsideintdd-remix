import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import * as api from "../api";

export type Restaurant = {
  id: number;
  name: string;
};

interface Props {
  restaurants: Restaurant[];
}

export const loader: LoaderFunction = async () => {
  return await api.loadRestaurants();
};

export default function IndexLoader() {
  const data = useLoaderData();
  return <Index restaurants={data.restaurants} />;
}

export function Index(props: Props) {
  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {props.restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </>
  );
}
