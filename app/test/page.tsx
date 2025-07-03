import Link from "next/link";

const page = () => {
  return (
    <div>
      coba{" "}
      <Link href="/test/beda" className=" text-white">
        Test
      </Link>
    </div>
  );
};

export default page;
