"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiSend } from "react-icons/fi";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { SocialLinks } from "@/Utils/SocialLinks";
import Link from "next/link";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  message: string;
}

interface FormErrors {
  name?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          e.target as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        setFormData({ name: "", message: "" });
        toast({ title: "Message sent successfully!" });
      } catch (error) {
        console.log(error);
        toast({ title: "Failed to send message. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-inherit px-4 sm:px-6 lg:px-8 flex flex-col space-y-24 items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className=" text-center text-3xl font-extrabold dark:text-white text-gray-900">
            Get in Touch
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium dark:text-white text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out`}
                aria-describedby="name-error"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium dark:text-white text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out`}
                aria-describedby="message-error"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FiSend
                  className={`h-5 w-5 text-white group-hover:text-gray-200 ${
                    isSubmitting ? "animate-spin" : ""
                  }`}
                  aria-hidden="true"
                />
              </span>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-end justify-center space-x-4 p-4 bg-transparent">
        {SocialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center hover:bg-gray-700 rounded-full transition-all transform hover:scale-125 duration-300"
            style={{
              width: "3rem",
              height: "3rem",
              transitionTimingFunction: "ease-in-out",
              transitionDuration: "0.3s",
            }}
          >
            <span className="text-2xl text-black dark:text-white hover:text-white transition-all duration-300">
              {social.icon}
            </span>
          </Link>
        ))}
      </div>

      <Toaster />
    </div>
  );
};

export default ContactForm;
