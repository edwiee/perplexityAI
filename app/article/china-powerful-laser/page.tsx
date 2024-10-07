import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookmarkIcon, ShareIcon, ThumbsUpIcon, MessageSquareIcon, SendIcon, HomeIcon, CompassIcon, LibraryIcon, LogInIcon, DownloadIcon, MenuIcon, Command } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import userImage from "@/public/edu.png"
import feature1 from "@/public/shutterstock_245773270v2.jpg"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ArticlePage() {
  const Sidebar = ({ className = "" }) => (
    <div className={className}>
      <div className="flex items-center mb-8">
        <svg width="25" height="25" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z" fill="black"/>
        </svg>
        <span className="ml-2 text-2xl font-bold">perplexity</span>
      </div>
      <Button variant="outline"  className="w-full mb-4 rounded-xl items-center" >
        New Thread
      </Button>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href={`/components`}>
            <HomeIcon className="h-5 w-5 mr-2" />
            Home
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href={`/components`}>
            <CompassIcon className="h-5 w-5 mr-2" />
            Discover
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href={`/components`}>
            <LibraryIcon className="h-5 w-5 mr-2" />
            Library
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <LogInIcon className="h-5 w-5 mr-2" />
          Sign in
        </Button>
      </nav>
      <Button className="w-full mt-4">Sign Up</Button>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Try Pro</h3>
        <p className="text-sm text-muted-foreground mb-2">Upgrade for image upload, smarter AI, and more Pro Search.</p>
        <Button variant="link" className="p-0">Learn More</Button>
      </div>
      <div className="mt-4 flex items-center">
        <DownloadIcon className="h-5 w-5 mr-2" />
        <span className="text-sm">Download</span>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Sidebar - Hidden on mobile */}
      <aside className="w-64 p-4 border-r hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        <header className="border-b sticky top-0 bg-background z-10">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <Sidebar className="p-4" />
                </SheetContent>
              </Sheet>
              <svg width="25" height="25" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z" fill="black"/>
              </svg>
              <span className="ml-2 text-xl font-bold">perplexity</span>
            </div>
            <Button variant="outline" className="ml-auto">New Thread</Button>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8 overflow-y-auto pb-20">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">China Powerful Laser</h1>
            <div className="flex items-center mb-6">
              <Image src={userImage} alt="Author avatar" width={24} height={24} className="rounded-full mr-2" />
              <span className="text-sm text-muted-foreground mr-4">elymc</span>
              <span className="text-sm text-muted-foreground">Oct 7, 2024</span>
            </div>
            <Image
              src={feature1}
              alt="Quantum Computer Doom Challenge"
              width={800}
              height={400}
              className="w-full rounded-lg mb-6"
            />
            <div className="prose max-w-none mb-8">
              <p>
                According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces
                significant technical challenges due to its requirement for a large number of qubits. This ambitious project
                aims to run DOOM on a quantum computer, pushing the boundaries of quantum computing capabilities.
              </p>
              <h2>The Quantum Challenge</h2>
              <p>
                Quantum computers operate on qubits, which can exist in multiple states simultaneously, unlike classical
                bits. This property, known as superposition, allows quantum computers to perform certain calculations much
                faster than traditional computers. However, maintaining the stability of qubits and scaling up the number of
                qubits in a system presents significant challenges.
              </p>
              <h2>DOOM on Quantum Hardware</h2>
              <p>
                The Quandoom project faces several hurdles in its attempt to run DOOM on quantum hardware:
              </p>
              <ul>
                <li>Qubit requirements: The game needs a large number of stable qubits to function.</li>
                <li>Error correction: Quantum systems are prone to errors, requiring sophisticated error correction techniques.</li>
                <li>Algorithm adaptation: Classical algorithms need to be adapted for quantum systems.</li>
              </ul>
              <p>
                Despite these challenges, the project represents an exciting frontier in quantum computing, potentially
                paving the way for more complex applications in the future.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              <Button variant="outline" size="sm">
                <ThumbsUpIcon className="w-4 h-4 mr-2" />
                Helpful
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkIcon className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </article>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Related Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="text-left">What are the main challenges in quantum computing?</Button>
                </li>
                <li>
                  <Button variant="link" className="text-left">How does a quantum computer differ from a classical computer?</Button>
                </li>
                <li>
                  <Button variant="link" className="text-left">What other applications are being developed for quantum computers?</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 bg-background border-t z-20">
          <div className="container mx-auto px-4 py-4 max-w-3xl">
            <div className="flex items-center">
              <Input 
                placeholder="Ask follow-up" 
                className="flex-grow mr-2"
                aria-label="Ask a follow-up question"
              />
              <Button type="submit" size="icon">
                <SendIcon className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}