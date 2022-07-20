/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  const categories = [
    "Grocery",
    "Vegetables & Fruits",
    "Drinks",
    "Fresh Food",
    "Bakery",
  ];
  const quickLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Contact Us",
    "FAQs",
    "Find a Store",
  ];

  const Title = (title) => (
    <h2 className="mb-[20px] text-[16px] font-semibold">{title}</h2>
  );

  const Link = (link, i) => (
    <li key={i} className="mb-[15px] list-none font-light">
      <a href="#">{link}</a>
    </li>
  );

  const Links = (title, links) => {
    return (
      <div className="flex flex-1 flex-col">
        {Title(title)}
        {links.map((link, i) => Link(link, i))}
      </div>
    );
  };

  return (
    <footer className=" w-full bg-black px-[150px] py-[30px] text-white">
      <div className="flex items-start">
        <img
          src="./assets/logo white.svg"
          alt="logo"
          className="mr-[50px] w-[85px]"
        />

        <div className="mr-[70px] flex flex-1 flex-grow-[2] flex-col">
          {Title("ABOUT")}

          <p className="mb-[30px] font-light">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos
          </p>

          {Title("FOLLOW US")}

          <div className="flex">
            <img
              src="./assets/fb.svg"
              alt="facebook"
              className="mr-[10px] w-[30px]"
            />
            <img
              src="./assets/in.svg"
              alt="instagram"
              className="mr-[10px] w-[30px]"
            />
            <img src="./assets/tw.svg" alt="twitter" className="w-[30px]" />
          </div>
        </div>

        {Links("CATEGORIES", categories)}
        {Links("QUICK LINKS", quickLinks)}

        <div className="flex flex-1 flex-col">
          {Title("DOWNLOAD OUR APP")}
          <img
            src="./assets/apple.svg"
            alt="app-store"
            className="mb-[10px] w-[150px]"
          />
          <img
            src="./assets/googleplay.svg"
            alt="google-play"
            className="w-[150px]"
          />
        </div>
      </div>

      <p className="mt-[30px] text-center font-light">
        © 2020 All rights reserved to HML
      </p>
    </footer>
  );
};

export default Footer;
