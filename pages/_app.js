import "../styles/globals.css";

import {Navbar,Footer}   from '../Components'
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
        <Component {...pageProps} />
      <Footer />
    </div>
  );
}
