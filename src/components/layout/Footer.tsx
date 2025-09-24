import plant from "../../assets/images/plant 1.png";
import { scrollToSection } from "../../utils/ScrollTo";

const Footer = () => {
  return (
    <footer className="bg-[#222C1D] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-10">
      <div className="flex flex-col gap-8">
        <h5 className="flex items-end gap-2">
          <img src={plant} className="w-[45px] shadow-xl" alt="" />
          <span className="text-4xl font-extrabold">Planto.</span>
        </h5>
        <p>
          Bring the beauty of nature into your home! Quality plants, free
          consultation and fast delivery
        </p>
      </div>
      <div className="flex flex-col gap-5 md:m-auto">
        <span className="text-xl text-white font-medium">Quick Link’s</span>
        <ul className="flex flex-col gap-4">
          <li
            onClick={() => scrollToSection("Home-p")}
            className="cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("Trendy")}
            className="cursor-pointer"
          >
            Trendy
          </li>
          <li
            onClick={() => scrollToSection("More")}
            className="cursor-pointer"
          >
            More
          </li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-5">
          <span className="text-xl text-white font-medium">
            For Every Update.
          </span>
          <div className="border rounded-md flex items-center min-w-0">
            {" "}
            {/* min-w-0 اضافه شد */}
            <input
              type="text"
              aria-label="Enter Email"
              placeholder="Enter Email"
              className="py-2 px-4 outline-none flex-1 min-w-0" /* flex-1 و min-w-0 */
            />
            <button className="font-semibold bg-white rounded-md px-3 py-2 m-[2px] text-[#1b2316] whitespace-nowrap shrink-0">
              {" "}
              {/* whitespace-nowrap و shrink-0 */}
              SUBSCRIBE
            </button>
          </div>
        </div>
        <span className="my-5">planto © all right reserve</span>
      </div>
    </footer>
  );
};

export default Footer;
