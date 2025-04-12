import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, MessageSquare, DiscIcon as Discord } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-xl text-muted-foreground">Get in touch with the Devcation'25 team</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about Devcation'25? Fill out the form and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter subject" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                </div>

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">dscigdtuw@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">
                        Indira Gandhi Delhi Technical University for Women, New Delhi
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Discord className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Discord</h3>
                      <p className="text-muted-foreground mb-2">Join our Discord server for real-time communication</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">Join Discord</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">
                        Join our WhatsApp group for updates and announcements
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">Join WhatsApp</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
