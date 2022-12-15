import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
    <div className="add-to-cart">
        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" />
    </div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="item img-wrapper">
          <img src="https://media.istockphoto.com/id/1371695315/photo/iphone-13-pro-sierra-blue.jpg?s=612x612&w=0&k=20&c=-0Mr9DdIRHFoLUozdltlHdkum0ChCNTGfLhxc-3oHmI=   " alt="not find" />
        </div>
        <div className="item text-wrapper">
          <span>I-Phone </span>
          <span>Price:100$</span>
        </div>
        <div className="item btn-wrapper">
          <button>Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Home;
