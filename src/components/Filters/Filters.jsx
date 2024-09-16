import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./Filters.module.css";
import icons from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/filters.slice";
import { selectFilters } from "../../redux/filters/filters.selectors";

// Schema для валідації форми
const validationSchema = Yup.object({
  location: Yup.string(),
  features: Yup.array().of(Yup.string()),
  form: Yup.string(),
});

// Константи для фільтрів
const featureOptions = [
  { value: "AC", label: "AC", icon: "ac" },
  { value: "automatic", label: "Automatic", icon: "diagram" },
  { value: "kitchen", label: "Kitchen", icon: "cup-hot" },
  { value: "TV", label: "TV", icon: "tv" },
  { value: "bathroom", label: "Bathroom", icon: "water" },
];

const formOptions = [
  { value: "panelTruck", label: "Van", icon: "van" },
  { value: "fullyIntegrated", label: "Fully Integrated", icon: "full" },
  { value: "alcove", label: "Alcove", icon: "alcove" },
];

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  // Обробка відправлення форми
  const handleSubmit = (values) => {
    dispatch(changeFilter(values));
  };

  return (
    <div className={style.filter_wrapper}>
      <Formik
        initialValues={{
          location: filters.location,
          form: filters.form,
          features: filters.features,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={style.input_wrapper}>
              <label className={style.filter_title} htmlFor="location">
                Location
              </label>
              <Field
                id="location"
                className={style.input_location}
                name="location"
                type="text"
                placeholder="City"
              />
              <svg className={style.icon} width="20" height="20">
                <use href={`${icons}#Map`} />
              </svg>
            </div>
            {errors.location && touched.location && (
              <div className={style.errorMessage}>{errors.location}</div>
            )}

            <p className={style.filter_title}>Filters</p>
            <h3 className={style.equipment_title}>Vehicle Equipment</h3>
            <div
              role="group"
              aria-labelledby="features-group"
              className={style.group_wrapper}
            >
              {featureOptions.map(({ value, label, icon }) => (
                <label key={value}>
                  <Field type="checkbox" name="features" value={value} />
                  <p className={style.pWrap}>
                    <svg width="20" height="20">
                      <use href={`${icons}#${icon}`} />
                    </svg>
                    {label}
                  </p>
                </label>
              ))}
            </div>

            <h3 className={style.equipment_title}>Vehicle Type</h3>
            <div
              role="group"
              aria-labelledby="form-group"
              className={style.group_wrapper}
            >
              {formOptions.map(({ value, label, icon }) => (
                <label key={value}>
                  <Field type="radio" name="form" value={value} />
                  <p className={style.pWrap}>
                    <svg width="32" height="32">
                      <use href={`${icons}#${icon}`} />
                    </svg>
                    {label}
                  </p>
                </label>
              ))}
            </div>
            {errors.form && touched.form && (
              <div className={style.error}>{errors.form}</div>
            )}

            <button className={style.search_button} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filters;
