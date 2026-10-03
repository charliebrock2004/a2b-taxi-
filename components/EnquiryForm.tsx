"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { emptyEnquiry, validateEnquiry, type Enquiry, type Errors } from "@/lib/enquiry";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "not_configured" | "failed";

export function EnquiryForm({ enabled }: { enabled: boolean }) {
  const [values, setValues] = useState<Enquiry>(emptyEnquiry);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [website, setWebsite] = useState(""); // honeypot
  const startedAt = useRef(0);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    // Links such as /contact?service=Port+transfer pre-fill the notes field.
    const service = new URLSearchParams(window.location.search).get("service");
    if (service) setValues((v) => ({ ...v, notes: `Enquiry about: ${service.slice(0, 80)}\n` }));
  }, []);

  const set = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => setValues((v) => ({ ...v, [key]: value }));

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const found = validateEnquiry(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website, elapsed: Date.now() - startedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.code === "ok") setStatus("sent");
      else if (data.code === "invalid" && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
      } else setStatus(data.code === "not_configured" ? "not_configured" : "failed");
    } catch {
      setStatus("failed");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "sent") {
    return (
      <div className="notice" role="status" tabIndex={-1} ref={statusRef}>
        <strong>Journey request sent</strong>
        Thank you, {values.name.split(" ")[0]}. Your request has gone to A2B and we will be in touch to confirm. Your journey is not booked
        until we have confirmed it with you. If it is urgent, call <a className="textlink" href={site.phoneHref}>{site.phoneDisplay}</a>.
      </div>
    );
  }

  const field = (
    key: Exclude<keyof Enquiry, "returnJourney">,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement> & { optional?: boolean; full?: boolean } = {},
  ) => {
    const { optional, full, ...input } = props;
    return (
      <div className={`field ${full ? "full" : ""}`}>
        <label htmlFor={`f-${key}`}>
          {label} {optional && <span className="opt">(optional)</span>}
        </label>
        <input
          id={`f-${key}`}
          name={key}
          value={values[key]}
          onChange={(e) => set(key, e.target.value)}
          required={!optional}
          aria-invalid={errors[key] ? true : undefined}
          aria-describedby={errors[key] ? `e-${key}` : undefined}
          {...input}
        />
        {errors[key] && (
          <p className="err" id={`e-${key}`}>
            {errors[key]}
          </p>
        )}
      </div>
    );
  };

  return (
    <>
      {!enabled && (
        <div className="notice">
          <strong>Please book by phone for now</strong>
          Online journey requests are not switched on yet, so this form cannot send. Call{" "}
          <a className="textlink" href={site.phoneHref}>{site.phoneDisplay}</a> and we will arrange your journey.
        </div>
      )}
      <form className="form" onSubmit={onSubmit} noValidate ref={formRef} aria-describedby="form-foot">
        {field("name", "Full name", { autoComplete: "name" })}
        {field("phone", "Telephone number", { type: "tel", inputMode: "tel", autoComplete: "tel" })}
        {field("email", "Email address", { type: "email", inputMode: "email", autoComplete: "email", optional: true, full: true })}
        {field("pickup", "Pick-up location", { placeholder: "Address, town or airport", autoComplete: "off" })}
        {field("destination", "Destination", { placeholder: "Address, town or airport", autoComplete: "off" })}
        {field("date", "Journey date", { type: "date", min: new Date().toISOString().slice(0, 10) })}
        {field("time", "Preferred pick-up time", { type: "time" })}
        {field("passengers", "Number of passengers", { type: "number", inputMode: "numeric", min: 1, max: 99 })}
        <div className="field" style={{ alignSelf: "end" }}>
          <label className="check" htmlFor="f-returnJourney" style={{ marginBottom: 0 }}>
            <input id="f-returnJourney" type="checkbox" checked={values.returnJourney} onChange={(e) => set("returnJourney", e.target.checked)} />
            I also need a return journey
          </label>
        </div>
        {values.returnJourney &&
          field("returnDetails", "Return date and time", { optional: true, full: true, placeholder: "For example: Sunday 14th, flight lands 18:40" })}
        <div className="field full">
          <label htmlFor="f-notes">
            Additional information <span className="opt">(optional)</span>
          </label>
          <textarea
            id="f-notes"
            name="notes"
            value={values.notes}
            onChange={(e) => set("notes", e.target.value)}
            placeholder="Flight or train number, luggage, anything else we should know"
            aria-invalid={errors.notes ? true : undefined}
            aria-describedby={errors.notes ? "e-notes" : undefined}
          />
          {errors.notes && <p className="err" id="e-notes">{errors.notes}</p>}
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="f-website">Leave this field empty</label>
          <input id="f-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div className="full">
          <button type="submit" className="btn btn-silver" disabled={status === "sending"}>
            {status === "sending" ? "Sending request…" : "Request a journey"}
          </button>
        </div>
        <p className="form-foot full" id="form-foot">
          A request is not a confirmed booking. We will contact you to confirm. See our <a className="textlink" href="/privacy">privacy notice</a>.
        </p>
      </form>
      {(status === "not_configured" || status === "failed") && (
        <div className="notice" role="alert" tabIndex={-1} ref={statusRef}>
          <strong>Your request was not sent</strong>
          {status === "not_configured"
            ? "Online journey requests are not switched on yet. "
            : "Something went wrong on our side and the request did not reach us. "}
          Nothing has been booked. Call <a className="textlink" href={site.phoneHref}>{site.phoneDisplay}</a> to arrange your journey.
        </div>
      )}
    </>
  );
}
