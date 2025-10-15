export default function Price({
  price,
  discount,
  textSize,
  gap = 8,
  className,
}: {
  price: number;
  discount: number;
  textSize: number;
  gap?: number;
  className?: string;
}) {
  return (
    <div style={{ gap: gap }} className={`flex items-center ${className}`}>
      {discount === 0 && (
        <h2 style={{ fontSize: textSize }} className=" font-bold">
          ${price}
        </h2>
      )}
      {discount !== 0 && (
        <>
          <h2 style={{ fontSize: textSize }} className=" font-bold">
            ${parseFloat(((1 - discount) * price).toFixed(2))}
          </h2>
          <h2
            style={{ fontSize: textSize }}
            className=" font-bold line-through decoration-[#999999] text-[#999999]"
          >
            ${price}
          </h2>
          <span
            style={{ fontSize: textSize * 0.58 }}
            className=" px-3 py-1.5 rounded-full bg-[#ff3333]/10 text-[#ff3333]"
          >
            -{discount * 100}%
          </span>
        </>
      )}
    </div>
  );
}
