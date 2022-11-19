import { ArrowPathIcon as ResetIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

export default function Home({ products }) {
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filter1Handler = (e) => {
    setFilter1(e.target.value);
  };
  const filter2Handler = (e) => {
    setFilter2(e.target.value);
  };
  const handleSearchFilter = (e) => {
    setSearchValue(e.target.value);
  };
  const resetHandler = () => {
    setFilter1("");
    setFilter2("");
  };

  // Applying filters
  useEffect(() => {
    let result = products.filter((product) => {
      if (
        filter1 !== "" &&
        filter2 !== "" &&
        product.category.toLowerCase() === filter1.toLowerCase() &&
        Math.floor(product.rating.rate) >= filter2
      ) {
        return true;
      }
      if (
        filter1 !== "" &&
        filter2 === "" &&
        product.category.toLowerCase() === filter1.toLowerCase()
      ) {
        return true;
      }
      if (
        filter2 !== "" &&
        filter1 === "" &&
        Math.floor(product.rating.rate) >= filter2
      ) {
        return true;
      }
      return false;
    });
    setFilteredProducts(result);
  }, [filter1, filter2, products]);

  // Resetting the filters
  useEffect(() => {
    if (filter1 === "" && filter2 === "") {
      setFilteredProducts(products);
    }
  }, [filter1, filter2, products]);

  // Filtering through Search
  useEffect(() => {
    const timeout = setTimeout(() => {
      const filter = products.filter((product) => {
        return Object.values(product)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });

      setFilteredProducts(filter);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchValue, products]);

  return (
    <div>
      <div className="">
        <header className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between px-4 lg:px-8 py-6 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-1 order-10 lg:-order-10">
            <select
              className="px-4 py-2 rounded-md border border-gray-300 cursor-pointer"
              onChange={filter1Handler}
              value={filter1}
            >
              <option value="">All</option>
              <option value="Men's clothing">Men's clothing</option>
              <option value="Women's clothing">Women's clothing</option>
              <option value="Jewelery">Jewellery</option>
              <option value="Electronics">Electronics</option>
            </select>
            <select
              className="w-32 px-4 py-2 rounded-md border border-gray-300 cursor-pointer"
              onChange={filter2Handler}
              value={filter2}
            >
              <option value="">Rating</option>
              <option value="4">4 & up</option>
              <option value="3">3 & up</option>
              <option value="2">2 & up</option>
              <option value="1">1 & up</option>
            </select>
            <button
              className="text-blue-500 flex items-center gap-1 ml-2"
              onClick={resetHandler}
            >
              <ResetIcon className="h-5 w-5" />
              Reset
            </button>
          </div>
          <div className="flex items-end sm:items-center gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <label className="text-sm text-gray-600" htmlFor="searchBox">
                Search:
              </label>
              <input
                className="w-full max-w-80 outline-none border border-gray-400 text-sm rounded-md bg-gray-100 text-gray-700 px-4 py-2"
                type="text"
                id="searchBox"
                value={searchValue}
                onChange={handleSearchFilter}
              />
            </div>
            <Link
              className="bg-blue-500 hover:bg-blue-400 text-sm lg:text-base px-6 py-[10px] rounded-md text-white"
              to="/checkout"
            >
              Add to cart
            </Link>
          </div>
        </header>

        <div className="overflow-x-auto scrollbar-hide">
          <table className="min-w-full table-auto bg-white shadow-xl rounded-sm py-8">
            <thead className="text-sm text-left border-b border-black bg-gray-50">
              <tr className="font-semibold">
                <th className="px-6 py-5">
                  <span>Image</span>
                </th>
                <th className="px-6 py-5 w-[15%] max-w-[200px]">
                  <span>Name</span>
                </th>
                <th className="px-6 py-5 w-[25%] max-w-xs">
                  <span>Description</span>
                </th>
                <th className="px-6 py-5 max-w-[100px]">
                  <span>Rating</span>
                </th>
                <th className="px-6 py-5 max-w-[70px]">
                  <span>Price</span>
                </th>
                <th className="px-6 py-5 text-right max-w-[200px]">
                  <span>Buy</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
