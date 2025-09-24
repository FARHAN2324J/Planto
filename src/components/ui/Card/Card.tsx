import CardStyle from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return <article className={`${CardStyle.card} ${className}`}>{children}</article>;
};

export default Card;
