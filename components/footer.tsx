import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, DiscIcon as Discord, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Join Our Chapter</h3>
              <p className="text-muted-foreground">Connect with us and stay updated</p>
            </div>

            <div className="flex space-x-4">
              <Link href="https://x.com/gdsc_igdtuw" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.facebook.com/GDSCIGDTUW/" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.linkedin.com/company/dscigdtuw/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/gdsc_igdtuw/#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.youtube.com/@DSCIGDTUW" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Contact us</p>
              <p className="text-sm font-medium">dscigdtuw@gmail.com</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" className="h-9 gap-1">
                <Discord className="h-4 w-4" />
                Join Discord
              </Button>
              <Button variant="outline" size="sm" className="h-9 gap-1">
                <MessageSquare className="h-4 w-4" />
                Join WhatsApp
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Send us a message</h3>
              <p className="text-muted-foreground">We'll get back to you as soon as possible</p>
            </div>

            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Textarea placeholder="Your Message" className="min-h-[100px]" />
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Devcation. All rights reserved.</p>
          <p>Google Developer Groups - Indira Gandhi Delhi Technical University for Women</p>
        </div>
      </div>
    </footer>
  )
}
