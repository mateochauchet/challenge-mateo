import { IItem } from "../../entities";
import "./index.css";

const ItemCard = ({ image, title, detail }: IItem) => {
  return (
    <div className="item-card">
      <div className="item-card-image-container">
        <img src={image} alt={title} />
      </div>
      <div className="item-card-content">
        <h3 className="item-card-title">{title}</h3>
        <p className="item-card-price">${detail.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
