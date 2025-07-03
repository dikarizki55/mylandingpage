"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Kalau URL di-refresh & pathname hanya '/products/1'
    // Tanpa halaman utama '/products' di 'children'
    if (pathname === `/products/${params.id}`) {
      // Bisa redirect ke '/'
      router.replace("/");
    }
  }, [pathname, params.id, router]);

  return (
    <div className=" text-white">
      in modal <Link href="/">backdrop</Link>
    </div>
  );
};

export default page;
