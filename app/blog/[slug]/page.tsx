import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag, User, Facebook, Twitter, Instagram, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostParams) {
  // In a real app, you would fetch the blog post data based on the slug
  // For now, we'll use dummy data
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return <div className="container py-20 text-center">Blog post not found</div>
  }

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>
            </Button>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>By Admin</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{post.title}</h1>

            <div className="relative h-[400px] w-full mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-xl" />
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.content}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Exploring the Beauty</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Tirthan Valley, named after the Tirthan River which flows through it, is a hidden gem in the Kullu
                district of Himachal Pradesh. The valley is known for its pristine beauty, rich biodiversity, and the
                Great Himalayan National Park, a UNESCO World Heritage Site.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The valley offers a perfect escape from the hustle and bustle of city life, with its serene environment,
                clean air, and breathtaking landscapes. The crystal-clear waters of the Tirthan River, the lush green
                forests, and the snow-capped mountains create a picturesque setting that captivates the hearts of all
                who visit.
              </p>

              <blockquote className="border-l-4 border-emerald-500 pl-4 italic my-6 text-gray-700 dark:text-gray-300">
                <p>
                  The mountains are calling and I must go. The clearest way into the Universe is through a forest
                  wilderness.
                </p>
              </blockquote>

              <h2 className="text-2xl font-bold mt-8 mb-4">Tips for Visitors</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Always carry warm clothes, even in summer, as the temperature can drop significantly in the evenings
                </li>
                <li>Respect local customs and traditions when visiting villages</li>
                <li>Carry a first-aid kit for emergencies, especially when trekking</li>
                <li>Stay hydrated during treks and outdoor activities</li>
                <li>Avoid plastic and help keep the valley clean</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                Whether you're an adventure enthusiast looking for trekking and camping experiences, a nature lover
                seeking tranquility, or a photographer wanting to capture the beauty of the Himalayas, Tirthan Valley
                has something to offer for everyone.
              </p>
            </div>

            {/* Social Share */}
            <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6 my-8">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Share this post:</div>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-pink-900/30 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Share on Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Copy Link</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tags:</span>
              <a
                href="#"
                className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1 rounded-full transition-colors"
              >
                Tirthan Valley
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
                Travel
              </a>
              <a
                href="#"
                className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-1 rounded-full transition-colors"
              >
                {post.category}
              </a>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image src="/images/avatar-1.jpg" alt="Author" fill className="object-cover rounded-full" />
              </div>
              <div>
                <h3 className="font-bold">Admin</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A passionate traveler and writer who loves exploring the hidden gems of the Himalayas.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((post, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
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
                      className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next/Previous Navigation */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link
                href="/blog/local-cuisine-of-tirthan-valley"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Previous Post</div>
                  <div className="font-medium">Local Cuisine of Tirthan Valley</div>
                </div>
              </Link>
              <Link
                href="/blog/best-time-to-visit-tirthan-valley"
                className="flex items-center gap-2 text-right sm:text-left text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Next Post</div>
                  <div className="font-medium">Best Time to Visit Tirthan Valley</div>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getBlogPostBySlug(slug: string) {
  // In a real app, you would fetch this from a database or API
  const posts = [
    {
      title: "Top 5 Treks in Tirthan Valley",
      slug: "top-5-treks-in-tirthan-valley",
      date: "June 15, 2023",
      image: "/images/blog-trek.jpg",
      excerpt:
        "Tirthan Valley offers some of the most breathtaking treks in the Himalayas. From the Great Himalayan National Park to the serene Serolsar Lake, here are the top 5 treks you must try.",
      category: "Adventure Stories",
      content:
        "Tirthan Valley offers some of the most breathtaking treks in the Himalayas. From the Great Himalayan National Park to the serene Serolsar Lake, here are the top 5 treks you must try. The valley is a paradise for trekking enthusiasts, with its diverse terrain, pristine forests, and stunning mountain views. Whether you're a beginner or an experienced trekker, there's something for everyone in Tirthan Valley. Let's explore the top 5 treks that you shouldn't miss when visiting this beautiful region.",
    },
    {
      title: "Local Cuisine of Tirthan Valley",
      slug: "local-cuisine-of-tirthan-valley",
      date: "May 22, 2023",
      image: "/images/blog-food.jpg",
      excerpt:
        "The local cuisine of Tirthan Valley is a delightful blend of Himachali flavors. Don't miss out on dishes like Sidu, Babru, and Aktori.",
      category: "Local Culture",
      content:
        "The local cuisine of Tirthan Valley is a delightful blend of Himachali flavors. Don't miss out on dishes like Sidu, Babru, and Aktori. The food in Tirthan Valley is characterized by its simplicity, nutritional value, and the use of local ingredients. The traditional cooking methods and recipes have been passed down through generations, preserving the authentic taste and cultural significance of each dish. When visiting Tirthan Valley, make sure to try these local delicacies for a complete culinary experience.",
    },
    {
      title: "Best Time to Visit Tirthan Valley",
      slug: "best-time-to-visit-tirthan-valley",
      date: "April 10, 2023",
      image: "/images/blog-seasons.jpg",
      excerpt:
        "Planning a trip to Tirthan Valley? Learn about the best seasons to visit and what each time of year has to offer for different activities and experiences.",
      category: "Travel Tips",
      content:
        "Planning a trip to Tirthan Valley? Learn about the best seasons to visit and what each time of year has to offer for different activities and experiences. Tirthan Valley experiences distinct seasons, each with its own charm and set of activities. The spring months (March to May) bring blooming flowers and pleasant weather, perfect for trekking and outdoor activities. Summer (June to August) offers relief from the heat of the plains, while monsoon (September to October) transforms the valley into a lush green paradise. Winter (November to February) brings snowfall, creating a magical winter wonderland.",
    },
  ]

  return posts.find((post) => post.slug === slug)
}

const relatedPosts = [
  {
    title: "Wildlife Spotting in Great Himalayan National Park",
    slug: "wildlife-spotting-in-great-himalayan-national-park",
    date: "March 5, 2023",
    image: "/images/blog-wildlife.jpg",
  },
  {
    title: "A Guide to Homestays in Tirthan Valley",
    slug: "guide-to-homestays-in-tirthan-valley",
    date: "February 18, 2023",
    image: "/images/blog-homestay.jpg",
  },
]
