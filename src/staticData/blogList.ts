import rules from "@/assets/images/blog/rules.jpg";
import risky from "@/assets/images/blog/Risky.jpg";
import ovary from "@/assets/images/blog/OVARY.jpg";
import breast from "@/assets/images/blog/Breast.jpg";
export const blogList = (locale: string) => {
  const isRu = locale === "ru";
  const blogs = [
    {
      img: rules,
      title: isRu
        ? "8 правил после операции на носу"
        : "8 rules to follow after nose surgeries",
      desc: isRu
        ? "Повышенное внимание к эстетике внешности у мужчин и женщин, особенно в подростковом возрасте"
        : "Increased aesthetic concerns about appearance in men and women especially in adolescence",
      blogDate: "14 Nov 2024",
      blogId: 0,
    },
    {
      img: risky,
      title: isRu
        ? "Если у вас рискованная беременность..."
        : "If You Have Risky Pregnancy...",
      desc: isRu
        ? "Рискованные беременности — это серьезная проблема, угрожающая жизни матери и ребёнка..."
        : "Risky pregnancies are an important problem that threatens the life of the mother and baby...",
      blogDate: "2 Nov 2024",
      blogId: 1,
    },
    {
      img: ovary,
      title: isRu
        ? "Синдром поликистозных яичников"
        : "POLYCYSTIC OVARY SYNDROME",
      desc: isRu
        ? "Синдром поликистозных яичников (СПКЯ) — очень распространённое заболевание у женщин репродуктивного возраста..."
        : "Polycystic ovary syndrome (PCOS), which is very common in women of reproductive age...",
      blogDate: "23 Nov 2024",
      blogId: 2,
    },
    {
      img: breast,
      title: isRu
        ? "Эстетика груди снижает боли в шее и спине"
        : "Breast Aesthetics Reduces Neck And Back Pain",
      desc: isRu
        ? "Крупная грудь, вызывающая хронические боли в шее и спине, может привести к нарушению осанки..."
        : "The large breast structure, which is the cause of chronic neck and back pain, can cause postural disorder ...",
      blogDate: "29 Nov 2024",
      blogId: 3,
    },
  ];

  return blogs;
};
