import { Navbar, Product } from "./components";
import RelatedProducts from "./components/RelatedProducts";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Product />
        <hr className="my-[45px]" />
        <RelatedProducts />
      </main>
    </>
  );
}

export default App;
