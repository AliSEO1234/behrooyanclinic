import hair from "@/assets/images/treatment/Hair Transplantation.jpg";
import fecial from "@/assets/images/treatment/Facial Aesthetic Surgery.jpg";
import body from "@/assets/images/treatment/Body contouring.jpg";
import breastCategory from "@/assets/images/treatment/breast.jpg";
// hair
import Beard from "@/assets/images/subnested/Beard Transplant.jpg";
import prp from "@/assets/images/subnested/PRP Hair Treatment.jpg";
import DHI from "@/assets/images/subnested/DHI Hair Transplant.jpg";
import Eyebrow from "@/assets/images/subnested/Eyebrow Transplant.jpg";
import FUE from "@/assets/images/subnested/FUE Hair Transplant.jpg";
import Mesotherapy from "@/assets/images/subnested/Mesotherapy for Hair.jpeg";
import Moustache from "@/assets/images/subnested/Moustache Transplant.jpg";
import double from "@/assets/images/subnested/Double Chin Liposuction.jpg";
// body contouring
import arm from "@/assets/images/subnested/Arm Lift (Brachioplasty).jpg";
import brazilianad from "@/assets/images/subnested/Brazilian Butt Lift (BBL).jpg";
import breast from "@/assets/images/subnested/Breast Surgery.jpg";
import liposuction from "@/assets/images/subnested/Liposuction.jpg";
import tummy from "@/assets/images/subnested/Mommy Makeover.jpg";
import thighlift from "@/assets/images/subnested/Thigh Lift.jpg";
// fecial
import rhinoplasty from "@/assets/images/subnested/Rhinoplasty (Nose reshaping).jpg";
import brow from "@/assets/images/subnested/Brow Lift (Browplasty).jpg";
import neck from "@/assets/images/subnested/Neck Lift (Platysmaplasty).jpg";
import otoplasty from "@/assets/images/subnested/Otoplasty.jpg";
import ble from "@/assets/images/subnested/Blepharoplasty (Upper and Lower Eyelid Surgery).jpg";

