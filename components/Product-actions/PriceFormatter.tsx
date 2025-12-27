import { twMerge } from "tailwind-merge";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount = 0, className }: Props) => {
  const formattedPrice = amount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <span
      className={twMerge("text-sm font-semibold text-darkColor", className)}
    >
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;
