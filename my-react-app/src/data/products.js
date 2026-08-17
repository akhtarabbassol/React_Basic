import wafadarImages from "../assets/wafadar.jpg";
import bagImages from "../assets/bag.avif";
import bottleImage from "../assets/bottle.webp"

const products = [
  {
    id: 1,
    name: "bag",
    category: "Electronics",
    price: 120000,
    image:bagImages,
  },

  {
    id: 2,
    name: "Mobile Phone",
    category: "Electronics",
    price: 60000,
    image: bagImages,
  },

  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 5000,
    image: bottleImage,
  },

  {
    id: 4,
    name: "T-Shirt",
    category: "Clothing",
    price: 2500,
    image: bottleImage,
  },

  {
    id: 5,
    name: "wafadar",
    category: "Clothing",
    price: 4500,
    image: wafadarImages,
  },

  {
    id: 6,
    name: "Shoes",
    category: "Footwear",
    price: 7000,
    image: bottleImage,
  },
];

export default products;