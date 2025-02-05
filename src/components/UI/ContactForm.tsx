"use client";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import validator from "validator";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface FormDataTypes {
  name: string;
  email: string;
  message: string;
}

// EmailJS configuration environment variables
const serviceID: string | undefined = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID: string | undefined = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey: string | undefined = process.env.NEXT_PUBLIC_KEY;

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormDataTypes>>({});

  useEffect(() => {
    form.current?.focus();
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      // Function to sanitize form data
      const formData = new FormData(form.current);
      const sanitizedData: Record<string, string> = {};

      formData.forEach((value, key) => {
        sanitizedData[key] = DOMPurify.sanitize(value as string);
      });

      const { user_name, user_email, message } = sanitizedData;
      const newErrors: Partial<FormDataTypes> = {};

      // Client-side validation
      if (!user_name) newErrors.name = "Name is required.";
      if (!user_email) newErrors.email = "Email is required.";
      if (user_email && !validator.isEmail(user_email))
        newErrors.email = "Please enter a valid email address.";
      if (!message) newErrors.message = "Message is required.";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // Validate email address
      const email = sanitizedData["user_email"];
      if (!validator.isEmail(email)) {
        toast("Please enter a valid email address.", {
          type: "error",
        });
        return;
      }

      // Populating sanitized data back into the form before sending
      Object.keys(sanitizedData).forEach((key) => {
        const inputElement = form.current?.elements.namedItem(
          key
        ) as HTMLInputElement;
        if (inputElement) {
          inputElement.value = sanitizedData[key];
        }
      });

      // Send email via EmailJS
      if (serviceID && templateID && publicKey) {
        emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
          (result) => {
            if (result.status === 200) {
              toast("Message sent successfully!", {
                type: "success",
              });
            }
          },
          (error) => {
            toast("Failed to send message. Please try again later.", {
              type: "error",
            });
          }
        );
      }
    }
    // Reset form after submission
    form.current?.reset();
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="px-4 py-6">
        <div className="relative mb-6 " data-te-input-wrapper-init>
          <input
            type="text"
            required
            className="peer block min-h-[auto] w-full rounded border-b-2 border-lightBtn dark:border-orange-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-lightText dark:placeholder:text-neutral-200 dark:peer-focus:text-primary dark:text-darkText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 caret-lighText dark:caret-orange-500"
            name="user_name"
            placeholder="Name"
          />
          <label className="absolute top-0 text-sm text-lightText transition-all duration-200 ease-out dark:text-neutral-200">
            Name
          </label>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            required
            className="peer block min-h-[auto] w-full rounded border-b-2 border-lightBtn dark:border-orange-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-lightText dark:placeholder:text-neutral-200 dark:peer-focus:text-primary dark:text-darkText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 caret-lighText dark:caret-orange-500"
            name="user_email"
            placeholder="Email address"
          />
          <label className="absolute top-0 text-sm text-lightText transition-all duration-200 ease-out dark:text-neutral-200">
            Email address
          </label>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full rounded border-b-2 border-lightBtn dark:border-orange-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-darkText dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-lightText dark:caret-orange-500 caret-lighText"
            rows={3}
            name="message"
            placeholder="Your message"
          ></textarea>
          <label className="absolute top-0 text-sm text-lightText transition-all duration-200 ease-out dark:text-neutral-200">
            Message
          </label>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex"></div>
        <button
          type="submit"
          className="inline-block w-full rounded-xl bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal dark:text-darkText lg:mb-0 dark:bg-orange-500 bg-lightText dark:hover:bg-orange-400 text-lightBtn hover:bg-blue-800 hover:text-white/90
                    dark:hover:text-darkBg overflow-x-none hover:shadow-xl hover:transition-all "
        >
          <span className="flex items-center gap-1 justify-center hover:font-semibold">
            Send Message
          </span>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
