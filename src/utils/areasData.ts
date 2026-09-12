export interface AreaReview {
  name: string;
  locality: string;
  rating: number;
  review: string;
  serviceUsed: string;
  date: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  localities: string[];
  landmarks: string[];
  customerReviews: AreaReview[];
  nearbySlugs: string[];
}

const localTraits: Record<
  string,
  {
    name: string;
    desc: string;
    housingType: string;
    localizedDetail: string;
    tagline: string;
    localities: string[];
    landmarks: string[];
    customerReviews: AreaReview[];
  }
> = {
  adyar: {
    name: "Adyar",
    desc: "Adyar is one of South Chennai's premier residential and cultural hubs, bordered by the Buckingham Canal and the Bay of Bengal, featuring upscale apartment complexes and leafy avenues.",
    housingType: "premium high-rise sea-breeze apartments, independent villas, and luxury residential enclaves",
    localizedDetail: "Proximity to the coast and the Adyar River brings saline sea breezes and heavy bird activity, making SS316 marine-grade invisible grills and UV-treated anti-bird nets essential for balconies.",
    tagline: "Premier safety nets & SS316 invisible grills in Adyar — certified installation with 5-year warranty protection.",
    localities: ["Besant Nagar", "Gandhi Nagar", "Kasturba Nagar", "Shastri Nagar", "Indira Nagar", "Vannanthurai", "Padmanabha Nagar"],
    landmarks: ["Adyar Ananda Bhavan Junction", "Theosophical Society", "Besant Avenue", "Elliot's Beach", "Adyar Bridge"],
    customerReviews: [
      {
        name: "S. Raghavan",
        locality: "Gandhi Nagar",
        rating: 5,
        review: "Ram Enterprises installed invisible grills on our 7th floor balcony in Adyar. The sea view is completely unobstructed and the cables are rock solid. Excellent work!",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-15",
      },
      {
        name: "Meenakshi Sundaram",
        locality: "Kasturba Nagar",
        rating: 5,
        review: "Installed anti-pigeon netting across our utility area and balconies. Very clean installation and zero bird disturbance since day one.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-20",
      },
    ],
  },
  velachery: {
    name: "Velachery",
    desc: "Velachery is a fast-growing commercial and residential powerhouse in South Chennai, connecting OMR IT corridor with central hubs, packed with multi-story apartment communities.",
    housingType: "modern multi-story apartment communities, gated townships, and builder floors",
    localizedDetail: "High-density residential towers near marshland water bodies face severe pigeon roosting and fall risks for toddlers, requiring high-tensile safety netting and ceiling cloth drying systems.",
    tagline: "Certified balcony safety netting and modern invisible grills across Velachery — doorstep laser measurement.",
    localities: ["Vijayanagar", "Baby Nagar", "Tansi Nagar", "Gandhi Salai", "VGP Selva Nagar", "Bhuvaneshwari Nagar", "Dhandeeswaram"],
    landmarks: ["Phoenix Marketcity", "Velachery Railway Station", "Vijayanagar Bus Terminus", "Grand Square Mall"],
    customerReviews: [
      {
        name: "Karthik Subramanian",
        locality: "Vijayanagar",
        rating: 5,
        review: "The technicians were punctual and fitted child safety netting with tight anchor spacing. Very reassuring for our 4-year-old twins.",
        serviceUsed: "Children Safety Nets",
        date: "2026-05-28",
      },
      {
        name: "Deepa Narayanan",
        locality: "Baby Nagar",
        rating: 5,
        review: "Ceiling cloth drying hangers installed by Ram Enterprises saved so much floor space on our balcony. Heavy-duty stainless steel rods and smooth pulleys.",
        serviceUsed: "Ceiling Cloth Hangers",
        date: "2026-04-18",
      },
    ],
  },
  "anna-nagar": {
    name: "Anna Nagar",
    desc: "Anna Nagar is North-West Chennai's prestigious planned residential destination, renowned for wide tree-lined avenues, luxury multi-story residences, and prime commercial avenues.",
    housingType: "luxury multi-level residences, planned gated communities, and upscale boutique apartments",
    localizedDetail: "Large balconies and French windows require elegant SS316 invisible grills and durable bird spikes to maintain architectural elegance while ensuring total family security.",
    tagline: "Architectural invisible grills & durable safety nets in Anna Nagar — elegant, unobtrusive protection.",
    localities: ["Anna Nagar East", "Anna Nagar West", "Shanthi Colony", "Roundana", "Tower Park Area", "Chintamani", "Thirumangalam"],
    landmarks: ["Anna Nagar Tower Park", "Roundana Junction", "VR Chennai Mall", "Shanthi Colony Main Road"],
    customerReviews: [
      {
        name: "Dr. K. Vijayakumar",
        locality: "Shanthi Colony",
        rating: 5,
        review: "Ram Enterprises installed vertical invisible grills for our duplex staircase void and balcony. Truly seamless aesthetic and robust safety.",
        serviceUsed: "Staircase Invisible Grills",
        date: "2026-06-10",
      },
      {
        name: "Radhika Mohan",
        locality: "Anna Nagar East",
        rating: 5,
        review: "Pigeon problem completely eradicated from our 5th floor balcony. High-quality translucent nets that don't spoil the look.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-12",
      },
    ],
  },
  "t-nagar": {
    name: "T. Nagar",
    desc: "Thyagaraya Nagar (T. Nagar) is the bustling central retail and residential heart of Chennai, experiencing dense residential living and high-traffic multi-story complexes.",
    housingType: "dense urban apartment complexes, traditional residential lanes, and mixed-use commercial buildings",
    localizedDetail: "Pigeon infestations around AC compressors and open utility shafts are common in this dense neighborhood, requiring durable anti-bird netting and window grills.",
    tagline: "Trusted safety nets and window invisible grills across T. Nagar — fast same-day site inspection.",
    localities: ["Pondy Bazaar", "Usman Road", "Panagal Park", "GN Chetty Road", "Venkatnarayana Road", "Habibullah Road", "South Boag Road"],
    landmarks: ["Panagal Park", "Pondy Bazaar Pedestrian Plaza", "T. Nagar Bus Terminus", "Ranganathan Street"],
    customerReviews: [
      {
        name: "M. Balaji",
        locality: "Venkatnarayana Road",
        rating: 5,
        review: "Ram Enterprises did an outstanding job securing our building duct area and balcony with bird safety netting. Very reasonable pricing.",
        serviceUsed: "Duct Area Safety Nets",
        date: "2026-06-02",
      },
      {
        name: "Sangeetha R.",
        locality: "Pondy Bazaar",
        rating: 5,
        review: "Installed window invisible grills. The team was extremely polite and finished the job in under three hours.",
        serviceUsed: "Window Invisible Grills",
        date: "2026-05-04",
      },
    ],
  },
  tambaram: {
    name: "Tambaram",
    desc: "Tambaram serves as the major southern gateway of Chennai, with massive residential townships, educational campuses, and booming multi-story developments.",
    housingType: "large gated residential townships, independent villa communities, and multi-tier apartment complexes",
    localizedDetail: "Proximity to open lake beds and forested catchment zones leads to monkey intrusions and bird nesting, requiring heavy-duty monkey safety netting and balcony fall protection.",
    tagline: "Heavy-duty safety nets, monkey defense & invisible grills in Tambaram — prompt doorstep service.",
    localities: ["Tambaram West", "Tambaram East", "Sanatorium", "Mudichur Road", "Selaiyur", "Camp Road", "Irumbuliyur"],
    landmarks: ["Tambaram Railway Hub", "MCC College Campus", "Gandhi Park", "National Institute of Siddha"],
    customerReviews: [
      {
        name: "G. Venkatesh",
        locality: "Tambaram East",
        rating: 5,
        review: "Monkey troops were raiding our 3rd-floor balcony regularly. The reinforced monkey safety net installed by Ram Enterprises solved the problem permanently.",
        serviceUsed: "Monkey Safety Nets",
        date: "2026-06-18",
      },
      {
        name: "Lakshmi Narayanan",
        locality: "Mudichur Road",
        rating: 5,
        review: "Great quality balcony safety nets. Strong tensioning and very neat anchor hooks.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-05-14",
      },
    ],
  },
  porur: {
    name: "Porur",
    desc: "Porur is a bustling IT and healthcare hub in West Chennai, surrounded by expansive tech parks, medical institutions, and high-rise residential townships.",
    housingType: "high-rise IT township apartments, healthcare worker housing, and gated communities",
    localizedDetail: "High-rise towers in Porur experience strong seasonal winds and dust, requiring weather-resistant HDPE safety netting and sleek invisible grills.",
    tagline: "High-tensile balcony safety nets & modern invisible grills in Porur — 100% rust-free guarantee.",
    localities: ["Mugalivakkam", "Ramapuram", "Porur Junction", "Mount-Poonamallee Road", "Iyyappanthangal", "Gerugambakkam", "Maduravoyal Border"],
    landmarks: ["Porur Lake", "SRMC Hospital", "DLF Cybercity", "Porur Flyover Junction"],
    customerReviews: [
      {
        name: "Praveen Kumar",
        locality: "Mugalivakkam",
        rating: 5,
        review: "Ram Enterprises installed balcony invisible grills on our 11th floor apartment near DLF. The finish is top notch and safe for my kids.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-22",
      },
      {
        name: "Anandhi S.",
        locality: "Iyyappanthangal",
        rating: 5,
        review: "Prompt response and clean installation of anti-pigeon netting across our utility area. Highly recommended.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-04-29",
      },
    ],
  },
  madipakkam: {
    name: "Madipakkam",
    desc: "Madipakkam is a rapidly expanding residential zone in South Chennai favored by IT professionals, featuring hundreds of newly constructed apartment societies.",
    housingType: "contemporary residential apartment complexes, independent builder floors, and villa clusters",
    localizedDetail: "Balconies overlooking open lake areas require protective safety nets and bird exclusion systems to prevent bird nesting and ensure safety for young children.",
    tagline: "Reliable balcony safety netting and space-saving cloth drying hangers in Madipakkam — same-day quotes.",
    localities: ["Koot Road", "Puzhuthivakkam", "Balaiah Nagar", "Ram Nagar", "Moovarasampettai", "Karthikeyapuram", "Sadhasivam Nagar"],
    landmarks: ["Madipakkam Lake", "Balaiah Nagar Junction", "Puzhuthivakkam Bus Stand", "Koot Road Signal"],
    customerReviews: [
      {
        name: "S. Balamurugan",
        locality: "Ram Nagar",
        rating: 5,
        review: "Installed balcony safety nets for our toddler. The crew arrived on time and finished the work with high precision.",
        serviceUsed: "Children Safety Nets",
        date: "2026-06-08",
      },
      {
        name: "Chitra Ramesh",
        locality: "Balaiah Nagar",
        rating: 5,
        review: "Superb ceiling cloth hanger installation. The pulley system works effortlessly and saves our balcony space.",
        serviceUsed: "Ceiling Cloth Hangers",
        date: "2026-05-19",
      },
    ],
  },
  thiruvanmiyur: {
    name: "Thiruvanmiyur",
    desc: "Thiruvanmiyur marks the scenic coastal start of Chennai's East Coast Road (ECR), dotted with sea-view high-rises, cultural centers, and luxury beachside homes.",
    housingType: "coastal sea-view high-rises, luxury beach residences, and modern apartment complexes",
    localizedDetail: "Heavy marine salt spray causes rapid corrosion of ordinary metal bars. Marine-grade SS316 invisible wire grills and UV-stabilized copolymer nets are crucial for coastal protection.",
    tagline: "Marine-grade SS316 invisible grills & coastal safety nets in Thiruvanmiyur — rust-free 5-year warranty.",
    localities: ["Valmiki Nagar", "Kalakshetra Colony", "ECR Road", "Kottivakkam Border", "Marundeeswarar Temple Area", "Seaward Road"],
    landmarks: ["Thiruvanmiyur Beach", "Marundeeswarar Temple", "Kalakshetra Foundation", "Tidel Park Junction"],
    customerReviews: [
      {
        name: "N. Srinivasan",
        locality: "Valmiki Nagar",
        rating: 5,
        review: "Living near the beach, corrosion is always a headache. Ram Enterprises installed SS316 marine invisible grills that remain completely rust-free.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-12",
      },
      {
        name: "Uma Maheshwari",
        locality: "Kalakshetra Colony",
        rating: 5,
        review: "Excellent balcony bird netting. Translucent mesh that blends with the surroundings without blocking the ocean breeze.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-02",
      },
    ],
  },
  mylapore: {
    name: "Mylapore",
    desc: "Mylapore is Central Chennai's iconic heritage and residential landmark, characterized by historic temple precincts, traditional streets, and modern high-rise apartments.",
    housingType: "heritage apartment blocks, modern mid-rise towers, and traditional residential buildings",
    localizedDetail: "Large pigeon colonies around historic temple structures require humane, high-density anti-bird netting and polycarbonate bird spikes on architectural ledges.",
    tagline: "Humane pigeon exclusion netting & invisible grills in Mylapore — aesthetic and reliable protection.",
    localities: ["Luz Church Road", "San Thome", "Mandaveli", "Kapaleeshwarar Area", "Royapettah Border", "Kutchery Road", "CIT Colony"],
    landmarks: ["Kapaleeshwarar Temple", "Luz Corner", "San Thome Cathedral", "Nageswara Rao Park"],
    customerReviews: [
      {
        name: "K. Ranganathan",
        locality: "CIT Colony",
        rating: 5,
        review: "Our apartment terrace and balconies were overrun by pigeons. Ram Enterprises sealed everything with discreet netting. Clean and professional job.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-06-04",
      },
      {
        name: "Shyamala G.",
        locality: "Mandaveli",
        rating: 5,
        review: "Window invisible grills look so elegant compared to heavy iron bars. Natural breeze and light flow through easily.",
        serviceUsed: "Window Invisible Grills",
        date: "2026-04-22",
      },
    ],
  },
  nungambakkam: {
    name: "Nungambakkam",
    desc: "Nungambakkam is Central Chennai's upscale commercial and diplomatic district, featuring luxury apartments, corporate offices, and educational institutions.",
    housingType: "luxury high-rise residential towers, diplomatic residencies, and commercial corporate parks",
    localizedDetail: "Balconies in multi-story towers require certified fall arrest systems and transparent invisible grills that conform to modern aesthetic expectations.",
    tagline: "Luxury invisible grills and commercial safety netting in Nungambakkam — premium quality finish.",
    localities: ["Khader Nawaz Khan Road", "Sterling Road", "College Road", "Village Road", "Kothari Road", "Haddows Road", "Chetpet Border"],
    landmarks: ["Khader Nawaz Khan Road", "Loyola College", "Taj Coromandel", "Nungambakkam High Road"],
    customerReviews: [
      {
        name: "Rajesh Chandrasekhar",
        locality: "Sterling Road",
        rating: 5,
        review: "Installed invisible grills on our 9th-floor penthouse. The team used genuine SS316 cables and aluminium tracks. Superb finish.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-19",
      },
      {
        name: "Pooja Mehta",
        locality: "Khader Nawaz Khan Road",
        rating: 5,
        review: "Very smooth experience from quotation to installation. The safety net is sturdy and childproof.",
        serviceUsed: "Children Safety Nets",
        date: "2026-05-16",
      },
    ],
  },
  sholinganallur: {
    name: "Sholinganallur",
    desc: "Sholinganallur is the beating heart of Chennai's OMR IT Expressway, packed with mega gated communities, high-rise skyscrapers, and tech parks.",
    housingType: "mega high-rise IT townships, gated villa communities, and luxury residential sky-villas",
    localizedDetail: "High-rise apartments on 10th to 30th floors encounter high wind velocities, requiring certified high-tensile safety netting and high-tension SS316 wire grills.",
    tagline: "High-rise safety nets & SS316 invisible grills in Sholinganallur OMR — trusted by 500+ IT families.",
    localities: ["ELCOT SEZ", "Karapakkam", "Semmancheri", "Classic Farms", "Medavakkam Link Road", "Navalur Border", "Perumbakkam Road"],
    landmarks: ["Sholinganallur Signal Junction", "ELCOT IT Park", "Satyabama University", "OMR Toll Plaza Area"],
    customerReviews: [
      {
        name: "Arun Prakash",
        locality: "ELCOT SEZ Area",
        rating: 5,
        review: "We live on the 18th floor in Sholinganallur. Ram Enterprises installed high-tension safety nets and invisible grills. Safe, sturdy, and wind-resistant.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-25",
      },
      {
        name: "Divya Krishnan",
        locality: "Semmancheri",
        rating: 5,
        review: "Installed balcony safety nets and ceiling hangers. Prompt service and competitive rates.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-05-24",
      },
    ],
  },
  medavakkam: {
    name: "Medavakkam",
    desc: "Medavakkam is a thriving residential suburb connecting OMR and Tambaram, known for rapid apartment construction, schools, and family-friendly communities.",
    housingType: "modern residential apartment townships, independent duplexes, and gated societies",
    localizedDetail: "Surrounding greenery and open vacant plots bring pigeons and birds into utility balconies, requiring custom bird netting and child safety barriers.",
    tagline: "Childproof safety nets and anti-pigeon netting in Medavakkam — free doorstep quote.",
    localities: ["Perumbakkam", "Medavakkam Main Road", "Sithalapakkam", "Nanmangalam", "Koot Road", "Vengaivasal", "Gowrivakkam"],
    landmarks: ["Medavakkam Junction Flyover", "Nanmangalam Reserve Forest Border", "Sithalapakkam Lake", "Medavakkam Bus Stand"],
    customerReviews: [
      {
        name: "M. Saravanan",
        locality: "Perumbakkam",
        rating: 5,
        review: "Ram Enterprises installed child safety nets for our 4th floor balcony. The technicians explained the load capacity clearly.",
        serviceUsed: "Children Safety Nets",
        date: "2026-06-07",
      },
      {
        name: "Kavitha R.",
        locality: "Medavakkam Main Road",
        rating: 5,
        review: "Pigeon problem completely solved with their netting service. Very neatly done without disturbing the view.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-04-28",
      },
    ],
  },
  chromepet: {
    name: "Chromepet",
    desc: "Chromepet is an established southern Chennai residential hub along GST Road, featuring lively shopping markets, healthcare centers, and multi-tier apartment communities.",
    housingType: "dense residential apartments, independent residential buildings, and gated complexes",
    localizedDetail: "Urban pigeon activity around balconies and open window shafts creates sanitation issues, requiring long-lasting bird nets and sturdy window grills.",
    tagline: "Anti-bird netting and balcony invisible grills in Chromepet — fast doorstep delivery.",
    localities: ["Radha Nagar", "Hasthinapuram", "Nemilichery", "GST Road Area", "Nehru Nagar", "Nagappa Nagar", "Kumaran Kundram Area"],
    landmarks: ["Kumaran Kundram Temple", "Chromepet Railway Station", "MIT Campus", "Saravana Stores GST Road"],
    customerReviews: [
      {
        name: "T. Gopinath",
        locality: "Radha Nagar",
        rating: 5,
        review: "Installed balcony safety nets and cloth drying hangers with Ram Enterprises. Very reliable team and clean execution.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-06-11",
      },
      {
        name: "S. Hema",
        locality: "Hasthinapuram",
        rating: 5,
        review: "Prompt response and great quality bird netting on our 3rd floor flat. No more bird droppings.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-09",
      },
    ],
  },
  perungudi: {
    name: "Perungudi",
    desc: "Perungudi is a major IT corridor node along OMR, housing sprawling tech parks, multi-tier residential complexes, and modern condominiums.",
    housingType: "modern IT condominium towers, multi-story apartments, and gated townships",
    localizedDetail: "High-rise residential balconies facing lake and marshland borders face pigeon nests and high winds, requiring UV-stabilized heavy mesh and invisible wire barriers.",
    tagline: "Balcony safety nets & modern invisible grills in Perungudi OMR — certified quality and workmanship.",
    localities: ["OMR Road", "Kallukuttai Area", "Kandanchavadi", "Industrial Estate Area", "Seevaram", "Telephone Nagar", "Thirumalai Nagar"],
    landmarks: ["Perungudi Toll Plaza", "RMZ Millenia Tech Park", "Perungudi Lake", "Kandanchavadi Signal"],
    customerReviews: [
      {
        name: "V. Harish",
        locality: "Kandanchavadi",
        rating: 5,
        review: "Ram Enterprises installed invisible grills on our 14th floor balcony. High tension cables with zero view hindrance. Highly satisfied!",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-21",
      },
      {
        name: "Anitha Suresh",
        locality: "OMR Road",
        rating: 5,
        review: "Installed child safety nets across 3 balconies. Sturdy hooks and neat finish. Great customer care.",
        serviceUsed: "Children Safety Nets",
        date: "2026-05-17",
      },
    ],
  },
  pallikaranai: {
    name: "Pallikaranai",
    desc: "Pallikaranai is an expansive residential destination in South Chennai along the marshland belt, popular for modern apartment high-rises and rapid connectivity to Velachery.",
    housingType: "large residential multi-story complexes, modern apartment societies, and residential townships",
    localizedDetail: "Being adjacent to the marshland ecosystem brings large bird colonies and marsh birds near balconies, making anti-bird nets and balcony netting indispensable.",
    tagline: "Anti-pigeon safety nets and invisible grills across Pallikaranai — 100% humane protection.",
    localities: ["Velachery Main Road", "Oil Mill Road", "Ambal Nagar", "Kamoti Nagar", "Jalladianpet Border", "Maxworth Nagar", "Medavakkam Road"],
    landmarks: ["Pallikaranai Marshland Viewpoints", "Velachery-Tambaram Main Road", "Jerusalem College Area", "Kamoti Nagar Junction"],
    customerReviews: [
      {
        name: "R. Jayachandran",
        locality: "Velachery Main Road",
        rating: 5,
        review: "Marshland birds and pigeons were constantly disturbing our balcony. Ram Enterprises installed transparent anti-bird netting. Zero birds since!",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-06-16",
      },
      {
        name: "Nalini Swaminathan",
        locality: "Oil Mill Road",
        rating: 5,
        review: "Fitted balcony safety nets for child protection. The material is strong and weather-resistant.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-04-26",
      },
    ],
  },
  guindy: {
    name: "Guindy",
    desc: "Guindy is Chennai's key industrial, institutional, and transport hub, featuring premier educational institutions, tech parks, and residential enclaves.",
    housingType: "commercial tech parks, institutional hostels, and multi-story residential apartments",
    localizedDetail: "Proximity to Guindy National Park brings diverse bird populations and monkeys to residential balconies, requiring reinforced netting and invisible wire grills.",
    tagline: "Industrial & residential safety netting in Guindy — monkey defense and bird control experts.",
    localities: ["Kathipara Area", "Race Course Road", "Ekkaduthangal Border", "Alandur Border", "Guindy Industrial Estate", "Labour Colony", "Five Furlong Road"],
    landmarks: ["Kathipara Junction", "Guindy National Park", "Guindy Railway Station", "ITC Grand Chola Area"],
    customerReviews: [
      {
        name: "S. Mohanraj",
        locality: "Race Course Road",
        rating: 5,
        review: "Ram Enterprises installed monkey safety nets and balcony grills on our duplex home. Outstanding strength and neat anchors.",
        serviceUsed: "Monkey Safety Nets",
        date: "2026-06-05",
      },
      {
        name: "Geetha Raman",
        locality: "Ekkaduthangal Border",
        rating: 5,
        review: "Installed window invisible grills. They look clean and modern while ensuring total peace of mind.",
        serviceUsed: "Window Invisible Grills",
        date: "2026-05-11",
      },
    ],
  },
  kodambakkam: {
    name: "Kodambakkam",
    desc: "Kodambakkam is Central Chennai's cinema hub and vibrant residential locality, packed with classic apartment complexes, bustling avenues, and commercial hubs.",
    housingType: "central residential apartments, builder floors, and residential studio buildings",
    localizedDetail: "High-density residential buildings with open ventilation shafts require duct area safety netting and balcony bird exclusion.",
    tagline: "Trusted safety nets and window grills in Kodambakkam — same-day doorstep measurement.",
    localities: ["Arcot Road", "Trustpuram", "United India Colony", "Rangarajapuram", "Puliyur", "Liberty Area", "Power House Area"],
    landmarks: ["Kodambakkam Flyover", "Liberty Theatre Junction", "Arcot Road Signal", "Power House Signal"],
    customerReviews: [
      {
        name: "B. Suresh Kumar",
        locality: "Trustpuram",
        rating: 5,
        review: "Installed duct area netting for our 4-story building. The team worked safely and neatly sealed all open plumbing gaps.",
        serviceUsed: "Duct Area Safety Nets",
        date: "2026-06-14",
      },
      {
        name: "V. Lakshmi",
        locality: "United India Colony",
        rating: 5,
        review: "Great experience with balcony safety nets and ceiling cloth hangers. Very cost-effective.",
        serviceUsed: "Ceiling Cloth Hangers",
        date: "2026-04-16",
      },
    ],
  },
  "kk-nagar": {
    name: "K.K. Nagar",
    desc: "Kalaignar Karunanidhi Nagar (K.K. Nagar) is a well-planned central Chennai residential sector, renowned for organized avenues, parks, and multi-story apartments.",
    housingType: "planned sector apartment societies, independent houses, and multi-tier residences",
    localizedDetail: "Balconies overlooking parks experience heavy bird nesting, making UV-treated pigeon nets and SS316 balcony invisible grills essential.",
    tagline: "Premium invisible grills and balcony safety nets in K.K. Nagar — prompt local technician support.",
    localities: ["Munusamy Salai", "PT Rajan Salai", "Sector 1 to 12", "Rani Anna Nagar", "Ponnambalam Salai", "Alagirisamy Salai"],
    landmarks: ["Sivan Park", "K.K. Nagar Bus Terminus", "PSBB School Area", "ESI Hospital Area"],
    customerReviews: [
      {
        name: "K. Narayanan",
        locality: "PT Rajan Salai",
        rating: 5,
        review: "Ram Enterprises installed balcony invisible grills with genuine 316 marine cables. Looks stunning and ensures our kids are safe.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-23",
      },
      {
        name: "P. Vimala",
        locality: "Munusamy Salai",
        rating: 5,
        review: "Anti-bird netting was installed swiftly and cleanly. Pigeon problem is completely gone.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-21",
      },
    ],
  },
  "ashok-nagar": {
    name: "Ashok Nagar",
    desc: "Ashok Nagar is a prime residential and commercial neighborhood in Central Chennai, famous for the iconic Ashok Pillar, broad avenues, and modern residential societies.",
    housingType: "contemporary apartment complexes, boutique residential flats, and independent houses",
    localizedDetail: "Multi-story flats require childproof fall arrest netting and space-saving ceiling cloth drying racks for compact utility spaces.",
    tagline: "Aesthetic safety nets & ceiling cloth drying hangers in Ashok Nagar — free home consultation.",
    localities: ["1st Avenue", "10th Avenue", "Ashok Pillar Area", "Kumaran Colony", "Jafferkhanpet Border", "4th Avenue", "7th Avenue"],
    landmarks: ["Ashok Pillar", "Ashok Nagar Metro Station", "1st Avenue Junction", "Udhayam Theatre Complex"],
    customerReviews: [
      {
        name: "R. Murali",
        locality: "1st Avenue",
        rating: 5,
        review: "Installed child safety nets on our 6th floor flat. The installation was very quick and sturdy.",
        serviceUsed: "Children Safety Nets",
        date: "2026-06-09",
      },
      {
        name: "Jayashree V.",
        locality: "Kumaran Colony",
        rating: 5,
        review: "Ceiling cloth hangers work wonderfully. Smooth stainless steel pipes and high weight capacity.",
        serviceUsed: "Ceiling Cloth Hangers",
        date: "2026-05-06",
      },
    ],
  },
  vadapalani: {
    name: "Vadapalani",
    desc: "Vadapalani is a prime commercial, entertainment, and transit epicenter in West-Central Chennai, bustling with shopping malls, metro connectivity, and dense apartment living.",
    housingType: "high-density apartment complexes, residential flats, and commercial-residential buildings",
    localizedDetail: "High-density multi-story balconies and windows benefit from modern SS316 invisible grills and durable anti-bird spikes for unhindered airflow and safety.",
    tagline: "Modern invisible grills and balcony safety nets in Vadapalani — certified safety and fast installation.",
    localities: ["100 Feet Road", "Forum Mall Area", "Saligramam Border", "Arcot Road", "Kumaran Colony Border", "Thiru Nagar", "Vadapalani Signal Area"],
    landmarks: ["Vadapalani Murugan Temple", "Nexus Vijaya Mall", "Vadapalani Metro Station", "100 Feet Road Flyover"],
    customerReviews: [
      {
        name: "N. Sathish Kumar",
        locality: "100 Feet Road",
        rating: 5,
        review: "Ram Enterprises installed invisible grills for our balcony and windows. Superb quality and quick installation.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-27",
      },
      {
        name: "Revathi S.",
        locality: "Saligramam Border",
        rating: 5,
        review: "Very professional pigeon netting service. Highly recommended for apartment owners in Vadapalani.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-25",
      },
    ],
  },
};

