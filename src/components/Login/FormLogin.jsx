import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("أدخل الإيميل"),
  password: Yup.string().required("أدخل كلمة السر"),
});

const FormLogin = () => {
  const initialValues = {
    email: "",
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
        <Form>
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
          <ErrorMessage name="كلمة المرور" component="div" className="error" />
          <div className="login">
            <button
              type="button"
              className="mt-3"
              data-bs-dismiss="modal"
              disabled={isSubmittting}>
              دخول
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default FormLogin;
