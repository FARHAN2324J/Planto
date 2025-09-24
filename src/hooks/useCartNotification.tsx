import { useEffect, useState } from "react";
import { useCartStore } from "../stores/CartStore";

export const useCartNotification = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return { totalItems, isAnimating };
};
