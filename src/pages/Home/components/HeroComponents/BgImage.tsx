import backImg from "../../../../assets/images/nagy-arnold-X_IvVDuHvDQ-unsplash.webp";

const BgImage = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <img
        className="w-full h-full object-cover opacity-60 brightness-80"
        loading="eager"
        src={backImg}
        alt="Natural plant background with greenery"
      />
    </div>
  );
};

export default BgImage;
