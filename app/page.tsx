import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Code, Award, Calendar, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,_#4f4f4f2e_1px,_transparent_1px),_linear-gradient(to_bottom,_#4f4f4f2e_1px,_transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="container py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                April 4-13, 2025
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                  Devcation&apos;25
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A week-long technical festival celebrating diversity in the TechForGood domain
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
                >
                  <Link href="https://unstop.com/college-fests/devcation25-gdg-on-campus-igdtuw-indira-gandhi-delhi-technical-university-for-women-igdtuw-delhi-368807">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur-3xl opacity-20"></div>
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src="https://devcation-2025.vercel.app/hero1.jpeg"
                  width={400}
                  height={400}
                  alt="Devcation'25 Logo"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <Card className="border-none bg-background/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Star className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-3xl font-bold">4.6/5+</h3>
                <p className="text-sm text-muted-foreground">Hacker rating</p>
              </CardContent>
            </Card>

            <Card className="border-none bg-background/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Code className="h-8 w-8 text-violet-500" />
                </div>
                <h3 className="text-3xl font-bold">300+</h3>
                <p className="text-sm text-muted-foreground">Hacks</p>
              </CardContent>
            </Card>

            <Card className="border-none bg-background/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-sm text-muted-foreground">Speakers and mentors</p>
              </CardContent>
            </Card>

            <Card className="border-none bg-background/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-8 w-8 text-violet-500" />
                </div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-sm text-muted-foreground">Hackers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracks Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hackathon Tracks</h2>
            <p className="mt-4 text-muted-foreground">Choose your area of interest and create impactful solutions</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-pink-500/10 text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">HealthTech</h3>
                <p className="mt-2 text-sm text-muted-foreground">Innovative solutions for healthcare challenges</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-violet-500/10 text-violet-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">EdTech</h3>
                <p className="mt-2 text-sm text-muted-foreground">Transforming education through technology</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-pink-500/10 text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 22a8 8 0 0 1 8-8h12a8 8 0 0 1-8 8z"></path>
                    <path d="M12 11V2a5 5 0 0 0-5 5"></path>
                    <path d="M17 11V2a5 5 0 0 1 5 5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Sustainable Development</h3>
                <p className="mt-2 text-sm text-muted-foreground">Tech solutions for environmental challenges</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-violet-500/10 text-violet-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2v20"></path>
                    <path d="M12 12h8.4"></path>
                    <path d="m8.5 8.5 7 7"></path>
                    <path d="m8.5 15.5 7-7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">FinTech</h3>
                <p className="mt-2 text-sm text-muted-foreground">Revolutionizing financial services</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="#">
                View All Tracks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Dates</h2>
            <p className="mt-4 text-muted-foreground">Mark your calendar for these important events</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="overflow-hidden border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-pink-500/10 text-pink-500">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Opening Ceremony & Registration</h3>
                    <p className="text-sm text-muted-foreground">April 4th, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-l-4 border-l-violet-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-violet-500/10 text-violet-500">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Hacking Period Starts</h3>
                    <p className="text-sm text-muted-foreground">April 8th, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-pink-500/10 text-pink-500">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Hacking Period Ends</h3>
                    <p className="text-sm text-muted-foreground">April 12th, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-l-4 border-l-violet-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-violet-500/10 text-violet-500">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mentorship Round Starts</h3>
                    <p className="text-sm text-muted-foreground">April 13th, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/timeline">
                View Full Timeline
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Judges & Mentors Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Judges & Mentors</h2>
            <p className="mt-4 text-muted-foreground">Meet the experts who will guide and evaluate your projects</p>
          </div>

          {/* Judges */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Judges</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="https://devcation-2025.vercel.app/Kartik.jpeg" alt="Judge 1" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg">Kartik Mathur</h4>
                  <p className="text-sm text-muted-foreground">Founding Member @Coding Blocks</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="https://devcation-2025.vercel.app/vani.jpeg" alt="Judge 2" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg">Vani Chitkara</h4>
                  <p className="text-sm text-muted-foreground">Software Engineer @Palo Alto</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="https://devcation-2025.vercel.app/aarnav.jpg" alt="Judge 3" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg">Aarnav Jindal</h4>
                  <p className="text-sm text-muted-foreground">Founder @Codess.cafe</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mentors */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Mentors</h3>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="https://devcation-2025.vercel.app/mentors/RadhikaBansal_Devcation.jpeg"
                    alt="Radhika Bansal"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Radhika Bansal</h4>
                    <Link
                      href="https://www.linkedin.com/in/radhika403/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="https://devcation-2025.vercel.app/mentors/SanidhyaGoel.jpeg"
                    alt="Sanidhya Goel"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Sanidhya Goel</h4>
                    <Link
                      href="https://www.linkedin.com/in/sanidhyagoel18/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="https://devcation-2025.vercel.app/mentors/TejaswiTyagi_Mentor.jpg"
                    alt="Tejaswi Tyagi"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Tejaswi Tyagi</h4>
                    <Link
                      href="https://www.linkedin.com/in/tejaswi-tyagi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="https://devcation-2025.vercel.app/mentors/AkankshaJha_Mentor.jpg" alt="Akanksha Jha" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Akanksha Jha</h4>
                    <Link
                      href="https://www.linkedin.com/in/akanksha-jha-8609a422a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg border bg-background p-8 md:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to join Devcation&apos;25?</h2>
              <p className="mt-4 text-muted-foreground">
                Register now to secure your spot in this exciting week-long technical festival and hackathon.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
                >
                  <Link href="https://unstop.com/college-fests/devcation25-gdg-on-campus-igdtuw-indira-gandhi-delhi-technical-university-for-women-igdtuw-delhi-368807">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
