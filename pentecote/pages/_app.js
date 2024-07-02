// pages/_app.js
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
