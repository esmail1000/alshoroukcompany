"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

type QuoteContent = {
  fields: {
    name: string;
    phone: string;
    product: string;
    quantity: string;
    location: string;
    message: string;
  };
  placeholders: {
    name: string;
    phone: string;
    product: string;
    quantity: string;
    location: string;
    message: string;
  };
  submit: string;
  success: string;
  error: string;
};

type QuoteFormProps = {
  locale: Locale;
  quote: QuoteContent;
  products: string[];
};

export default function QuoteForm({ locale, quote, products }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      // API جاهز للتطوير لاحقًا للإرسال بالبريد أو التخزين في قاعدة بيانات
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Request failed");

      const lines =
        locale === "ar"
          ? [
              "طلب عرض سعر جديد من موقع الشروق",
              "",
              `الاسم: ${payload.name}`,
              `الهاتف: ${payload.phone}`,
              `المنتج: ${payload.product}`,
              `الكمية: ${payload.quantity}`,
              `مكان التوريد: ${payload.location}`,
              `رسالة: ${payload.message || "لا يوجد"}`
            ]
          : [
              "New quote request from Alshorouk website",
              "",
              `Name: ${payload.name}`,
              `Phone: ${payload.phone}`,
              `Product: ${payload.product}`,
              `Quantity: ${payload.quantity}`,
              `Delivery Location: ${payload.location}`,
              `Message: ${payload.message || "N/A"}`
            ];

      const whatsappText = encodeURIComponent(lines.join("\n"));
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappText}`, "_blank");
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-card md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="name">
            {quote.fields.name}
          </label>
          <input id="name" name="name" required className="form-input" placeholder={quote.placeholders.name} />
        </div>
        <div>
          <label className="form-label" htmlFor="phone">
            {quote.fields.phone}
          </label>
          <input id="phone" name="phone" required className="form-input" placeholder={quote.placeholders.phone} />
        </div>
        <div>
          <label className="form-label" htmlFor="product">
            {quote.fields.product}
          </label>
          <select id="product" name="product" required className="form-input">
            <option value="">{quote.placeholders.product}</option>
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="quantity">
            {quote.fields.quantity}
          </label>
          <input id="quantity" name="quantity" required className="form-input" placeholder={quote.placeholders.quantity} />
        </div>
        <div className="md:col-span-2">
          <label className="form-label" htmlFor="location">
            {quote.fields.location}
          </label>
          <input id="location" name="location" required className="form-input" placeholder={quote.placeholders.location} />
        </div>
        <div className="md:col-span-2">
          <label className="form-label" htmlFor="message">
            {quote.fields.message}
          </label>
          <textarea id="message" name="message" rows={5} className="form-input resize-none" placeholder={quote.placeholders.message} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-2xl bg-brand-brick px-6 py-4 text-sm font-black text-white shadow-lg shadow-brand-brick/20 transition hover:bg-brand-orange disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "..." : quote.submit}
      </button>

      {status === "success" && <p className="mt-4 text-sm font-bold text-green-700">{quote.success}</p>}
      {status === "error" && <p className="mt-4 text-sm font-bold text-red-700">{quote.error}</p>}
    </form>
  );
}
