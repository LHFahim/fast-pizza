import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={`/`}>Fast Pizza Co.</Link>
      <p>Fahim</p>
    </header>
  );
};

export default Header;
