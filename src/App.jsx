import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname === '/') window.location.href = 'https://antarac.framer.website/';
    else if (pathname === '/contact-us') window.location.href = 'https://antarac.framer.website/contact';
    else if (pathname === '/terms-of-service') window.location.href = 'https://antarac.framer.website/terms';
    else if (pathname === '/privacy-policy') window.location.href = 'https://antarac.framer.website/privacy';
    else window.location.href = 'https://antarac.framer.website/'
  }, []);

  return (
    <></>
  );
}

export default App