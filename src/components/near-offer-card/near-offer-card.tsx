import { useNavigate } from 'react-router-dom';
import CitiesCard from "../cities-card/cities-card";

type NearbyOfferCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  onHover: (id: string | null) => void;
};

function NearbyOfferCard(props: NearbyOfferCardProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    // Переход только если кликнули не на кнопке
    if (!(e.target as HTMLElement).closest('.place-card__bookmark-button')) {
      navigate(`/offer/:id/${props.id}`);
    }
  };

  return (
    <div 
      className="near-places__card-wrapper"
      onClick={handleClick}
      onMouseEnter={() => props.onHover(props.id)}
      onMouseLeave={() => props.onHover(null)}
      style={{ cursor: 'pointer' }}
    >
      <CitiesCard {...props} className="near-places__card" />
    </div>
  );
}

export default NearbyOfferCard;