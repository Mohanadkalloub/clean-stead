import { NavLink } from "react-router-dom";
import { Login, SignUp } from "../../components/index";
import { imageOne } from "../../assets/images/index";
import "./Header.css";
let Header = () => {
  const navLinks = [
    {
      path: "/الرئيسية",
      display: "الرئيسية",
    },
    {
      path: "/الخدمات",
      display: "الخدمات",
    },
    {
      path: "/من نحن",
      display: "من نحن",
    },
    {
      path: "/اتصل بنا",
      display: "اتصل بنا",
    },
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="" className="navbar-brand">
            <img src={imageOne} alt="" />
            كلين <span className="logo">ستيد</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#links"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="links">
            <ul className="navbar-nav ms-auto">
              {navLinks.map((item) => (
                <li className="nav-item">
                  <NavLink
                    to={item.path}
                    className={(props) =>
                      props.isActive ? "active" : "in-active"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
            <br />
            {/* popue section start  */}
            <button
              type="button"
              className="btn btn mt-2 mx-2 log-in"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              دخول
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <p className="modal-title" id="exampleModalLabel">
                      من فضلك قم بتسجيل الدخول للاستمرار
                    </p>
                  </div>
                  <div className="modal-body">
                    <SignUp />
                    <Login />
                  </div>
                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
            {/* popue section end  */}
            <NavLink to="/احجز الآن">
              <button className="btn tc mt-2 mx-2" type="button">
                احجز الآن
              </button>
            </NavLink>
            <br />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
