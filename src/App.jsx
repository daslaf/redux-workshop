import { Routes, Route, NavLink } from "react-router-dom";
import classnames from "classnames";

import One from "./01";

const NavigationLink = ({ children, to }) => {
  return (
    <NavLink
      className={(props) =>
        classnames(
          "navigation-link",
          props.isActive && "navigation-link--active"
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

function App() {
  return (
    <main>
      <nav className="navigation">
        <NavigationLink to="/">Main</NavigationLink>
        <NavigationLink to="/one">One</NavigationLink>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="one" element={<One />} />
      </Routes>
    </main>
  );
}

export default App;
