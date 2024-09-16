import style from "./MainForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import toast from "react-hot-toast";

registerLocale("en-GB", enGB);

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  comment: Yup.string(),
  date: Yup.date().required("Date is required"),
});

// Initial form values
const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const MainForm = () => {
  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    toast.success("You successfully sent the form!");
    resetForm();
  };

  return (
    <div className={style.form_wrapper}>
      <h3 className={style.client_title}>Book your campervan now</h3>
      <p className={style.client_text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, values, touched, setFieldValue }) => (
          <Form>
            <div className={style.input_wrapper}>
              {/* Name Field */}
              <Field
                className={style.input_text}
                name="name"
                type="text"
                placeholder="Name*"
              />
              {touched.name && errors.name && (
                <div className={style.errorMessage}>{errors.name}</div>
              )}

              {/* Email Field */}
              <Field
                className={style.input_text}
                name="email"
                type="email"
                placeholder="Email*"
              />
              {touched.email && errors.email && (
                <div className={style.errorMessage}>{errors.email}</div>
              )}

              {/* Date Picker */}
              <DatePicker
                selected={values.date}
                onChange={(date) => setFieldValue("date", date)}
                className={style.input_text}
                placeholderText="Booking date*"
                locale="en-GB"
              />
              {touched.date && errors.date && (
                <div className={style.errorMessage}>{errors.date}</div>
              )}

              {/* Comment Field */}
              <Field
                className={style.input_comment}
                name="comment"
                as="textarea"
                placeholder="Comment"
              />
            </div>

            {/* Submit Button */}
            <button className={style.send_button} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MainForm;