export const allSubCategory = [
  {
    img: hair,
    title: "Hair Transplantation",
    description:
      "Tired of thinning hair or a receding hairline? Discover affordable, world-class hair transplant solutions at AZPO Health in Istanbul, Turkey. Regain your youthful appearance and confidence with our experienced medical team and state-of-the-art techniques.",
    categoryKey: "aesthetic",
    path: "hair-transplantation",
  },
  {
    img: fecial,
    title: "Facial Aesthetic Surgery",
    description:
      "Is aging or genetics affecting your confidence? Discover world-class facial aesthetic treatments in Istanbul, Antalya, and Alanya for a natural, refreshed you! Contact AZPO Health today for a free consultation and reveal your best self!",
    categoryKey: "aesthetic",
    path: "facial-aesthetic-surgery",
  },
  {
    img: body,
    title: "Body contouring",
    description:
      "Achieve the body of your dreams with advanced body contouring procedures in Turkey. Experience world-class medical care, personalized treatment plans, and stunning results.",
    categoryKey: "aesthetic",
    path: "body-contouring",
  },
  {
    img: breastCategory,
    title: "Breast Surgery",
    description: "Considering breast surgery? Unlock your dream silhouette and boost your self-esteem with world-class breast surgery in Turkey. AZPO Health offers expert surgeons, luxurious care, and affordable packages. Explore your options for breast augmentation, reduction, and lift in a premier medical tourism destination.",
    categoryKey: "aesthetic",
    path: "breast-surgery",
  },
];
export const allSubNestedCategory = [
  // hair-transplantation
  {
    img: FUE,
    title: "FUE Hair Transplantation",
    description:
      "Tired of thinning hair? Discover world-class FUE hair transplant solutions at AZPO Health in Istanbul, Antalya, and Alanya. Regain your youthful look and confidence with our experienced team and advanced techniques.",
    path: "fue-hair-transplant",
    categoryKey: "aesthetic",
    subCategoryKey: "hair-transplantation",
  },
  {
    img: DHI,
    title: "DHI Hair Transplant",
    description:
      "Suffering from hair loss? Discover the innovative DHI technique in Turkey for a natural-looking, painless, and permanent solution. AZPO Health offers expertise, comprehensive packages, and stunning results in Istanbul, Antalya, and Alanya.",
    categoryKey: "aesthetic",
    path: "dhi-hair-transplant",
    subCategoryKey: "hair-transplantation",
  },
  {
    img: prp,
    title: "PRP Hair Treatment",
    description:
      "Discover the benefits of PRP hair transplant at AZPO Health clinics in Istanbul, Antalya, and Alanya. Stimulate hair follicles, reduce hair loss, and achieve a fuller, healthier head of hair.",
    path: "prp-hair-treatment",
    categoryKey: "aesthetic",
    subCategoryKey: "hair-transplantation",
  },
  {
    img: Mesotherapy,
    title: "Mesotherapy Hair",
    description:
      "Is thinning hair affecting your confidence? Discover the transformative power of hair mesotherapy at AZPO Health in Turkey. Our expert treatments in Istanbul, Antalya, and Alanya stimulate hair growth, nourish your scalp, and restore your hair's natural vitality. Contact us today for a free consultation and reclaim your youthful appearance!",
    path: "mesotherapy-hair",
    categoryKey: "aesthetic",
    subCategoryKey: "hair-transplantation",
  },
  {
    img: Beard,
    title: "Beard Transplant",
    description:
      "Dreaming of a fuller, more defined beard? Discover the transformative power of beard transplants in Turkey. With advanced techniques and experienced specialists, AZPO Health offers natural-looking, permanent solutions to help you achieve your ideal beard. Contact us for a free consultation and unlock your beard potential!",
    path: "beard-transplant",
    categoryKey: "aesthetic",
    subCategoryKey: "hair-transplantation",
  },
  {
    img: Moustache,
    title: "Moustache Transplant",
    description:
      "Dream of a fuller, more defined moustache? Discover natural and permanent moustache transplant solutions at AZPO Health in Turkey!",
    path: "moustache-transplant",
    categoryKey: "aesthetic",
    subCategoryKey: "hair-transplantation",
  },
  {
    img: Eyebrow,
    title: "Eyebrow Transplant",
    description:
      "Achieve perfectly shaped, natural-looking eyebrows with AZPO Health's expert eyebrow transplant procedures in Istanbul, Antalya, and Alanya.",
    path: "eyebrow-transplant",
    categoryKey: "aesthetic",
    subCategoryKey: "hair-transplantation",
  },
  // facial
  {
    img: rhinoplasty,
    title: "Rhinoplasty Nose Reshaping",
    description:
      "Feeling self-conscious about your nose's appearance or struggling with breathing issues?. In 2025, AZPO Health in Turkey offers natural-looking rhinoplasty with permanent results, helping you regain confidence.",
    path: "rhinoplasty-nose-reshaping",
    categoryKey: "aesthetic",
    subCategoryKey: "facial-aesthetic-surgery",
  },
  {
    img: double,
    title: "Double chin iposuction",
    description:
      "Is a stubborn double chin clouding your profile? Don't let excess fat under your chin keep you from feeling your best. Double chin liposuction can sculpt a more youthful, defined look, restoring your confidence.",
    path: "double-chin-liposuction",
    categoryKey: "aesthetic",
    subCategoryKey: "facial-aesthetic-surgery",
  },
  {
    img: otoplasty,
    title: "Otoplasty",
    description:
      "Are you concerned about prominent or misshapen ears? AZPO Health in Turkey offers otoplasty surgery to reshape your ears, boost your self-esteem, and provide natural, long-lasting results.",
    path: "otoplasty",
    categoryKey: "aesthetic",
    subCategoryKey: "facial-aesthetic-surgery",
  },
  {
    img: ble,
    title: "Blepharoplasty upper lower",
    description:
      "Tired of looking tired? Blepharoplasty can help refresh your appearance and restore your confidence in 2025. Are heavy, drooping eyelids making you look older than you feel? Are you noticing puffiness or bags under your eyes that just won't go away, no matter how much sleep you get? Perhaps you're even experiencing vision problems due to sagging upper eyelids. At AZPO Health, we understand how these concerns can affect your self-esteem and overall quality of life. Blepharoplasty, or eyelid surgery, offers a rejuvenating solution to address these issues, helping you achieve a brighter, more youthful, and refreshed appearance.",
    path: "blepharoplasty-upper-lower",
    categoryKey: "aesthetic",
    subCategoryKey: "facial-aesthetic-surgery",
  },
  {
    img: brow,
    title: "Brow Lift",
    description:
      "Is forehead wrinkles, hooded eyelids, or drooping brows are casting a shadow on your confidence? At AZPO Health, we understand the frustration. Discover how a brow lift in Turkey can rejuvenate your appearance, smooth wrinkles, and restore a more alert, youthful you.",
    path: "brow-lift",
    categoryKey: "aesthetic",
    subCategoryKey: "facial-aesthetic-surgery",
  },
  {
    img: neck,
    title: "Neck Lift",
    description:
      "Is a sagging neckline stealing your confidence? At AZPO Health in Turkey, a neck lift can rejuvenate your appearance, offering a smoother, more defined contour and a boost in self-esteem.",
    path: "neck-lift",
    categoryKey: "aesthetic",
    subCategoryKey: "facial-aesthetic-surgery",
  },
  // body contouring
  {
    img: liposuction,
    title: "Liposuction",
    description:
      "Are you struggling with stubborn fat? Discover affordable and effective liposuction in Turkey at AZPO Health, achieving the body you desire with natural-looking results.",
    path: "liposuction",
    categoryKey: "aesthetic",
    subCategoryKey: "body-contouring",
  },
  {
    img: brazilianad,
    title: "Brazilian Butt Lift",
    description:
      "Dreaming of enhanced curves? Discover safe, affordable Brazilian Butt Lift (BBL) options in Turkey with AZPO Health. Achieve natural-looking results and boost your confidence.",
    path: "brazilian-butt-lift",
    categoryKey: "aesthetic",
    subCategoryKey: "body-contouring",
  },
  {
    img: arm,
    title: "Arm Lift",
    description:
      "Dreaming of toned, sculpted arms? Excess skin after weight loss or aging can impact confidence. Discover affordable and transformative Armlift surgery in Turkey with AZPO Health. Reclaim your arm contours and embrace sleeveless styles again!",
    path: "arm-lift",
    categoryKey: "aesthetic",
    subCategoryKey: "body-contouring",
  },
  {
    img: thighlift,
    title: "Thigh Lift",
    description:
      "Are you longing for firmer, more toned thighs that you can confidently show off?. Does excess skin or stubborn fat deposits keep you from wearing the clothes you love and feeling your best?. At AZPO Health, we understand how frustrating it can be to struggle with the appearance of your thighs despite your best efforts with diet and exercise. That's why we offer advanced thigh lift surgery in Turkey, providing a safe, effective, and affordable solution to help you achieve the smooth, sculpted legs you've always dreamed of.",
    path: "thigh-lift",
    categoryKey: "aesthetic",
    subCategoryKey: "body-contouring",
  },

  {
    img: tummy,
    title: "Tummy Tuck Abdominoplasty",
    description:
      "Is excess skin after weight loss or pregnancy making you feel self-conscious? A tummy tuck (abdominoplasty) at AZPO Health in Turkey can remove that skin, tighten your abdominal muscles, and restore your youthful shape. Regain confidence with a flatter, firmer tummy and step into the new you.",
    path: "tummy-tuck-abdominoplasty",
    categoryKey: "aesthetic",
    subCategoryKey: "body-contouring",
  },
  // breast-surgery
  {
    img: breast,
    title: "Breast Augmentation Implants",
    description:
      "Is a sagging neckline stealing your confidence? At AZPO Health in Turkey, a neck lift can rejuvenate your appearance, offering a smoother, more defined contour and a boost in self-esteem.",
    path: "breast-augmentation-implants",
    categoryKey: "aesthetic",
    subCategoryKey: "breast-surgery",
  },
  {
    img: breast,
    title: "Breast Lift Mastopexy",
    description:
      "Is a sagging neckline stealing your confidence? At AZPO Health in Turkey, a neck lift can rejuvenate your appearance, offering a smoother, more defined contour and a boost in self-esteem.",
    path: "breast-lift-mastopexy",
    categoryKey: "aesthetic",
    subCategoryKey: "breast-surgery",
  },
];
