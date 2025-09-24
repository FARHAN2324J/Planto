import Img1 from "../../../../assets/images/ss.webp";
import Img2 from "../../../../assets/images/sss.webp";
import Img3 from "../../../../assets/images/ssss.webp";
import Img4 from "../../../../assets/images/sssss.webp";
import Img5 from "../../../../assets/images/Rose Gold Feminine Calligraphy Monogram Logo(15) 1 (2).webp";
import Img6 from "../../../../assets/images/Rose Gold2 Feminine Calligraphy Monogram Logo(20) 1 (1).webp";
import Card from "../../../../components/ui/Card/Card";
import Info from "../../../../components/common/Info";
import toast from "react-hot-toast";

import { CgShoppingBag } from "react-icons/cg";
import { useCartStore } from "../../../../stores/CartStore";
import { Product } from "../../../../types/product";

const TopSelling = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const products: Product[] = [
    {
      id: 1,
      name: "Cactus",
      content: "Durable and low maintenance, suitable for beginners",
      image: Img1,
      price: 0.99,
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      content: "King of Luxury with Cheese Leaves",
      image: Img2,
      price: 4.3,
    },
    {
      id: 3,
      name: "Ficus Elastica",
      content: "Shiny, leathery leaves, air purifier",
      image: Img3,
      price: 2.35,
    },
    {
      id: 4,
      name: "Aloe Vera",
      content: "Homemade teapot with healing properties",
      image: Img4,
      price: 2.5,
    },
    {
      id: 5,
      name: "Pothos",
      content: "Green pendant, fast growth and air purification",
      image: Img5,
      price: 1.35,
    },
    {
      id: 6,
      name: "Calathea",
      content: "Live painting, patterned leaves",
      image: Img6,
      price: 3.5,
    },
  ];

  const handleAddToCart = (product: Product) => {
    addToCart(product);

    toast.success(`${product.name} Added to cart!`);
  };
  return (
    <section id="More">
      <Info as="h2">Our Top Selling</Info>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-25 md:mx-15 mx-10">
        {products.map((product) => (
          <Card key={product.id} className="shadow-lg">
            <div className="w-65 h-65 m-auto">
              <img
                className="m-auto -translate-y-15 w-auto h-auto max-w-full max-h-full"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="flex flex-col gap-5 pb-10 xl:px-15 lg:px-6 md:px-10 px-10">
              <span className="lg:text-3xl md:text-3xl text-2xl">
                {product.name}
              </span>
              <p className=" md:w-55 w-50 md:text-[16px] text-[14px] font-light">
                {product.content}
              </p>
              <div className="flex items-center gap-15">
                <span className="md:text-3xl text-2xl">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-[9px] py-[10px] border rounded-lg cursor-pointer transition-colors hover:bg-white group"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <CgShoppingBag className="text-white group-hover:text-[#1b2316] transition-colors" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TopSelling;
