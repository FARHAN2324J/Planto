interface InfoProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

const Info = ({ children, as = "h1" }: InfoProps) => {
  const HeadingTag = as;

  const getClassByHeading = () => {
    switch (as) {
      case "h1":
        return "xl:text-5xl lg:text-4xl md:text-3xl text-3xl p-6 font-medium text-[#FFF]";
      case "h2":
        return "xl:text-5xl lg:text-4xl md:text-3xl text-3xl p-6 font-medium text-[#FFF]";
      case "h3":
        return "xl:text-5xl lg:text-4xl md:text-3xl text-3xl p-6 font-medium text-[#FFF]";
      case "h4":
        return "xl:text-5xl lg:text-4xl md:text-3xl text-3xl p-6 font-medium text-[#FFF]";
      default:
        return "xl:text-5xl lg:text-4xl md:text-3xl text-3xl p-6 font-medium text-[#FFF]";
    }
  };
  return (
    <div className="relative w-fit m-auto my-20">
      <svg
        className="w-15 absolute right-0 top-0"
        viewBox="0 0 74 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M71.5 72L71.5 26C71.5 13.2974 61.2025 3 48.5 3L2.99999 3.00001"
          stroke="url(#paint0_linear_2002_130)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2002_130"
            x1="72"
            y1="74"
            x2="3"
            y2="3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#55B000" />
            <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
            <stop offset="1" stopColor="#50790B" />
          </linearGradient>
        </defs>
      </svg>
      <HeadingTag className={getClassByHeading()}>{children}</HeadingTag>
      <svg
        className="w-15 absolute left-0 bottom-0"
        viewBox="0 0 74 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3L3 49C3 61.7026 13.2975 72 26 72H71.5"
          stroke="url(#paint0_linear_2002_131)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2002_131"
            x1="2.5"
            y1="0.999999"
            x2="71.5"
            y2="72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#55B000" />
            <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
            <stop offset="1" stopColor="#50790B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Info;
