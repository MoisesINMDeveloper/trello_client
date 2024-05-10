const Button = ({
  className,
  text,
  type,
}: {
  className?: string;
  text: string;
  type: "submit" | "reset" | "button";
}) => {
  return (
    <button
      className={`bg-black text-3xl font-semibold text-white w-[80vw] h-14 rounded-full ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};
export default Button;
