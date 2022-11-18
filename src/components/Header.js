// export default function Header() {
//     const [newProducts, setNewProducts] = useState([]);
//     const dispatch = useDispatch();
  
//     const addCartHandler = () => {
//       newProducts.map((product) => {
//         product.isChecked && dispatch(addToCart(product));
//         return product;
//       });
//     };
  
//     const [filter1, setFilter1] = useState("");
//     const [filter2, setFilter2] = useState("");
  
//     const [searchValue, setSearchValue] = useState("");
//     const [filteredProducts, setFilteredProducts] = useState(products);
//     const filterHandler = (e) => {
//       setFilter1(e.target.value);
//       setFilter2(e.target.value);
//     };
//     const handleSearchFilter = (e) => {
//       setSearchValue(e.target.value);
//     };
  
//     useEffect(() => {
//       const timeout = setTimeout(() => {
//         const filter = products.filter((product) => {
//           return (
//             product.category.toLowerCase() === filter1.toLowerCase() ||
//             Math.floor(product.rating.rate) >= filter2
//           );
//         });
//         setFilteredProducts(filter);
//       }, 500);
//       return () => clearTimeout(timeout);
//     }, [filter1, filter2, products]);
  
//     useEffect(() => {
//       const timeout = setTimeout(() => {
//         const filter = products.filter((product) => {
//           return Object.values(product)
//             .join("")
//             .toLowerCase()
//             .includes(searchValue.toLowerCase());
//         });
  
//         setFilteredProducts(filter);
//       }, 500);
//       return () => clearTimeout(timeout);
//     }, [searchValue, products]);
  
//     const resetHandler = () => {
//       setFilter1("");
//       setFilter2("");
//     };
  
  
//     return (
//         <header className="flex justify-between">
//         <div className="flex">
//           <select onChange={filterHandler} value={filter1}>
//             <option value="">All</option>
//             <option value="Men's clothing">Men's clothing</option>
//             <option value="Women's clothing">Women's clothing</option>
//             <option value="Jewelery">Jewellery</option>
//             <option value="Electronics">Electronics</option>
//           </select>
//           <select onChange={filterHandler} value={filter2}>
//             <option value="">Rating</option>
//             <option value="4">4 & up</option>
//             <option value="3">3 & up</option>
//             <option value="2">2 & up</option>
//             <option value="1">1 & up</option>
//           </select>
//           <div>
//             <ResetIcon onClick={resetHandler} className="h-5 w-5" />
//           </div>
//         </div>
//         <div className="flex">
//           <input
//             className="h-full w-full outline-none text-sm text-gray-700 pr-2"
//             type="text"
//             id="search"
//             placeholder="Search"
//             value={searchValue}
//             onChange={handleSearchFilter}
//           />
//           <button onClick={addCartHandler}>
//             <Link to="/checkout">Add to cart</Link>
//           </button>
//         </div>
//       </header>
//     )
// }