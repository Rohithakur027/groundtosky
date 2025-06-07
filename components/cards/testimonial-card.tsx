import type React from "react"

interface TestimonialCardProps {
  name: string
  title: string
  testimonial: string
  imageSrc: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, testimonial, imageSrc }) => {
  return (
    <div className="h-[350px] flex flex-col rounded-lg shadow-md overflow-hidden bg-white">
      <div className="flex items-center justify-center p-4">
        <img src={imageSrc || "/placeholder.svg"} alt={name} className="rounded-full w-20 h-20 object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
        <div className="mt-2">
          <p className="text-gray-700 line-clamp-4">{testimonial}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
