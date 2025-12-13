"use client";
import * as React from "react";

// Forbid passing onClick from server components
type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  confirmText?: string;
};

export default function ConfirmButton({ confirmText, ...rest }: Props) {
  return (
    <button
      {...rest}
      onClick={(e) => {
        if (confirmText && !window.confirm(confirmText)) {
          e.preventDefault();
        }
      }}
    />
  );
}
