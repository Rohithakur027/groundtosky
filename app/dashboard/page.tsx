"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Edit, Trash2, Share2, Facebook, Twitter, Instagram } from "lucide-react"

// Mock data for saved trips
const savedTrips = [
  {
    id: "trip1",
    title: "Santorini Getaway",
    destination: "Santorini, Greece",
    dates: "June 15-20, 2023",
    image: "/images/destinations/santorini.jpg",
    days: 5,
    activities: 12,
  },
  {
    id: "trip2",
    title: "Kyoto Adventure",
    destination: "Kyoto, Japan",
    dates: "September 5-15, 2023",
    image: "/images/destinations/kyoto.jpg",
    days: 10,
    activities: 18,
  },
  {
    id: "trip3",
    title: "Barcelona Weekend",
    destination: "Barcelona, Spain",
    dates: "August 12-15, 2023",
    image: "/images/destinations/barcelona.jpg",
    days: 3,
    activities: 8,
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("trips")

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/images/avatars/user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-gray-500">Travel enthusiast</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>New York, USA</span>
                  </div>
                  <Button className="mt-4 w-full" variant="outline" size="sm">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <button
                    className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors ${
                      activeTab === "trips" ? "bg-gray-50 font-medium" : ""
                    }`}
                    onClick={() => setActiveTab("trips")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                      <rect x="7" y="7" width="10" height="10" rx="2" />
                    </svg>
                    My Trips
                  </button>
                  <button
                    className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors ${
                      activeTab === "favorites" ? "bg-gray-50 font-medium" : ""
                    }`}
                    onClick={() => setActiveTab("favorites")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    Saved Places
                  </button>
                  <button
                    className={`flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors ${
                      activeTab === "settings" ? "bg-gray-50 font-medium" : ""
                    }`}
                    onClick={() => setActiveTab("settings")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Settings
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Trip Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">36</div>
                    <div className="text-sm text-gray-500">Cities</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">124</div>
                    <div className="text-sm text-gray-500">Days</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm text-gray-500">Trips Planned</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === "trips" && (
              <>
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">My Trips</h1>
                  <Button asChild>
                    <Link href="/itinerary">Create New Trip</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {savedTrips.map((trip) => (
                    <Card key={trip.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="text-xl font-bold">{trip.title}</h3>
                            <div className="flex items-center text-sm mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{trip.destination}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{trip.dates}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>
                              {trip.days} days, {trip.activities} activities
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 gap-1" asChild>
                            <Link href={`/itinerary?trip=${trip.id}`}>
                              <Edit className="h-4 w-4" />
                              Edit
                            </Link>
                          </Button>
                          <Button variant="outline" className="flex-1 gap-1">
                            <Share2 className="h-4 w-4" />
                            Share
                          </Button>
                          <Button variant="outline" className="w-10 p-0 text-gray-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {activeTab === "favorites" && (
              <>
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Saved Places</h1>
                  <Button variant="outline">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Map
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Sample saved places */}
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/destinations/santorini/oia.jpg"
                        alt="Oia Village"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Oia Village</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Santorini, Greece</span>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/destinations/santorini">View Details</Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/destinations/santorini/santo-wines.jpg"
                        alt="Santo Wines Winery"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Santo Wines Winery</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Santorini, Greece</span>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/destinations/santorini">View Details</Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/destinations/kyoto.jpg"
                        alt="Fushimi Inari Shrine"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Fushimi Inari Shrine</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Kyoto, Japan</span>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/destinations/kyoto">View Details</Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {activeTab === "settings" && (
              <>
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Account Settings</h1>
                  <Button>Save Changes</Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account details and profile picture</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col items-center space-y-2">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="/images/avatars/user.jpg" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm">
                          Change Photo
                        </Button>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" defaultValue="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" defaultValue="Doe" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" defaultValue="New York, USA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Input id="bio" defaultValue="Travel enthusiast and photographer" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Social Accounts</CardTitle>
                    <CardDescription>Connect your social media accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Facebook className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Facebook</p>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Twitter className="h-5 w-5 text-blue-400" />
                        <div>
                          <p className="font-medium">Twitter</p>
                          <p className="text-sm text-gray-500">@johndoe</p>
                        </div>
                      </div>
                      <Button variant="outline">Disconnect</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Instagram className="h-5 w-5 text-pink-600" />
                        <div>
                          <p className="font-medium">Instagram</p>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>Manage your notification and privacy settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive updates about your trips</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="emailNotifications"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Travel Recommendations</p>
                        <p className="text-sm text-gray-500">Receive personalized travel suggestions</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="travelRecommendations"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Public Profile</p>
                        <p className="text-sm text-gray-500">Allow others to view your profile</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="publicProfile"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
