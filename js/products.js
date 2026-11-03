/**
 * NaturaGlow Skincare - Product Catalog
 * Contains all 5 flagship organic skincare products with pricing in INR (₹), ingredients, and image assets.
 */

const PRODUCTS = [
  {
    id: 1,
    name: "Hydrating Rose Face Mist",
    category: "Mists & Toners",
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviewsCount: 124,
    badge: "Bestseller",
    shortDesc: "Pure steam-distilled Damask rose water enriched with aloe vera and witch hazel for instant hydration.",
    description: "Our signature Hydrating Rose Face Mist is crafted from hand-picked organic Damask roses from Kannauj. Infused with soothing aloe vera and natural witch hazel, it instantly balances skin pH, tightens pores, and delivers a dewy, refreshing glow throughout the day. Suitable for all skin types.",
    ingredients: ["Damask Rose Hydrosol", "Aloe Vera Extract", "Witch Hazel Distillate", "Vegetable Glycerin", "Natural Preservative Eco"],
    skinType: "All Skin Types, Dull & Dehydrated Skin",
    volume: "100ml",
    image: "/src/assets/images/product_rose_mist_1793715082911.jpg"
  },
  {
    id: 2,
    name: "Vitamin C Glow Facial Serum",
    category: "Serums & Oils",
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviewsCount: 218,
    badge: "Top Rated",
    shortDesc: "15% L-Ascorbic Acid & Kakadu Plum serum for brightening dark spots and boosting collagen.",
    description: "Experience luminous, even-toned skin with our potent Vitamin C Radiance Serum. Powered by 15% stable L-Ascorbic Acid and antioxidant-rich Australian Kakadu Plum, this lightweight formula neutralizes free radicals, fades pigmentation, and restores youthful radiance.",
    ingredients: ["15% L-Ascorbic Acid", "Kakadu Plum Extract", "Hyaluronic Acid", "Botanical Ferment Filtrate", "Green Tea Leaf Extract"],
    skinType: "Uneven Skin Tone, Pigmentation & Dullness",
    volume: "30ml",
    image: "/src/assets/images/product_vitamin_c_serum_1793715083692.jpg"
  },
  {
    id: 3,
    name: "Kumkumadi Radiance Night Oil",
    category: "Serums & Oils",
    price: 1299,
    originalPrice: 1699,
    rating: 5.0,
    reviewsCount: 96,
    badge: "Luxury Ayurvedic",
    shortDesc: "Traditional gold saffron and sandalwood facial elixir for deep overnight rejuvenation.",
    description: "A time-tested Ayurvedic formulation prepared in small batches over 7 days. Pure Kashmiri saffron, red sandalwood, and 28 precious herbs cooked in nourishing sesame and almond oil base. Works overnight to repair damaged skin cells, diminish fine lines, and impart a golden sheen.",
    ingredients: ["Kashmiri Saffron", "Red Sandalwood", "Manjistha", "Cold-Pressed Almond Oil", "Pure Sesame Oil", "Lotus Extract"],
    skinType: "Dry, Mature & Combination Skin",
    volume: "30ml",
    image: "/src/assets/images/product_kumkumadi_oil_1793715084171.jpg"
  },
  {
    id: 4,
    name: "Matcha Green Tea Clay Mask",
    category: "Masks & Scrubs",
    price: 699,
    originalPrice: 949,
    rating: 4.7,
    reviewsCount: 142,
    badge: "Detox",
    shortDesc: "Purifying French green clay and antioxidant Japanese matcha to unclog pores and calm inflammation.",
    description: "Reset your skin with our mineral-rich Matcha Green Tea Clay Mask. French green clay draws out deep-seated impurities and excess sebum, while organic ceremonial-grade Japanese matcha calms redness and protects against environmental pollution.",
    ingredients: ["French Green Clay", "Ceremonial Matcha Green Tea", "Kaolin Clay", "Organic Cold-Pressed Hemp Seed Oil", "Tea Tree Essential Oil"],
    skinType: "Oily, Acne-Prone & Combination Skin",
    volume: "100g",
    image: "/src/assets/images/product_green_tea_mask_1793715083875.jpg"
  },
  {
    id: 5,
    name: "Botanical Daily Sunscreen SPF 50",
    category: "Sun Care",
    price: 799,
    originalPrice: 1099,
    rating: 4.8,
    reviewsCount: 185,
    badge: "Essential",
    shortDesc: "Ultra-lightweight, non-greasy broad spectrum mineral SPF 50 PA++++ with zero white cast.",
    description: "Protect your skin without the heavy, sticky residue. Our Botanical Sunscreen offers broad-spectrum UVA/UVB defense with mineral zinc oxide and soothing botanical extracts. Absorbs instantly into a velvety matte finish that layers perfectly under makeup.",
    ingredients: ["Non-Nano Zinc Oxide", "Raspberry Seed Oil", "Niacinamide", "Aloe Vera Juice", "Vitamin E"],
    skinType: "All Skin Types, Sensitive Skin",
    volume: "50ml",
    image: "/src/assets/images/product_sunscreen_1793715085035.jpg"
  }
];
