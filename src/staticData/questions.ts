import { QuestionAccoType } from "@/types/subNestedTypes/tableOfContentType"
export const handleQuestions = (locale : string) =>{
    const questions : QuestionAccoType[] = [
        {
            answer :locale === "ru" ? "Сроки получения гражданства Турции зависят от выбранного способа. Гражданство через инвестиции — это самый быстрый способ, процесс занимает примерно 8+ месяцев. Гражданство через натурализацию требует 5 лет непрерывного проживания в Турции. Гражданство по происхождению может занять до 2 лет. Гражданство через брак возможно спустя 3 года после заключения брака с гражданином Турции." : "The timeframe to obtain Turkish citizenship varies depending on the chosen pathway. Citizenship by investment is generally the fastest, taking approximately 8+ months. Citizenship by naturalization requires 5 years of continuous residency. Citizenship by descent can take up to 2 years. Citizenship by marriage requires 3 years of marriage to a Turkish citizen.",
            question:locale === "ru" ? "Как быстро можно получить гражданство Турции?" : "How quickly can you obtain Turkish citizenship?"
        },
        {
            answer :locale === "ru" ? "Вид на жительство предоставляет временное право на законное пребывание с ограниченными правами и требует периодического продления. Гражданство же дарует постоянный статус с полным набором прав и обязанностей гражданина Турции." : "A residence permit grants temporary legal stay with limited rights and requires renewal. Citizenship provides permanent membership with the full rights and responsibilities of a Turkish national.",
            question:locale === "ru" ? "В чем разница между видом на жительство и гражданством?" : "What is the difference between a residence permit and citizenship?"
        },
        {
            answer :locale === "ru" ? "В целом, да, для получения гражданства через натурализацию знание турецкого языка является обязательным требованием. Для получения гражданства через инвестиции это не является формальным требованием, хотя знание языка полезно для интеграции. Требования к знанию языка при получении гражданства по происхождению менее строгие." : "Generally, yes, for citizenship by naturalization, proficiency in the Turkish language is a mandatory requirement. For citizenship by investment, it is not a formal requirement, though it is beneficial for integration. The requirement for citizenship by descent is less strict.",
            question:locale === "ru" ? "Тебе нужно выучить турецкий?" : "Do you need to learn Turkish?"
        },
        {
            answer :locale === "ru" ? "Супруги и несовершеннолетние дети до 18 лет могут быть включены в процесс получения гражданства через инвестиции. Супруги граждан Турции могут подать заявку спустя 3 года брака. Дети, рожденные от граждан Турции, получают гражданство по праву рождения.Для остальных членов семьи существуют дополнительные требования для получения гражданства." : "Spouses and dependent children under 18 can often be included in citizenship by investment applications. Spouses of Turkish citizens can apply after 3 years of marriage. Children born to Turkish parents are citizens by descent. Other family members generally need to meet their own eligibility requirements.",
            question:locale === "ru" ? "Как члены семьи могут получить гражданство?" : "How can family members obtain citizenship?"
        },
        {
            answer :locale === "ru" ? "Да, покупка одной или нескольких квартир с общей стоимостью не менее $400,000 возможна для получения гражданства через инвестиции, желательно по одному контракту." : "Yes, purchasing one or more properties with a combined value of at least $400,000 is permissible for citizenship by investment, ideally under a single contract.",
            question:locale === "ru" ? "Можно ли купить несколько квартир на общую сумму $400,000?" : "Is it possible to buy several apartments for a total amount of $400,000?"
        },
        {
            answer :locale === "ru" ? "Для получения гражданства через инвестиции обязательного срока проживания нет. Для гражданства через натурализацию требуется 5 лет непрерывного легального проживания." : "There is no mandatory residency period for citizenship by investment. Citizenship by naturalization requires 5 years of continuous legal residency.",
            question:locale === "ru" ? "Как долго нужно жить в Турции, чтобы получить гражданство?" : "How long do you need to live in Turkey to obtain citizenship?"
        },
        {
            answer :locale === "ru" ? "Да, стоимость недвижимости проверяется через обязательные отчеты оценщиков, которые затем рассматриваются турецким правительством." : "Yes, the value is strictly checked through mandatory valuation reports from certified appraisers, reviewed by the Turkish government.",
            question:locale === "ru" ? "Проверяется ли стоимость приобретаемой недвижимости?" : "Does anyone check the value of the property being purchased?"
        },
        {
            answer :locale === "ru" ? "Нет, Турция позволяет двойное гражданство, поэтому отказ от прежнего гражданства не требуется." : "No, Turkey allows dual nationality, so you do not need to renounce your existing citizenship.",
            question:locale === "ru" ? "Нужно ли отказываться от старого гражданства?" : "Do I need to renounce my old citizenship?"
        },
        {
            answer :locale === "ru" ? "Как правило, нет. Родители инвестора, получившего гражданство через инвестиции, не могут напрямую получить гражданство на основании этой инвестиции, однако они могут иметь право на получение вида на жительство." : "Generally, no. Parents of an investor who obtains citizenship through investment cannot directly obtain citizenship based on this investment, but they may be eligible for a residence permit.",
            question:locale === "ru" ? "Могут ли родители владельца получить гражданство?" : "Can the owner's parents obtain citizenship?"
        },
        {
            answer :locale === "ru" ? "Да, недвижимость должна иметь минимальную стоимость 400 000 долларов США, быть приобретена у гражданина Турции или турецкого юридического лица, не иметь обременений и не использоваться ранее для получения гражданства через инвестиции. Также требуется обязательство не продавать недвижимость в течение трех лет." : "Yes, the property must have a minimum value of $400,000 USD, be purchased from a Turkish citizen or entity, be free of encumbrances, and cannot have been previously used for citizenship by investment. A three-year non-sale commitment is also required.",
            question:locale === "ru" ? "Есть ли требования к приобретенной недвижимости?" : "Are there any requirements for the purchased property?"
        },
    ]
    return questions
}