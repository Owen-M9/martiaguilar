"use client";

import { useId, useRef, useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/Button";
import { subscribeToEbook } from "@/lib/subscribeToEbook";

type Status = "idle" | "sending" | "success";

export default function EbookForm() {
  const emailId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Después del await, e.currentTarget queda en null.
    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;

    clearTimeout(resetTimer.current);
    setStatus("sending");
    await subscribeToEbook(email);
    form.reset();
    setStatus("success");
    resetTimer.current = setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex w-full flex-wrap gap-2.5">
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
        <Button
          variant={status === "success" ? "success" : "primary"}
          type="submit"
          disabled={status === "sending"}
          className="min-w-45"
        >
          {status === "idle" && "Quiero mi guía"}
          {status === "sending" && "Enviando…"}
          {status === "success" && (
            <span className="inline-flex items-center gap-1.5 align-top">
              <Check size={18} strokeWidth={3} aria-hidden />
              ¡Listo!
            </span>
          )}
        </Button>
      </form>
      <p aria-live="polite" className="mt-2.5 min-h-5 text-sm text-wine">
        {status === "success" && "¡Anotado! Revisá tu mail."}
      </p>
    </div>
  );
}
