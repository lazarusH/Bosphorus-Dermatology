export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "adult-dermatology",
    title: "Adult Dermatology",
    description: "A comprehensive medical science that consists of diagnosing conditions of the skin, hair, and nails.",
    fullDescription: "Adult Dermatology is a comprehensive medical science that consists of diagnosing conditions of the skin, hair, and nails. We take a comprehensive approach to treating a variety of conditions, ensuring personalized care for each patient's unique dermatological needs.",
    benefits: [
      "Comprehensive skin, hair, and nail diagnosis",
      "Personalized treatment plans",
      "Expert medical care",
      "Advanced diagnostic techniques",
      "Holistic approach to skin health"
    ]
  },
  {
    slug: "hair-transplant",
    title: "Hair Transplant For Hair/Beard/Eyebrows",
    description: "FUE hair transplantation for head, beard, and eyebrows - a sutureless method with natural-looking results.",
    fullDescription: "Hair Transplantation is a surgical technique that removes hair follicles by Follicular Unit Extraction (FUE). It is a sutureless method of hair restoration in which hair follicles are extracted from the back of head called the 'Donor Site' under local anaesthesia with the help of special micropunches and implanted in the bald area known as the 'Recipient Site'. The technique is primarily used to treat male/female pattern baldness on head, eyebrows, and beard hair.",
    benefits: [
      "Less Maintenance",
      "A Long-Term Solution",
      "Free Of Pain And Scars",
      "Natural-Looking",
      "Enhancement of Appearance",
      "Success Rate Is High",
      "Low Risk Of Side Effects",
      "Complications Are Unlikely To Occur",
      "No Long-Term Medications Required",
      "Quick Recovery"
    ]
  },
  {
    slug: "hydrafacial",
    title: "Hydrafacial",
    description: "Noninvasive procedure that resurfaces, exfoliates, deep cleans and hydrates skin with nourishing serums.",
    fullDescription: "This is a noninvasive procedure that can help resurface, exfoliate, deep clean and hydrate skin. The exfoliation and extraction steps of the Hydrafacial help to remove dead skin cells and debris, while the infusion of nourishing serums promotes cell renewal and improves skin texture, resulting in a more refined and balanced appearance. It can help prevent and treat skin conditions like acne, premature aging, wrinkles, fine lines, skin dehydration, dark spots, and also helps product to penetrate to the skin as it cleans deeply and opens clogged pores. The skin will be drenched in a blend of antioxidants, peptides, and hyaluronic acid, resulting in a deeply hydrated and plump appearance. The intense hydration provided by the Hydrafacial helps to restore moisture balance and enhance your skin's overall health and vitality. The hydrating serums used during the procedure can help diminish the appearance of fine lines and wrinkles, giving you a more youthful and rejuvenated look.",
    benefits: [
      "Immediate visible results",
      "Deep cleansing and exfoliation",
      "Treats multiple skin concerns",
      "No downtime",
      "Hydrates and plumps skin",
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone"
    ]
  },
  {
    slug: "microneedling",
    title: "Dermapen / Microneedling",
    description: "Cosmetic procedure using sterilized needles to generate new collagen and improve skin texture.",
    fullDescription: "Microneedling is a cosmetic procedure that uses small, sterilized needles to prick the skin. This treatment aims to generate new collagen and skin tissue to smooth, firm, and tone skin. Microneedling is mostly used on the face and may reduce the appearance of acne, scars, dark spots, wrinkles, and large pores, aids the absorption of topical skin care products & improves overall health of skin.",
    benefits: [
      "Generates new collagen",
      "Reduces acne scars",
      "Minimizes dark spots and wrinkles",
      "Shrinks large pores",
      "Enhances product absorption",
      "Improves overall skin health"
    ]
  },
  {
    slug: "vampire-facial",
    title: "Plasma Vampire Facial",
    description: "Non-surgical treatment using your own plasma to regenerate and rejuvenate facial skin.",
    fullDescription: "The Vampire Facial is a non-surgical and minimally invasive treatment. The procedure involves creating tiny puncture holes on your face, stimulating the regenerating plasma production into the skin. A Vampire Facial is a relatively painless experience that harnesses your body's natural healing powers.",
    benefits: [
      "Reduce wrinkles",
      "Plump up sagging skin",
      "Get rid of deep creases",
      "Improve one's complexion",
      "Non-surgical approach",
      "Minimally invasive"
    ]
  },
  {
    slug: "dermaplaning",
    title: "Dermaplaning",
    description: "Minimally invasive procedure that shaves away top skin layers to reveal fresher, smoother skin.",
    fullDescription: "Dermaplaning is a minimally invasive procedure that shaves away the top layers of your skin. It can help reduce the appearance of acne scars, pitted skin or other skin imperfections by revealing newer, undamaged skin. Some people get dermaplaning to remove unwanted facial hair.",
    benefits: [
      "Reduces acne scars",
      "Smooths pitted skin",
      "Removes facial hair",
      "Reveals fresher skin",
      "Minimally invasive",
      "Immediate results"
    ]
  },
  {
    slug: "microdermabrasion",
    title: "Microdermabrasion",
    description: "Gentle skin resurfacing using a minimally abrasive instrument for a refreshed appearance.",
    fullDescription: "Microdermabrasion uses a handheld minimally abrasive instrument to gently sand your skin, removing the thicker, uneven outer layer. This treatment can improve age spots and blackheads, improve hyperpigmentation, exfoliate your skin for a refreshed appearance, lessen the appearance of stretch marks, reduce fine lines and wrinkles, reduce or eliminate enlarged pores, and treat acne and acne scars.",
    benefits: [
      "Improve age spots and blackheads",
      "Improve hyperpigmentation",
      "Exfoliate for refreshed appearance",
      "Lessen stretch marks",
      "Reduce fine lines and wrinkles",
      "Reduce enlarged pores",
      "Treat acne and acne scars"
    ]
  },
  {
    slug: "led-light-therapy",
    title: "LED Light Therapy",
    description: "Skin-safe, low-level light treatment in different wavelengths and colors for various skin conditions.",
    fullDescription: "LED Light Therapy is a skin treatment that doesn't use ultraviolet light. Instead, it uses skin-safe, low-level light in different wavelengths and colors for different skin-related conditions. Treatment options include blue light, red light, green light, yellow light, and white light, each targeting specific skin concerns.",
    benefits: [
      "Non-UV light treatment",
      "Multiple wavelength options",
      "Treats various skin conditions",
      "Safe and non-invasive",
      "No downtime",
      "Customizable to skin needs"
    ]
  },
  {
    slug: "electrocautery",
    title: "Electrocautery",
    description: "Electric-heated electrode procedure to destroy unwanted skin growths safely and effectively.",
    fullDescription: "Electrocautery is a procedure that uses electric-heated electrodes to destroy unwanted skin growth. This simple procedure can be done in outpatient or clinical setting. Some of the indications include: DPN, Skin Tag, Mole, Warts, and Vascular Lesions.",
    benefits: [
      "Removes DPN effectively",
      "Safe mole removal",
      "Treats warts",
      "Removes skin tags",
      "Treats vascular lesions",
      "Outpatient procedure",
      "Quick and effective"
    ]
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    description: "Diode laser technology for permanent hair reduction, effective on dark skin and dark hair.",
    fullDescription: "Diode Lasers Hair Removals use a single wavelength of light that has a high absorption rate in melanin. As the melanin heats up it destroys the root and blood flow to the follicle disabling the hair growth permanently. Diode Laser Removals are the popular laser wavelengths that work for dark skin and dark hair. The Diode wavelength is very effective on darker skin tones.",
    benefits: [
      "Best way to get rid of unwanted hair",
      "Leaves the skin undamaged",
      "Long term or permanent hair reduction",
      "Less painful than waxing",
      "Removes hair from any part of the body",
      "Effective on darker skin tones"
    ]
  },
  {
    slug: "prp-therapy",
    title: "Platelet-Rich Plasma (PRP) For Hair/Eyebrows/Beard",
    description: "PRP injections to prevent hair loss and promote new hair growth on head, eyebrows, and beard.",
    fullDescription: "Platelet-Rich Plasma consists of two elements: Plasma or the liquid portion of blood, and platelets. PRP injections can be effective in preventing and treating hair loss and promoting new hair growth both in male/female pattern baldness on head, eyebrows and beard. PRP can also aid in the stimulation of hair growth after hair transplants.",
    benefits: [
      "Prevents and treats hair loss",
      "Promotes new hair growth",
      "Effective for head, eyebrows, and beard",
      "Aids post-transplant hair growth",
      "Uses your own blood",
      "Natural treatment approach"
    ]
  },
  {
    slug: "g5-massage",
    title: "G5 Massage",
    description: "Gyratory soft tissue massage using vibration and percussion to stimulate healing and reduce cellulite.",
    fullDescription: "Deep Tissue Massages the (G5) works by creating a gyratory soft tissue massage effect on muscles and deeper tissues. Simultaneously, it uses vibration and percussion to increase blood flow and to stimulate a range of healing processes. The combined free movement achieved by the G5 Machine makes it unique in its effect.",
    benefits: [
      "Reduce cellulite",
      "Prevent sports massage",
      "Slimming",
      "Improves and increases circulation",
      "Drains excess tissue fluid, waste and toxins",
      "Skin toning",
      "Improves skin texture",
      "Reduces muscular tension - relieving aches & pains"
    ]
  },
  {
    slug: "skincare-consultation",
    title: "Skin Care And Product Consultation",
    description: "Professional consultation to identify your skin type and determine the best products for your needs.",
    fullDescription: "A Skincare Consultation is an invaluable tool for helping you identify your skin type, and concerns, and determining the best products to use. It helps you gain a better understanding of your skin's needs while taking into account factors like lifestyle and environment that can impact the health of your skin.",
    benefits: [
      "Identify your skin type",
      "Personalized product recommendations",
      "Understanding of skin needs",
      "Lifestyle and environment considerations",
      "Professional guidance",
      "Optimized skincare routine"
    ]
  }
];

export const featuredServices = services.slice(0, 3);
