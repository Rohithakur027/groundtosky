import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Banknote } from "lucide-react"

interface PlacementCardProps {
  placement: {
    id: string
    name: string
    image: string
    company: string
    companyLogo: string
    role: string
    year: string
    course: string
    location: string
    salary: string
  }
}

export default function PlacementCard({ placement }: PlacementCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image src={placement.image || "/placeholder.svg"} alt={placement.name} fill className="object-cover" />
        <div className="absolute top-3 right-3">
          <Badge className="bg-accent text-white border-0">{placement.year}</Badge>
        </div>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2 text-primary">{placement.name}</h3>
          <p className="text-sm text-gray-600 mb-1">Course: {placement.course}</p>
          <p className="text-sm font-medium text-gray-800 mb-1">{placement.role}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Building2 className="h-4 w-4 text-accent" />
            <span>{placement.company}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{placement.location}</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Banknote className="h-4 w-4 text-green-600" />
              <span className="text-lg font-bold text-accent">{placement.salary}</span>
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              Placed
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
