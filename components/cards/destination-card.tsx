import type React from "react"

interface DestinationCardProps {
  imageUrl: string
  title: string
  description: string
  link: string
}

const DestinationCard: React.FC<DestinationCardProps> = ({ imageUrl, title, description, link }) => {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col">
      <img className="w-full h-48 object-cover" src={imageUrl || "/placeholder.svg"} alt={title} />
      <div className="px-6 py-4 flex-1">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={link}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default DestinationCard
