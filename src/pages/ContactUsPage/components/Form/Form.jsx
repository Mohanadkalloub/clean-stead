import "./form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  services: Yup.string().required("أختر الخدمة"),
  name: Yup.string().required("الاسم"),
  phoneNumber: Yup.string().required("رقم الجوال"),
  message: Yup.string().required("الرسالة"),
});

const services = [
  "تنظيف المنازل",
  "التنظيف التجاري",
  "تنظيف السجاد",
  "تنظيف النوافذ",
  "تنظيف السيارات",
  "تنظيف بعد البناء",
];

const FormValidation = () => {
  const initialValues = {
    services: "",
    name: "",
    phoneNumber: "",
    message: "",
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
          <div>
            <label className="form-label" htmlFor="services">
              الخدمة
            </label>
            <Field
              className="form-select"
              name="services"
              id="services"
              selected
              as="select">
              <option value="">اسم الخدمة</option>
              {services.map((services) => (
                <option key={services} value={services}>
                  {services}
                </option>
              ))}
            </Field>
            <ErrorMessage name="services" component="div" className="error" />
          </div>
          <div className="row mt-3">
            <div className="col-md-6 col-12">
              <label className="form-label" htmlFor="name">
                الاسم
              </label>
              <Field
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="الاسم"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="col-md-6 col-12">
              <label className="form-label" htmlFor="phoneNumber">
                رقم الجوال
              </label>
              <Field
                type="text"
                className="form-control"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="رقم الجوال"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label" htmlFor="message">
              الرسالة
            </label>
            <Field
              className="form-control"
              name="message"
              id="message"
              rows="4"
              placeholder="اكتب رسالتك هنا"
              as="textarea"
            />
            <ErrorMessage name="message" component="div" className="error" />
          </div>
          <button className="btn mt-2" type="submit" disabled={isSubmittting}>
            أرسل
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default FormValidation;
