'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Flower, Zap, Brain, Users } from "lucide-react"
import Link from "next/link"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bloom with <span className="text-purple-600">Awesome</span> Prompts
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Cultivate your creativity and watch your ideas flourish. With vistoria.dev, craft prompts as beautiful as wisteria in full bloom.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Start Growing</Button>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-100">Watch Demo</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-800">Why vistoria.dev?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-purple-200">
                <CardContent className="flex flex-col items-center p-6">
                  <Zap className="h-12 w-12 mb-4 text-purple-500" />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Instant Inspiration</h3>
                  <p className="text-center text-gray-600">Nurture your creative potential with our curated prompt techniques.</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200">
                <CardContent className="flex flex-col items-center p-6">
                  <Brain className="h-12 w-12 mb-4 text-purple-500" />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">AI-Enhanced Growth</h3>
                  <p className="text-center text-gray-600">Leverage cutting-edge AI to refine and nurture your prompts.</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200">
                <CardContent className="flex flex-col items-center p-6">
                  <Users className="h-12 w-12 mb-4 text-purple-500" />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Flourishing Community</h3>
                  <p className="text-center text-gray-600">Join a vibrant garden of prompt enthusiasts and grow together.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-800">Voices from Our Garden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-purple-200">
                <CardContent className="p-6">
                  <p className="italic mb-4 text-gray-700">"vistoria.dev has transformed my creative process. My ideas are blossoming like never before!"</p>
                  <p className="font-semibold text-purple-600">- Sarah J., Writer</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200">
                <CardContent className="p-6">
                  <p className="italic mb-4 text-gray-700">"As a developer, crafting the right prompts for AI pair programming was a game-changer. vistoria.dev helped my skills flourish!"</p>
                  <p className="font-semibold text-purple-600">- Alex M., Software Engineer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Blossom?</h2>
                <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join vistoria.dev today and start creating prompts that will inspire and delight, just like a cascade of wisteria in full bloom!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-purple-800" placeholder="Enter your email" type="email" />
                  <Button className="bg-white text-purple-600 hover:bg-purple-100" type="submit">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-purple-100">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-200">
        <p className="text-xs text-gray-500">© 2023 vistoria.dev. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-purple-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-purple-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}