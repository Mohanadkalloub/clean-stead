import "./SignUp.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("أدخل الإسم"),
  email: Yup.string().required("أدخل الإيميل"),
  phoneNumber: Yup.string().required("رقم الجوال"),
  password: Yup.string().required("أدخل كلمة السر"),
});

const FormSignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isSubmittting }) => (
        <Form action="">
          <div className="mt-3">
            <label className="form-label" htmlFor="name">
              الاسم
            </label>
            <Field
              type="text"
              className="form-control"
              name="الاسم"
              id="name"
              placeholder="ادخل الاسم"
            />
            <ErrorMessage name="الاسم" component="div" className="error" />
            <label htmlFor="email" className="form-label">
              الإيميل
            </label>
            <Field
              type="text"
              className="form-control"
              name="الإيميل"
              id="الإيميل"
              placeholder="أدخل الإيميل"
            />
            <ErrorMessage name="الإيميل" component="div" className="error" />
            <label htmlFor="phoneNumber" className="form-label">
              رقم الجوال
            </label>
            <Field
              type="number"
              className="form-control"
              name="رقم الجوال"
              id="رقم الجوال"
              placeholder="رقم الجوال"
            />
            <ErrorMessage name="رقم الجوال" component="div" className="error" />
            <label htmlFor="password" className="form-label">
              كلمة المرور
            </label>
            <Field
              type="password"
              className="form-control"
              name="كلمة المرور"
              id="كلمة المرور"
              placeholder="ادخل كلمة المرور"
            />
            <ErrorMessage
              name="كلمة المرور"
              component="div"
              className="error"
            />
          </div>
          <div className="login">
            <button
              type="button"
              className="mt-3"
              data-bs-dismiss="modal"
              disabled={isSubmittting}>
              انشاء حساب
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default FormSignUp;
