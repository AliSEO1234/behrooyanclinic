import { BenefCardType } from "@/types/benefits/benefTypes";

const BenefCard = ({ desc, title }: BenefCardType) => {
  return (
    <div className="benefits-card benefit-card-container">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
export default BenefCard;
