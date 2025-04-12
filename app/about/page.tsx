import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, GraduationCap, Leaf, Coins } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Devcation&apos;25</h1>
              <p className="text-xl text-muted-foreground">
                A week-long technical festival celebrating diversity in the TechForGood domain
              </p>
              <div className="space-y-4">
                <p>
                  Devcation is a week-long technical festival organized by Google Developer Groups - Indira Gandhi Delhi
                  Technical University for Women that celebrates diversity in the TechForGood Domain. During the week,
                  we have the Devcation&apos;25 hackathon.
                </p>
                <p>
                  These events are designed to spark your creativity, encourage innovative thinking, and help you craft
                  tech solutions that stand out.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur-3xl opacity-20"></div>
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src="https://devcation-2025.vercel.app/hero1.jpeg"
                  width={400}
                  height={400}
                  alt="About Devcation"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hackathon Tracks</h2>
            <p className="mt-4 text-muted-foreground">Choose your area of interest and create impactful solutions</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="p-3 rounded-full bg-pink-500/10 text-pink-500 mt-1">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">HealthTech</h3>
                  <p className="mt-2 text-muted-foreground">
                    Develop innovative solutions for healthcare challenges. Create applications that improve patient
                    care, medical diagnostics, health monitoring, and wellness tracking.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="p-3 rounded-full bg-violet-500/10 text-violet-500 mt-1">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">EdTech</h3>
                  <p className="mt-2 text-muted-foreground">
                    Transform education through technology. Build platforms that enhance learning experiences, improve
                    accessibility to education, and create innovative teaching tools.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="p-3 rounded-full bg-pink-500/10 text-pink-500 mt-1">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sustainable Development (Open Innovation)</h3>
                  <p className="mt-2 text-muted-foreground">
                    Create tech solutions for environmental challenges. Develop applications that promote
                    sustainability, reduce carbon footprints, and address climate change issues.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="p-3 rounded-full bg-violet-500/10 text-violet-500 mt-1">
                  <Coins className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">FinTech</h3>
                  <p className="mt-2 text-muted-foreground">
                    Revolutionize financial services. Build solutions that improve financial inclusion, simplify
                    transactions, enhance security, and innovate in the financial technology space.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
              <div className="space-y-4">
                <p>
                  At Devcation&apos;25, our mission is to foster innovation and collaboration in the tech community
                  while promoting diversity and inclusion. We believe that diverse perspectives lead to more creative
                  and effective solutions.
                </p>
                <p>
                  Through our hackathon and associated events, we aim to provide a platform for participants to showcase
                  their skills, learn from industry experts, and develop solutions that address real-world challenges.
                </p>
                <p>
                  We are committed to creating an environment where everyone feels welcome and empowered to contribute,
                  regardless of their background or experience level.
                </p>
              </div>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Get Involved
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur-3xl opacity-20"></div>
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src="https://devcation-2025.vercel.app/header.png"
                  width={400}
                  height={400}
                  alt="Our Mission"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg border bg-background p-8 md:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Us at Devcation&apos;25</h2>
              <p className="mt-4 text-muted-foreground">
                Be part of this exciting journey of learning, collaboration, and innovation. Register now to secure your
                spot!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
                >
                  <Link href="https://unstop.com/college-fests/devcation25-gdg-on-campus-igdtuw-indira-gandhi-delhi-technical-university-for-women-igdtuw-delhi-368807">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/timeline">
                    View Timeline
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
