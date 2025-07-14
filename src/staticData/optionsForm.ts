export const options = (locale: string) => {
  const isRu = locale === "ru";

  const optionList = [
    { isActive: true, label: isRu ? "Стоматология" : "Dental", key: "dental-treatments", id: 0 },
    {
      isActive: false,
      label: isRu ? "Физиотерапия и реабилитация" : "Physical Therapy and Rehabilitation",
      key: "aesthetic",
      id: 23,
    },
    { isActive: false, label: isRu ? "Общие обследования" : "Check-Ups", key: "aesthetic", id: 6 },
    { isActive: true, label: isRu ? "Эстетическая медицина" : "Aesthetics", key: "aesthetic", id: 5 },
    { isActive: false, label: isRu ? "Кардиология" : "Cardiology", key: "aesthetic", id: 7 },
    {
      isActive: false,
      label: isRu ? "Неврология и нейрохирургия" : "Neurology & Neurosurgery",
      key: "aesthetic",
      id: 9,
    },
    { isActive: true, label: isRu ? "Стволовые клетки" : "Stem Cell", key: "stem-cell", id: 3 },
    { isActive: false, label: isRu ? "Ортопедия" : "Orthopedics", key: "aesthetic", id: 10 },
    { isActive: false, label: isRu ? "Трансплантация органов" : "Organ Transplants", key: "aesthetic", id: 16 },
    { isActive: true, label: isRu ? "Лечение бесплодия" : "Fertility", key: "fertility", id: 4 },
    {
      isActive: false,
      label: isRu ? "Дерматология и лечение кожи" : "Dermatology and Skin Treatments",
      key: "aesthetic",
      id: 12,
    },
    {
      isActive: false,
      label: isRu ? "Общая и лапароскопическая хирургия" : "General & Laparoscopic Surgery",
      key: "aesthetic",
      id: 13,
    },
    {
      isActive: true,
      label: isRu ? "Офтальмология и хирургия глаза" : "Ophthalmology and Eye Surgery",
      key: "eye-surgery",
      id: 17,
    },
    {
      isActive: false,
      label: isRu ? "Нефрология и урология" : "Nephrology & Urology",
      key: "aesthetic",
      id: 14,
    },
    { isActive: false, label: isRu ? "Операции на позвоночнике" : "Spine Surgeries", key: "aesthetic", id: 15 },
    {
      isActive: true,
      label: isRu ? "Бариатрическая (похудательная) хирургия" : "Bariatric (Weight Loss) Surgery",
      key: "aesthetic/bariatric-surgery",
      id: 11,
    },
    {
      isActive: false,
      label: isRu ? "ЛОР-хирургия (ухо, нос, горло)" : "ENT (Ear, Nose, and Throat) Surgery",
      key: "aesthetic",
      id: 18,
    },
    {
      isActive: false,
      label: isRu ? "Педиатрия и детская хирургия" : "Pediatrics and Pediatric Surgery",
      key: "aesthetic",
      id: 19,
    },
    { isActive: false, label: isRu ? "Онкология" : "Oncology", key: "aesthetic", id: 20 },
    { isActive: false, label: isRu ? "Лечение зависимостей" : "Addiction Treatment", key: "aesthetic", id: 21 },
    { isActive: false, label: isRu ? "Оздоровление" : "Wellness", key: "aesthetic", id: 22 },
  ];

  return optionList;
};
