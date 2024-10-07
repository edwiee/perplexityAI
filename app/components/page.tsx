import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookmarkIcon, StarIcon, HomeIcon, CompassIcon, LibraryIcon, LogInIcon, DownloadIcon, MenuIcon, AtomIcon, DollarSign, CircleDollarSignIcon, Palette, Medal, TvMinimal, Globe2, SlidersHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import userImage from "@/public/edu.png"
import feature1 from "@/public/shutterstock_245773270v2.jpg"
import feature2 from "@/public/Image 2.jpg"
import { Separator } from "@/components/ui/separator"

export default function DiscoverPage() {
  const Sidebar = ({ className = "" }) => (
    <div className={className}>
      <div className="flex items-center mb-8">
        {/* <Image src="/placeholder.svg?height=32&width=32" alt="Perplexity Logo" width={32} height={32} /> */}
        <svg width="25" height="25" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z" fill="black"/>
    </svg>
    
        <span className="ml-2 text-2xl font-bold">perplexity</span>
      </div>
      <Button variant="outline" className="w-full mb-4">
        New Thread
      </Button>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <HomeIcon className="h-5 w-5 mr-2" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <CompassIcon className="h-5 w-5 mr-2" />
          Discover
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <LibraryIcon className="h-5 w-5 mr-2" />
          Library
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
      {/* <div className="mt-4 flex items-center">
        
        <DownloadIcon className="h-5 w-5 mr-2" />
        <span className="text-sm">Download</span>
        
      </div> */}
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden border-b p-4 flex justify-between items-center">
        <div className="flex items-center">
        <svg width="25" height="25" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z" fill="black"/>
    </svg>
          <span className="ml-2 text-xl font-bold">perplexity</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="w-64 p-4 border-r hidden lg:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:py-4 lg:px-52 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 flex items-center"><Globe2 />&nbsp;Discover</h1>
          <Separator orientation="horizontal" className="my-2" />
          <Tabs defaultValue="top" className="mb-4 ">
            <TabsList className="overflow-x-auto">
              <TabsTrigger value="top">
                <StarIcon className="size-3 mr-1" />
                Top
              </TabsTrigger>
              <TabsTrigger value="tech"><AtomIcon className="size-3 mr-1" />Tech & Science</TabsTrigger>
              <TabsTrigger value="finance"><CircleDollarSignIcon className="size-3 mr-1" />Finance</TabsTrigger>
              <TabsTrigger value="arts"><Palette className="size-3 mr-1" />Arts & Culture</TabsTrigger>
              <TabsTrigger value="sports"><Medal className="size-3 mr-1" />Sports</TabsTrigger>
              <TabsTrigger value="entertainment"><TvMinimal className="size-3 mr-1" />Entertainment</TabsTrigger>
              <TabsTrigger value=""><SlidersHorizontal className="size-4 rounded-md ml-2 mr-2"  /></TabsTrigger>
            </TabsList>
          </Tabs>

          <Card className="mb-6">
            <Link href={`/article/china-powerful-laser`}>
              <Image
                src={feature1}
                alt="Colorful abstract image representing powerful laser technology"
                width={400}
                height={200}
                className="w-full object-cover rounded-t-lg"
              />
            </Link>
            <CardHeader>
              <CardTitle className="text-2xl">
                <Link href={`/article/china-powerful-laser`}>China Has the Most Powerful Laser</Link>
              </CardTitle>
              <CardDescription>
                Chinese scientists have achieved a breakthrough in laser technology with the development of the world's most powerful "sound laser," emitting particles of sound...
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center">
                <Image src={userImage} alt="Author avatar" width={24} height={24} className="rounded-full mr-2" />
                <span className="text-sm text-muted-foreground">edwin</span>
              </div>
              <Button variant="ghost" size="sm">
                <BookmarkIcon className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
              <Link href="/article/spy-planes-radioactive-thunderstorms">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Purple sky with lightning, representing radioactive thunderstorms"
                  width={300}
                  height={150}
                  className="w-full object-cover rounded-t-lg"
                />
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href="/article/spy-planes-radioactive-thunderstorms">Spy Planes Show Radioactive Thunderstorms</Link>
                </CardTitle>
                <CardDescription>
                  Based on reports from Nature, a retrofitted U-2 sp...
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image src={userImage} alt="Author avatar" width={24} height={24} className="rounded-full mr-2" />
                  <span className="text-sm text-muted-foreground">edwin</span>
                </div>
                <Button variant="ghost" size="sm">
                  <BookmarkIcon className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <Link href="/article/spy-planes-radioactive-thunderstorms">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Purple sky with lightning, representing radioactive thunderstorms"
                  width={300}
                  height={150}
                  className="w-full object-cover rounded-t-lg"
                />
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href="/article/spy-planes-radioactive-thunderstorms">Spy Planes Show Radioactive Thunderstorms</Link>
                </CardTitle>
                <CardDescription>
                  Based on reports from Nature, a retrofitted U-2 sp...
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image src={userImage} alt="Author avatar" width={24} height={24} className="rounded-full mr-2" />
                  <span className="text-sm text-muted-foreground">edwin</span>
                </div>
                <Button variant="ghost" size="sm">
                  <BookmarkIcon className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <Link href="/article/spy-planes-radioactive-thunderstorms">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Purple sky with lightning, representing radioactive thunderstorms"
                  width={300}
                  height={150}
                  className="w-full object-cover rounded-t-lg"
                />
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href="/article/spy-planes-radioactive-thunderstorms">Spy Planes Show Radioactive Thunderstorms</Link>
                </CardTitle>
                <CardDescription>
                  Based on reports from Nature, a retrofitted U-2 sp...
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image src={userImage} alt="Author avatar" width={24} height={24} className="rounded-full mr-2" />
                  <span className="text-sm text-muted-foreground">edwin</span>
                </div>
                <Button variant="ghost" size="sm">
                  <BookmarkIcon className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          </main>
        {/* Right Sidebar */}
        <aside className="w-64 p-4 border-l hidden lg:block">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Make it yours</h3>
              <Button variant="ghost" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Select topics and interests to customize your Discover experience</p>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <CompassIcon className="w-4 h-4 mr-2" />
                Tech & Science
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <CompassIcon className="w-4 h-4 mr-2" />
                Finance
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <CompassIcon className="w-4 h-4 mr-2" />
                Arts & Culture
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <CompassIcon className="w-4 h-4 mr-2" />
                Sports
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <CompassIcon className="w-4 h-4 mr-2" />
                Entertainment
              </Button>
            </div>
            <Button className="w-full mt-4">Save Interests</Button>
          </div>
        </aside>
      </div>
    </div>
  )
}