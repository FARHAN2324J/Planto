import style from "./Btn.module.css";

interface BtnProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Btn = ({ children, className = "", onClick }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-[6px] border border-[#ffffff85] rounded-lg ${className} ${style.Btn}`}
    >
      {children}
    </button>
  );
};

export default Btn;
