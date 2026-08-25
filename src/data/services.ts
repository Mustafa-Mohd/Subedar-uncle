import { Lightbulb, LayoutGrid, Layers, PenTool, Settings2, Paintbrush, Image, ShieldCheck, Home, Utensils, LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  detailedContent: string[];
  image: string;
  tags: string[];
  icon: LucideIcon;
}

export const servicesData: ServiceData[] = [
  {
    id: 'pop-gypsum-false-ceiling',
    icon: Lightbulb,
    number: '01',
    title: 'POP / Gypsum False Ceiling',
    tagline: 'Ambient Excellence',
    description: 'Custom false ceiling designs integrated with professional lighting solutions to create the perfect mood for every room.',
    detailedContent: [
      'A beautifully designed ceiling can completely transform the atmosphere of a room. Our POP and Gypsum false ceiling solutions are tailored to not only conceal structural flaws and wiring but to act as a canvas for ambient lighting.',
      'From layered geometric patterns for living rooms to minimalist coves for bedrooms, we use premium materials that ensure durability and a flawless finish.',
      'Our team meticulously plans the lighting layout, integrating LED strips and spotlights that enhance the architectural features of your space while keeping energy efficiency in mind.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902813/image_search_1782328478557.jpg_qxgwwq.jpg',
    tags: ['False Ceiling', 'POP', 'Gypsum'],
  },
  {
    id: 'pvc-wpc-fluted-panels',
    icon: LayoutGrid,
    number: '02',
    title: 'PVC / WPC / Fluted Panels',
    tagline: 'Modern Wall Solutions',
    description: 'Durable and stylish PVC, WPC paneling and Fluted panels for walls and ceilings, providing a contemporary aesthetic.',
    detailedContent: [
      'Modern interiors thrive on texture and depth. Our range of PVC, WPC, and Fluted panels offer a highly durable, water-resistant, and aesthetically pleasing alternative to traditional wall treatments.',
      'Perfect for TV units, headboards, and feature walls, these panels create striking vertical lines that visually elevate ceiling heights and add a touch of sophisticated luxury.',
      'Available in a wide array of wood finishes and solid colors, they are virtually maintenance-free and provide excellent acoustic and thermal insulation properties.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902817/IMG_20260625_005335.jpg_fqaplq.jpg',
    tags: ['PVC', 'WPC', 'Fluted Panels'],
  },
  {
    id: 'grid-thermocol-ceiling',
    icon: Layers,
    number: '03',
    title: 'Grid / Thermocol Ceiling',
    tagline: 'Functional Systems',
    description: 'Professional grid ceiling and thermocol insulation solutions for commercial and residential utility spaces.',
    detailedContent: [
      'For commercial spaces, offices, and specific residential areas, functionality is just as important as aesthetics. Our Grid and Thermocol ceiling systems provide unparalleled utility.',
      'These systems offer easy access to overhead wiring and plumbing, making maintenance a breeze. The integrated thermocol insulation helps regulate indoor temperatures, reducing the load on your HVAC systems.',
      'We ensure precise installation using robust framing structures, guaranteeing a clean, level, and professional finish that stands the test of time.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902812/image_search_1782329154572.jpg_vaujqq.jpg',
    tags: ['Grid Ceiling', 'Thermocol', 'Acoustic'],
  },
  {
    id: 'wall-moulding-design',
    icon: PenTool,
    number: '04',
    title: 'Wall Moulding & Design',
    tagline: 'Classical Elegance',
    description: 'Sophisticated wall moulding and architectural design elements that add character and depth to your interior spaces.',
    detailedContent: [
      'Empty walls are missed opportunities. Our custom wall moulding services introduce classical elegance and structural depth to plain, flat surfaces, instantly elevating the room’s profile.',
      'Whether you prefer the ornate detailing of traditional wainscoting or the clean geometric lines of modern paneling, our skilled craftsmen execute each design with absolute precision.',
      'Painted in rich, contrasting colors or subtle monochromatic tones, these mouldings act as the perfect backdrop for artwork, furniture, and statement lighting.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782906218/image_search_1782795589480.jpg_vmkapy.jpg',
    tags: ['Moulding', 'Wall Design', 'Elegance'],
  },
  {
    id: 'electrical-solutions',
    icon: Settings2,
    number: '05',
    title: 'Electrical Solutions',
    tagline: 'Safe & Smart',
    description: 'Comprehensive electrical planning, wiring, and smart home integration for a safe and functional modern living environment.',
    detailedContent: [
      'Behind every beautiful interior is a robust and safe electrical infrastructure. We provide end-to-end electrical solutions, ensuring your space is as functional as it is stunning.',
      'Our certified electricians handle everything from complete house rewiring to the installation of high-end switchboards and custom lighting grids.',
      'We also specialize in modern smart home integrations, allowing you to control lighting, climate, and security systems effortlessly from your devices.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902811/image_search_1782495292663.jpg_n9tazn.jpg',
    tags: ['Wiring', 'Lighting', 'Smart Home'],
  },
  {
    id: 'professional-painting',
    icon: Paintbrush,
    number: '06',
    title: 'Professional Painting',
    tagline: 'Vibrant Finishes',
    description: 'Expert interior and exterior painting services with premium finishes, textures, and professional color consultations.',
    detailedContent: [
      'Color sets the mood for your entire home. Our professional painting services go beyond simply applying paint; we meticulously prepare surfaces to ensure a flawless, long-lasting finish.',
      'We offer expert color consultations to help you choose the perfect palette that complements your furniture, lighting, and personal style.',
      'From rich matte finishes to sophisticated metallic textures and custom stenciling, we use only premium, low-VOC paints that are safe for your family and the environment.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902811/image_search_1782495389612.jpg_t1wyxr.jpg',
    tags: ['Interior', 'Exterior', 'Texture'],
  },
  {
    id: 'wallpaper',
    icon: Image,
    number: '07',
    title: 'Wallpaper / Customizable',
    tagline: 'Artistic Walls',
    description: 'A wide range of customizable wallpaper designs and wall coverings to suit your unique aesthetic and lifestyle.',
    detailedContent: [
      'Transform a blank wall into a breathtaking masterpiece with our premium wallpaper installation services. We offer an extensive collection of designs, ranging from subtle textures to bold, panoramic murals.',
      'Our team ensures seamless installation, expertly matching patterns and eliminating air bubbles for a pristine finish.',
      'For clients seeking something truly unique, we provide customizable printing options, allowing you to turn your own high-resolution artwork or photography into stunning bespoke wall coverings.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902812/image_search_1782495541654.jpg_fsee18.jpg',
    tags: ['Wallpaper', 'Custom Design', 'Artistic'],
  },
  {
    id: 'invisible-grills',
    icon: ShieldCheck,
    number: '08',
    title: 'Invisible Grills',
    tagline: 'Safety First',
    description: 'Modern invisible grill solutions for balconies and windows, providing maximum safety without obstructing your view.',
    detailedContent: [
      'Safety shouldn’t come at the cost of your view. Our invisible grill solutions offer uncompromising security for high-rise balconies and windows while remaining virtually undetectable from a distance.',
      'Constructed from high-tensile, marine-grade stainless steel cables, they are highly resistant to rust and capable of withstanding immense pressure.',
      'They provide peace of mind for families with children and pets, allowing you to enjoy unobstructed panoramas and natural ventilation safely.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902812/image_search_1782495705760.jpg_jyh0yr.jpg',
    tags: ['Safety', 'Balcony', 'Invisible'],
  },
  {
    id: 'complete-wooden-work',
    icon: Home,
    number: '09',
    title: 'Complete Wooden Work',
    tagline: 'Handcrafted Interiors',
    description: 'End-to-end wooden interior solutions including wardrobes, beds, and bespoke storage units crafted from premium timber.',
    detailedContent: [
      'Wood brings warmth and timeless elegance to any interior. Our custom wooden work encompasses everything from intricate bedroom furniture to grand dining tables and bespoke storage units.',
      'We source only the finest timber and engineered woods, ensuring that every piece we create is structurally sound and environmentally responsible.',
      'Our master carpenters blend traditional joinery techniques with modern design sensibilities, delivering handcrafted furniture that fits perfectly within the unique dimensions of your space.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902813/image_search_1782495873733.jpg_zkknub.jpg',
    tags: ['Wardrobes', 'Beds', 'Storage'],
  },
  {
    id: 'kitchen-modular-work',
    icon: Utensils,
    number: '10',
    title: 'Kitchen Modular Work',
    tagline: 'Ergonomic Excellence',
    description: 'State-of-the-art modular kitchen designs optimized for functionality, space efficiency, and modern aesthetics.',
    detailedContent: [
      'The kitchen is the heart of the home, and it requires a design that balances heavy-duty functionality with sleek, modern aesthetics. Our modular kitchens are built for exactly that.',
      'We utilize space-saving layouts, intelligent storage solutions like tall units and pull-out pantries, and high-quality, soft-close hardware to make cooking a joy.',
      'With a vast selection of premium finishes—from high-gloss acrylic to textured laminates—we create a kitchen space that reflects your culinary passion and personal style.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902811/image_search_1782495995584.jpg_byplq8.jpg',
    tags: ['Ergonomic', 'Storage', 'Modular'],
  },
  {
    id: '2d-drawings',
    icon: PenTool,
    number: '11',
    title: '2D Drawings',
    tagline: 'Precision Blueprints',
    description: 'Detailed 2D architectural drawings and floor plans to layout every inch of your space with absolute accuracy.',
    detailedContent: [
      'Great design starts with meticulous planning. Our 2D drawing services provide detailed blueprints that map out every inch of your space with absolute accuracy.',
      'These technical floor plans include precise measurements, furniture layouts, electrical grids, and plumbing schematics, ensuring that no detail is overlooked before construction begins.',
      'This crucial step eliminates guesswork, aligns the execution team, and guarantees that the final layout flows perfectly according to your requirements.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902812/image_search_1782496092045.jpg_kdz06u.jpg',
    tags: ['2D', 'Drawings', 'Planning'],
  },
  {
    id: '3d-visualisation',
    icon: Image,
    number: '12',
    title: '3D Visualisation',
    tagline: 'Realistic Renderings',
    description: 'High-quality 3D visualizations and walk-throughs to preview your dream space before execution.',
    detailedContent: [
      'It can be difficult to envision a finished room from a flat floor plan. Our 3D visualization services bridge the gap between imagination and reality.',
      'We generate photorealistic renderings and immersive walkthroughs that let you experience your future space before a single hammer is swung.',
      'This powerful tool allows you to experiment with colors, textures, lighting, and furniture placement, giving you complete confidence in your design choices before committing to the build.'
    ],
    image: 'https://res.cloudinary.com/dvkmvwfkc/image/upload/v1782902820/mbr_bed_back.jpg_zbq4yk.jpg',
    tags: ['3D', 'Render', 'Visualization'],
  },
];
