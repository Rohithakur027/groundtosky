"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Search,
  Plus,
  Trash2,
  Save,
  Download,
  Share2,
  Filter,
  Star,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"

// Mock data for activities
const mockActivities = [
  {
    id: "a1",
    name: "Oia Village Walking Tour",
    description: "Explore the picturesque streets and blue-domed churches of Oia village.",
    image: "/images/destinations/santorini/oia.jpg",
    duration: "3 hours",
    category: "Sightseeing",
    price: "€30",
    rating: 4.8,
  },
  {
    id: "a2",
    name: "Santorini Caldera Cruise",
    description: "Sail around the volcanic caldera and enjoy swimming in hot springs.",
    image: "/images/destinations/santorini/caldera-cruise.jpg",
    duration: "5 hours",
    category: "Tour",
    price: "€85",
    rating: 4.9,
  },
  {
    id: "a3",
    name: "Wine Tasting Experience",
    description: "Sample local wines with caldera views at Santo Wines Winery.",
    image: "/images/destinations/santorini/santo-wines.jpg",
    duration: "2 hours",
    category: "Food & Drink",
    price: "€45",
    rating: 4.7,
  },
  {
    id: "a4",
    name: "Red Beach Visit",
    description: "Relax at the famous red sand beach surrounded by volcanic cliffs.",
    image: "/images/destinations/santorini/red-beach.jpg",
    duration: "3 hours",
    category: "Beach",
    price: "Free",
    rating: 4.5,
  },
  {
    id: "a5",
    name: "Akrotiri Archaeological Site",
    description: "Discover the ancient Minoan settlement preserved by volcanic ash.",
    image: "/images/destinations/santorini/akrotiri.jpg",
    duration: "2 hours",
    category: "History",
    price: "€12",
    rating: 4.6,
  },
  {
    id: "a6",
    name: "Sunset Dinner in Oia",
    description: "Enjoy a romantic dinner with spectacular sunset views.",
    image: "/images/destinations/santorini/sunset-dinner.jpg",
    duration: "2 hours",
    category: "Food & Drink",
    price: "€60-100",
    rating: 4.9,
  },
]

// Mock data for itinerary
const initialItinerary = [
  {
    day: 1,
    date: "June 15, 2023",
    activities: [
      {
        id: "a1",
        name: "Oia Village Walking Tour",
        time: "10:00 AM",
        duration: "3 hours",
        category: "Sightseeing",
      },
      {
        id: "a3",
        name: "Wine Tasting Experience",
        time: "3:00 PM",
        duration: "2 hours",
        category: "Food & Drink",
      },
      {
        id: "a6",
        name: "Sunset Dinner in Oia",
        time: "7:30 PM",
        duration: "2 hours",
        category: "Food & Drink",
      },
    ],
  },
  {
    day: 2,
    date: "June 16, 2023",
    activities: [
      {
        id: "a2",
        name: "Santorini Caldera Cruise",
        time: "9:00 AM",
        duration: "5 hours",
        category: "Tour",
      },
      {
        id: "a4",
        name: "Red Beach Visit",
        time: "3:00 PM",
        duration: "3 hours",
        category: "Beach",
      },
    ],
  },
  {
    day: 3,
    date: "June 17, 2023",
    activities: [
      {
        id: "a5",
        name: "Akrotiri Archaeological Site",
        time: "10:00 AM",
        duration: "2 hours",
        category: "History",
      },
    ],
  },
]

