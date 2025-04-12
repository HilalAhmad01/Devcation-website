import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, Award, Code, Lightbulb, Presentation, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Events</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Participate in these exciting events during Devcation'25
            </p>
          </div>
        </div>
      </section>

      {/* Main Events Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Event 1: Main Hackathon */}
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 text-pink-500/70" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-none">Main Event</Badge>
                  <h2 className="text-2xl font-bold">Devcation'25 Hackathon</h2>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>April 8-12, 2025</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Teams of 2-4 participants</span>
                  </div>

                  <p className="text-muted-foreground">
                    Our flagship hackathon where teams compete to build innovative solutions across multiple tracks:
                    HealthTech, EdTech, Sustainable Development, and FinTech.
                  </p>

                  <div className="flex items-center gap-2 text-amber-400">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Cash prizes, swag kits, certificates, and more!</span>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event 2: Tech Workshops */}
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lightbulb className="h-16 w-16 text-violet-500/70" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Badge className="bg-violet-500/10 text-violet-500 hover:bg-violet-500/20 border-none">
                    Learning
                  </Badge>
                  <h2 className="text-2xl font-bold">Tech Workshops</h2>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>Throughout the week</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Open to all participants</span>
                  </div>

                  <p className="text-muted-foreground">
                    Learn from industry experts through hands-on workshops covering the latest technologies, development
                    practices, and career insights.
                  </p>

                  <div className="flex items-center gap-2 text-amber-400">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Certificates of participation</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event 3: Code Sprint */}
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 text-blue-500/70" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-none">Competition</Badge>
                  <h2 className="text-2xl font-bold">Code Sprint</h2>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>April 6, 2025</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Individual participants</span>
                  </div>

                  <p className="text-muted-foreground">
                    A fast-paced coding competition to solve algorithmic challenges in a limited time. Test your
                    problem-solving skills and coding speed.
                  </p>

                  <div className="flex items-center gap-2 text-amber-400">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Exciting goodies and certificates</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event 4: Tech Talks */}
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Presentation className="h-16 w-16 text-cyan-500/70" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-none">Inspiration</Badge>
                  <h2 className="text-2xl font-bold">Tech Talks</h2>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>April 5 & 10, 2025</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Open to all</span>
                  </div>

                  <p className="text-muted-foreground">
                    Listen to inspiring speakers share their experiences and insights in tech. Learn about the latest
                    trends, career opportunities, and success stories.
                  </p>

                  <div className="flex items-center gap-2 text-amber-400">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Networking opportunities</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Speakers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg border bg-background p-8 md:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to participate?</h2>
              <p className="mt-4 text-muted-foreground">
                Register now to secure your spot in these exciting events and be part of Devcation'25!
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
