import { Navbar, Product, RelatedProducts, Footer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Product />
        <hr className="my-[45px]" />
        <RelatedProducts />
      </main>
      <Footer />
    </>
  );
}

export default App;
