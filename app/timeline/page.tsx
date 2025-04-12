import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Users, Award } from "lucide-react"
import Link from "next/link"

export default function TimelinePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Event Timeline</h1>
            <p className="mt-4 text-xl text-muted-foreground">Mark your calendar for these important dates</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-pink-500 via-violet-500 to-pink-500"></div>

            <div className="space-y-12 relative">
              {/* Event 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 4th, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold">Opening Ceremony & Registration</h3>
                    <p className="text-muted-foreground">
                      Submission for all Mini Events and the Registration for the Hackathon Starts
                    </p>
                  </div>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-1/2 md:left-0 top-1/2 transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center z-10">
                    <div className="bg-background rounded-full p-2">
                      <Calendar className="h-5 w-5 text-pink-500" />
                    </div>
                  </div>
                  <Card className="md:ml-8">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">10:00 AM - 12:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">All participants</span>
                        </div>
                        <p>
                          Join us for the grand opening ceremony where we'll introduce the tracks, judges, and mentors.
                          Registration for the hackathon will officially open.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Event 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute left-1/2 md:right-0 top-1/2 transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center z-10">
                    <div className="bg-background rounded-full p-2">
                      <Calendar className="h-5 w-5 text-violet-500" />
                    </div>
                  </div>
                  <Card className="md:mr-8">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">9:00 AM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Registered teams</span>
                        </div>
                        <p>
                          The hacking period officially begins! Teams will start working on their projects based on the
                          chosen track. Get ready to code, create, and innovate!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 8th, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold">Hacking Period Starts!</h3>
                    <p className="text-muted-foreground">Get ready to code, create, and innovate!</p>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 12th, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold">Hacking Period Ends</h3>
                    <p className="text-muted-foreground">
                      Make sure to wrap up your projects and prepare for submission.
                    </p>
                  </div>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-1/2 md:left-0 top-1/2 transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center z-10">
                    <div className="bg-background rounded-full p-2">
                      <Calendar className="h-5 w-5 text-pink-500" />
                    </div>
                  </div>
                  <Card className="md:ml-8">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">6:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">All participating teams</span>
                        </div>
                        <p>
                          The hacking period comes to an end. All teams must submit their projects by this deadline.
                          Make sure your code is clean, your demo is ready, and your presentation is prepared.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Event 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute left-1/2 md:right-0 top-1/2 transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center z-10">
                    <div className="bg-background rounded-full p-2">
                      <Calendar className="h-5 w-5 text-violet-500" />
                    </div>
                  </div>
                  <Card className="md:mr-8">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">10:00 AM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">All teams</span>
                        </div>
                        <p>
                          Expert mentors will provide feedback on submitted projects. This is a valuable opportunity to
                          receive insights and suggestions for improvement from industry professionals.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 13th, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold">Mentorship Round Starts</h3>
                    <p className="text-muted-foreground">
                      Providing mentorship and feedback for every submitted project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 15th, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold">Closing Ceremony & Awards</h3>
                    <p className="text-muted-foreground">Celebration of achievements and announcement of winners</p>
                  </div>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-1/2 md:left-0 top-1/2 transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center z-10">
                    <div className="bg-background rounded-full p-2">
                      <Award className="h-5 w-5 text-pink-500" />
                    </div>
                  </div>
                  <Card className="md:ml-8">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">4:00 PM - 7:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">All participants</span>
                        </div>
                        <p>
                          Join us for the grand finale where we'll announce the winners of each track, distribute
                          prizes, and celebrate everyone's achievements. This will be followed by a networking session.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to participate?</h2>
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
                <Button size="lg" variant="outline" asChild>
                  <Link href="/events">
                    View Events
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
