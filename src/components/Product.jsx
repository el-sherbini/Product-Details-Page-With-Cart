const Product = () => {
  const categories = ["HOME", "FRESH VEGETABLES", "HERBS LEAVES", "PREPACKED"];

  return (
    <section className="mx-[150px] mt-[70px]">
      <ul className="flex text-[15px]">
        {categories.map((category, i) => {
          return (
            <li key={i} className="flex list-none font-semibold text-[#ED0182]">
              {category}
              <img
                src="./assets/arrow right.svg"
                alt="arrow"
                className="mx-[16px]"
              />
            </li>
          );
        })}
        <li className="list-none font-medium">Mafa Red Cabbage - 1Piece</li>
      </ul>

      <div className="mt-[65px] mb-[65px] flex">
        <img
          src="./assets/chicken-with-skin-500x500.png"
          alt="product"
          className="h-[280px] w-[340px]"
        />

        <div className="ml-[30px]">
          <div className="flex">
            <div className="flex w-[560px] flex-col">
              <div className="mb-[45px] flex justify-between">
                <h1 className="text-[20px] font-semibold">
                  Mafa Red Cabbage - 1Piece
                </h1>
                <span className="text-[20px] font-semibold">9.99 LE</span>
              </div>

              <p className="text-[15px]">
                The Prepacked Mafa Red Cabbage has an intense flavor and crisp
                texture. This vibrant red cabbage is ideal for preparing salads,
                stews, curries and snacks. It is very low in calories, but high
                in essential folate, vitamins, minerals, antioxidants and
                dietary fiber. Loaded with antioxidants, red cabbage is also
                known for its anti-ageing properties.
              </p>
              <br />
              <p className="text-[15px]">
                Tastes excellent both in raw and cooked forms Versatile
                ingredient can be used in a wide range of recipes Can be used as
                a flavor enhancer in stews and curries Fresh, wholesome
                vegetable can be used in a variety ofrecipes
              </p>

              <button className="mt-[45px] h-[60px] w-[220px] rounded-[10px] bg-[#ED0182] text-[14px] text-white">
                Add
              </button>
            </div>

            <div className=" ml-[70px] flex h-[35px] w-[80px] items-center justify-center rounded-[20px] bg-[#F3D5E6] text-[16px]">
              1
              <img
                src="./assets/arrow down.svg"
                alt="arrow"
                className="ml-[10px] inline-block w-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
