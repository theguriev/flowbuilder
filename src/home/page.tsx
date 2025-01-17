import { NavLink } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/flow">flow</NavLink>
    </div>
  );
};

export default HomePage;