export const areasData: Record<string, AreaDetail> = Object.entries(localTraits).reduce(
  (acc, [slug, data]) => {
    const allSlugs = Object.keys(localTraits);
    const nearby = allSlugs.filter((s) => s !== slug).slice(0, 4);

    acc[slug] = {
      slug,
      name: data.name,
      tagline: data.tagline,
      overview: `${data.name} is a rapidly developing residential hub in Chennai, Tamil Nadu. With an increasing number of families moving into multi-story residential buildings and modern gated complexes, ensuring perimeter protection on open balconies and windows has become essential for home safety.`,
      apartmentLiving: `In ${data.name}, residential living primarily encompasses ${data.housingType}. ${data.localizedDetail}`,
      balconySafety: `High-rise living in ${data.name} offers great ventilation and views, but open balconies and wide railing intervals pose severe fall risks for small children and pets. Ram Enterprises delivers heavy-duty balcony safety nets and architectural invisible grills engineered to withstand extreme weather while providing certified fall prevention.`,
      birdProblem: `Pigeons and urban birds frequently roost in apartment balconies, AC outdoor unit ledges, and duct shafts across ${data.name}. Our humane, UV-stabilized anti-pigeon netting and stainless bird spikes permanently eliminate bird droppings and hygiene hazards.`,
      weatherDetails: `${data.name} experiences tropical heat, coastal humidity, and strong monsoon winds. We exclusively install UV-fortified HDPE copolymer nets and marine-grade SS316 stainless cables that resist weather deterioration for over 10 years.`,
      localities: data.localities,
      landmarks: data.landmarks,
      customerReviews: data.customerReviews,
      nearbySlugs: nearby,
    };
    return acc;
  },
  {} as Record<string, AreaDetail>
);

export const areasList = Object.values(areasData);
export const chennaiAreasList = Object.keys(areasData);
export const andhraPradeshAreasList = chennaiAreasList; // Backwards compatibility alias
