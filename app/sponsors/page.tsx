import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SponsorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Sponsors</h1>
            <p className="mt-4 text-xl text-muted-foreground">Meet the organizations that make Devcation'25 possible</p>
          </div>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Platinum Sponsors</h2>
            <p className="mt-4 text-muted-foreground">Our primary partners who make this event possible</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="relative h-24 w-full">
                  <Image src="https://devcation-2025.vercel.app/sponsors/rcigdtuw.jpg" alt="Rotaract" fill className="object-contain" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Rotaract</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="relative h-24 w-full">
                  <Image src="https://devcation-2025.vercel.app/unstop.jpg" alt="Unstop" fill className="object-contain" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Unstop</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="relative h-24 w-full">
                  <Image
                    src="https://devcation-2025.vercel.app/geekroom.jpg"
                    alt="Geek Room"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">Geek Room</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Gold Sponsors</h2>
            <p className="mt-4 text-muted-foreground">Key supporters of our hackathon</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="relative h-24 w-full">
                  <Image src="https://devcation-2025.vercel.app/sprint.jpg" alt="Sprint" fill className="object-contain" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Sprint</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="relative h-24 w-full">
                  <Image
                    src="https://devcation-2025.vercel.app/sponsors/interview_buddy.png"
                    alt="Interview Buddy"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">Interview Buddy</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="relative h-24 w-full">
                  <Image src="https://devcation-2025.vercel.app/codecrafters.jpg" alt="CodeDev" fill className="object-contain" />
                </div>
                <h3 className="mt-4 text-xl font-bold">CodeDev</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg border bg-background p-8 md:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Become a Sponsor</h2>
              <p className="mt-4 text-muted-foreground">
                Interested in sponsoring Devcation'25? Partner with us to connect with talented developers and showcase
                your brand.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/sponsorship-deck.pdf">Download Sponsorship Deck</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
