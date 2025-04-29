import pat1 from "@/assets/images/patient-services/patient1.png";
import pat2 from "@/assets/images/patient-services/patientsub1.png";
import pat3 from "@/assets/images/patient-services/patient2.png";
import pat4 from "@/assets/images/patient-services/patientsub2.png";
import pat5 from "@/assets/images/patient-services/patient3.png";
import pat6 from "@/assets/images/patient-services/patientsub3.png";
import pat7 from "@/assets/images/patient-services/patient4.png";
import pat8 from "@/assets/images/patient-services/patientsub4.png";
import pat9 from "@/assets/images/patient-services/patient5.png";
import pat10 from "@/assets/images/patient-services/patientsub5.png";
import pat11 from "@/assets/images/patient-services/patient6.png";
import pat12 from "@/assets/images/patient-services/patientsub6.png";

export const handlePatientServices = (locale: string) => {
  const patientServices = [
    {
      photos: [pat1, pat2],
      label:
        locale === "ru"
          ? "Онлайн-предварительная консультация"
          : "Online Pre-Consultation",
      desc:
        locale === "ru"
          ? "Мы понимаем, насколько важно подготовиться к медицинскому путешествиюеще до того, как вы покинете свой дом. Именно поэтому мы предлагаем удобныеи информативные онлайн-консультации с ведущими специалистами. Выполучите возможность обсудить свои планы, задать вопросы врачам и медицинским консультантам, а также получить первичные рекомендации, невыходя из дома. Этот шаг помогает вам принять осознанное решение, спланировать лечение и лучше подготовиться к путешествию. Мы всегда насвязи, чтобы обеспечить вам полную ясность по поводу процесса лечения, чтосделает ваше путешествие к здоровью максимально прозрачным и понятным."
          : "We understand how important it is to prepare for your medical journey even before you leave home. That's why we offer convenient and informative online consultations with leading specialists. You’ll have the opportunity to discuss your plans, ask questions to doctors and medical consultants, and receive initial recommendations from the comfort of your home. This step helps you make informed decisions, plan your treatment, and better prepare for your trip. We’re always available to ensure you have full clarity about the treatment process, making your journey towards health as transparent and straightforward as possible.",
    },
    {
      photos: [pat4,pat3],
      label:
        locale === "ru"
          ? "Наша служба поддержки — это не просто помощь 24/7."
          : "24/7 Support",
      desc:
        locale === "ru"
          ? "С первого вашего звонкаи до полного восстановления вы всегда можете на нас рассчитывать. Даже послезавершения лечения, мы остаёмся на связи, чтобы оказать содействие в любыхситуациях. Мы как хорошие друзья, которые рядом в любой момент, готовыеподдержать вас и предложить решение в любой ситуации.Мы досконально знаем Турцию и можем помочь не только с медицинскимирекомендациями, но и с бытовыми вопросами. Наша цель — обеспечить вашеспокойствие и комфорт на всех этапах лечения. Будьте уверены, что мы всегдарядом, чтобы сделать ваше пребывание в Турции удобным и приятным."
          : `Our support service is more than just assistance 24/7. From your first call until your full recovery, you can always count on us. Even after your medical treatment is complete, we remain available to offer help whenever you need it. Think of us as good friends who are always by your side, ready to guide you and lend a helping hand in any situation.\n
      With our in-depth knowledge of Turkey, we’re here to assist not only with medical advice but also with practical matters. Our goal is to ensure your peace of mind and comfort throughout your journey. You can rest assured that we are always nearby, making your stay in Turkey as smooth and hassle-free as possible.`,
    },
    {
      photos: [pat5, pat6],
      label: locale === "ru" ? "Проживание" : "Accomodation",
      desc:
        locale === "ru"
          ? "«А как же большая и мягкая постель?»Всем известно, что важнейший аспект любой поездки — это место, где вы будетепроживать. Тщательно подобранные апартаменты, соответствующее вашимпотребностям и бюджету, сделает ваше пребывание максимально комфортнымна протяжении всего лечения. Независимо от города, в котором вы находитесь, мы обеспечим не только комфорт, но и удобную локацию, предлагаяэксклюзивные условия для незабываемого путешествия.Ваш комфорт — наш приоритет!"
          : "How about a big, soft bed? It’s well known that the most important aspect of any trip is where you will be staying. Carefully selected accommodation, tailored to your needs and budget, will make you feel at home throughout your treatment journey. No matter which city you’re in, we will ensure both comfort and a convenient location, offering exclusive conditions for an unforgettable travel experience.Your comfort is our priority!",
    },
    {
      photos: [pat8,pat7],
      label: locale === "ru" ? "Услуги трансфера" : "Transfer Services",
      desc:
        locale === "ru"
          ? "“Как добраться?” — первая мысль, которая приходит в голову по прилету. Мыпонимаем, насколько важен вопрос комфортного, безопасного и пунктуальноготрансфера за границей. Поэтому мы закрываем эту потребность с самогомомента вашего прибытия в Турцию. Мы встретим вас в аэропорту и будемсопровождать на протяжении всего вашего пребывания в стране. Наши услугитрансфера всегда доступны для вас — будь то поездка к врачу или в любоедругое место. Мы предоставляем удобные и комфортные VIP-автомобили, чтобываше путешествие было максимально комфортным. В Azpo Health мы всегдарядом, готовы помочь с транспортом 24/7, обеспечивая легкость и удобство накаждом шагу."
          : "“How to get there?” This is the first thought that comes to mind upon arrival. We understand how important it is to have a comfortable, safe, and punctual transfer abroad. That’s why we meet this need from the moment you arrive in Turkey. We will greet you at the airport and accompany you throughout your stay in the country. Our transfer services are always available to you — whether it’s a trip to the doctor or any other destination. We provide convenient and comfortable VIP vehicles to make your journey as comfortable as possible. At Azpo Health, we are always here, ready to assist with transportation 24/7, ensuring ease and convenience every step of the way.",
    },
    {
      photos: [pat9, pat10],
      label: locale === "ru" ? "Визовая поддержка" : "Visa Support",
      desc:
        locale === "ru"
          ? "Подготовка к медицинской поездке — это не только лечение, но и пороймножество бюрократических формальностей. Зачем тратить время на это, еслиможно доверить процесс профессионалам? Мы быстро и без стресса организуемвсе визовые процедуры и подскажем, какие документы нужно собрать для вашегоприезда в Турцию.Мы будем поддерживать вас на каждом шаге и гарантируем, что всё будетоформлено правильно.Доверьтесь нам и сосредоточьтесь на самом важном — на вашем здоровье. Всёостальное мы возьмем на себя, чтобы ваше путешествие было комфортным и легким."
          : `Preparing for a medical trip involves not only treatment but often a lot of bureaucratic paperwork. Why waste time on this when you can leave the process to professionals? We will quickly and stress-free handle all visa procedures and guide you on the documents needed for your arrival in Turkey.
      We will support you every step of the way and guarantee that everything will be processed correctly.
      Trust us and focus on what matters most — your health. We will take care of everything else to make your journey comfortable and effortless.`,
    },
    {
      photos: [pat12,pat11],
      label:
        locale === "ru"
          ? "Индивидуальные экскурсии по городу"
          : "Customized City Tours",
      desc:
        locale === "ru"
          ? "Когда вы прибываете в Турцию, мы встречаем вас с теплотой и вниманием, какблизкого друга. Наши координаторы помогут не только в вопросах лечения, но и в адаптации к новой среде. Мы понимаем, что каждый шаг в незнакомой странеможет вызывать вопросы или беспокойство, поэтому готовы помочь вам с организацией трансферов и сопровождением на приёмы к врачу. Кроме того, мыможем предложить услуги гида, который расскажет вам о самых интересныхместах для отдыха и познакомит с культурой Турции. Наши специалисты говорятна вашем языке и всегда готовы помочь, чтобы ваше пребывание былокомфортным и уютным."
          : "When you arrive in Turkey, we greet you with warmth and attention, as if welcoming a close friend. Our coordinators will assist you not only with medical matters but also with settling into a new environment. We understand that navigating a foreign country can raise questions or concerns, which is why we offer support with transfers, accompaniment to doctor appointments, and even provide a guide to take you to the most interesting places for relaxation and cultural exploration. Our guides speak your language and are always ready to assist, ensuring your stay is as comfortable and homely as possible.",
    },
  ];
  return patientServices;
};
