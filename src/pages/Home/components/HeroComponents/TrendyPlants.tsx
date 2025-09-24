import Btn from "../../../../components/ui/BtnUi/Btn";
import RoseGold2 from "../../../../assets/images/Rose Gold2 Feminine Calligraphy Monogram Logo(20) 1 (1).webp";
import RoseGold3 from "../../../../assets/images/Rose Gold3 Feminine Calligraphy Monogram Logo(20) 2 (1).webp";
import { CgShoppingBag } from "react-icons/cg";
import Card from "../../../../components/ui/Card/Card";
import Info from "../../../../components/common/Info";
import { scrollToSection } from "../../../../utils/ScrollTo";
import { useCartStore } from "../../../../stores/CartStore";
import toast from "react-hot-toast";

const TrendyPlants = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const trendyProducts = [
    {
      id: 1,
      name: "Plants suitable for small spaces",
      title: "Calathea",
      description:
        "For small apartments and limited space, choose plants that are perfectly suited and adaptable. Any space becomes more beautiful with a little greenery.",
      price: 3.5,
      image: RoseGold2,
    },
    {
      id: 2,
      name: "Small plants, big impact",
      title: "Aloe Vera v2",
      description:
        "For small corners of the house, easy-care plants that will transform your space.",
      price: 1.99,
      image: RoseGold3,
    },
  ];

  const handleAddToCart = (product: (typeof trendyProducts)[0]) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
    });
    toast.success(`${product.title} Added to cart!`);
  };

  return (
    <section id="Trendy">
      <Info as="h2">Our Trendy plants</Info>
      <div className="flex flex-col lg:gap-35 md:gap-20">
        <Card className="flex md:flex-row flex-col xl:mx-20 lg:mx-15 md:mx-8 mx-5 xl:px-10 md:px-5 md:pb-0 pb-10 px-10 shadow-lg  xl:[--card-radius:150px] lg:[--card-radius:100px] md:[--card-radius:90px] items-center justify-between">
          <img
            src={trendyProducts[0].image}
            loading="lazy"
            alt="Rose"
            className="xl:-translate-y-25 lg:-translate-y-16 md:-translate-y-8 -translate-y-10 xl:w-[450px] lg:w-[350px] md:w-[300px] w-[280px]"
          />
          <div className="flex flex-col gap-4">
            <span className="xl:text-4xl lg:text-3xl md:text-2xl text-2xl font-medium text-[#FFF]">
              {trendyProducts[0].name}
            </span>
            <p className="text-[#FFF] xl:w-150 lg:w-110 md:w-90 text-sm">
              {trendyProducts[0].description}
            </p>
            <span className="text-[#FFF] lg:text-3xl md:text-2xl text-2xl font-medium">
              ${trendyProducts[0].price}
            </span>
            <div className="flex items-center gap-4">
              <Btn
                className="border-2 border-white text-white"
                aria-label="Explore our products"
                onClick={() => scrollToSection("More")}
              >
                <span>Explore</span>
              </Btn>
              <button
                onClick={() => handleAddToCart(trendyProducts[0])}
                className="px-3 py-[10px] border-white cursor-pointer border-2 rounded-lg hover:bg-white group transition-colors"
                aria-label="shop-icon"
              >
                <CgShoppingBag className="text-white group-hover:text-[#1b2316] transition-colors" />
              </button>
            </div>
          </div>
        </Card>
        <Card className="flex xl:mx-20 md:flex-row flex-col-reverse  lg:mx-15 md:mx-10 xl:px-15 lg:px-5 md:px-8 px-10 mx-5  shadow-lg mb-15 md:mt-0 mt-20 md:pb-0 pb-10  xl:[--card-radius:150px] lg:[--card-radius:100px] md:[--card-radius:90px] items-center justify-between ">
          <div className="flex flex-col gap-4 xl:pl-0 lg:pl-10">
            <span className="xl:text-4xl font-medium lg:text-3xl text-2xl text-[#FFF]">
              {trendyProducts[1].name}
            </span>
            <p className="text-[#FFF] xl:w-150 lg:w-110 md:w-90 text-sm">
              {trendyProducts[1].description}
            </p>
            <span className="text-[#FFF] font-medium lg:text-3xl text-2xl">
              ${trendyProducts[1].price}
            </span>
            <div className="flex items-center gap-4">
              <Btn
                className="border-2 border-white text-white"
                aria-label="Explore our products"
                onClick={() => scrollToSection("More")}
              >
                <span>Explore</span>
              </Btn>
              <button
                onClick={() => handleAddToCart(trendyProducts[1])}
                className="px-3 py-[10px] cursor-pointer border-white border-2 rounded-lg hover:bg-white group transition-colors"
                aria-label="shop-icon"
              >
                <CgShoppingBag className="text-white group-hover:text-[#1b2316] transition-colors" />
              </button>
            </div>
          </div>
          <img
            src={trendyProducts[1].image}
            loading="lazy"
            alt="Rose Plant"
            className="xl:-translate-y-25 lg:-translate-y-20 md:-translate-y-10 -translate-y-10 xl:w-[300px] lg:w-[250px] md:w-[200px] w-[160px] lg:-translate-x-25"
          />
        </Card>
      </div>
    </section>
  );
};

export default TrendyPlants;
