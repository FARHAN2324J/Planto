import React from "react";
import { useCartStore } from "../../stores/CartStore";
import Card from "../../components/ui/Card/Card";
import { Link, useNavigate } from "react-router";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="md:p-15 p-4">
        <Link
          to="/"
          onClick={handleBack}
          className="border-green-600 border-1 text-green-600 hover:text-[#1b2316]  rounded-xl p-2 hover:bg-green-600 transition-colors"
        >
          Back Home
        </Link>
        <h1 className="lg:text-3xl mt-5 md:text-3xl text-2xl font-medium">
          Shopping Cart
        </h1>
        <p className="mt-5">Your shopping cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="md:p-15 p-4">
      <Link
        to="/"
        onClick={handleBack}
        className="border-green-600 border-1 text-green-600 hover:text-[#1b2316]  rounded-xl p-2 hover:bg-green-600 transition-colors"
      >
        Back Home
      </Link>
      <h2 className="lg:text-3xl md:text-3xl mt-5 text-2xl font-medium">
        Shopping Cart ({getTotalItems()} product)
      </h2>
      <div className="flex items-center gap-5 my-5">
        <div className="text-lg font-medium">
          Total: ${getTotalPrice().toLocaleString()}
        </div>
        <button
          onClick={clearCart}
          className="border-1 cursor-pointer rounded-lg border-blue-600 text-blue-600 px-2 py-1 hover:bg-blue-600 hover:text-[#1b2316] transition-colors"
        >
          Clear All
        </button>
      </div>
      <div className="mt-30 grid xl:grid-cols-4 gap-x-4 gap-y-25 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {items.map((item) => (
          <Card
            key={item.id}
            className="pb-10 xl:px-15 flex flex-col justify-between lg:px-6 md:px-10 px-10"
          >
            <div>
              <div className="w-65 h-65 m-auto">
                <img
                  className="m-auto -translate-y-15 w-auto h-auto max-w-full max-h-full"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col gap-5">
                <span className="lg:text-3xl md:text-3xl text-2xl">
                  {item.name}
                </span>
                <p className="lg:text-3xl md:text-3xl text-2xl">
                  ${item.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 my-5 justify-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="
    w-8 h-8 flex items-center justify-center 
    border border-red-500 rounded-md 
    transition-all duration-200 ease-in-out 
    active:bg-red-500
    active:text-[#1b2316]
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:transform-none 
    disabled:bg-transparent
    text-red-500
  "
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="
    w-8 h-8 flex items-center justify-center 
    border border-green-500 rounded-md 
    transition-all duration-200 ease-in-out 
    active:bg-green-500
    active:text-[#1b2316]
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:transform-none 
    text-green-500
  "
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="border-1 border-red-500 w-full text-red-500 rounded-lg px-2 py-1 transition-colors hover:bg-red-500 hover:text-[#1b2316]"
              >
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
