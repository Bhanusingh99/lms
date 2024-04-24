import { Star } from "lucide-react";

const renderStars = (numStars: number) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star key={i} color="#FFBA53" size={18} />);
  }
  return <div className="flex w-full gap-1">{stars}</div>;
};

// Usage:
const StarRating = ({ card }: { card: { star: number } }) => {
  return renderStars(card.star);
};

export default StarRating;
