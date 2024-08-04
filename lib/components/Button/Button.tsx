import type { ButtonProps } from "./button.types";

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <button type={type} className="bg-purple-500 text-white py-3 px-4 rounded-full">
      {children}
    </button>
  );
};
