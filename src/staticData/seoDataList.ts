const titleCategorySeoHandler = (locale: string) => {
  const isRu = locale === "ru";
  const titleList = [
    {
      meta: isRu
        ? ""
        : "Explore top aesthetic treatments in Turkey for 2025. Experience exceptional medical tourism services with Azpo Health and achieve your desired results.",
      title: isRu
        ? ""
        : "Aesthetic Treatments in Turkey 2025 medical tourism | Azpo health",
      path: "aesthetic",
    },
    {
      meta: isRu
        ? ""
        : "Explore affordable dental treatments in Turkey in 2025. Experience high-quality care and innovative solutions for a healthier smile with Azpo Health.",
      title: isRu ? "" : "Dental Treatments in Turkey 2025 | Azpo health",
      path: "dental-treatments",
    },
    {
      meta: isRu
        ? ""
        : "Experience exceptional eye care with Ophthalmology Turkey 2025. Enhance your vision with advanced treatments and personalized care from expert professionals.",
      title: isRu
        ? ""
        : "Discover Crystal-Clear Vision with Ophthalmology Turkey 2025 | Azpo health",
      path: "eye-surgery",
    },
    {
      meta: isRu
        ? ""
        : "Explore top fertility treatment options in Turkey for 2025. Experience advanced medical care and support at Azpo Health for your journey to parenthood.",
      title: isRu ? "" : "Fertility Treatment in Turkey 2025 | Azpo health",
      path: "fertility",
    },
    {
      meta: isRu
        ? ""
        : "Explore cutting-edge stem cell treatments in Turkey, designed to enhance your health and wellbeing in 2025. Experience world-class care and advanced medical solutions.",
      title: isRu ? "" : "Stem Cell Treatments in Turkey 2025 | Azpo health",
      path: "stem-cell",
    },
  ];
  return titleList;
};

