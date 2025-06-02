import Image from "next/image";
import logo from "@assets/img/logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <Image src={logo} alt="logo" priority />
    </header>
  );
};

export default Header;
