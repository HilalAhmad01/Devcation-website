import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Gift, Medal, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PrizesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Prizes & Rewards</h1>
            <p className="mt-4 text-xl text-muted-foreground">Exciting prizes await the winners and participants</p>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Prize Category 1 */}
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-amber-600"></div>
              <CardContent className="p-6 pt-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-yellow-500/10">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold">Hack & Solve Winners</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      Cash Prize with swag kits
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      Medals & certificates
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      Social media shoutouts
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      Interview Buddy Mock Interviews
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      Codecrafter Membership
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      Unstop Coupons
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prize Category 2 */}
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <div className="h-2 bg-gradient-to-r from-violet-500 to-purple-600"></div>
              <CardContent className="p-6 pt-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-violet-500/10">
                    <Gift className="h-8 w-8 text-violet-500" />
                  </div>
                  <h3 className="text-xl font-bold">Mini Event Winners</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                      Goodies
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                      Certificates
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                      Social media shoutouts
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                      Unstop coupons
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prize Category 3 */}
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
              <CardContent className="p-6 pt-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-blue-500/10">
                    <Medal className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">All Finalists</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Exciting goodies
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Certificates
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Unstop coupons
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prize Category 4 */}
            <Card className="overflow-hidden border-0 bg-gradient-to-b from-background to-background/80 shadow-md">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-rose-600"></div>
              <CardContent className="p-6 pt-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-pink-500/10">
                    <Award className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold">All Participants</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                      Certificates
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                      50% unstop coupons
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                      Exclusive discount vouchers from IB
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Perks Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Additional Perks</h2>
            <p className="mt-4 text-muted-foreground">
              Beyond the prizes, participants will gain valuable experience and opportunities
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-2 w-fit rounded-full bg-pink-500/10">
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
                      className="h-5 w-5 text-pink-500"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Learning Opportunities</h3>
                  <p className="text-muted-foreground">
                    Gain hands-on experience with cutting-edge technologies and learn from industry experts through
                    workshops and mentorship.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-2 w-fit rounded-full bg-violet-500/10">
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
                      className="h-5 w-5 text-violet-500"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Networking</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded individuals, industry professionals, and potential employers or
                    collaborators.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-2 w-fit rounded-full bg-pink-500/10">
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
                      className="h-5 w-5 text-pink-500"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Portfolio Enhancement</h3>
                  <p className="text-muted-foreground">
                    Add your hackathon project to your portfolio to showcase your skills and creativity to future
                    employers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg border bg-background p-8 md:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to win amazing prizes?</h2>
              <p className="mt-4 text-muted-foreground">
                Register now to participate in Devcation'25 and get a chance to win these exciting prizes!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
                >
                  Register Now
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/sponsors">
                    View Sponsors
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
