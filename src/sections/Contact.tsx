import TitleTicket from "@/components/TitleTicket";
import StarsIcon from "@/assets/svg/StarsIcon.svg";
import SendIcon from "@/assets/svg/SendIcon.svg";
import LoaderIcon from "@/assets/svg/LoaderIcon.svg";
import { useFormik, FormikErrors } from "formik";
import { useState } from "react";

type FormValues = {
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://formsubmit.co/403f6d5a97a4dada6a9c1d148ede79ed",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const responseElement = document.getElementById("response");
        if (!responseElement) throw new Error("Response element not found");

        if (response.ok) {
          responseElement.innerText = "Message sent successfully";
          formik.resetForm();
        } else {
          responseElement.classList.add("text-red-500");
          responseElement.innerText = "An error occurred. Please try again";
        }
      } catch (error) {
        const responseElement = document.getElementById("response");
        if (responseElement) {
          responseElement.classList.add("text-red-500");
          responseElement.innerText =
            "An unexpected error occurred. Please try again";
        }
      } finally {
        setIsLoading(false);
      }
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
          <button
            disabled={isLoading}
            className="buttonPrimary lg:max-w-full w-full"
            type="submit"
          >
            {isLoading ? "Sending message..." : "Send message"}
            {isLoading ? <LoaderIcon /> : <SendIcon />}
          </button>
          <p id="response" className="details1 text-green"></p>
        </form>
      </div>
    </section>
  );
}
