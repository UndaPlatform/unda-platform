"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

// Drafted, honest, non-committal answers — no specific pricing/policy stated
// as fact. Meant to be edited once the user confirms real answers.
const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. Most engagements run a few weeks to a few months, and we'll give you a clear estimate after our first call.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. We work with teams at every stage, from pre-seed founders validating an idea to established teams scaling a product.",
  },
  {
    question: "What's included in a project?",
    answer:
      "Every engagement is scoped to your needs, from a single deliverable to the full arc from strategy to shipped product. See our Services page for a breakdown.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through our contact page with a bit about your project. We typically reply within one business day.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Many of our engagements continue past launch. We can talk through ongoing support once we understand what you need.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-border-default border-t py-1200">
      <Container>
        <Reveal>
          <span className="text-brand-accent-text text-caption uppercase">FAQ</span>
          <h2 className="mt-150 max-w-xl font-display text-h2 text-text-primary">
            Questions we hear a lot
          </h2>
        </Reveal>

        <ul className="mt-600 border-border-default border-t">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal as="li" index={i} key={faq.question}>
                <div className="border-border-default border-b">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-300 py-400 text-left"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    <span className="text-h4 text-text-primary">{faq.question}</span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-text-primary">
                      {open ? (
                        <Minus className="size-4" aria-hidden="true" />
                      ) : (
                        <Plus className="size-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  {open && (
                    <div id={`faq-panel-${i}`} className="max-w-2xl pb-400">
                      <p className="text-body-lg text-text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
