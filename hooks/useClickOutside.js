import { useEffect, useRef } from 'react';

function useClickOutsideElement(setClickStateFunction) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (event.key === 'Escape') {
        setClickStateFunction(false);
      }
      if (ref.current && !ref.current.contains(event.target))
        setClickStateFunction(false);
    };

    document.addEventListener('keydown', handleClickOutside, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleClickOutside, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref };
}

export default useClickOutsideElement;
