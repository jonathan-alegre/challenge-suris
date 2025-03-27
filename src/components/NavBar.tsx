import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm box-shadow mb-3">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="reservations"
                  className="nav-link active"
                  aria-current="page"
                >
                  <h5>Listado Reservas</h5>
                </NavLink>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
