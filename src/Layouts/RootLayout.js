import { Outlet, NavLink } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <div className="logo">
            <h1>Math Magicians</h1>
          </div>

          <div className="nav-items">
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="about" activeClassName="active">Calculator</NavLink>
            <NavLink to="quote" activeClassName="active">Quote</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
