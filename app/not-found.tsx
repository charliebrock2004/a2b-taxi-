import Link from "next/link";
import { CallButton } from "@/components/CallButton";

export default function NotFound() {
  return (
    <section className="band">
      <div className="wrap">
        <h1 className="display d2">This page has moved on</h1>
        <p className="lede" style={{ margin: "24px 0 36px" }}>The address you followed does not exist. Start again from the homepage, or call to book.</p>
        <div className="btns">
          <CallButton />
          <Link href="/" className="btn btn-line">Go to homepage</Link>
        </div>
      </div>
    </section>
  );
}
