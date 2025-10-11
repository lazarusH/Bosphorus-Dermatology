export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "hair-transplant",
    title: "Hair Transplant",
    description: "Advanced FUE and DHI hair restoration techniques delivering natural-looking, permanent results with minimal downtime.",
    fullDescription: "Our hair transplant procedures utilize the latest FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation) techniques to restore your hair with maximum precision and natural results. Our expert surgeons carefully extract individual follicles and implant them in thinning or balding areas, ensuring optimal density and a natural hairline. The procedure is minimally invasive with quick recovery time.",
    benefits: [
      "Permanent, natural-looking results",
      "Minimal scarring with FUE technique",
      "Quick recovery with minimal downtime",
      "Customized hairline design",
      "High success rate with experienced surgeons"
    ]
  },
  {
    slug: "hydrafacial",
    title: "Hydrafacial",
    description: "Multi-step facial treatment that cleanses, exfoliates, and hydrates skin using patented technology for immediate, glowing results.",
    fullDescription: "HydraFacial is a revolutionary multi-step treatment that cleanses, exfoliates, extracts impurities, and hydrates the skin using patented Vortex-Fusion technology. This non-invasive procedure delivers immediate results with no downtime, making it perfect for all skin types. The treatment includes deep cleansing, gentle exfoliation, painless extractions, and intense hydration with antioxidants and peptides.",
    benefits: [
      "Immediate visible results",
      "Suitable for all skin types",
      "No downtime or discomfort",
      "Addresses multiple skin concerns simultaneously",
      "Customizable treatment serums"
    ]
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    description: "Collagen-inducing therapy using fine needles to improve skin texture, reduce scars, and promote natural skin rejuvenation.",
    fullDescription: "Microneedling, also known as collagen induction therapy, uses fine needles to create controlled micro-injuries in the skin, triggering the body's natural healing process. This stimulates collagen and elastin production, resulting in smoother, firmer, and more youthful-looking skin. The treatment is highly effective for reducing acne scars, fine lines, wrinkles, and improving overall skin texture.",
    benefits: [
      "Stimulates natural collagen production",
      "Reduces appearance of scars and wrinkles",
      "Improves skin texture and tone",
      "Minimal downtime",
      "Safe for all skin types"
    ]
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    description: "Permanent hair reduction using advanced laser technology for smooth, hair-free skin on all body areas.",
    fullDescription: "Our state-of-the-art laser hair removal technology delivers safe, effective, and long-lasting hair reduction for all skin types. The treatment uses concentrated light beams to target hair follicles, preventing future growth while leaving surrounding skin unharmed. Multiple sessions ensure optimal results with permanent hair reduction.",
    benefits: [
      "Long-lasting hair reduction",
      "Precise targeting without damaging skin",
      "Quick treatment sessions",
      "Suitable for all body areas",
      "Smoother skin without ingrown hairs"
    ]
  },
  {
    slug: "botox-fillers",
    title: "Botox & Dermal Fillers",
    description: "Injectable treatments to smooth wrinkles, restore volume, and achieve natural-looking facial rejuvenation.",
    fullDescription: "Our expert practitioners use premium Botox and dermal fillers to reduce fine lines, wrinkles, and restore facial volume. Botox relaxes muscles that cause dynamic wrinkles, while dermal fillers add volume and contour to areas that have lost fullness due to aging. Treatments are customized to achieve natural, refreshed results that enhance your unique beauty.",
    benefits: [
      "Non-surgical facial rejuvenation",
      "Quick treatment with immediate results",
      "Minimal to no downtime",
      "Natural-looking enhancement",
      "Long-lasting effects (6-18 months)"
    ]
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    description: "Customized exfoliating treatments that improve skin tone, texture, and clarity by removing damaged outer layers.",
    fullDescription: "Chemical peels use carefully selected acid solutions to exfoliate and remove damaged skin layers, revealing fresher, healthier skin underneath. We offer various peel strengths tailored to your specific skin concerns, from superficial peels for mild rejuvenation to deeper peels for more dramatic results. Treatments address acne, pigmentation, fine lines, and uneven texture.",
    benefits: [
      "Improves skin texture and tone",
      "Reduces hyperpigmentation and sun damage",
      "Minimizes fine lines and wrinkles",
      "Treats acne and acne scars",
      "Customizable depth and strength"
    ]
  },
  {
    slug: "prp-therapy",
    title: "PRP Therapy",
    description: "Platelet-Rich Plasma treatment using your own blood to stimulate healing and rejuvenation for skin and hair.",
    fullDescription: "PRP (Platelet-Rich Plasma) therapy harnesses your body's natural healing powers by concentrating growth factors from your own blood. When injected into the scalp, it stimulates hair growth and thickness. When used for facial rejuvenation, it promotes collagen production and skin renewal. This natural treatment is safe, effective, and delivers gradual, long-lasting improvements.",
    benefits: [
      "100% natural using your own blood",
      "Stimulates hair growth and skin rejuvenation",
      "Minimal risk of allergic reactions",
      "Long-lasting natural results",
      "No downtime"
    ]
  },
  {
    slug: "skin-tightening",
    title: "Non-Surgical Skin Tightening",
    description: "Advanced radiofrequency and ultrasound treatments to lift and firm sagging skin without surgery.",
    fullDescription: "Our non-surgical skin tightening treatments use radiofrequency and ultrasound energy to heat deep layers of skin, stimulating collagen production and tissue contraction. This results in firmer, tighter, more youthful-looking skin without surgery or significant downtime. Ideal for treating sagging skin on the face, neck, and body.",
    benefits: [
      "Non-invasive with no surgery required",
      "Stimulates natural collagen production",
      "Gradual, natural-looking results",
      "Minimal to no downtime",
      "Suitable for face, neck, and body"
    ]
  },
  {
    slug: "acne-treatment",
    title: "Advanced Acne Treatment",
    description: "Comprehensive medical-grade treatments targeting acne at its source for clearer, healthier skin.",
    fullDescription: "Our comprehensive acne treatment program combines medical-grade topicals, advanced procedures, and lifestyle guidance to effectively treat acne at its source. We address all types of acne—from mild breakouts to severe cystic acne—using proven dermatological protocols. Treatment plans may include prescription medications, chemical peels, laser therapy, and customized skincare regimens.",
    benefits: [
      "Medical-grade treatment protocols",
      "Addresses root causes of acne",
      "Prevents future breakouts and scarring",
      "Customized treatment plans",
      "Combines multiple effective modalities"
    ]
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation Treatment",
    description: "Specialized treatments to reduce dark spots, melasma, and uneven skin tone for a more radiant complexion.",
    fullDescription: "Our pigmentation treatments target hyperpigmentation, melasma, sun spots, and uneven skin tone using advanced laser technology, chemical peels, and medical-grade lightening agents. We create customized treatment plans based on your specific pigmentation concerns and skin type to safely and effectively restore an even, radiant complexion.",
    benefits: [
      "Reduces dark spots and hyperpigmentation",
      "Evens skin tone and texture",
      "Safe for all skin types",
      "Customized treatment combinations",
      "Long-lasting brightening results"
    ]
  },
  {
    slug: "scar-treatment",
    title: "Scar Treatment & Revision",
    description: "Advanced techniques including laser therapy and microneedling to minimize the appearance of scars.",
    fullDescription: "Our scar treatment program uses the latest technologies including laser resurfacing, microneedling, chemical peels, and injectable treatments to significantly improve the appearance of acne scars, surgical scars, and traumatic scars. We customize treatment protocols based on scar type, depth, and location to achieve optimal improvement.",
    benefits: [
      "Improves appearance of various scar types",
      "Stimulates collagen remodeling",
      "Combines multiple effective techniques",
      "Gradual, natural improvement",
      "Minimal downtime"
    ]
  },
  {
    slug: "anti-aging-treatments",
    title: "Comprehensive Anti-Aging",
    description: "Holistic approach combining multiple treatments to address all signs of aging for complete facial rejuvenation.",
    fullDescription: "Our comprehensive anti-aging program takes a holistic approach to facial rejuvenation, combining the best treatments to address multiple signs of aging simultaneously. We may incorporate injectables, laser treatments, skin tightening, peels, and medical-grade skincare to achieve dramatic yet natural-looking results tailored to your unique aging concerns.",
    benefits: [
      "Multi-modal approach for optimal results",
      "Addresses all signs of aging",
      "Customized treatment combinations",
      "Natural, refreshed appearance",
      "Long-lasting rejuvenation"
    ]
  },
  {
    slug: "body-contouring",
    title: "Non-Invasive Body Contouring",
    description: "Advanced fat reduction and body shaping treatments without surgery for a more sculpted physique.",
    fullDescription: "Our non-invasive body contouring treatments use cutting-edge technology to reduce stubborn fat deposits and sculpt your body without surgery. Using methods like cryolipolysis (fat freezing) and radiofrequency, we target and eliminate fat cells while tightening skin for a more contoured, toned appearance.",
    benefits: [
      "No surgery or anesthesia required",
      "Reduces stubborn fat deposits",
      "Skin tightening effects",
      "Minimal to no downtime",
      "Long-lasting body sculpting results"
    ]
  },
  {
    slug: "medical-skincare",
    title: "Medical-Grade Skincare",
    description: "Professional dermatologist-prescribed products and routines for optimal skin health and appearance.",
    fullDescription: "Our medical-grade skincare program features pharmaceutical-strength products that penetrate deeper and deliver superior results compared to over-the-counter options. After a thorough skin analysis, our dermatologists prescribe customized regimens using proven ingredients to address your specific concerns and optimize skin health.",
    benefits: [
      "Pharmaceutical-strength formulations",
      "Dermatologist-customized regimens",
      "Clinically proven ingredients",
      "Superior absorption and efficacy",
      "Professional guidance and monitoring"
    ]
  }
];

export const featuredServices = services.slice(0, 3);
