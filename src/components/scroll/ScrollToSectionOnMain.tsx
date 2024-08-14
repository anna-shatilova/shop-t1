import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

 export const ScrollToSectionOnMain = () => {
  const location = useLocation();
  const anchor = location.hash;

  useEffect(() => {
    if (anchor) {
      const anchorElement = document.getElementById(anchor.substring(1));
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [anchor]);

  return null;
};