export default function ItineraryPage() {
  const [itinerary, setItinerary] = useState(initialItinerary)
  const [selectedDay, setSelectedDay] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [expandedDays, setExpandedDays] = useState<number[]>([1])
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const filteredActivities = mockActivities.filter((activity) => {
    // Filter by search query
    const matchesSearch =
      activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Filter by category
    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory

    // Filter by price (simplified for demo)
    const price = activity.price === "Free" ? 0 : Number.parseInt(activity.price.replace(/[^0-9]/g, ""))
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesPrice
  })

  const toggleDayExpansion = (day: number) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter((d) => d !== day))
    } else {
      setExpandedDays([...expandedDays, day])
    }
  }

  const addActivityToItinerary = (activity: any) => {
    const updatedItinerary = [...itinerary]
    const dayIndex = updatedItinerary.findIndex((day) => day.day === selectedDay)

    if (dayIndex !== -1) {
      // Calculate a reasonable time based on existing activities
      const existingActivities = updatedItinerary[dayIndex].activities
      let time = "9:00 AM"

      if (existingActivities.length > 0) {
        const lastActivity = existingActivities[existingActivities.length - 1]
        // Simple time calculation (just for demo)
        const hour = Number.parseInt(lastActivity.time.split(":")[0])
        const isPM = lastActivity.time.includes("PM")
        const durationHours = Number.parseInt(lastActivity.duration.split(" ")[0])

        let newHour = hour + durationHours
        let newIsPM = isPM

        if (newHour >= 12) {
          newIsPM = true
          if (newHour > 12) {
            newHour -= 12
          }
        }

        time = `${newHour}:00 ${newIsPM ? "PM" : "AM"}`
      }

      updatedItinerary[dayIndex].activities.push({
        id: activity.id,
        name: activity.name,
        time,
        duration: activity.duration,
        category: activity.category,
      })

      setItinerary(updatedItinerary)
    }
  }

  const removeActivityFromItinerary = (dayIndex: number, activityIndex: number) => {
    const updatedItinerary = [...itinerary]
    updatedItinerary[dayIndex].activities.splice(activityIndex, 1)
    setItinerary(updatedItinerary)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Itinerary Builder</h1>
            <p className="text-gray-600">Plan your perfect trip to Santorini, Greece</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="gap-2">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Itinerary Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Your Itinerary</h2>
                <div className="space-y-4">
                  {itinerary.map((day, dayIndex) => (
                    <div key={day.day} className="border rounded-lg overflow-hidden">
                      <div
                        className={`bg-blue-600 text-white p-4 flex justify-between items-center cursor-pointer ${
                          expandedDays.includes(day.day) ? "" : "rounded-b-lg"
                        }`}
                        onClick={() => toggleDayExpansion(day.day)}
                      >
                        <div>
                          <h3 className="font-bold">Day {day.day}</h3>
                          <div className="text-sm text-blue-100">{day.date}</div>
                        </div>
                        <div>
                          {expandedDays.includes(day.day) ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </div>
                      </div>

                      {expandedDays.includes(day.day) && (
                        <div className="p-4 space-y-4 bg-white">
                          {day.activities.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                              <p>No activities planned for this day.</p>
                              <p className="text-sm">Click "Add to Day {day.day}" from the activities list.</p>
                            </div>
                          ) : (
                            day.activities.map((activity, activityIndex) => (
                              <div
                                key={`${activity.id}-${activityIndex}`}
                                className="flex gap-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                                draggable
                              >
                                <div className="w-20 flex-shrink-0 font-medium">{activity.time}</div>
                                <div className="flex-grow">
                                  <div className="flex justify-between">
                                    <div>
                                      <h4 className="font-medium">{activity.name}</h4>
                                      <div className="flex items-center text-sm text-gray-500 mt-1">
                                        <Clock className="h-3 w-3 mr-1" />
                                        <span>{activity.duration}</span>
                                        <Badge variant="outline" className="ml-2 text-xs">
                                          {activity.category}
                                        </Badge>
                                      </div>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-red-500"
                                      onClick={() => removeActivityFromItinerary(dayIndex, activityIndex)}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}

                          <div className="pt-2 text-center">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-600 border-blue-600 hover:bg-blue-50"
                              onClick={() => setSelectedDay(day.day)}
                            >
                              <Plus className="h-4 w-4 mr-1" />
                              Add Activity
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Day
                  </Button>
                  <Button variant="outline" size="sm">
                    Reorder Days
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Preview */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full relative">
                  <Image src="/images/maps/santorini-map.jpg" alt="Map of Santorini" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Button variant="secondary">View Interactive Map</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Browser */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Activities</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  >
                    {isMobileFilterOpen ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search activities..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className={`space-y-4 ${isMobileFilterOpen ? "block" : "hidden lg:block"}`}>
                    <div>
                      <h3 className="font-medium mb-2">Category</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant={selectedCategory === "all" ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedCategory("all")}
                        >
                          All
                        </Badge>
                        <Badge
                          variant={selectedCategory === "Sightseeing" ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedCategory("Sightseeing")}
                        >
                          Sightseeing
                        </Badge>
                        <Badge
                          variant={selectedCategory === "Tour" ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedCategory("Tour")}
                        >
                          Tours
                        </Badge>
                        <Badge
                          variant={selectedCategory === "Food & Drink" ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedCategory("Food & Drink")}
                        >
                          Food & Drink
                        </Badge>
                        <Badge
                          variant={selectedCategory === "Beach" ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedCategory("Beach")}
                        >
                          Beaches
                        </Badge>
                        <Badge
                          variant={selectedCategory === "History" ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedCategory("History")}
                        >
                          History
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Price Range</h3>
                        <span className="text-sm text-gray-500">
                          €{priceRange[0]} - €{priceRange[1]}
                        </span>
                      </div>
                      <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={5}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-4"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Add to Day</h3>
                      <div className="flex flex-wrap gap-2">
                        {itinerary.map((day) => (
                          <Badge
                            key={day.day}
                            variant={selectedDay === day.day ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setSelectedDay(day.day)}
                          >
                            Day {day.day}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {filteredActivities.map((activity) => (
                <Card key={activity.id} className="overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2">{activity.category}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{activity.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm ml-1">{activity.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{activity.duration}</span>
                        </div>
                        <div>{activity.price}</div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-1" />
                            Add to Day {selectedDay}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {itinerary.map((day) => (
                            <DropdownMenuItem
                              key={day.day}
                              onClick={() => {
                                setSelectedDay(day.day)
                                addActivityToItinerary(activity)
                              }}
                            >
                              Add to Day {day.day}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
