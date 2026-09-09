import { SpaService, Testimonial } from '../types';

export const SPA_INFO = {
  name: 'Pure Luxury Spa',
  subtitle: 'by Poonam',
  phone: '559-284-7298',
  phoneFormatted: '(559) 284-7298',
  location: 'Louisville, Kentucky',
  experience: '17+ Years of Experience',
  education: 'Diploma from Empire Beauty School, Louisville, KY',
  tagline: 'Enhance your natural beauty with transformative, personalized spa treatments.',
  hours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM (By Appointment)' },
    { days: 'Saturday', hours: '9:00 AM – 4:00 PM (By Appointment)' },
    { days: 'Sunday', hours: 'By Appointment' }
  ]
};

export const SPA_SERVICES: SpaService[] = [
  // --- Facials ---
  {
    id: 'signature-facial',
    name: 'Signature Facial',
    category: 'facials',
    duration: '60 Minutes',
    price: 97,
    description: 'A customized, deeply rejuvenating treatment tailored to your specific skin needs. Includes deep pore cleansing, gentle exfoliation, custom serum infusion, soothing facial massage, and a targeted mask.',
    highlights: ['Deep Pore Cleansing', 'Custom Treatment Mask', 'Relaxing Facial Massage', 'Immediate Radiance'],
    popular: true
  },
  {
    id: 'classic-enzyme-facial',
    name: 'Classic Enzyme Facial',
    category: 'facials',
    duration: '60 Minutes',
    price: 110,
    description: 'Harnesses natural fruit enzyme power to gently dissolve dead skin cells and impurities without irritation. Restores smooth skin texture, softens fine lines, and promotes healthy cellular turnover.',
    highlights: ['Natural Fruit Enzymes', 'Gentle Exfoliation', 'Restores Glow', 'Safe for Sensitive Skin']
  },
  {
    id: 'dermaplane-rejuvenate-facial',
    name: 'Dermaplane Rejuvenate Facial',
    category: 'facials',
    duration: '60 Minutes',
    price: 150,
    description: 'Combines medical-grade physical dermaplaning with deep hydration and restorative botanicals. Removes dull surface layers and fine vellus hair (peach fuzz) for exceptionally smooth, camera-ready skin.',
    highlights: ['Vellus Hair Removal', 'Deep Hydration Infusion', 'Flawless Makeup Canvas', 'Instant Radiance'],
    popular: true
  },
  {
    id: 'signature-microderm-facial',
    name: 'Signature With Microderm Facial',
    category: 'facials',
    duration: '60 Minutes',
    price: 160,
    description: 'Our full luxury signature facial enhanced with diamond-tip microdermabrasion. Effectively targets sun damage, uneven texture, and enlarged pores followed by deep peptide hydration.',
    highlights: ['Diamond Microdermabrasion', 'Targeted Pore Minimizing', 'Antioxidant Infusion', 'Firming Massage']
  },
  {
    id: 'microneedling-facial',
    name: 'Microneedling Facial',
    category: 'facials',
    duration: '75 Minutes',
    price: 275,
    description: 'Advanced collagen induction therapy designed to stimulate your skin’s natural healing response. Visibly reduces fine lines, acne scarring, and hyperpigmentation while improving overall firmness.',
    highlights: ['Collagen Induction', 'Scarring & Tone Improvement', 'Advanced Serums', 'Long-lasting Rejuvenation']
  },
  {
    id: 'age-defense-facial',
    name: 'Age Defense Facial',
    category: 'facials',
    duration: '60 Minutes',
    price: 119,
    description: 'A targeted anti-aging treatment formulated with potent peptides, vitamins, and firming botanical extracts to replenish moisture, smooth fine lines, and boost elasticity.',
    highlights: ['Peptide Power Complex', 'Elasticity Restoration', 'Neck & Décolleté Care', 'Youthful Glow']
  },
  {
    id: 'acne-control-facial',
    name: 'Acne Control Facial',
    category: 'facials',
    duration: '60 Minutes',
    price: 119,
    description: 'Specialized clarifying treatment addressing active breakouts, congested pores, and inflammation. Includes high-frequency antibacterial therapy, gentle extractions, and a calming therapeutic mask.',
    highlights: ['High-Frequency Therapy', 'Congestion Clearing', 'Blemish Calming Mask', 'Balances Oil Production']
  },
  {
    id: 'hydrodermabrasion-facial',
    name: 'Hydrodermabrasion Facial',
    category: 'facials',
    duration: '60 Minutes',
    price: 170,
    description: 'Next-generation aqueous exfoliation combining gentle suction with targeted serum infusion. Flushes out debris while deeply drenching skin with hyaluronic hydration.',
    highlights: ['Aqueous Exfoliation', 'Hydra-Infusion', 'Plumping Hydration', 'Zero Downtime']
  },
  {
    id: 'glycolic-enzyme-peel',
    name: 'Glycolic / Enzyme Peel',
    category: 'facials',
    duration: '30 Minutes',
    price: 80,
    description: 'A quick, potent renewing treatment utilizing active glycolic acid and enzymes to unveil fresh, bright, and clarified skin in just 30 minutes.',
    highlights: ['Rapid Brightening', 'Cell Renewal', 'Refines Skin Texture']
  },
  {
    id: 'microdermabrasion-express',
    name: 'Microdermabrasion Express',
    category: 'facials',
    duration: '30 Minutes',
    price: 75,
    description: 'Targeted diamond-tip exfoliation to polish skin texture, lighten dark spots, and prep skin for enhanced product absorption.',
    highlights: ['Express Polish', 'Diamond Exfoliation', 'Smoother Skin Texture']
  },
  {
    id: 'dermaplane-express',
    name: 'Dermaplane Express',
    category: 'facials',
    duration: '30 Minutes',
    price: 75,
    description: 'Focused dermaplane exfoliation to gently eliminate peach fuzz and dead surface skin cells, followed by balancing hydration.',
    highlights: ['Removes Peach Fuzz', 'Smooth Finish', 'Quick Refresh']
  },

  // --- Body Treatments ---
  {
    id: 'body-scrub',
    name: 'Body Scrub',
    category: 'body',
    duration: '60 Minutes',
    price: 97,
    description: 'Indulge in a full-body artisanal botanical polish. Gently sloughs away dry, dull skin followed by warm towels and ultra-rich botanical body butter hydration.',
    highlights: ['Full Body Exfoliation', 'Velvety Hydration', 'Warm Towel Compress'],
    popular: true
  },
  {
    id: 'relaxation-treatment',
    name: 'Relaxation Treatment',
    category: 'body',
    duration: '90 Minutes',
    price: 145,
    description: 'A 90-minute full-body sanctuary experience featuring warm aromatic oils, tension-melting massage strokes, and deeply nourishing balms to soothe both mind and body.',
    highlights: ['90-Minute Immersion', 'Aromatherapy Relaxation', 'Stress Relief Strokes', 'Deep Body Nourishment'],
    popular: true
  },
  {
    id: 'skin-classic-tag-removal',
    name: 'Skin Classic Skin Tag Removal',
    category: 'body',
    duration: '15 Minutes',
    price: 150,
    description: 'Direct high-frequency precision technology for the gentle, effective treatment and removal of minor skin irregularities, skin tags, and blemishes without invasive measures.',
    highlights: ['Skin Classic Device', 'Precise High-Frequency', 'Non-Invasive', 'Quick Procedure']
  },
  {
    id: 'body-contouring-treatment',
    name: 'Body Contouring Treatment',
    category: 'body',
    duration: '50 Minutes',
    price: 210,
    description: 'Targeted ultrasound and radiofrequency body session designed to stimulate circulation, smooth tone, and firm skin contours.',
    highlights: ['Ultrasonic Technology', 'Firms & Tones', 'Targeted Zones']
  },

  // --- Threading ---
  {
    id: 'brow-threading',
    name: 'Eyebrow Threading',
    category: 'threading',
    duration: '15 Minutes',
    price: 22,
    description: 'Ancient, precision hair removal technique using 100% organic cotton thread. Poonam customizes your arch and shape perfectly to your facial structure with crisp, clean lines.',
    highlights: ['Custom Arch Shaping', '100% Cotton Thread', 'Clean Definition', 'Gentle on Sensitive Skin'],
    popular: true
  },
  {
    id: 'brow-upper-lip-threading',
    name: 'Brow + Upper Lip Threading',
    category: 'threading',
    duration: '20 Minutes',
    price: 50,
    description: 'Complete upper facial grooming combining precision eyebrow shaping and delicate upper lip hair removal for smooth, flawless skin.',
    highlights: ['Dual Treatment', 'Sharp Brow Lines', 'Ultra Smooth Finish']
  },
  {
    id: 'full-face-threading',
    name: 'Threading for Full Face',
    category: 'threading',
    duration: '30 Minutes',
    price: 45,
    description: 'Thorough, gentle full-face threading covering forehead, brows, cheeks, upper lip, chin, and sideburns for an impeccably smooth canvas.',
    highlights: ['Complete Face Smoothness', 'Removes Peach Fuzz', 'Ideal for Makeup Application']
  },

  // --- Waxing ---
  {
    id: 'full-leg-wax',
    name: 'Full Leg Wax',
    category: 'waxing',
    duration: '45 Minutes',
    price: 85,
    description: 'Complete leg hair removal from hip to ankle utilizing gentle, skin-soothing botanical wax followed by a calming aloe post-treatment.',
    highlights: ['Hip to Ankle', 'Long-lasting Smoothness', 'Soothing Aftercare']
  },
  {
    id: 'half-leg-wax',
    name: 'Half Leg Wax',
    category: 'waxing',
    duration: '30 Minutes',
    price: 50,
    description: 'Gentle, efficient waxing for either upper or lower legs, leaving skin silky, smooth, and refreshed.',
    highlights: ['Lower or Upper Leg', 'Gentle Botanical Wax', 'Fast & Effective']
  },
  {
    id: 'full-arm-wax',
    name: 'Full Arm Wax',
    category: 'waxing',
    duration: '30 Minutes',
    price: 60,
    description: 'Complete arm waxing from shoulders down to wrists for clean, touchably soft skin with minimal irritation.',
    highlights: ['Shoulder to Wrist', 'Silky Smooth Feel', 'Hypoallergenic Wax']
  },
    {
    id: 'under-arm-wax',
    name: 'Under Arm Wax',
    category: 'waxing',
    duration: '15 Minutes',
    price: 25,
    description: 'Gentle underarm waxing to remove unwanted hair at the root, leaving the skin smooth, clean, and soft with long-lasting results.',
    highlights: ['Smooth Underarms', 'Long-Lasting Results', 'Gentle on Skin']
  },

  // --- Tinting & Lashes ---
  {
    id: 'brow-tinting',
    name: 'Eyebrow Tinting',
    category: 'tinting',
    duration: '15 Minutes',
    price: 22,
    description: 'Semi-permanent custom shade formulation to define, darken, and create the appearance of fuller, more youthful eyebrows.',
    highlights: ['Custom Color Match', 'Fuller Appearance', 'Lasts 3–4 Weeks']
  },
  {
    id: 'lash-lift-tint',
    name: 'Lash Lift + Tint',
    category: 'tinting',
    duration: '40 Minutes',
    price: 75,
    description: 'Natural lash enhancement that lifts, curls, and deeply tints your lashes black. Gives the look of longer, fuller lashes without daily mascara or lash curlers.',
    highlights: ['6–8 Week Lash Lift', 'Deep Glossy Black Tint', 'Zero Maintenance', 'Natural Lash Pop'],
    popular: true
  },

  // --- Pedicure ---
  {
    id: 'luxury-pedicure',
    name: 'Luxury Spa Pedicure',
    category: 'pedicure',
    duration: '45 Minutes',
    price: 55,
    description: 'Relaxing foot sanctuary treatment featuring a warm botanical foot bath, gentle callus smoothing, cuticle refinement, relaxing leg and foot massage, and professional polish.',
    highlights: ['Warm Botanical Soak', 'Callus Smoothing', 'Relaxing Foot Massage', 'Flawless Polish Application']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    service: 'Signature Facial & Brow Threading',
    rating: 5,
    comment: 'Poonam is an absolute artist! Her 17 years of experience shine through every second of the facial. My skin was glowing for weeks and her brow threading is by far the cleanest and most painless I have ever experienced in the Valley.',
    date: 'Recent Guest'
  },
  {
    id: '2',
    name: 'Elena R.',
    service: 'Relaxation Treatment',
    rating: 5,
    comment: 'The 90-minute treatment was pure bliss. The tranquil atmosphere, warm towels, and Poonam’s attentive care made all my stress disappear. Truly living up to the name Pure Luxury Spa!',
    date: 'Verified Client'
  },
  {
    id: '3',
    name: 'Jessica T.',
    service: 'Dermaplane Rejuvenate & Lash Lift',
    rating: 5,
    comment: 'I got the dermaplane facial and a lash lift before my wedding, and I could not believe how soft my face felt and how dramatic my lashes looked without any mascara! Poonam is so sweet, clean, and knowledgeable.',
    date: 'Verified Client'
  },
  {
    id: '4',
    name: 'Maria G.',
    service: 'Acne Control Facial & Brow Tinting',
    rating: 5,
    comment: 'Finding an esthetician who truly understands skin health and uses authentic high-quality products in Louisville is a blessing. Poonam transformed my skin clarity and shaped my brows to perfection.',
    date: 'Verified Client'
  }
];
