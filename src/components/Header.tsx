import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div id="header" className="flex items-center justify-center h-80 w-full">
      <img src={logo} alt="Speed Friending" className="w-full max-w-[500px]" />
    </div>
  );
};

export default Header;
