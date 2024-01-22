import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error.message, error.statusCode);
    }
  };


  const selectHandler = (e, selectedPage) => {
    e.preventDefault();
    if(selectedPage > 0 && products.length/5 >= selectedPage)
    setPage(selectedPage);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-4 overflow-hidden p-5 py-10">
        {products.length &&
          products.slice(page * 5 - 5, page * 5).map((product, index) => {
            return (
              <div
                key={products.id}
                className=" bg-[#dbe2f6] border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg h-auto "
              >
                <img
                  src={product.images[0]}
                  alt=""
                  className=" object-cover p-1 rounded-lg border w-full h-60 "
                />
                <div className="px-3  py-2 ">
                  <span className="text-lg font-semibold font-mono text-blue-950">
                    {product.title}
                  </span>
                  <div className="text-md font-sans ">
                    {product.description}
                  </div>
                  <div className="flex justify-between py-4">
                    <span>{"Price : $" + product.price}</span>
                    <span>
                      {"Discount : " + product.discountPercentage + "%"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex mb-10 items-center justify-center">
        <div className="flex gap-x-2 border p-1 ">
          <span
            onClick={(e) => selectHandler(e, page - 1)}
            className={`cursor-pointer ${page==1?" opacity-50":""}`}
          >
            ◀️
          </span>
          {[...Array(products.length / 5)].map((_, i) => {
            return (
              <span
                key={i}
                className={`border px-1 space-x-2 cursor-pointer ${
                  page === i + 1 ? "bg-gray-400" : ""
                }`}
                onClick={(e) => selectHandler(e, i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={`cursor-pointer ${products.length/5===page?" opacity-50":""}`}
            disable
            onClick={(e) => selectHandler(e, page + 1)}
          >
            ▶️
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
