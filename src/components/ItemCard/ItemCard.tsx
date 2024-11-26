import { useState } from "react";
import { IItem } from "../../entities";
import ItemDetailModal from "../ItemDetailModal/ItemDetailModal";
import "./index.css";

const ItemCard = (item: IItem) => {
  const { title, image, detail } = item;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="item-card">
      <div className="item-card-image-container">
        <img src={image} alt={title} />
      </div>
      <div className="item-card-content">
        <h3 className="item-card-title">{title}</h3>
        <p className="item-card-price">${detail.price}</p>
        <button onClick={() => setIsOpen(true)} >Ver Detalle</button>
      </div>
      <ItemDetailModal item={item} isOpen={isOpen} onClose={()=>setIsOpen(false)} />
    </div>
  );
};

export default ItemCard;
