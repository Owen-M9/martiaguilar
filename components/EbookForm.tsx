"use client";

import { useId } from "react";
import Button from "@/components/Button";

export default function EbookForm() {
  const emailId = useId();

  return (
    <form className="flex w-full flex-wrap gap-2.5">
      <label htmlFor={emailId} className="sr-only">
        Tu mail
      </label>
      <input
        id={emailId}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="tu@mail.com"
        className="w-full max-w-80 rounded-full border-3 border-wine bg-white px-4.5 py-3.5 text-sm text-wine placeholder:text-smoke"
      />
      {/* type="button" a propósito: el formulario todavía no envía. */}
      <Button variant="primary" type="button">
        Quiero mi guía
      </Button>
    </form>
  );
}
