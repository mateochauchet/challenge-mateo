export interface IItem {
  id: number;
  title: string;
  description: string;
  image: string;
  detail: Detail;
}

interface Detail {
  info: string;
  price: number;
  address: string;
}
