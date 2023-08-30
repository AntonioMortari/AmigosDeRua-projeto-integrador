import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // vai garantir que, ao trocar a página, tire a rolagem da página anterior
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;