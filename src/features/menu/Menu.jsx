import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log("🚀 ~ file: Menu.jsx:6 ~ Menu ~ menu:", menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export const loader = async () => {
  return await getMenu();
};

export default Menu;