const titleSubCategorySeoHandler = (locale: string) => {
  const isRu = locale === "ru";
  const titleList = [
    // Aesthetic subcategories
    {
      meta: isRu
        ? ""
        : "Experience world-class hair transplant services in Turkey in 2025. Enhance your appearance and confidence with our expert medical tourism solutions at Azpo health.",
      title: isRu
        ? ""
        : "Hair Transplant in Turkey in 2025 medical tourism | Azpo health",
      path: "hair-transplantation",
    },
    {
      meta: isRu
        ? ""
        : "Explore top facial aesthetic treatments in Turkey for 2025, combining quality care with excellent medical tourism options at Azpo Health for a transformative experience.",
      title: isRu
        ? ""
        : "Facial Aesthetic Treatments in Turkey 2025 medical tourism  | Azpo health",
      path: "facial-aesthetic-surgery",
    },
    {
      meta: isRu
        ? ""
        : "Experience transformative body contouring in Turkey with Azpo Health. Achieve your aesthetic goals through expert care and personalized medical tourism packages.",
      title: isRu
        ? ""
        : "Body Contouring in Turkey medical tourism 2025 | Azpo health",
      path: "body-contouring",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality breast surgery in Turkey in 2025. Benefit from expert care and advanced techniques, ensuring exceptional results for your aesthetic goals.",
      title: isRu ? "" : "Breast Surgery in Turkey 2025 | Azpo health",
      path: "breast-surgery",
    },
    {
      meta: isRu
        ? ""
        : "Explore top-notch genital aesthetic surgery options in Turkey with Azpo Health in 2025. Experience expert care and transformative results tailored to your needs.",
      title: isRu
        ? ""
        : "Genital Aesthetic Surgery in Turkey 2025 | Azpo health",
      path: "genital-aesthetic",
    },

    // Dental subcategories
    {
      meta: isRu
        ? ""
        : "Explore top-tier dental implant services in Turkey in 2025. Experience affordable, high-quality care with expert professionals dedicated to your smile.",
      title: isRu ? "" : "Dental Implantology in Turkey 2025 | Azpo health",
      path: "implantology",
    },
    {
      meta: isRu
        ? ""
        : "Explore top-quality general dentistry services in Turkey with Azpo Health. Experience advanced treatments and exceptional care for a healthier smile in 2025.",
      title: isRu ? "" : "General Dentistry in Turkey 2025 | Azpo health",
      path: "general-dentistry",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality cosmetic dentistry in Turkey in 2025. Enhance your smile with expert care at Azpo Health, where your dental transformation begins.",
      title: isRu ? "" : "Cosmetic Dentistry in Turkey 2025 | Azpo health",
      path: "cosmetic-dentistry",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality restorative dentistry in Turkey with Azpo Health. Transform your smile with expert care and advanced treatments tailored to your needs.",
      title: isRu ? "" : "Restorative Dentistry in Turkey 2025 | Azpo health",
      path: "restorative-dentistry",
    },
    {
      meta: isRu
        ? ""
        : "Explore the leading periodontics services in Turkey for 2025. Experience top-notch dental care that combines expertise with advanced technology for optimal results.",
      title: isRu ? "" : "Periodontics in Turkey 2025 | Azpo health",
      path: "periodontics",
    },
    {
      meta: isRu
        ? ""
        : "Achieve a perfect smile with top-notch orthodontic care in Turkey. Expert dentists and advanced techniques ensure exceptional results at competitive prices.",
      title: isRu
        ? ""
        : "Straighten Your Smile with Orthodontics in Turkey 2025 | Azpo health",
      path: "orthodontics",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-notch oral surgery in Turkey with Azpo Health in 2025. Get quality care and advanced treatments at competitive prices for your dental needs.",
      title: isRu ? "" : "Oral Surgery in Turkey 2025 | Azpo health",
      path: "oral-surgery",
    },

    // Eye surgery subcategories
    {
      meta: isRu
        ? ""
        : "Explore advanced eye disease treatments in Turkey for 2025, ensuring high-quality care and innovative solutions at Azpo Health for a brighter future for your vision.",
      title: isRu ? "" : "Eye Disease Treatments in Turkey 2025 | Azpo health",
      path: "eye-disease-treatments",
    },
    {
      meta: isRu
        ? ""
        : "Experience advanced eye surgical and implant procedures in Turkey with Azpo Health in 2025. Qualified specialists and cutting-edge technology ensure excellent care.",
      title: isRu
        ? ""
        : "Eye Surgical & Implant Procedures in Turkey 2025 | Azpo health",
      path: "surgical-implant-procedures",
    },

    // Fertility subcategories
    {
      meta: isRu
        ? ""
        : "Explore fertility and assisted reproduction options in Turkey for 2025. Experience high-quality care and advanced treatments tailored to your needs at Azpo Health.",
      title: isRu
        ? ""
        : "Fertility & Assisted Reproduction in Turkey 2025 | Azpo health",
      path: "fertility-assisted-reproduction",
    },

    // Stem cell subcategories
    {
      meta: isRu
        ? ""
        : "Explore advanced male sexual and reproductive health stem cell therapy options in Turkey in 2025. Experience innovative treatments for improved well-being.",
      title: isRu
        ? ""
        : "Male Sexual & Reproductive Health Stem Cell Therapy in Turkey 2025  | Azpo health",
      path: "male-sexual-therapy",
    },
    {
      meta: isRu
        ? ""
        : "Explore cutting-edge stem cell therapy and regenerative medicine options in Turkey for 2025. Enhance your health journey with advanced treatments tailored for you.",
      title: isRu
        ? ""
        : "Stem Cell Therapy & Regenerative Medicine in Turkey 2025 | Azpo health",
      path: "therapy-regenerative-medicine",
    },
  ];
  return titleList;
};

