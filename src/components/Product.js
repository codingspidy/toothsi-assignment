import { useEffect, useRef, useState } from "react";
import {
  StarIcon,
  ShoppingCartIcon as CartIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToCart, reduceCart, removeFromCart } from "../store/cartSlice";

export default function Product({ product }) {
  const { title, price, description, rating, image } = product;
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartProduct, setCartProduct] = useState(product);
  const [inputDisabled, setInputDisabled] = useState(false);
  const dispatch = useDispatch();
  let productRating = Math.round(rating.rate);
  const [eventCreator, setEventCreator] = useState();
  const inputRef = useRef(null);

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
    setEventCreator(e.target);
  };
  const quantityInputHandler = (e) => {
    setQuantity(e.target.value);
  };

  // Update cart product with isChecked & quantity properties.
  useEffect(() => {
    setCartProduct((prev) => ({
      ...prev,
      quantity: quantity,
      isChecked: isChecked,
    }));
  }, [isChecked, quantity]);

  // Add/remove items to cart
  useEffect(() => {
    if (cartProduct.isChecked) {
      dispatch(addToCart(cartProduct));
      setInputDisabled(true);
    } else if (!cartProduct.isChecked && eventCreator === inputRef.current) {
      dispatch(reduceCart(cartProduct));
      setInputDisabled(false);
    }
  }, [cartProduct, dispatch]);

  return (
    <tr className="border-b last:border-b-0 border-gray-300">
      <td className="px-6 py-4 min-w-20">
        <img className="w-20 h-20 object-contain" src={image} alt="" />
      </td>
      <td className="px-6 py-4 w-[15%] max-w-[200px]">
        <h6 className="font-medium text-sm xl:text-base line-clamp-3">
          {title}
        </h6>
      </td>
      <td className="px-6 py-4 w-[25%] max-w-xs">
        <p className="font-medium text-sm xl:text-base line-clamp-3">
          {description}
        </p>
      </td>
      <td className="px-6 py-4 max-w-[100px]">
        <div className="flex">
          {Array(productRating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
      </td>
      <td className="px-6 py-4 max-w-[70px] font-semibold text-gray-600">
        <div>
          {"£"}
          {price}
        </div>
      </td>
      <td className="px-6 py-4 max-w-[200px]">
        <div className="flex items-center justify-end gap-3">
          <div className="group relative">
            <div
              className={`absolute top-10 left-0 z-10 hidden w-40 custom-shadow rounded-md bg-gray-50 text-black text-xs px-4 py-3 ${
                inputDisabled && "group-hover:block"
              }`}
            >
              Specify quantity before adding to cart!
            </div>
            <input
              className={`w-16 px-2 py-1 border border-gray-300 bg-gray-100 ${
                inputDisabled && "cursor-not-allowed group"
              }`}
              type="number"
              disabled={inputDisabled}
              value={quantity}
              onChange={quantityInputHandler}
            />
          </div>
          <div className="w-20 h-8 bg-black flex items-center justify-center">
            <CartIcon className="text-white h-5" />
          </div>
          <input ref={inputRef} type="checkbox" onChange={checkboxHandler} />
        </div>
      </td>
    </tr>
  );
}
