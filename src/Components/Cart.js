// import { useState } from "react";

const Cart = ({ products }) => {
  // const [cartItems, setCartItems] = useState([]);

  // const handleAddProduct = (products) => {
  //   const ProductExits = cartItems.find((item) => item.id === products.id);
  //   if (ProductExits) {
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.id === products.id
  //           ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
  //           : item
  //       )
  //     );
  //   }
  //   else{
  //     setCartItems([...cartItems, {...products, quantity: 1}])
  //   }
  // };

  
  return (
    <>
      {/* <div className="cart-items">
        <div className="cart-items-header">Cart Items</div>
        {cartItems.length === 0 && (
          <div className="cart-items-empty">No Items are added</div>
        )}
      </div>
      <div>
        cartItems={cartItems}{" "}
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="cart-item-list">
              <img src={item.image} alt={item.title}></img>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Cart;
