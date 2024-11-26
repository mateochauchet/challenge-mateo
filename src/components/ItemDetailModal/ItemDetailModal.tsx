import { IItem } from '../../entities'
import Modal from '../Modal/Modal'

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  item: IItem;
}

const ItemDetailModal = ({ isOpen, item, onClose }:IProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <h2>{item.title}</h2>
      <p>{item.detail?.info}</p>
      <p>Price: {item.detail?.price}</p>
      <p>Address: {item.detail?.address}</p>
    </Modal>
  );
}

export default ItemDetailModal