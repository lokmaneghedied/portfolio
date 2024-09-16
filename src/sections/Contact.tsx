import TitleTicket from "@/components/TitleTicket";
import StarsIcon from "@/assets/svg/StarsIcon.svg";
import SendIcon from "@/assets/svg/SendIcon.svg";
import { useFormik, FormikErrors } from "formik";

type FormValues = {
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors: FormikErrors<FormValues> = {};
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!values.email) {
        errors.email = "This field is required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email format";
      }
      if (!values.subject) {
        errors.subject = "This field is required";
      }
      if (!values.message) {
        errors.message = "This field is required";
      }
      return errors;
    },
  });

  return (
    <section
      id="contact"
      className="w-full flex justify-center bg-contact bg-cover bg-center bg-no-repeat"
    >
      <div className="sectionContainer flex flex-col items-center justify-center">
        <TitleTicket title="Get in touch" Icon={<StarsIcon />} />
        <h1 className="heading1 leading-tight">
          I am always looking for exciting projects.
        </h1>
        <p className="details1">
          Fill in the form or just use my contacts below
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col gap-4"
        >
          <div className="w-full flex flex-col md:flex-row items-start gap-4">
            <label htmlFor="email" className="w-full flex flex-col gap-y-2">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email*"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`input ${
                  formik.touched.email && formik.errors.email
                    ? "animate-shake border-red-500"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-600">{formik.errors.email}</p>
              )}
            </label>
            <label htmlFor="subject" className="w-full flex flex-col gap-y-2">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject*"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`input ${
                  formik.touched.subject && formik.errors.subject
                    ? "animate-shake border-red-500"
                    : ""
                }`}
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-sm text-red-600">{formik.errors.subject}</p>
              )}
            </label>
          </div>
          <label htmlFor="message" className="w-full flex flex-col gap-y-2">
            <textarea
              name="message"
              id="message"
              placeholder="Message*"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`input ${
                formik.touched.message && formik.errors.message
                  ? "animate-shake border-red-500"
                  : ""
              }`}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-sm text-red-600">{formik.errors.message}</p>
            )}
          </label>
          <button className="buttonPrimary lg:max-w-full w-full" type="submit">
            Send message
            <SendIcon />
          </button>
        </form>
      </div>
    </section>
  );
}
