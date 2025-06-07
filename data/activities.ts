export interface ActivityItineraryItem {
  title: string
  description: string
}

export interface Activity {
  title: string
  slug: string
  category: "Adventure" | "Nature & Wildlife" | "Cultural"
  location: string
  duration: string
  difficulty?: "Easy" | "Moderate" | "Challenging"
  rating: number
  images: string[]
  description: string[]
  highlights: string[]
  itinerary?: ActivityItineraryItem[]
  whatToBring: string[]
  bestTime: string
  price?: string
  groupSize?: string
  tips: string[]
  mapUrl: string
  // Simple description for cards
  shortDescription: string
  // Simple image for cards
  image: string
}

export const activities: Activity[] = [
  {
    title: "Trekking in Great Himalayan National Park",
    slug: "trekking-ghnp",
    category: "Adventure",
    location: "Great Himalayan National Park, Tirthan Valley",
    duration: "1-5 days",
    difficulty: "Moderate",
    rating: 4.9,
    images: [
      "/images/activity-trek-1.jpg",
      "/images/activity-trek-2.jpg",
      "/images/activity-trek-3.jpg",
      "/images/activity-trek-4.jpg",
    ],
    image: "/images/activity-trek.jpg",
    shortDescription:
      "Explore the untouched trails of the Great Himalayan National Park, a UNESCO World Heritage Site.",
    description: [
      "Embark on an unforgettable trekking adventure in the Great Himalayan National Park (GHNP), a UNESCO World Heritage Site known for its rich biodiversity and pristine wilderness. The park offers a variety of trekking routes suitable for different experience levels, from day hikes to multi-day expeditions.",
      "As you trek through the park, you'll traverse dense forests, alpine meadows, and rugged terrain, with elevations ranging from 1,500 to 4,500 meters. The diverse landscapes provide a perfect backdrop for an immersive nature experience, with opportunities to spot rare wildlife and discover the region's unique flora.",
      "The most popular treks include the Tirthan Valley Trek, Sainj Valley Trek, and the more challenging Raktisar Trek. Each route offers its own unique perspectives of the Himalayan ecosystem and breathtaking panoramic views of snow-capped peaks.",
    ],
    highlights: [
      "Explore a UNESCO World Heritage Site",
      "Witness diverse Himalayan ecosystems",
      "Spot rare wildlife including the Western Tragopan and Himalayan Tahr",
      "Camp under starlit skies",
      "Experience pristine wilderness away from tourist crowds",
      "Guided by experienced local trekkers with extensive knowledge of the area",
    ],
    itinerary: [
      {
        title: "Day 1: Orientation and Acclimatization",
        description:
          "Arrive at the GHNP entrance, meet your guide, and receive a briefing about the trek. Take a short acclimatization walk to prepare for the journey ahead.",
      },
      {
        title: "Day 2: Forest Trail",
        description:
          "Begin your trek through dense oak and pine forests, crossing small streams and gradually gaining altitude. Camp at a scenic spot with views of the valley.",
      },
      {
        title: "Day 3: Alpine Meadows",
        description:
          "Trek to higher elevations and reach beautiful alpine meadows (bugyals). Enjoy panoramic views of the surrounding peaks and valleys.",
      },
      {
        title: "Day 4: Summit Day",
        description:
          "Reach the highest point of your trek, offering spectacular 360-degree views of the Himalayas. Descend to a lower camp for the night.",
      },
      {
        title: "Day 5: Return Journey",
        description:
          "Trek back to the starting point through a different route, experiencing new landscapes and vistas before concluding your adventure.",
      },
    ],
    whatToBring: [
      "Comfortable trekking shoes with good grip",
      "Layered clothing (temperatures can vary significantly)",
      "Rain protection (waterproof jacket and backpack cover)",
      "Sunscreen, sunglasses, and hat",
      "Personal first aid kit",
      "Water bottle and water purification tablets",
      "Headlamp or flashlight",
      "Trekking poles (optional but recommended)",
    ],
    bestTime: "April to June and September to November",
    price: "₹2,500 - ₹15,000 per person (depending on duration and group size)",
    groupSize: "1-10 people",
    tips: [
      "Book your trek and obtain necessary permits in advance",
      "Acclimatize properly to avoid altitude sickness",
      "Carry sufficient water and stay hydrated throughout the trek",
      "Respect wildlife and maintain a safe distance",
      "Follow 'Leave No Trace' principles and carry back all waste",
      "Listen to your guide and follow their instructions for a safe experience",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107878.37415803732!2d77.44999999999999!3d31.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f9dbcb2c1df9%3A0x7db0fc7c71b0f6e6!2sGreat%20Himalayan%20National%20Park!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Trout Fishing in Tirthan River",
    slug: "trout-fishing",
    category: "Adventure",
    location: "Tirthan River, Various Spots",
    duration: "Half day - Full day",
    difficulty: "Easy",
    rating: 4.7,
    images: ["/images/activity-fishing-1.jpg", "/images/activity-fishing-2.jpg", "/images/activity-fishing-3.jpg"],
    image: "/images/activity-fishing.jpg",
    shortDescription: "Catch trout in the crystal-clear waters of the Tirthan River.",
    description: [
      "Experience the joy of angling in the crystal-clear waters of the Tirthan River, renowned for its abundant brown and rainbow trout. This pristine river, flowing through the heart of Tirthan Valley, offers some of the best trout fishing opportunities in the Himalayas.",
      "Trout fishing in Tirthan River is a peaceful yet exciting activity that allows you to connect with nature while testing your angling skills. The river's clean, fast-flowing waters create an ideal habitat for trout, making it a paradise for fishing enthusiasts of all levels.",
      "Whether you're a seasoned angler or trying fishing for the first time, our experienced local guides will provide all the necessary equipment and share their knowledge of the best fishing spots and techniques. They'll help you master the art of catching these elusive fish while respecting the river's ecosystem.",
    ],
    highlights: [
      "Fish in one of India's premier trout fishing destinations",
      "Learn angling techniques from experienced local guides",
      "Enjoy the serene environment of the Tirthan River",
      "Catch brown and rainbow trout in pristine waters",
      "Option for catch-and-cook experiences (subject to regulations)",
    ],
    whatToBring: [
      "Comfortable waterproof footwear",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Light, quick-drying clothes",
      "Insect repellent",
      "Water bottle",
      "Camera (waterproof if possible)",
    ],
    bestTime: "March to June and September to November",
    price: "₹1,500 - ₹3,000 per person (including equipment and license)",
    groupSize: "1-4 people per guide",
    tips: [
      "Obtain a fishing license before starting (our guides can assist with this)",
      "Practice catch and release to maintain fish populations",
      "Wear polarized sunglasses to better spot fish in the water",
      "Move quietly along the riverbank to avoid scaring the fish",
      "Follow all local fishing regulations and seasonal restrictions",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13483.204673124224!2d77.45!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f8c0a4e1bea3%3A0x7a73af102a4eb05a!2sTirthan%20River!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Camping by the Riverside",
    slug: "riverside-camping",
    category: "Adventure",
    location: "Various locations along Tirthan River",
    duration: "Overnight (1-3 nights recommended)",
    rating: 4.8,
    images: ["/images/activity-camping-1.jpg", "/images/activity-camping-2.jpg", "/images/activity-camping-3.jpg"],
    image: "/images/activity-camping.jpg",
    shortDescription: "Experience nights under the starlit Himalayan sky by the riverside.",
    description: [
      "Escape the hustle and bustle of city life with a tranquil camping experience by the Tirthan River. Fall asleep to the soothing sounds of flowing water and wake up to the chirping of birds in this pristine natural setting.",
      "Our riverside camping experience offers comfortable tents set up in scenic locations along the Tirthan River. Each campsite is carefully selected to provide privacy, safety, and stunning views of the surrounding mountains and forests.",
      "The camping experience includes delicious meals prepared with locally sourced ingredients, evening bonfires under the starlit Himalayan sky, and various optional activities such as nature walks, bird watching, and fishing. It's the perfect way to disconnect from technology and reconnect with nature.",
    ],
    highlights: [
      "Camp in scenic locations with river and mountain views",
      "Experience nights under the starlit Himalayan sky",
      "Enjoy evening bonfires with music and storytelling",
      "Savor delicious meals prepared with local ingredients",
      "Participate in optional activities like nature walks and bird watching",
    ],
    whatToBring: [
      "Warm clothing for evenings (temperatures drop significantly after sunset)",
      "Personal toiletries and medications",
      "Flashlight or headlamp",
      "Insect repellent",
      "Camera",
      "Personal water bottle",
    ],
    bestTime: "March to June and September to November",
    price: "₹1,800 - ₹3,500 per person per night (all-inclusive)",
    groupSize: "2-20 people",
    tips: [
      "Book in advance during peak seasons",
      "Pack layers as temperatures vary between day and night",
      "Bring a good quality sleeping bag for extra warmth",
      "Respect the natural environment and follow 'Leave No Trace' principles",
      "Keep food secured to avoid attracting wildlife",
      "Carry a power bank as electricity may not be available at all campsites",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13483.204673124224!2d77.45!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f8c0a4e1bea3%3A0x7a73af102a4eb05a!2sTirthan%20Valley!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Village Tours",
    slug: "village-tours",
    category: "Cultural",
    location: "Various villages in Tirthan Valley",
    duration: "Half day - Full day",
    rating: 4.6,
    images: ["/images/activity-village-1.jpg", "/images/activity-village-2.jpg", "/images/activity-village-3.jpg"],
    image: "/images/activity-village.jpg",
    shortDescription: "Immerse yourself in the local culture and traditions of Himachali villages.",
    description: [
      "Immerse yourself in the authentic rural life of Himachal Pradesh with our guided village tours in Tirthan Valley. These tours offer a unique opportunity to experience the rich cultural heritage, traditional architecture, and warm hospitality of the local communities.",
      "Visit traditional Himachali villages like Gushaini, Nagini, and Shoja, where time seems to stand still. Explore ancient wooden houses with intricate carvings, interact with friendly locals, and learn about their customs, traditions, and sustainable way of life that has remained largely unchanged for generations.",
      "Our knowledgeable local guides will take you through narrow village paths, introduce you to local families, and share fascinating stories and legends that have been passed down through generations. You'll gain insights into traditional farming practices, local crafts, and the harmonious relationship between the villagers and their natural surroundings.",
    ],
    highlights: [
      "Visit traditional Himachali villages with unique architecture",
      "Interact with local families and experience their hospitality",
      "Learn about traditional customs, crafts, and farming practices",
      "Sample authentic local cuisine in a village home",
      "Witness traditional music and dance performances (on special arrangements)",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Camera",
      "Water bottle",
      "Small gifts for host families (optional)",
    ],
    bestTime: "Year-round (each season offers a different perspective of village life)",
    price: "₹800 - ₹2,000 per person (depending on duration and inclusions)",
    groupSize: "1-10 people",
    tips: [
      "Dress modestly out of respect for local customs",
      "Ask permission before taking photographs of people",
      "Learn a few basic Hindi or local phrases to connect better with villagers",
      "Be open to trying local foods and participating in activities",
      "Respect private property and religious sites",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13483.204673124224!2d77.45!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f8c0a4e1bea3%3A0x7a73af102a4eb05a!2sTirthan%20Valley!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Bird Watching",
    slug: "bird-watching",
    category: "Nature & Wildlife",
    location: "Great Himalayan National Park and surrounding areas",
    duration: "Half day - Full day",
    rating: 4.7,
    images: ["/images/activity-birds-1.jpg", "/images/activity-birds-2.jpg", "/images/activity-birds-3.jpg"],
    image: "/images/activity-birds.jpg",
    shortDescription: "Spot rare and colorful bird species in their natural habitat.",
    description: [
      "Tirthan Valley is a paradise for bird enthusiasts, with over 200 species of birds inhabiting its diverse ecosystems. Our guided bird watching tours offer a chance to spot some of the rarest and most colorful avian species in the Himalayas.",
      "The Great Himalayan National Park and surrounding forests are home to several endangered and endemic bird species, including the Western Tragopan, Himalayan Monal (the state bird of Himachal Pradesh), Koklass Pheasant, and White-throated Tit. With the guidance of our expert naturalists, you'll have the opportunity to observe these magnificent birds in their natural habitat.",
      "Our bird watching tours are designed for both beginners and experienced birders. We provide high-quality binoculars and spotting scopes, and our guides are well-versed in bird calls and behaviors, helping you identify different species and understand their ecological significance.",
    ],
    highlights: [
      "Spot rare Himalayan bird species with expert naturalists",
      "Explore diverse habitats from riverine areas to alpine meadows",
      "Learn about bird identification, calls, and behaviors",
      "Contribute to citizen science through bird counting and documentation",
      "Photography opportunities in pristine natural settings",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Layered clothing in neutral colors",
      "Personal binoculars (if you have them)",
      "Camera with zoom lens",
      "Field guide (optional)",
      "Water bottle and snacks",
    ],
    bestTime: "April to June and October to November",
    price: "₹1,200 - ₹3,000 per person (depending on duration and location)",
    groupSize: "1-6 people (small groups for minimal disturbance)",
    tips: [
      "Start early in the morning when birds are most active",
      "Wear muted colors to avoid scaring away birds",
      "Move quietly and speak in whispers",
      "Be patient and give yourself time to observe",
      "Maintain a respectful distance from nesting sites",
      "Keep a journal of species spotted for a rewarding experience",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107878.37415803732!2d77.44999999999999!3d31.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f9dbcb2c1df9%3A0x7db0fc7c71b0f6e6!2sGreat%20Himalayan%20National%20Park!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Jalori Pass Trek",
    slug: "jalori-pass-trek",
    category: "Adventure",
    location: "Jalori Pass, Tirthan Valley",
    duration: "1 day",
    difficulty: "Moderate",
    rating: 4.8,
    images: [
      "/images/activity-jalori-1.jpg",
      "/images/activity-jalori-2.jpg",
      "/images/activity-jalori-3.jpg",
      "/images/activity-jalori-4.jpg",
    ],
    image: "/images/activity-jalori.jpg",
    shortDescription: "Trek to one of the lowest mountain passes in the Himalayas with breathtaking views.",
    description: [
      "Embark on an exhilarating trek to Jalori Pass, one of the lowest mountain passes in the Himalayas at an altitude of 3,120 meters (10,236 feet). This accessible yet rewarding trek offers breathtaking panoramic views of the surrounding mountains and valleys, making it perfect for both beginners and experienced trekkers.",
      "The trek begins from the road head at Jalori Pass, which is accessible by vehicle from Tirthan Valley. From there, you can choose between two popular trekking routes: one leading to the serene Serolsar Lake and the other to the historic Raghupur Fort. Both trails take you through dense forests of oak, deodar, and pine, with abundant wildflowers and diverse bird species.",
      "The Jalori Pass trek can be completed as a day hike, but many trekkers choose to camp overnight to fully experience the tranquility of the mountains and witness the spectacular sunrise over the Himalayan peaks. The relatively moderate difficulty level and stunning scenery make this trek a must-do activity when visiting Tirthan Valley.",
    ],
    highlights: [
      "Trek through one of the lowest mountain passes in the Himalayas",
      "Choose between routes to Serolsar Lake or Raghupur Fort",
      "Experience diverse forest ecosystems with rich flora and fauna",
      "Enjoy panoramic views of snow-capped Himalayan peaks",
      "Suitable for beginners while still rewarding for experienced trekkers",
    ],
    itinerary: [
      {
        title: "Morning: Drive to Jalori Pass",
        description:
          "Start early from your accommodation in Tirthan Valley and drive to Jalori Pass (approximately 1-2 hours depending on your starting point). Take some time to acclimatize and enjoy the initial views.",
      },
      {
        title: "Mid-morning: Begin Trek",
        description:
          "Start your trek from Jalori Pass, choosing either the Serolsar Lake route (5 km) or the Raghupur Fort route (3 km). Both trails begin with a gradual ascent through dense forests.",
      },
      {
        title: "Afternoon: Destination Exploration",
        description:
          "Reach your chosen destination by afternoon. Explore Serolsar Lake with its spiritual significance or the ruins of Raghupur Fort with its historical importance and panoramic views.",
      },
      {
        title: "Evening: Return Trek",
        description:
          "Begin your return journey to Jalori Pass, taking a different path if possible to experience more of the diverse landscape. Arrive back at Jalori Pass by evening.",
      },
    ],
    whatToBring: [
      "Comfortable trekking shoes with good grip",
      "Layered clothing (weather can change quickly at high altitudes)",
      "Rain protection during monsoon season",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Water bottle (at least 2 liters)",
      "Energy snacks and packed lunch",
      "Basic first aid kit",
      "Camera",
    ],
    bestTime: "April to June and September to November",
    price: "₹1,000 - ₹2,500 per person (depending on group size and inclusions)",
    groupSize: "1-8 people",
    tips: [
      "Start early to have ample time for exploration at your destination",
      "Check weather conditions before starting the trek",
      "Carry sufficient water as there are limited sources on the trail",
      "Acclimatize properly at Jalori Pass before beginning the trek",
      "Consider hiring a local guide for enhanced safety and knowledge",
      "Respect the natural environment and follow 'Leave No Trace' principles",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13483.204673124224!2d77.38!3d31.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f7e3f367bb3b%3A0x44e2a0a8a34a7dc7!2sJalori%20Pass!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Wildlife Safari",
    slug: "wildlife-safari",
    category: "Nature & Wildlife",
    location: "Great Himalayan National Park",
    duration: "Full day",
    rating: 4.7,
    images: [
      "/images/activity-wildlife-1.jpg",
      "/images/activity-wildlife-2.jpg",
      "/images/activity-wildlife-3.jpg",
      "/images/activity-wildlife-4.jpg",
    ],
    image: "/images/activity-wildlife.jpg",
    shortDescription: "Spot rare and endangered species like the snow leopard and Himalayan brown bear.",
    description: [
      "Embark on an unforgettable wildlife safari in the Great Himalayan National Park (GHNP), a UNESCO World Heritage Site known for its exceptional biodiversity. This guided expedition offers a rare opportunity to observe some of the Himalayas' most elusive and endangered species in their natural habitat.",
      "The park is home to over 375 fauna species, including the endangered snow leopard, Himalayan brown bear, blue sheep, musk deer, and the vibrant Western Tragopan. Our experienced naturalists and wildlife experts will guide you through the park's diverse ecosystems, helping you spot and identify various animals and birds while sharing fascinating insights about their behavior and conservation.",
      "Unlike traditional vehicle safaris, wildlife exploration in GHNP is conducted on foot through carefully selected trails that maximize wildlife sighting opportunities while ensuring minimal disturbance to the animals. The immersive experience allows you to connect deeply with nature and understand the delicate balance of the Himalayan ecosystem.",
    ],
    highlights: [
      "Explore a UNESCO World Heritage Site with exceptional biodiversity",
      "Opportunity to spot rare and endangered Himalayan wildlife",
      "Guided by experienced naturalists with extensive knowledge of local fauna",
      "Learn about wildlife conservation efforts in the Western Himalayas",
      "Immersive walking safari experience through diverse habitats",
    ],
    whatToBring: [
      "Comfortable hiking shoes with good grip",
      "Layered clothing in neutral colors",
      "Binoculars for wildlife spotting",
      "Camera with zoom lens",
      "Water bottle and energy snacks",
      "Small backpack for personal items",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Rain protection during monsoon season",
    ],
    bestTime: "April to June and September to November",
    price: "₹2,500 - ₹5,000 per person (including permits, guide, and meals)",
    groupSize: "1-6 people (small groups for minimal disturbance)",
    tips: [
      "Maintain silence during the safari to increase chances of wildlife sightings",
      "Wear muted colors that blend with the environment",
      "Follow your guide's instructions at all times for safety",
      "Keep a safe distance from all wildlife",
      "Be patient - wildlife sightings require time and patience",
      "Carry a field guide to enhance your wildlife identification skills",
      "Respect park regulations and stay on designated trails",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107878.37415803732!2d77.44999999999999!3d31.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f9dbcb2c1df9%3A0x7db0fc7c71b0f6e6!2sGreat%20Himalayan%20National%20Park!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Local Cooking Classes",
    slug: "cooking-classes",
    category: "Cultural",
    location: "Various homestays and resorts in Tirthan Valley",
    duration: "2-3 hours",
    rating: 4.9,
    images: [
      "/images/activity-cooking-1.jpg",
      "/images/activity-cooking-2.jpg",
      "/images/activity-cooking-3.jpg",
      "/images/activity-cooking-4.jpg",
    ],
    image: "/images/activity-cooking.jpg",
    shortDescription: "Learn to prepare traditional Himachali dishes from local experts.",
    description: [
      "Discover the authentic flavors of Himachali cuisine through our immersive cooking classes led by local experts. These hands-on culinary experiences offer a delightful way to connect with the region's rich cultural heritage through its traditional food.",
      "Learn to prepare signature Himachali dishes such as Siddu (steamed bread stuffed with poppy seeds), Madra (chickpeas in yogurt gravy), Chana Madra (chickpeas in yogurt gravy), Babru (black gram stuffed flatbread), and various local pickles and chutneys. Our cooking classes emphasize the use of locally sourced, seasonal ingredients and traditional cooking techniques that have been passed down through generations.",
      "The classes are conducted in authentic settings, typically in local homes or homestays, providing a genuine glimpse into Himachali kitchen culture. After the cooking session, enjoy the fruits of your labor with a communal meal, sharing stories and culinary traditions with your hosts and fellow participants.",
    ],
    highlights: [
      "Learn authentic Himachali recipes from local culinary experts",
      "Cook with fresh, locally sourced, seasonal ingredients",
      "Understand traditional cooking techniques and their cultural significance",
      "Receive recipe cards to recreate the dishes at home",
      "Enjoy a communal meal in an authentic setting",
      "Take home a small sample of local spices (subject to availability)",
    ],
    whatToBring: [
      "Appetite and enthusiasm for learning",
      "Camera to document your culinary creations",
      "Notebook for additional tips and recipes (optional)",
      "Apron (though usually provided)",
    ],
    bestTime: "Year-round",
    price: "₹1,200 - ₹2,500 per person (depending on menu and inclusions)",
    groupSize: "2-8 people",
    tips: [
      "Inform the hosts in advance about any dietary restrictions or allergies",
      "Ask questions about ingredient substitutions for recreating dishes at home",
      "Learn about the cultural significance of each dish",
      "Participate actively in all stages of preparation for the full experience",
      "Consider booking in advance as classes have limited capacity",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13483.204673124224!2d77.45!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f8c0a4e1bea3%3A0x7a73af102a4eb05a!2sTirthan%20Valley!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Photography Tours",
    slug: "photography-tours",
    category: "Nature & Wildlife",
    location: "Throughout Tirthan Valley",
    duration: "Half day - Full day",
    rating: 4.8,
    images: [
      "/images/activity-photography-1.jpg",
      "/images/activity-photography-2.jpg",
      "/images/activity-photography-3.jpg",
      "/images/activity-photography-4.jpg",
    ],
    image: "/images/activity-photography.jpg",
    shortDescription: "Capture the breathtaking landscapes, vibrant culture, and diverse wildlife of Tirthan Valley.",
    description: [
      "Capture the breathtaking beauty of Tirthan Valley through our specialized photography tours, designed for both amateur enthusiasts and seasoned photographers. These guided excursions take you to the most photogenic locations in the valley at optimal times for lighting and composition.",
      "Led by experienced photographers familiar with the region, our tours focus on diverse themes including landscape, wildlife, cultural, and macro photography. Your guide will help you find the perfect angles, adjust your camera settings, and develop your unique photographic style while exploring the valley's stunning natural and cultural heritage.",
      "From the golden light illuminating the snow-capped peaks at sunrise to the vibrant village life, ancient architecture, and the rich biodiversity of the Great Himalayan National Park, Tirthan Valley offers endless photographic opportunities. The tours are customized based on your interests, skill level, and the seasonal highlights of the region.",
    ],
    highlights: [
      "Visit the most photogenic locations with optimal lighting conditions",
      "Receive guidance from experienced photographers familiar with the region",
      "Learn techniques for landscape, wildlife, portrait, and macro photography",
      "Capture authentic cultural moments in traditional Himachali villages",
      "Improve your composition, lighting, and camera skills",
      "Small groups ensure personalized attention and minimal environmental impact",
    ],
    whatToBring: [
      "Camera equipment (DSLR/mirrorless camera recommended but not required)",
      "Extra batteries and memory cards",
      "Tripod for low-light and long-exposure photography",
      "Various lenses if available (wide-angle for landscapes, telephoto for wildlife)",
      "Weather-appropriate clothing in neutral colors",
      "Comfortable walking shoes",
      "Water bottle and snacks",
    ],
    bestTime: "Year-round (each season offers unique photographic opportunities)",
    price: "₹2,000 - ₹5,000 per person (depending on duration and location)",
    groupSize: "1-6 people",
    tips: [
      "Communicate your photography interests and skill level when booking",
      "Arrive early for sunrise/golden hour shoots",
      "Bring appropriate gear for the weather conditions",
      "Be respectful when photographing local people - always ask permission",
      "Pack light but bring essential accessories",
      "Consider a polarizing filter for reducing glare on water and enhancing colors",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13483.204673124224!2d77.45!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f8c0a4e1bea3%3A0x7a73af102a4eb05a!2sTirthan%20Valley!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Medicinal Plant Walks",
    slug: "medicinal-plant-walks",
    category: "Nature & Wildlife",
    location: "Forests around Tirthan Valley",
    duration: "2-3 hours",
    rating: 4.6,
    images: [
      "/images/activity-plants-1.jpg",
      "/images/activity-plants-2.jpg",
      "/images/activity-plants-3.jpg",
      "/images/activity-plants-4.jpg",
    ],
    image: "/images/activity-plants.jpg",
    shortDescription: "Learn about the various medicinal plants found in the region and their traditional uses.",
    description: [
      "Discover the healing secrets of the Himalayas through our guided medicinal plant walks in the forests surrounding Tirthan Valley. Led by knowledgeable local experts with generations of traditional herbal wisdom, these educational walks offer fascinating insights into the rich botanical heritage of the region.",
      "The Western Himalayas are home to over 1,700 medicinal plant species, many of which have been used in traditional Ayurvedic and local healing practices for centuries. During the walk, you'll learn to identify various medicinal plants, understand their traditional uses, and discover the scientific basis behind their healing properties.",
      "As you explore the diverse forest ecosystems, your guide will share stories about the cultural significance of these plants, sustainable harvesting practices, and the challenges of conserving these valuable natural resources. The walk combines botany, ethnobotany, and cultural heritage for a holistic understanding of the relationship between the local communities and their natural environment.",
    ],
    highlights: [
      "Learn to identify common medicinal plants of the Western Himalayas",
      "Understand traditional and modern uses of various herbs",
      "Discover sustainable harvesting and conservation practices",
      "Explore diverse forest ecosystems with rich biodiversity",
      "Connect with traditional ecological knowledge of the region",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Notebook and pen for taking notes",
      "Camera for documenting plants",
      "Water bottle",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Insect repellent (seasonal)",
    ],
    bestTime: "April to October (peak flowering seasons vary by altitude)",
    price: "₹800 - ₹1,500 per person",
    groupSize: "2-8 people",
    tips: [
      "Wear long pants to protect against insects and thorny plants",
      "Ask questions - the guides have extensive knowledge to share",
      "Take notes or photographs to help remember plant identifications",
      "Never consume any plant without expert confirmation",
      "Respect the forest ecosystem and follow 'Leave No Trace' principles",
      "Consider bringing a field guide for reference",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13483.204673124224!2d77.45!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f8c0a4e1bea3%3A0x7a73af102a4eb05a!2sTirthan%20Valley!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Traditional Craft Workshops",
    slug: "craft-workshops",
    category: "Cultural",
    location: "Various villages in Tirthan Valley",
    duration: "2-4 hours",
    rating: 4.7,
    images: [
      "/images/activity-crafts-1.jpg",
      "/images/activity-crafts-2.jpg",
      "/images/activity-crafts-3.jpg",
      "/images/activity-crafts-4.jpg",
    ],
    image: "/images/activity-crafts.jpg",
    shortDescription: "Learn traditional Himachali crafts like weaving, wood carving, and basket making.",
    description: [
      "Immerse yourself in the rich artistic heritage of Himachal Pradesh through our traditional craft workshops in Tirthan Valley. These hands-on sessions offer a unique opportunity to learn ancient crafting techniques from skilled local artisans who have inherited their knowledge through generations.",
      "Choose from a variety of traditional Himachali crafts including wool weaving, Kullu shawl making, wood carving, basket weaving, and traditional Himachali jewelry making. Each workshop begins with an introduction to the cultural significance and history of the craft, followed by a demonstration of techniques and materials used.",
      "Under the guidance of master craftspeople, you'll create your own handmade souvenir to take home as a meaningful memento of your time in Tirthan Valley. These workshops not only provide a creative and engaging experience but also contribute to preserving traditional skills and supporting local artisans.",
    ],
    highlights: [
      "Learn authentic craft techniques from skilled local artisans",
      "Create your own handmade souvenir to take home",
      "Understand the cultural significance of traditional Himachali crafts",
      "Support the preservation of traditional skills and local livelihoods",
      "Engage in a meaningful cultural exchange with local communities",
    ],
    whatToBring: [
      "Enthusiasm for learning",
      "Camera to document your experience",
      "Comfortable clothing that can get slightly dirty",
    ],
    bestTime: "Year-round",
    price: "₹800 - ₹2,000 per person (depending on craft type and materials)",
    groupSize: "2-8 people",
    tips: [
      "Book in advance to ensure availability of your preferred craft workshop",
      "Be patient with yourself - mastering traditional techniques takes time",
      "Ask questions about the cultural context and history of the craft",
      "Consider purchasing additional crafts from the artisans to support their work",
      "Respect the intellectual property of the artisans by not commercially reproducing their designs",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13483.204673124224!2d77.45!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f8c0a4e1bea3%3A0x7a73af102a4eb05a!2sTirthan%20Valley!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
  {
    title: "Serolsar Lake Trek",
    slug: "serolsar-lake-trek",
    category: "Adventure",
    location: "Serolsar Lake via Jalori Pass",
    duration: "1 day",
    difficulty: "Moderate",
    rating: 4.8,
    images: [
      "/images/activity-serolsar-1.jpg",
      "/images/activity-serolsar-2.jpg",
      "/images/activity-serolsar-3.jpg",
      "/images/activity-serolsar-4.jpg",
    ],
    image: "/images/activity-serolsar.jpg",
    shortDescription: "Trek to the mystical Serolsar Lake surrounded by dense forests.",
    description: [
      "Embark on a mesmerizing trek to Serolsar Lake, a pristine high-altitude lake nestled amidst dense forests at an elevation of 3,100 meters. This moderate trek begins at Jalori Pass and takes you through enchanting oak and rhododendron forests, offering a perfect blend of natural beauty and spiritual significance.",
      "The 5-kilometer trail from Jalori Pass to Serolsar Lake is well-marked and offers stunning views of the surrounding mountains and valleys. As you trek through the forest, you'll encounter diverse flora and fauna, including colorful wildflowers, medicinal plants, and various bird species that inhabit this rich ecosystem.",
      "Upon reaching Serolsar Lake, you'll be rewarded with the serene sight of crystal-clear waters surrounded by lush meadows and towering trees. The lake holds religious significance for locals, who believe it to be the abode of the goddess Budhi Nagin. A small temple near the lake adds to its mystical aura, making it not just a natural wonder but also a cultural landmark.",
    ],
    highlights: [
      "Trek through beautiful oak and rhododendron forests",
      "Visit a serene high-altitude lake with spiritual significance",
      "Enjoy panoramic views of the surrounding Himalayan peaks",
      "Spot diverse flora and fauna along the trail",
      "Experience both natural beauty and cultural heritage",
    ],
    itinerary: [
      {
        title: "Morning: Drive to Jalori Pass",
        description:
          "Start early from your accommodation in Tirthan Valley and drive to Jalori Pass (approximately 1-2 hours depending on your starting point). Take some time to acclimatize and enjoy the initial views.",
      },
      {
        title: "Mid-morning: Begin Trek to Serolsar Lake",
        description:
          "Start your trek from Jalori Pass. The 5 km trail begins with a gradual ascent through dense forests of oak, deodar, and rhododendron. The path is well-marked but can be slippery during and after rainfall.",
      },
      {
        title: "Afternoon: Explore Serolsar Lake",
        description:
          "Reach Serolsar Lake after approximately 2-3 hours of trekking. Spend time exploring the lake and its surroundings, visit the temple of Budhi Nagin, and enjoy a packed lunch amidst the tranquil setting.",
      },
      {
        title: "Evening: Return Trek",
        description:
          "Begin your return journey to Jalori Pass, taking time to appreciate different perspectives of the landscape. Arrive back at Jalori Pass by evening and drive back to your accommodation.",
      },
    ],
    whatToBring: [
      "Comfortable trekking shoes with good grip",
      "Layered clothing (weather can change quickly at high altitudes)",
      "Rain protection during monsoon season",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Water bottle (at least 2 liters)",
      "Energy snacks and packed lunch",
      "Basic first aid kit",
      "Camera",
    ],
    bestTime: "April to June and September to November",
    price: "₹1,000 - ₹2,500 per person (depending on group size and inclusions)",
    groupSize: "1-8 people",
    tips: [
      "Start early to have ample time for exploration at the lake",
      "Check weather conditions before starting the trek",
      "Carry sufficient water as there are limited sources on the trail",
      "Respect the religious significance of the lake",
      "Consider hiring a local guide for enhanced safety and cultural insights",
      "The trail can be slippery, especially during and after rainfall, so tread carefully",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.7!2d77.4!3d31.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f7c3b8b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sSerolsar%20Lake!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
  },
]
