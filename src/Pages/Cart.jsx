import React from 'react';

const Cart = ({ cart, Setcart }) => {

  const handleIncrement = (id) => {
    Setcart(previous =>
      previous.map((pass) =>
        pass.id === id ? { ...pass, quantity: pass.quantity + 1 } : pass
      )
    );
  };

  const handleDecrement = (id) => {
    Setcart(previous =>
      previous.map((pass) =>
        pass.id === id && pass.quantity > 1
          ? { ...pass, quantity: pass.quantity - 1 }
          : pass
      )
    );
  };

  const handleRemove = (id) => {
    Setcart(previous => previous.filter((item) => item.id !== id));
  };

  const grandTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ✅ If cart is empty or grand total is 0
  if (cart.length === 0 || grandTotal === 0) {
    return (
      <div className="empty-cart">
        <h1>🛒 No items in the cart</h1>
        <p>Your shopping cart is empty. Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="full">
      {cart.map((info) => {
        const itemTotal = info.price * info.quantity;

        return (
          <div key={info.id} className="card">
            <img src={info.image} alt={info.title} />
            <h2>{info.title}</h2>
            <p>{info.description}</p>

            <h3>${info.price}</h3>
            <h4>⭐ {info.rating.rate}</h4>

            <div className="btns">
              <button type="button" onClick={() => handleDecrement(info.id)}>-</button>
              <p>{info.quantity}</p>
              <button type="button" onClick={() => handleIncrement(info.id)}>+</button>
            </div>

            <div className="item-total">
              <span>Item Total:</span>
              <strong>${itemTotal.toFixed(2)}</strong>
            </div>

            <button className="remove-btn" onClick={() => handleRemove(info.id)}>
              Remove
            </button>
          </div>
        );
      })}

      <div className="grand-total">
        <h2>🧾 Grand Total: ${grandTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
