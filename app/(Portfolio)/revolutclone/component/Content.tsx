"use client";

export default function Content() {
  return (
    <section className=" w-full h-[90vh] flex justify-center items-center relative">
      <div className="flex h-full justify-start items-center gap-14">
        <div className="w-[470px] inline-flex flex-col justify-start items-start gap-14">
          <div className="self-stretch flex flex-col justify-start items-start gap-8">
            <div className="self-stretch justify-start text-black text-5xl font-black font-['Inter']">
              YOUR MONEY’S SAFE SPACE
            </div>
            <div className="self-stretch justify-start text-black text-base font-medium font-['Inter']">
              With Revolut Secure, you’re entering a new era of money security -
              where our proactive, pupose-built defences and team of fraud
              specialists help protect every account, 24/7
            </div>
          </div>
          <div className="px-6 py-3 bg-black rounded-[30px] inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-base font-medium font-['Inter']">
              Learn more
            </div>
          </div>
        </div>
        <div className="w-120 h-full flex justify-center items-center ">
          <video
            src="/portfolio/revolutclone/content/your-money-save-space.mp4"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
      </div>
    </section>
  );
}
