/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Product, RelatedProducts, Cart, Footer } from "./components";
import { getProductDetails } from "./store/productSlice";

import { SpinnerCircular } from "spinners-react";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetails({ id: 10430 }));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <div className="absolute top-1/2 left-1/2 m-auto -translate-x-1/2 -translate-y-1/2 text-center">
            <SpinnerCircular
              className="mb-2"
              size="60"
              speed="100"
              color="rgba(237, 1, 130, 1)"
            />
            <span className="text-[#8F8F8F]">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Cart />
          <main>
            <Product />
            <hr className="my-[45px]" />
            <RelatedProducts />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
