import { useEffect } from "react";

interface IProps {
  onBottom: () => void;
}

export const useScroll = ({ onBottom }: IProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200;

      if (isBottom) {
        onBottom();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onBottom]);
};
