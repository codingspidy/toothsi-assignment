import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectTotalPrice } from "../store/selectors";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart);
  const total = useSelector(selectTotalPrice);

  return (
    <div className="flex flex-col items-start lg:flex-row gap-10 px-4 max-w-screen-xl mx-auto">
      <div className="w-full lg:w-[70%]">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="min-w-full table-auto bg-white shadow-xl rounded-sm py-8">
            <thead className="text-base text-center border-b border-gray-300">
              <tr>
                <th className="px-8 py-4 pt-6">
                  <span>Product</span>
                </th>
                <th className="px-8 py-4 pt-6">
                  <span>Price</span>
                </th>
                <th className="px-8 py-4 pt-6">
                  <span>Quantity</span>
                </th>
                <th className="px-8 py-4 pt-6">
                  <span>Subtotal</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full lg:w-[30%] max-w-md space-y-5 mt-2 p-5 rounded-sm border border-gray-300">
        <h6 className="text-2xl">Cart totals</h6>
        <div className="flex justify-between border-b border-gray-300 py-2">
          <div className="text-sm font-medium">Subtotal</div>
          <div className="text-gray-600 text-sm">
            {"£"}
            {total}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-xl font-semibold">Total</div>
          <div className="text-blue-800 font-semibold text-xl">
            {"£"}
            {total}
          </div>
        </div>
        <Link
          to="/thankyou"
          className="text-sm bg-blue-800 flex justify-center text-white rounded-full py-3 w-full"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </div>
  );
}
