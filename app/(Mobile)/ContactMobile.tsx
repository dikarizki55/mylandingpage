"use client";
import { getHandleSubmit } from "@/lib/useSubmitMessage";
import Image from "next/image";
import { useState } from "react";

const ContactMobile = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.log("failed to copy", err);
    }
  };

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

  const handleSubmit = getHandleSubmit(form, () => {
    setForm({ name: "", email: "", message: "" });
  });

  return (
    <div className=" w-full min-h-[844px] px-10 pt-20 pb-40">
      <div className="">
        <h1 className=" font-bold text-5xl">Contact me</h1>
        <div className=" flex gap-5 mt-6">
          <div>
            <Image
              src={"/landingpage/mail.svg"}
              alt="mail"
              width={23}
              height={16}
              className=" w-auto h-auto"
            ></Image>
          </div>
          <span
            onClick={() => handleCopy("dika55rizki@gmail.com")}
            className=" text-white text-sm"
          >
            {copied ? "Copied!" : "dika55rizki@gmail.com"}
          </span>
        </div>
        <div className=" flex gap-5 mt-3 items-center">
          <div className=" w-[23px] h-[19px] flex justify-center items-center">
            <Image
              src={"/landingpage/linkedin.png"}
              alt="linkedin"
              width={19}
              height={19}
              className=" object-contain"
            ></Image>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/dika-rizki-7051061b0/"
              className=" text-white text-sm"
            >
              Dika Rizki
            </a>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" w-full mt-8 p-6 border border-white rounded-3xl"
      >
        <div className=" flex flex-col gap-2">
          <span className="font-medium text-base">Name</span>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={form.name}
            required
            className="w-full border border-white rounded-full text-base px-4 py-1 text-white"
          />
        </div>
        <div className=" flex flex-col gap-2 mt-7">
          <span className="font-medium text-base">Email</span>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={form.email}
            required
            className="w-full border border-white rounded-full text-base px-4 py-1 text-white"
          />
        </div>
        <div className=" flex flex-col gap-2 mt-7">
          <span className="font-medium text-base">Message</span>
          <textarea
            name="message"
            cols={30}
            rows={10}
            value={form.message}
            onChange={handleChange}
            required
            className=" border border-white rounded-2xl text-white px-4 py-2 text-base h-28"
          ></textarea>
        </div>
        <button
          onSubmit={handleSubmit}
          className=" px-6 py-2 text-white border border-white rounded-full mt-7"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMobile;
