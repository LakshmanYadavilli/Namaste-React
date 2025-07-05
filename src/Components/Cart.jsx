import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const { items: cartItems, totalPrice } = useSelector((store) => store.cart);
  //   console.log("cartItems", Object.entries(cartItems));
  const cartArr = Object.entries(cartItems);
  if (cartArr.length === 0) return <h1>Your Cart is Empty</h1>;
  return (
    <div className="w-1/5 mx-auto mt-40  ">
      {cartArr.map(([key, item]) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>
            Price: {item.price / 100}x{item.quanity}
          </p>
        </div>
      ))}
      <p>
        Total:{"₹"}
        {totalPrice / 100}
      </p>
    </div>
  );
};

export default Cart;
