import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const { res_id } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=" +
          res_id
      );
      const res = await data.json();
      console.log("res:::", res);

      setResMenu(
        res?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    };
    fetchMenu();
  }, []);

  if (resMenu?.length === 0) return <div>RestuarantMenu</div>;

  console.log("resMenu:::", resMenu.length);
  //  ?.card?.card?.itemCards

  /*
  ?.map((itemcard, index) => (
            <div key={itemcard.card.info.id}>
              <h1>venkat</h1>
              <h3>{itemcard.card.info.name}</h3>
              <p>Price: {itemcard.card.info.price / 100}</p>
              <p>Description: {itemcard.card.info.description}</p>
            </div>
          ))
   */
  // resMemu->regular.cards
  //1stLevel->regular.cards.slice(2)[0].card.card.title
  //2ndLevel->regular.cards.slcie(2)[0].card.card.itemCards[0]
  return (
    <div>
      <h1 style={{ color: "red" }}>Catagories</h1>
      {resMenu.slice(2).map((item, idx) => {
        if (!item?.card?.card?.title || !item?.card?.card?.itemCards)
          return null; // Skip if title or itemCards are not available
        return (
          <div key={idx}>
            <h2 style={{ color: "blue" }}>{item.card.card.title}</h2>
            <h2>Items:</h2>
            {item.card?.card?.itemCards?.map((itemcard, index) => {
              if (!itemcard?.card?.info) return null; // Skip if info is not available
              const { id, name, price, description } = itemcard?.card?.info;
              return (
                <div key={id}>
                  <h3>{name}</h3>
                  <p>Price: {price / 100}</p>
                  {description && <p>Description: {description}</p>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RestuarantMenu;
