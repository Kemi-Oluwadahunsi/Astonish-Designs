import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Start each new page at the top; hash links (#about) keep their own scroll target.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
