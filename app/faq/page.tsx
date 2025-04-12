"use client"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, MessageSquare, DiscIcon as Discord } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      question: "Who can contribute?",
      answer:
        "Anyone with an interest in technology and innovation can participate in Devcation'25. We welcome students, professionals, and enthusiasts from all backgrounds.",
    },
    {
      question: "Where can we reach out in case of queries?",
      answer:
        "You can reach out to us through our Discord server, WhatsApp group, or by sending an email to dscigdtuw@gmail.com. Our team will get back to you as soon as possible.",
    },
    {
      question: "Do I need to have coding experience to participate?",
      answer:
        "While having some coding experience is helpful, it's not mandatory. We have tracks and events suitable for participants with varying levels of technical expertise. You can also join as a designer, project manager, or idea contributor.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer:
        "After the hackathon ends, there will be a mentorship round where experts will provide feedback on your projects. Winners will be announced and prizes will be distributed. All participants will receive certificates and other benefits.",
    },
    {
      question: "How can I stay updated on hackathon announcements and events?",
      answer:
        "Join our Discord server and WhatsApp group to receive real-time updates. You can also follow us on social media platforms like Twitter, Instagram, and LinkedIn for announcements and event details.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation in Devcation'25 is completely free. We believe in making technology and learning accessible to everyone.",
    },
    {
      question: "Can I participate remotely?",
      answer:
        "Yes, we offer both in-person and remote participation options. Remote participants will have access to all workshops, mentorship sessions, and can submit their projects online.",
    },
    {
      question: "What is the team size for the hackathon?",
      answer:
        "Teams can consist of 2-4 members. You can also participate individually, but we encourage team participation for a more collaborative experience.",
    },
    {
      question: "Will there be pre-hackathon workshops or sessions?",
      answer:
        "Yes, we will be conducting pre-hackathon workshops on various technologies and topics to help participants prepare for the hackathon.",
    },
    {
      question: "Can I use existing projects or code?",
      answer:
        "All projects must be developed during the hackathon period. You can use open-source libraries and frameworks, but the core implementation should be done during the event.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-xl text-muted-foreground">Find answers to common questions about Devcation'25</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Still Have Questions?</h2>
            <p className="mt-4 text-muted-foreground">Reach out to us through any of these channels</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            <Card
              icon={<Discord className="h-6 w-6" />}
              title="Join Discord"
              description="Get real-time support and connect with other participants"
              buttonText="Join Server"
              buttonLink="#"
            />

            <Card
              icon={<MessageSquare className="h-6 w-6" />}
              title="Join WhatsApp"
              description="Stay updated with announcements and quick communications"
              buttonText="Join Group"
              buttonLink="#"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or send us an email directly</p>
            <Button asChild>
              <Link href="mailto:dscigdtuw@gmail.com">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function Card({ icon, title, description, buttonText, buttonLink }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button asChild className="mt-2">
          <Link href={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
