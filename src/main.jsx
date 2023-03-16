import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './views/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Tours from './views/Tours';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

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
      loadPath: 'src/assets/locales/{{lng}}/translation.json',
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
        <Route path="/tours" element={<Tours />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
