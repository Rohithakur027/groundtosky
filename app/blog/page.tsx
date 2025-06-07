import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container py-12 md:py-24">
        <div className="flex flex-col space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
            <p className="text-gray-600 dark:text-gray-400">Stories, tips, and insights from Tirthan Valley</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <div className="mb-8">
                <Input type="search" placeholder="Search blog posts..." className="max-w-md" />
              </div>

              <Tabs defaultValue="all" className="mb-8">
                <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                  <TabsTrigger
                    value="all"
                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 data-[state=active]:shadow-sm transition-all"
                  >
                    All Posts
                  </TabsTrigger>
                  <TabsTrigger
                    value="travel-tips"
                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 data-[state=active]:shadow-sm transition-all"
                  >
                    Travel Tips
                  </TabsTrigger>
                  <TabsTrigger
                    value="adventure"
                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 data-[state=active]:shadow-sm transition-all"
                  >
                    Adventure Stories
                  </TabsTrigger>
                  <TabsTrigger
                    value="culture"
                    className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 data-[state=active]:shadow-sm transition-all"
                  >
                    Local Culture
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((post, index) => (
                      <BlogPostCard key={index} post={post} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="travel-tips" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts
                      .filter((post) => post.category === "Travel Tips")
                      .map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="adventure" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts
                      .filter((post) => post.category === "Adventure Stories")
                      .map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="culture" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts
                      .filter((post) => post.category === "Local Culture")
                      .map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="md:w-1/4">
              <div className="space-y-6">
                <div className="space-y-2 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold">Categories</h3>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        Travel Tips (4)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        Adventure Stories (3)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        Local Culture (2)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        Wildlife (1)
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <li key={index} className="flex gap-2 group">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold">Tags</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1 rounded-full transition-colors"
                    >
                      Trekking
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1 rounded-full transition-colors"
                    >
                      Food
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1 rounded-full transition-colors"
                    >
                      Travel
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1 rounded-full transition-colors"
                    >
                      Himalayas
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1 rounded-full transition-colors"
                    >
                      Wildlife
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1 rounded-full transition-colors"
                    >
                      Culture
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative h-[200px]">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
          {post.category}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="text-sm text-gray-600 dark:text-gray-400">{post.date}</div>
        <CardTitle className="line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 text-gray-600 dark:text-gray-400">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${post.slug}`}
          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors flex items-center gap-1 group"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </CardFooter>
    </Card>
  )
}

interface BlogPost {
  title: string
  slug: string
  date: string
  image: string
  excerpt: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Top 5 Treks in Tirthan Valley",
    slug: "top-5-treks-in-tirthan-valley",
    date: "June 15, 2023",
    image: "/images/blog-trek.jpg",
    excerpt:
      "Tirthan Valley offers some of the most breathtaking treks in the Himalayas. From the Great Himalayan National Park to the serene Serolsar Lake, here are the top 5 treks you must try.",
    category: "Adventure Stories",
  },
  {
    title: "Local Cuisine of Tirthan Valley",
    slug: "local-cuisine-of-tirthan-valley",
    date: "May 22, 2023",
    image: "/images/blog-food.jpg",
    excerpt:
      "The local cuisine of Tirthan Valley is a delightful blend of Himachali flavors. Don't miss out on dishes like Sidu, Babru, and Aktori.",
    category: "Local Culture",
  },
  {
    title: "Best Time to Visit Tirthan Valley",
    slug: "best-time-to-visit-tirthan-valley",
    date: "April 10, 2023",
    image: "/images/blog-seasons.jpg",
    excerpt:
      "Planning a trip to Tirthan Valley? Learn about the best seasons to visit and what each time of year has to offer for different activities and experiences.",
    category: "Travel Tips",
  },
  {
    title: "Wildlife Spotting in Great Himalayan National Park",
    slug: "wildlife-spotting-in-great-himalayan-national-park",
    date: "March 5, 2023",
    image: "/images/blog-wildlife.jpg",
    excerpt:
      "The Great Himalayan National Park is home to diverse wildlife. Here's a guide to spotting some of the rare and endangered species in their natural habitat.",
    category: "Wildlife",
  },
  {
    title: "A Guide to Homestays in Tirthan Valley",
    slug: "guide-to-homestays-in-tirthan-valley",
    date: "February 18, 2023",
    image: "/images/blog-homestay.jpg",
    excerpt:
      "Experience the authentic Himachali hospitality by staying in a local homestay. This guide covers everything you need to know about homestays in Tirthan Valley.",
    category: "Travel Tips",
  },
  {
    title: "Fishing in Tirthan River: A Complete Guide",
    slug: "fishing-in-tirthan-river-complete-guide",
    date: "January 30, 2023",
    image: "/images/blog-fishing-guide.jpg",
    excerpt:
      "Tirthan River is famous for its trout fishing. Learn about the best spots, techniques, and seasons for fishing in this pristine Himalayan river.",
    category: "Adventure Stories",
  },
  {
    title: "Traditional Festivals of Tirthan Valley",
    slug: "traditional-festivals-of-tirthan-valley",
    date: "December 12, 2022",
    image: "/images/blog-festivals.jpg",
    excerpt:
      "Discover the vibrant and colorful festivals celebrated in Tirthan Valley throughout the year, and how they reflect the rich cultural heritage of the region.",
    category: "Local Culture",
  },
  {
    title: "Packing Essentials for Tirthan Valley",
    slug: "packing-essentials-for-tirthan-valley",
    date: "November 5, 2022",
    image: "/images/blog-packing.jpg",
    excerpt:
      "Not sure what to pack for your trip to Tirthan Valley? This comprehensive packing list covers everything you need for a comfortable and enjoyable stay.",
    category: "Travel Tips",
  },
  {
    title: "Conquering Jalori Pass: A Trekker's Tale",
    slug: "conquering-jalori-pass-trekkers-tale",
    date: "October 20, 2022",
    image: "/images/blog-jalori.jpg",
    excerpt:
      "A personal account of trekking through Jalori Pass, one of the most scenic routes in Tirthan Valley, with tips and insights for fellow trekkers.",
    category: "Adventure Stories",
  },
  {
    title: "How to Reach Tirthan Valley: Transportation Guide",
    slug: "how-to-reach-tirthan-valley-transportation-guide",
    date: "September 8, 2022",
    image: "/images/blog-transportation.jpg",
    excerpt:
      "Planning your journey to Tirthan Valley? This guide covers all transportation options from major cities, with routes, timings, and practical tips.",
    category: "Travel Tips",
  },
]
