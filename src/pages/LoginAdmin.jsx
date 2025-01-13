import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imageOne } from "../assets/images/index";
import "../components/LoginAdmin/LoginAdmin.css";
import { faEnvelope, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const LoginAdmin = () => {
  return (
    <div className="container">
      <div className="content d-flex align-items-center justify-content-center ">
        <img src={imageOne} alt="" />
        <span>كلين ستيد</span>
      </div>
      <div className="form">
        <form>
          <div className="">
            <label for="exampleInputEmail1" className="form-label">
              الايميل
            </label>
            <input
              type="email"
              className="form-control fa-envelope"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="mx-2">ادخل الايميل</span>
            </div>
          </div>
          <br />
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              كلمة المرور
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <div className="icon">
              <FontAwesomeIcon icon={faLock} />
              <span className="mx-2">ادخل كلمة المرور</span>
            </div>
            <div className="lock">
              <FontAwesomeIcon icon={faEyeSlash} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary auth-btn">
            دخول
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginAdmin;
