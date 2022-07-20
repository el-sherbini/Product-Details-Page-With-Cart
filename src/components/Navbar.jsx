const Navbar = () => {
  const navbarItems = ["CATEGORIES", "Deals", "Recipes", "About"];

  return (
    <nav className="flex h-[100px] w-full items-center bg-black text-white">
      <div className="h-full w-[150px] rounded-br-[10px] bg-white p-[20px]">
        <img src="./assets/Logo pink.svg" alt="logo" />
      </div>

      <ul className="ml-[55px]">
        {navbarItems.map((item, i) => {
          return (
            <li className="mr-[20px] inline" key={i}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>

      <div className="relative mr-[30px]">
        <input
          className="h-[50px] w-[400px] rounded-[10px] bg-white py-[16px] px-[25px] text-[12px] text-black placeholder:text-black focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <img
          src="./assets/search.svg"
          alt="search"
          className="color-[#CBCFC9] absolute right-[20px] bottom-[18px]"
        />
      </div>

      <img src="./assets/loc.svg" alt="loc" />

      <u className="mx-[10px]  ">34 Plaza Mall, Sheik...</u>

      <div className="relative mr-[40px]">
        <img src="./assets/cart.svg" alt="search" />
        <span className="absolute top-[-10px] right-[-15px] h-[24px] w-[24px] rounded-full border-[3px] border-black bg-[#FF0000] text-center text-[12px]">
          1
        </span>
      </div>

      <img src="./assets/user.svg" alt="user" />

      <div className="ml-[8px] mr-[25px] flex flex-col text-center">
        <div>
          Mostafa
          <img
            src="./assets/arrow.svg"
            alt="arrow"
            className="ml-[6px] inline-block"
          />
        </div>
        <div className="rounded-[10px] bg-white py-[1px] px-[5px] text-[13px] text-[#ED0182]">
          Points : <span className="font-semibold">560</span>
        </div>
      </div>

      <u>AR</u>
    </nav>
  );
};

export default Navbar;
