// import { LinkProps, default as NextLink } from "next/link";
// import { AnchorHTMLAttributes } from "react";

// type Props = { className?: string } & LinkProps &
//   AnchorHTMLAttributes<HTMLAnchorElement>;

// export default function Link({ className: cn, href, ...rest }: Props) {
//   return (
//     <NextLink
//       href={href}
//       className={` underline hover:text-blue-500 ${cn}`}
//       {...rest}
//     ></NextLink>
//   );
// }

export default function Link({
  className: cn,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span className={`underline hover:text-blue-600 cursor-pointer ${cn}`}>
      {children}
    </span>
  );
}

export function LinkWhite({
  className: cn,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span className={`underline hover:text-[#bdc5cc] cursor-pointer ${cn}`}>
      {children}
    </span>
  );
}
