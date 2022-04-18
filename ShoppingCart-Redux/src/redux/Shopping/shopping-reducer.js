import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Apple iPhone 13",
      description:
        "Meld style and practicality with the Apple iPhone 13 Pro smartphone",
      price: " 120000",
      image: "../images/img1.jpg",
    },
    {
      id: 2,
      title: "Samsung Galaxy A72 5G",
      description:
        "This phone has powerful battery life and wide camera perfomance",
      price: "60000",
      image: "../images/img2.jpg",
    },
    {
      id: 3,
      title: "Samsung S21 ",
      description: "Good camera quality with affordable price",
      price: "50000",
      image: "../images/img3.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };  
    default:
      return state;
  }
};

export default shopReducer;
