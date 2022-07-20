const Navbar = () => {
  const navbarItem = (title) => {
    return (
      <li className="mr-[20px] inline text-[14px] ">
        <a href="#">{title}</a>
      </li>
    );
  };

  return (
    <nav className="flex h-[103px] w-full items-center bg-black text-white">
      <div className="inline-block h-full w-[148px] rounded-br-[10px] bg-white p-[20px]">
        <img src="./assets/Logo pink.svg" alt="logo" />
      </div>

      <ul className="ml-[55px] inline-block">
        {navbarItem("CATEGORIES")}
        {navbarItem("Deals")}
        {navbarItem("Recipes")}
        {navbarItem("About")}
      </ul>

      <div className="relative mr-[30px]">
        <input
          className="h-[49px] w-[394px] rounded-[10px] bg-white py-[16px] px-[25px] text-[12px] text-black placeholder:text-black focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <img
          src="./assets/search.svg"
          alt="search"
          className="color-[#CBCFC9] absolute right-[20px] bottom-[17px]"
        />
      </div>

      <img src="./assets/loc.svg" alt="loc" />

      <u className="mx-[10px] text-[14px] ">34 Plaza Mall, Sheik...</u>

      <div className="relative mr-[40px]">
        <img src="./assets/cart.svg" alt="search" />
        <span className="absolute top-[-10px] right-[-15px] h-[24px] w-[24px] rounded-full border-[3px] border-black bg-[#FF0000] text-center text-[12px]">
          1
        </span>
      </div>

      <img src="./assets/user.svg" alt="user" />

      <div className="ml-[8px] mr-[25px] flex flex-col text-center">
        <div className="text-[14px]">
          Mostafa
          <img
            src="./assets/arrow.svg"
            alt="arrow"
            className="ml-[6px] inline-block"
          />
        </div>
        <div className="rounded-[10px] bg-white py-[0.5px] px-[3px] text-[13px] text-[#ED0182]">
          Points : <span className="font-semibold">560</span>
        </div>
      </div>

      <u className="text-[14px]">AR</u>
    </nav>
  );
};

export default Navbar;
