import type { SwitchProps } from "./switch.types";
import clsx from "clsx";

export const Switch = ({ checked = false, onChange }: SwitchProps) => {
  return (
    <>
      <button
        type="button"
        aria-label="Toggle switch"
        onClick={() => onChange(!checked)}
        className={`group relative inline-flex w-16 p-1 items-center rounded-full bg-transparent border-4 border-white`}
      >
        <span
          className={clsx(
            "inline-block size-6 transform rounded-full bg-white transition-transform",
            !checked ? "translate-x-0" : "translate-x-6"
          )}
          aria-hidden="true"
        />
      </button>
    </>
  );
};
