import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function ContactCTA() {
  return (
    <Reveal>
      <section id="contact" className="sec">
        <div className="grid grid-cols-1 items-start gap-16 rounded-3xl border border-line bg-white p-8 sm:grid-cols-2 sm:p-14">
          <div>
            <div className="lb mb-4">Get In Touch</div>
            <h2 className="h2">Let&apos;s build something meaningful together.</h2>
            <p className="body-copy">
              Have a project in mind or want to explore how we can help your business grow?
              Let&apos;s talk.
            </p>
          </div>
          <div className="flex flex-col gap-[26px]">
            <div>
              <div className="lb mb-2.5">Email</div>
              <div className="text-[17px] font-medium">hello@undasolutions.com</div>
            </div>
            <div>
              <div className="lb mb-2.5">Phone</div>
              <div className="text-[17px] font-medium">+234 800 000 0000</div>
            </div>
            <Link href="/contact" className="btn-primary w-fit">
              Book a Discovery Call <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
