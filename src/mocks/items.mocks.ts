import { IItem } from "../entities";

const itemMock: IItem = {
  id: 1,
  title: "Apple iPhone 14 (128 GB) - Morado",
  description: "iphone 12 128gb",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_2X_786356-MLM51559385272_092022-F.webp",
  detail: {
    info: "iphone 12 128gb",
    price: 1000,
    address: "USA",
  },
};

export const mockItems: IItem[] = [
  itemMock,
  {
    id: 2,
    title: "Apple iPhone 13 (128 GB) - Verde",
    description:
      "iPhone 13. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_736376-MLA49590060561_042022-F.webp",
    detail: {
      info: "iphone 11 128gb",
      price: 800,
      address: "USA",
    },
  },
];