const titleSubNestedCategorySeoHandler = (locale: string) => {
  const isRu = locale === "ru";
  const titleList = [
    // Aesthetic
    {
      meta: isRu
        ? ""
        : "Explore top aesthetic treatments in Turkey for 2025. Experience exceptional medical tourism services with Azpo Health and achieve your desired results.",
      title: isRu ? "" : "",
      path: "aesthetic",
    },
    // Hair Transplantation
    {
      meta: isRu
        ? ""
        : "Experience world-class hair transplant services in Turkey in 2025. Enhance your appearance and confidence with our expert medical tourism solutions at Azpo health.",
      title: isRu ? "" : "",
      path: "aesthetic/hair-transplantation",
    },
    // Facial Aesthetic Surgery
    {
      meta: isRu
        ? ""
        : "Explore top facial aesthetic treatments in Turkey for 2025, combining quality care with excellent medical tourism options at Azpo Health for a transformative experience.",
      title: isRu ? "" : "",
      path: "aesthetic/facial-aesthetic-surgery",
    },
    // Body Contouring
    {
      meta: isRu
        ? ""
        : "Experience transformative body contouring in Turkey with Azpo Health. Achieve your aesthetic goals through expert care and personalized medical tourism packages.",
      title: isRu ? "" : "",
      path: "aesthetic/body-contouring",
    },
    // Breast Surgery
    {
      meta: isRu
        ? ""
        : "Experience top-quality breast surgery in Turkey in 2025. Benefit from expert care and advanced techniques, ensuring exceptional results for your aesthetic goals.",
      title: isRu ? "" : "",
      path: "aesthetic/breast-surgery",
    },
    // Genital Aesthetic
    {
      meta: isRu
        ? ""
        : "Explore top-notch genital aesthetic surgery options in Turkey with Azpo Health in 2025. Experience expert care and transformative results tailored to your needs.",
      title: isRu ? "" : "",
      path: "aesthetic/genital-aesthetic",
    },
    // FUE Hair Transplant
    {
      meta: isRu
        ? ""
        : "Experience top-quality FUE hair transplant in Turkey with Azpo Health. Achieve natural results with expert care in a supportive environment. Start your journey today!",
      title: isRu ? "" : "FUE Hair Transplant in Turkey 2025 | Azpo health",
      path: "fue-hair-transplant",
    },
    // DHI Hair Transplant
    {
      meta: isRu
        ? ""
        : "Experience top-quality DHI hair transplant services in Turkey with Azpo Health. Transform your look and boost your confidence with our expert care in 2025.",
      title: isRu ? "" : "DHI Hair Transplant in Turkey 2025 | Azpo health",
      path: "dhi-hair-transplant",
    },
    // PRP Hair Transplant
    {
      meta: isRu
        ? ""
        : "Experience top-quality PRP hair transplant services in Turkey in 2025 with Azpo Health. Achieve your hair restoration goals with expert care and support.",
      title: isRu ? "" : "PRP Hair Transplant in Turkey 2025 | Azpo health",
      path: "prp-hair-treatment",
    },
    // Hair Mesotherapy
    {
      meta: isRu
        ? ""
        : "Experience effective hair mesotherapy in Turkey in 2025. Achieve fuller hair with our expert treatments tailored to your needs at Azpo Health.",
      title: isRu ? "" : "Hair Mesotherapy in Turkey 2025 | Azpo health",
      path: "mesotherapy-hair",
    },
    // Beard Hair Transplant
    {
      meta: isRu
        ? ""
        : "Experience a beard hair transplant in Turkey in 2025 with Azpo Health. Achieve a fuller, natural look with our expert team and personalized care.",
      title: isRu ? "" : "beard HairTransplant in Turkey 2025 | Azpo health",
      path: "beard-transplant",
    },
    // Moustache Transplant
    {
      meta: isRu
        ? ""
        : "Experience a transformative moustache transplant in Turkey in 2025. Enhance your appearance and confidence with expert care at Azpo Health.",
      title: isRu ? "" : "Moustache Transplant in Turkey 2025 | Azpo health",
      path: "moustache-transplant",
    },
    // Eyebrow Transplant
    {
      meta: isRu
        ? ""
        : "Experience a transformative eyebrow transplant in Turkey in 2025 with Azpo Health. Achieve beautiful, natural-looking results at an affordable price.",
      title: isRu ? "" : "eyebrow Transplant in Turkey 2025 | Azpo health",
      path: "eyebrow-transplant",
    },
    // Rhinoplasty
    {
      meta: isRu
        ? ""
        : "Experience top-notch rhinoplasty in Turkey with Azpo Health in 2025. Achieve your aesthetic goals with expert care and personalized treatment plans.",
      title: isRu ? "" : "Rhinoplasty in Turkey 2025 | Azpo health",
      path: "hinoplasty-nose-reshaping",
    },
    // Double Chin Liposuction
    {
      meta: isRu
        ? ""
        : "Experience safe and effective double chin liposuction in Turkey in 2025 with Azpo Health. Transform your appearance and boost your confidence today.",
      title: isRu ? "" : "Double Chin liposuction in Turkey 2025 | Azpo health",
      path: "double-chin-liposuction",
    },
    // Otoplasty
    {
      meta: isRu
        ? ""
        : "Experience top-quality otoplasty surgery in Turkey with Azpo Health in 2025. Enhance your appearance with expert care and personalized treatment options.",
      title: isRu ? "" : "Otoplasty Surgery in Turkey 2025 | Azpo health",
      path: "otoplasty",
    },
    // Blepharoplasty
    {
      meta: isRu
        ? ""
        : "Experience exceptional blepharoplasty in Turkey with Azpo Health in 2025. Enhance your beauty and confidence with our expert surgical services tailored for you.",
      title: isRu
        ? ""
        : "Blepharoplasty (Eyelid Surgery) in Turkey 2025 | Azpo health",
      path: "blepharoplasty-upper-lower",
    },
    // Brow Lift
    {
      meta: isRu
        ? ""
        : "Experience top-quality brow lift surgery in Turkey in 2025. Enhance your appearance with expert care at Azpo Health, ensuring exceptional results and comfort.",
      title: isRu ? "" : "Brow Lift Surgery in Turkey 2025 | Azpo health",
      path: "brow-lift",
    },
    {
      meta: isRu
        ? ""
        : "Experience transformative neck lift surgery in Turkey with Azpo Health. Achieve a youthful appearance and boost your confidence in 2025 with expert care.",
      title: isRu ? "" : "Neck Lift Surgery in Turkey 2025 | Azpo health",
      path: "neck-lift",
    },
    {
      meta: isRu
        ? ""
        : "Explore the benefits of tip plasty in Turkey with Azpo Health. Experience enhanced beauty and confidence through expert care and advanced techniques in aesthetic surgery.",
      title: isRu ? "" : "Tip Plasty in Turkey 2025 | Azpo health",
      path: "tip-plasty",
    },
    {
      meta: isRu
        ? ""
        : "Experience the allure of Almond Eye aesthetics in Turkey. Transform your look with expert facial surgery, blending beauty and artistry for a stunning result.",
      title: isRu
        ? ""
        : "Almond Eye (Cat Eye / Fox Eye Look) Aesthetics in Turkey 2025 | Azpo health",
      path: "almond-eye",
    },
    {
      meta: isRu
        ? ""
        : "Experience a transformative face lift in Turkey in 2025. Enhance your beauty and confidence with expert care in a stunning location. Your journey begins here.",
      title: isRu ? "" : "Face lift in Turkey in 2025 | Azpo health",
      path: "face-lift",
    },
    {
      meta: isRu
        ? ""
        : "Experience advanced bichectomy procedures in Turkey with Azpo Health. Transform your facial aesthetics with expert care in a welcoming environment in 2025.",
      title: isRu ? "" : "Bichectomy in Turkey 2025 | Azpo health",
      path: "bichecktomy",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality liposuction in Turkey with Azpo Health in 2025. Achieve your desired body shape with expert care and advanced techniques tailored for you.",
      title: isRu ? "" : "Liposuction in Turkey 2025 | Azpo health",
      path: "liposuction",
    },
    {
      meta: isRu
        ? ""
        : "Experience a transformative Brazilian Butt Lift in Turkey in 2025. Achieve your desired body shape with expert care and competitive pricing at Azpo Health.",
      title: isRu ? "" : "Brazilian Butt Lift in Turkey 2025 | Azpo health",
      path: "brazilian-butt-lift",
    },
    {
      meta: isRu
        ? ""
        : "Experience transformative arm lift procedures in Turkey in 2025 with Azpo Health. Enhance your confidence and achieve your desired body contouring goals.",
      title: isRu ? "" : "Arm Lift in Turkey 2025 | Azpo health",
      path: "arm-lift",
    },
    {
      meta: isRu
        ? ""
        : "Experience transformative thigh lift surgery in Turkey with Azpo Health in 2025. Achieve your desired body shape with expert care and affordable options.",
      title: isRu ? "" : "Thigh Lift Surgery in Turkey 2025 | Azpo health",
      path: "thigh-lift",
    },
    {
      meta: isRu
        ? ""
        : "Experience a transformative tummy tuck in Turkey with Azpo Health in 2025. Achieve your aesthetic goals with expert care and exceptional results.",
      title: isRu ? "" : "Tummy Tuck in Turkey 2025 | Azpo health",
      path: "tummy-tuck-abdominoplasty",
    },
    {
      meta: isRu
        ? ""
        : "Experience a transformative Mommy Makeover in Turkey in 2025 with Azpo Health. Achieve your aesthetic goals in a beautiful setting while enjoying top-notch care.",
      title: isRu ? "" : "Mommy Makeover Journey in Turkey 2025 | Azpo health",
      path: "mommy-makeover",
    },
    {
      meta: isRu
        ? ""
        : "Explore top-quality breast augmentation implants in Turkey with Azpo Health in 2025. Achieve your aesthetic goals with expert care and competitive pricing.",
      title: isRu
        ? ""
        : "Breast Augmentation Implants in Turkey 2025 | Azpo health",
      path: "breast-augmentation-implants",
    },
    {
      meta: isRu
        ? ""
        : "Experience a transformative journey with breast lift mastopexy in Turkey. Expert care, advanced techniques, and beautiful results await you in 2025.",
      title: isRu ? "" : "Breast Lift Mastopexy in Turkey 2025 | Azpo health",
      path: "breast-lift-mastopexy",
    },
    {
      meta: isRu
        ? ""
        : "Considering breast reduction surgery in Turkey? Explore expert care and affordable options in 2025 with Azpo Health for a transformative experience.",
      title: isRu ? "" : "Breast Reduction in Turkey 2025 | Azpo health",
      path: "breast-reduction",
    },
    {
      meta: isRu
        ? ""
        : "Experience exceptional male breast reduction in Turkey in 2025 with Azpo Health. Enhance your confidence and achieve the body you desire through expert care.",
      title: isRu ? "" : "Male Breast Reduction in Turkey 2025 | Azpo health",
      path: "male-breast-reduction",
    },
    {
      meta: isRu
        ? ""
        : "Experience world-class labiaplasty in Turkey in 2025 with Azpo Health. Achieve your aesthetic goals in a safe and professional environment.",
      title: isRu ? "" : "Labiaplasty in Turkey 2025 | Azpo health",
      path: "genital-labiaplasty-barbie-look",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-notch vaginal tightening procedures in Turkey in 2025 with Azpo Health. Enhance your confidence and well-being with expert care and advanced techniques.",
      title: isRu ? "" : "Vaginal Tightening in Turkey 2025 | Azpo health",
      path: "genital-vaginal-tightening",
    },
    {
      meta: isRu
        ? ""
        : "Explore exceptional halloplasty options for penile enlargement in Turkey in 2025 with Azpo Health, ensuring professional care and transformative results.",
      title: isRu
        ? ""
        : "halloplasty for Penile Enlargement in Turkey 2025 | Azpo health",
      path: "genital-penile-enlargement-phalloplasty",
    },
    {
      meta: isRu
        ? ""
        : "Explore affordable dental treatments in Turkey in 2025. Experience high-quality care and innovative solutions for a healthier smile with Azpo Health.",
      title: isRu ? "" : "Dental Treatments in Turkey 2025 | Azpo health",
      path: "dental-treatments",
    },
    {
      meta: isRu
        ? ""
        : "Explore top-tier dental implant services in Turkey in 2025. Experience affordable, high-quality care with expert professionals dedicated to your smile.",
      title: isRu ? "" : "Dental Implants in Turkey 2025  | Azpo health",
      path: "implant-treatment",
    },
    {
      meta: isRu
        ? ""
        : "Explore top-quality general dentistry services in Turkey with Azpo Health. Experience advanced treatments and exceptional care for a healthier smile in 2025.",
      title: isRu ? "" : "General Dentistry in Turkey 2025  | Azpo health",
      path: "general-dentistry",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality cosmetic dentistry in Turkey in 2025. Enhance your smile with expert care at Azpo Health, where your dental transformation begins.",
      title: isRu ? "" : "Cosmetic Dentistry in Turkey 2025 | Azpo health",
      path: "cosmetic-dentistry",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality restorative dentistry in Turkey with Azpo Health. Transform your smile with expert care and advanced treatments tailored to your needs.",
      title: isRu ? "" : "Restorative Dentistry in Turkey 2025 | Azpo health",
      path: "restorative-dentistry",
    },
    {
      meta: isRu
        ? ""
        : "Explore the leading periodontics services in Turkey for 2025. Experience top-notch dental care that combines expertise with advanced technology for optimal results.",
      title: isRu ? "" : "Periodontics in Turkey 2025 | Azpo health",
      path: "periodontics",
    },
    {
      meta: isRu
        ? ""
        : "Achieve a perfect smile with top-notch orthodontic care in Turkey. Expert dentists and advanced techniques ensure exceptional results at competitive prices.",
      title: isRu ? "" : "Orthodontics Care in Turkey 2025 | Azpo health",
      path: "orthodontics",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-notch oral surgery in Turkey with Azpo Health in 2025. Get quality care and advanced treatments at competitive prices for your dental needs.",
      title: isRu ? "" : "Oral Surgery in Turkey 2025 | Azpo health",
      path: "oral-surgery",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality dental implants in Turkey with our All-on-4 and All-on-6 options. Achieve a beautiful smile and improved oral health at an affordable price.",
      title: isRu
        ? ""
        : "Dental Implants in Turkey All-on-4 & All-on-6 | Azpo health",
      path: "6-4-dental-implants",
    },
    {
      meta: isRu
        ? ""
        : "Explore affordable dental implants in Turkey in 2025 with Azpo Health. Experience high-quality treatment and expert care for a confident smile.",
      title: isRu ? "" : "Dental Implants in Turkey 2025  | Azpo health",
      path: "implant-treatment",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality root canal therapy in Turkey in 2025. Our expert dentists ensure comfort and care, making your dental journey both effective and affordable.",
      title: isRu ? "" : "Root Canal Therapy in Turkey 2025  | Azpo health",
      path: "root-canal-therapy",
    },
    {
      meta: isRu
        ? ""
        : "Get high-quality dental fillings in Turkey in 2025 with Azpo Health. Experience exceptional care and affordable prices while ensuring your dental health.",
      title: isRu ? "" : "Dental Fillings in Turkey 2025 | Azpo health",
      path: "fillings",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-notch dental check-ups in Turkey in 2025. Enjoy quality care and affordable treatments while exploring a vibrant culture and beautiful landscapes.",
      title: isRu
        ? ""
        : "Dental Check-ups Await You in Turkey 2025 | Azpo health",
      path: "routine-check-ups",
    },
    {
      meta: isRu
        ? ""
        : "Get the best dental X-ray services in Turkey in 2025. Experience advanced technology and skilled professionals for your dental health needs at Azpo Health.",
      title: isRu ? "" : "Dental X-rays in Turkey 2025 | Azpo health",
      path: "dental-x-rays",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality tooth extractions in Turkey with Azpo Health. Enjoy advanced dental care at competitive prices while ensuring your comfort and satisfaction.",
      title: isRu ? "" : "Tooth Extractions in Turkey 2025 | Azpo health",
      path: "tooth-extractions",
    },
    {
      meta: isRu
        ? ""
        : "Experience exceptional dental bonding services in Turkey in 2025. Achieve your dream smile with our expert care and advanced techniques tailored to your needs.",
      title: isRu ? "" : "Dental Bonding in Turkey 2025 | Azpo health",
      path: "dental-bonding",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality laminate veneers in Turkey in 2025. Enhance your smile with expert dental care at Azpo Health, where beauty meets affordability.",
      title: isRu ? "" : "Laminate Veneers in Turkey 2025 | Azpo health",
      path: "laminate-veneers",
    },
    {
      meta: isRu
        ? ""
        : "Experience a stunning transformation with Hollywood Smile in Turkey. Achieve your dream smile with expert care and advanced dental treatments at Azpo Health.",
      title: isRu
        ? ""
        : "Hollywood Smile | Transform Your Smile in Turkey 2025 | Azpo health",
      path: "hollywood-smile",
    },
    {
      meta: isRu
        ? ""
        : "Experience professional teeth whitening in Turkey in 2025. Achieve a radiant smile with our advanced dental treatments at Azpo Health, tailored for your needs.",
      title: isRu
        ? ""
        : "Teeth Whitening: Achieve a Brighter Smile in Turkey 2025 | Azpo health",
      path: "teeth-whitening",
    },
    {
      meta: isRu
        ? ""
        : "Explore top-quality dental crown solutions in Turkey for 2025. Experience exceptional care and competitive prices while enhancing your smile with Azpo Health.",
      title: isRu ? "" : "Dental Crowns in Turkey 2025 | Azpo health",
      path: "dental-crowns",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality gum graft surgery in Turkey with Azpo Health. Enhance your smile and oral health while enjoying a cost-effective medical tourism option.",
      title: isRu
        ? ""
        : "Protect Your Smile with Gum Graft Surgery in Turkey 2025 | Azpo health",
      path: "gum-grafting",
    },
    {
      meta: isRu
        ? ""
        : "Experience cutting-edge laser gum surgery in Turkey in 2025. Benefit from expert care and advanced technology for optimal dental health at Azpo Health.",
      title: isRu ? "" : "Laser Gum Surgery in Turkey 2025 | Azpo health",
      path: "laser-gum-treatments",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality clear aligners with Invisalign in Turkey in 2025. Transform your smile with expert care and advanced technology at Azpo Health.",
      title: isRu
        ? ""
        : "Clear Aligners Invisalign in Turkey2025 | Azpo health",
      path: "clear-aligners-invisalign",
    },
    {
      meta: isRu
        ? ""
        : "Explore exceptional bone grafting services in Turkey with Azpo Health. Experience quality care and advanced techniques for your dental needs in 2025.",
      title: isRu ? "" : "Bone Grafting in Turkey 2025 | Azpo health",
      path: "bone-grafting",
    },
    {
      meta: isRu
        ? ""
        : "Experience a seamless wisdom teeth removal in Turkey with Azpo Health in 2025. Our expert team ensures comfort, safety, and a quick recovery for your dental needs.",
      title: isRu ? "" : "Wisdom Teeth Removal in Turkey 2025 | Azpo health",
      path: "wisdom-teeth-removal",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-quality jaw surgery in Turkey with Azpo Health in 2025. Transform your smile and enhance your confidence with our expert dental care services.",
      title: isRu ? "" : "Jaw Surgery in Turkey 2025 | Azpo health",
      path: "jaw-surgery",
    },
    {
      meta: isRu
        ? ""
        : "Experience exceptional eye care with Ophthalmology Turkey 2025. Enhance your vision with advanced treatments and personalized care from expert professionals.",
      title: isRu ? "" : "Ophthalmology in Turkey 2025 | Azpo health",
      path: "eye-surgery",
    },
    {
      meta: isRu
        ? ""
        : "Explore advanced eye disease treatments in Turkey for 2025, ensuring high-quality care and innovative solutions at Azpo Health for a brighter future for your vision.",
      title: isRu ? "" : "Eye Disease Treatments in Turkey 2025 | Azpo health",
      path: "eye-disease-treatments",
    },
    {
      meta: isRu
        ? ""
        : "Experience advanced eye surgical and implant procedures in Turkey with Azpo Health in 2025. Qualified specialists and cutting-edge technology ensure excellent care.",
      title: isRu
        ? ""
        : "Eye Surgical & Implant Procedures in Turkey 2025 | Azpo health",
      path: "surgical-implant-procedures",
    },
    {
      meta: isRu
        ? ""
        : "Get effective diabetic retinopathy treatment through vitrectomy in Turkey. Experience top-quality healthcare and advanced technology for your eye health needs.",
      title: isRu
        ? ""
        : "Diabetic Retinopathy Treatment (Vitrectomy) in Turkey 2025 | Azpo health",
      path: "diabetic-retinopathy-treatment",
    },
    {
      meta: isRu
        ? ""
        : "Explore advanced glaucoma treatment options in Turkey for 2025. Experience top-quality care and innovative techniques with Azpo Health to enhance your vision.",
      title: isRu ? "" : "Glaucoma Treatment in Turkey 2025 | Azpo health",
      path: "glaucoma-treatment",
    },
    {
      meta: isRu
        ? ""
        : "Experience exceptional cataract treatment in Turkey in 2025. Our expert team ensures top-quality care and advanced techniques for improved vision and health.",
      title: isRu ? "" : "Cataract Treatment in Turkey 2025 | Azpo health",
      path: "cataract-treatment",
    },
    {
      meta: isRu
        ? ""
        : "Explore advanced retinal disease treatment options in Turkey with Azpo Health. Experience expert care and innovative procedures tailored to your needs in 2025.",
      title: isRu
        ? ""
        : "Advanced Retinal Disease Treatment in Turkey 2025 | Azpo health",
      path: "retinal-disease-treatment",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-notch cataract surgery with IOL implantation in Turkey in 2025. Our expert team ensures optimal care and advanced technology for your eye health.",
      title: isRu
        ? ""
        : "Cataract Surgery with Intraocular Lens (IOL) Implantation in Turkey 2025 | Azpo health",
      path: "intraocular-lens",
    },
    {
      meta: isRu
        ? ""
        : "Experience advanced corneal transplantation in Turkey in 2025. Benefit from top-notch medical care and expertise for your eye health at Azpo Health.",
      title: isRu ? "" : "Corneal Transplantation in Turkey 2025 | Azpo health",
      path: "corneal-transplantation",
    },
    {
      meta: isRu
        ? ""
        : "Experience advanced Lasik eye surgery in Turkey with Azpo Health in 2025. Achieve clearer vision and excellent care at competitive prices. Transform your eyesight today!",
      title: isRu ? "" : "Lasik Eye Surgery in Turkey 2025 | Azpo health",
      path: "lasik-surgery",
    },
    {
      meta: isRu
        ? ""
        : "Experience the future of vision correction with Smart Lens procedures in Turkey. Enhance your sight with advanced technology and expert care in a beautiful setting.",
      title: isRu ? "" : "Smart Lens in Turkey 2025 | Azpo health",
      path: "smart-lens",
    },
    {
      meta: isRu
        ? ""
        : "Explore top fertility treatment options in Turkey for 2025. Experience advanced medical care and support at Azpo Health for your journey to parenthood.",
      title: isRu ? "" : "Fertility Treatment in Turkey 2025 | Azpo health",
      path: "fertility",
    },
    {
      meta: isRu
        ? ""
        : "Explore fertility and assisted reproduction options in Turkey for 2025. Experience high-quality care and advanced treatments tailored to your needs at Azpo Health.",
      title: isRu
        ? ""
        : "Fertility & Assisted Reproduction in Turkey 2025 | Azpo health",
      path: "fertility-assisted-reproduction",
    },
    {
      meta: isRu
        ? ""
        : "Explore comprehensive insights on male infertility in 2025, focusing on effective solutions and support options to help individuals achieve their family planning goals.",
      title: isRu
        ? ""
        : "Understanding and Overcoming Male Infertility in 2025 | Azpo health",
      path: "male-infertility",
    },
    {
      meta: isRu
        ? ""
        : "Experience exceptional IVF fertility treatments in Turkey in 2025. Azpo Health offers personalized care and advanced technology for successful outcomes.",
      title: isRu ? "" : "IVF Fertility in Turkey 2025 | Azpo health",
      path: "ivf",
    },
    {
      meta: isRu
        ? ""
        : "Experience top-notch frozen embryo transfer services in Turkey in 2025. Benefit from advanced medical technology and personalized care at Azpo Health.",
      title: isRu ? "" : "Frozen Embryo Transfer in Turkey 2025 | Azpo health",
      path: "fet-frozen-embryo-transfer",
    },
    {
      meta: isRu
        ? ""
        : "Explore cutting-edge stem cell treatments in Turkey, designed to enhance your health and wellbeing in 2025. Experience world-class care and advanced medical solutions.",
      title: isRu ? "" : "Stem Cell Therapy in Turkey 2025 | Azpo health",
      path: "stem-cell",
    },
    {
      meta: isRu
        ? ""
        : "Explore advanced male sexual and reproductive health stem cell therapy options in Turkey in 2025. Experience innovative treatments for improved well-being.",
      title: isRu
        ? ""
        : "Male Sexual & Reproductive Health Stem Cell Therapy in Turkey 2025 | Azpo health",
      path: "male-sexual-therapy",
    },
    {
      meta: isRu
        ? ""
        : "Experience a transformative journey in Turkey to enhance male sexual health. Regain your confidence and vitality with expert care and innovative treatments.",
      title: isRu
        ? ""
        : "Struggling with Male Sexual Health Issues? Regain Confidence & Vitality in Turkey! 2025  | Azpo health",
      path: "male-sexual-health-issues",
    },
    {
      meta: isRu
        ? ""
        : "Experience cutting-edge stem cell therapy in Turkey for Peyronie's disease in 2025 with Azpo Health. Transform your health and regain confidence today.",
      title: isRu
        ? ""
        : "Innovative Stem Cell Therapy in Turkey 2025 | Azpo health",
      path: "peyronies-disease",
    },
    {
      meta: isRu
        ? ""
        : "Regain your confidence and intimacy in Turkey with cutting-edge treatments for erectile dysfunction. Experience personalized care and expert support in 2025.",
      title: isRu
        ? ""
        : "Struggling with Erectile Dysfunction? Regain Your Confidence & Intimacy in Turkey 2025 | Azpo health",
      path: "erectile-dysfunction-ed",
    },
    {
      meta: isRu
        ? ""
        : "Explore cutting-edge stem cell therapy and regenerative medicine options in Turkey for 2025. Enhance your health journey with advanced treatments tailored for you.",
      title: isRu
        ? ""
        : "Stem Cell Therapy & Regenerative Medicine in Turkey 2025 | Azpo health",
      path: "therapy-regenerative-medicine",
    },
    {
      meta: isRu
        ? ""
        : "Experience advanced stem cell therapy for men in Turkey in 2025. Enhance your health and well-being with cutting-edge treatments tailored to your needs.",
      title: isRu
        ? ""
        : "Stem Cell Therapy for Men in Turkey 2025 | Azpo health",
      path: "stem-cell-for-men",
    },
    {
      meta: isRu
        ? ""
        : "Experience advanced orthopedic stem cell therapy in Turkey in 2025. Enhance your healing journey with expert care and innovative treatment options tailored for you.",
      title: isRu
        ? ""
        : "Orthopedic Stem Cell Therapy in Turkey 2025 | Azpo health",
      path: "orthopedic-stem-cell-therapy",
    },
    {
      meta: isRu
        ? ""
        : "Experience cutting-edge neurological stem cell therapy in Turkey in 2025, offering innovative treatments to enhance healing and improve quality of life.",
      title: isRu
        ? ""
        : "Neurological Stem Cell Therapy in Turkey 2025 | Azpo health",
      path: "neurological-therapy",
    },
  ];
  return titleList;
};

export {
  titleCategorySeoHandler,
  titleSubCategorySeoHandler,
  titleSubNestedCategorySeoHandler,
};
