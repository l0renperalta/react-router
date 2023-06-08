import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import App from './App';
import About from './views/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Offers from './views/Offers';
import Peru from './views/Peru';
import Bolivia from './views/Bolivia';
import Packages from './views/Packages';
import Flights from './views/Flights';
import Contact from './views/Contact';
import Detail from './components/Detail';
import Destinations from './components/Destinations';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/peru" element={<Peru />} />
        <Route path="/peru/destinations" element={<Destinations />} />
        <Route path="/peru/destinations/detail" element={<Detail />} />
        <Route path="/bolivia" element={<Bolivia />} />
        <Route path="/bolivia/detail" element={<Detail />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
