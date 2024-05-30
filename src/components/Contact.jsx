import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nhkugrp", "template_i88kugv", form.current, {
        publicKey: "I3e02-5IDoMSraw__",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full pb-10"
    >
      <div className="text-white max-w-screen-lg mx-auto flex flex-col justify-center">
        <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
          Contact Me !
        </p>
        <p className="py-6">Feel welcome to contact me !</p>
      </div>
      <form
        className="max-w-sm mx-auto"
        action="https://getform.io/f/pboxmroa"
        method="POST"
      >
        <div className="mb-5">
          <label
            htmlFor="fname"
            className="block mb-2 text-sm font-medium text-cyan-500 dark:text-white"
          >
            Your first name
          </label>
          <input
            type="text"
            name="firstName"
            id="fname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="first name"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="lname"
            className="block mb-2 text-sm font-medium text-cyan-500 dark:text-white"
          >
            Your last name
          </label>
          <input
            type="text"
            id="lname"
            name="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="last name"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-cyan-500 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-cyan-500 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="align text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Let's Talk
        </button>
      </form>
    </div>
  );
};
export default Contact;
