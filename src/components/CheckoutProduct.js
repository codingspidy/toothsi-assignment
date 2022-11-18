import { useDispatch } from "react-redux";
import { decrement, increment, removeFromCart } from "../store/cartSlice";
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/solid";


export default function CheckoutProduct(product) {
  const { id, title, price, image, quantity } = product;
  const subTotal = (price * quantity).toFixed(2);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(increment(id));
  };
  const subHandler = () => {
    dispatch(decrement(id));
  };
  const removeHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <tr className="border-b last:border-b-0 border-gray-300 text-black">
      <td className="px-6 py-4 flex items-center gap-6">
        <button onClick={removeHandler}>
          <XMarkIcon className="h-4 text-gray-900" />
        </button>
        <img className="w-[60px] h-[60px] object-contain" src={image} alt="" />
        <h6 className="font-medium text-sm xl:text-base line-clamp-3">
          {title}
        </h6>
      </td>
      <td className="px-6 py-4">
        <div className="font-medium text-gray-700">{price}</div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-between max-w-[120px] mx-auto rounded-full border border-gray-200">
          <button
            className="px-4 py-3 text-gray-500"
            disabled={quantity === 1}
            onClick={subHandler}
          >
            <MinusIcon className="h-4" />
          </button>
          <div className="font-medium">{quantity}</div>
          <button className="px-4 py-3 text-gray-500" onClick={addHandler}>
            <PlusIcon className="h-4" />
          </button>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="font-semibold text-blue-800">{"£"}{subTotal}</div>
      </td>
    </tr>
  );
}
