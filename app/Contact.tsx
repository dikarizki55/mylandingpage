"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className=" relative w-3xl h-[410] flex items-center text-white z-10">
      <div className=" w-[50%] text-white flex flex-col gap-5">
        <h1 className=" text-5xl font-bold">Contact me</h1>
        <div className=" flex flex-col gap-3">
          <div className=" flex gap-3">
            <Image
              src={"/landingpage/mail.svg"}
              alt="mail"
              width={23}
              height={16}
              className=" w-auto h-auto"
            ></Image>
            <span
              className={` font-medium text-base cursor-pointer ${
                copied ? " text-yellow-500" : ""
              }`}
              onClick={() => {
                handleCopy("dika55rizki@gmail.com");
              }}
            >
              {copied ? "Copied!" : "dika55rizki@gmail.com"}
            </span>
          </div>
          <div className=" flex gap-3">
            <img
              src={"/landingpage/linkedin.png"}
              alt="linkedin"
              className=" w-[23px] h-[20px]"
            ></img>
            <Link
              className=" font-medium text-base"
              href={"https://www.linkedin.com/in/dika-rizki-7051061b0/"}
            >
              Dika Rizki
            </Link>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" w-[50%] text-white border border-white rounded-4xl flex flex-col gap-7 p-7"
      >
        <div className=" flex flex-col gap-2">
          <span className=" font-medium text-sm">Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className=" w-3xs h-7 border border-white rounded-full text-xs px-4 text-white"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <span className=" font-medium text-sm">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className=" w-3xs h-7 border border-white rounded-full text-xs px-4 text-white"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <span className=" font-medium text-sm">Message</span>
          <textarea
            name="message"
            cols={30}
            rows={10}
            value={form.message}
            onChange={handleChange}
            className=" border border-white rounded-2xl text-white px-4 py-2 text-sm h-28"
          ></textarea>
        </div>
        <div className=" flex justify-center">
          <button
            type="submit"
            className=" bg-white px-9 py-2 font-bold text-base cursor-pointer text-black rounded-2xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
