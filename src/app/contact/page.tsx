import type { Metadata } from "next";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: "Inquire | Clover Mobile Bar Co.",
  description:
    "Tell me about your event and I'll send a personalized quote within 24 to 48 hours. Clover Mobile Bar Co., mobile bartending across New England.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Section 1: Page hero ─── */}
      <section data-bg="light" className="bg-white pt-24 md:pt-30 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Inquire
          </span>
          <h1 className="mt-4 font-display font-normal text-[30px] leading-[1.1] text-ink md:text-[44px]">
            Tell me about your event.
          </h1>
          <p className="mt-6 max-w-[560px] font-body text-[17px] leading-[1.6] text-ink/85">
            Fill out the form below and I&rsquo;ll send a personalized quote
            within 24 to 48 hours. If you&rsquo;d rather reach out directly, my
            email is below.
          </p>
        </div>
      </section>

      {/* ─── Section 2: Form + supporting info ─── */}
      <section data-bg="light" className="bg-white pb-24 md:pb-30">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row md:items-start gap-16 md:gap-20">
          {/* Left column: form */}
          <div className="md:w-[60%]">
            <InquiryForm />
          </div>

          {/* Right column: supporting info */}
          <div className="md:w-[35%] flex flex-col gap-8">
            <div>
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
                Email
              </span>
              <p className="mt-2">
                <a
                  href="mailto:cloverbarco@gmail.com"
                  className="font-body text-base text-ink transition-colors duration-150 hover:text-clover"
                >
                  cloverbarco@gmail.com
                </a>
              </p>
            </div>

            <div>
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
                Instagram
              </span>
              <p className="mt-2">
                <a
                  href="https://instagram.com/cloverbarco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-ink transition-colors duration-150 hover:text-clover"
                >
                  @cloverbarco
                </a>
              </p>
            </div>

            <div>
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
                Service area
              </span>
              <p className="mt-2 font-body text-base text-ink">
                Based in New Hampshire. Serving New England.
              </p>
            </div>

            <div>
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
                Response time
              </span>
              <p className="mt-2 font-body text-base text-ink">
                Within 24 to 48 hours.
              </p>
            </div>

            <div>
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
                What happens next
              </span>
              <ol className="mt-3 flex flex-col gap-2">
                <li className="font-body text-sm text-ink/75 leading-[1.5]">
                  1. You send this form.
                </li>
                <li className="font-body text-sm text-ink/75 leading-[1.5]">
                  2. I reply with a custom quote.
                </li>
                <li className="font-body text-sm text-ink/75 leading-[1.5]">
                  3. Contract, deposit, then your event.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Final note ─── */}
      <section data-bg="light" className="bg-white pb-24 md:pb-30">
        <div className="mx-auto max-w-[640px] px-5 md:px-10">
          <p className="font-display italic font-normal text-lg leading-[1.4] text-ink/80 md:text-[22px]">
            Every event I book is personal. I read every inquiry myself.
          </p>
        </div>
      </section>
    </>
  );
}
