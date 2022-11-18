import { useEffect, useState } from "react";
import {
  StarIcon,
  ShoppingCartIcon as CartIcon,
  ArrowPathIcon as ResetIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

export default function Product({ product }) {
  const { id, title, price, description, rating, category, image } = product;
  let productRating = Math.round(rating.rate);
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartProduct, setCartProduct] = useState(product);
  const dispatch = useDispatch();

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
  };
  const quantityInputHandler = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    setCartProduct((prev) => ({
      ...prev,
      quantity: quantity,
      isChecked: isChecked,
    }));
  }, [isChecked, quantity]);
  useEffect(() => {
    if (cartProduct.isChecked) {
      dispatch(addToCart(cartProduct));
    }
    else if(!cartProduct.isChecked) {
      dispatch(removeFromCart(cartProduct.id))
    }
  }, [cartProduct, dispatch])

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
      <td className="px-6 py-4 max-w-[150px]">
        <div className="flex">
          {Array(productRating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
      </td>
      <td className="px-6 py-4 max-w-[100px] font-semibold text-gray-600">
      {"£"}{price}
      </td>
      <td className="px-6 py-4 max-w-[200px]">
        <div className="flex items-center justify-end gap-3">
          <input
            className="w-16 px-2 py-1 border border-gray-300 bg-gray-100"
            type="number"
            value={quantity}
            onChange={quantityInputHandler}
          />
          <div className="w-20 h-8 bg-black flex items-center justify-center">
            <CartIcon className="text-white h-5" />
          </div>
          <input
            type="checkbox"
            onChange={checkboxHandler}
          />
        </div>
      </td>
    </tr>
  );
}
