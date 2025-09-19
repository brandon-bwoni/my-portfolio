"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const serviceID: string | undefined = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID: string | undefined = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey: string | undefined = process.env.NEXT_PUBLIC_KEY;

const schema = z.object({
  user_name: z.string().min(1, "Your name is required"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Please type a message!"),
});

type FormDataTypes = z.infer<typeof schema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormDataTypes> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      if (serviceID && templateID && publicKey) {
        emailjs.send(serviceID, templateID, data, publicKey).then(
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
    } catch (error: any) {
      throw new Error(error);
    } finally {
      reset();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        user_name: "",
        user_email: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="px-2 py-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mb-6 " data-te-input-wrapper-init>
        <input
          type="text"
          {...register("user_name")}
          className="peer block min-h-[auto] w-full rounded border-b-2 border-lightBtn dark:border-orange-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-lightText dark:placeholder:text-neutral-200 dark:peer-focus:text-primary dark:text-darkText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 caret-lighText dark:caret-orange-500"
          name="user_name"
          placeholder="Name"
        />
        <label className="absolute top-0 text-sm text-lightText transition-all duration-200 ease-out dark:text-neutral-200">
          Name
        </label>
        {errors.user_name && (
          <div className="w-full text-red-500 py-1 my-1 bg-red-300/10 px-2 text-sm rounded-md">
            {errors.user_name.message}
          </div>
        )}
      </div>
      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="email"
          {...register("user_email")}
          className="peer block min-h-[auto] w-full rounded border-b-2 border-lightBtn dark:border-orange-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-lightText dark:placeholder:text-neutral-200 dark:peer-focus:text-primary dark:text-darkText [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 caret-lighText dark:caret-orange-500"
          name="user_email"
          placeholder="Email address"
        />
        <label className="absolute top-0 text-sm text-lightText transition-all duration-200 ease-out dark:text-neutral-200">
          Email address
        </label>
        {errors.user_email && (
          <div className="w-full text-red-500 py-1 my-1 bg-red-300/10 px-2 text-sm rounded-md">
            {errors.user_email.message}
          </div>
        )}
      </div>
      <div className="relative mb-3" data-te-input-wrapper-init>
        <textarea
          className="peer block min-h-[auto] w-full rounded border-b-2 border-lightBtn dark:border-orange-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-darkText dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-lightText dark:caret-orange-500 caret-lighText"
          rows={3}
          {...register("message")}
          placeholder="Your message"
        ></textarea>
        <label className="absolute top-0 text-sm text-lightText transition-all duration-200 ease-out dark:text-neutral-200">
          Message
        </label>
        {errors.message && (
          <div className="w-full text-red-500 py-1 my-1 bg-red-300/10 px-2 text-sm rounded-md">
            {errors.message.message}
          </div>
        )}
      </div>
      <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex"></div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-block w-full rounded-xl bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal dark:text-darkText lg:mb-0 dark:bg-orange-500 bg-lightText dark:hover:bg-orange-400 text-lightBtn hover:bg-blue-800 hover:text-white/90
                  dark:hover:text-darkBg overflow-x-none hover:shadow-md hover:transition-all "
      >
        <span className="flex items-center gap-1 justify-center ">
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        </span>
      </button>
    </form>
  );
};

