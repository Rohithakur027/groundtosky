"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin, Star, Info, Plus, Download, Share2 } from "lucide-react"
import { destinationDetails } from "@/data/destinations"

interface DestinationPageProps {
  params: {
    slug: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = params
  const destination = destinationDetails[slug as keyof typeof destinationDetails]
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!destination) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
        <p className="mb-8 text-gray-600">The destination you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/destinations">View all destinations</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="container py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/destinations" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to all destinations
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{destination.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>
                    {destination.rating} ({destination.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src={destination.images[activeImageIndex] || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {destination.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      activeImageIndex === index ? "border-blue-600" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${destination.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">About {destination.name}</h2>
              <p className="text-gray-700 leading-relaxed">{destination.longDescription}</p>
            </div>

            {/* Attractions */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Top Attractions</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.attractions.slice(0, 4).map((attraction) => (
                  <Card key={attraction.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 right-2">{attraction.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">{attraction.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="text-sm ml-1">{attraction.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{attraction.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{attraction.duration}</span>
                        </div>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Plus className="h-4 w-4" />
                          Add to Trip
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Travel Tips */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Travel Tips</h2>
              <ul className="space-y-2">
                {destination.travelTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Itinerary */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Sample Itinerary</h2>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/itinerary?destination=${slug}`}>Customize This Itinerary</Link>
                </Button>
              </div>

              <div className="space-y-4">
                {destination.sampleItinerary.map((day) => (
                  <Card key={day.day} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="bg-blue-600 text-white p-4">
                        <h3 className="font-bold">
                          Day {day.day}: {day.title}
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="w-24 flex-shrink-0 font-medium">{activity.time}</div>
                            <div className="flex-grow">
                              <p className="text-gray-700">{activity.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Quick Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Best Time to Visit</span>
                      <p className="text-sm text-gray-600">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Ideal Duration</span>
                      <p className="text-sm text-gray-600">{destination.idealDuration}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Button className="w-full" asChild>
                    <Link href={`/itinerary?destination=${slug}`}>Create Itinerary</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Preview */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-square w-full relative">
                  <Image
                    src={`/images/maps/${slug}-map.jpg`}
                    alt={`Map of ${destination.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Button variant="secondary">View Interactive Map</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Share & Save</h3>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <Download className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weather */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Current Weather</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-5xl font-light">27°</div>
                    <div>
                      <div className="font-medium">Sunny</div>
                      <div className="text-sm text-gray-600">Feels like 29°</div>
                    </div>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-400"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">Mon</div>
                    <div>26°</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">Tue</div>
                    <div>28°</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">Wed</div>
                    <div>25°</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
