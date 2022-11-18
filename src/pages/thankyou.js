import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Thankyou (){
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center bg-white p-10 rounded-md shadow-lg">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thankyou, your order has been confirmed!
            </h1>
          </div>
          <p className="w-full max-w-lg mx-auto">
            Thankyou for shopping with us. We will send a confirmation once your
            item has been shipped.
          </p>
          <Link to="/" className="flex w-full max-w-md justify-center px-6 py-3 bg-black hover:bg-black/90 text-white mt-8">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
