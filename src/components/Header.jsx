import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'flag-icon-css/css/flag-icons.min.css';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es',
  },
];

function Header() {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const { t, i18n, ready } = useTranslation();

  if (!ready) return 'loading translations...';

  const nav = t('nav', { returnObjects: true });

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/">
          <img src="/assets/img/a/edit2.png" height="60" />
        </Link>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">
                {nav[0]}
              </NavLink>
            </li>
            <li>
              <NavLink to="about" activeclassname="active">
                {nav[1]}
              </NavLink>
            </li>
            <li className="dropdown">
              <NavLink
                to="peru"
                activeclassname="active"
                className="bi bi-chevron-down dropdown-indicator"
              >
                {nav[2].title}
              </NavLink>
              <ul>
                {nav[2].destinations.map((e, index) => (
                  <li className="dropdown" key={index}>
                    <a href="#">
                      <span>{e.title}</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      {e.destinations.map((p, index) => (
                        <li key={index}>
                          <a href="#">{p}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <NavLink
                to="bolivia"
                activeclassname="active"
                className="bi bi-chevron-down dropdown-indicator"
              >
                {nav[3]}
              </NavLink>
            </li>
            <li>
              <NavLink to="offers" activeclassname="active">
                {nav[4]}
              </NavLink>
            </li>
            <li>
              <NavLink to="packages" activeclassname="active">
                {nav[5]}
              </NavLink>
            </li>
            <li>
              <NavLink to="flights" activeclassname="active">
                {nav[6]}
              </NavLink>
            </li>

            <li>
              <NavLink to="contact" activeclassname="active">
                {nav[8]}
              </NavLink>
            </li>

            <li className="dropdown">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-globe-americas"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>

                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
                {languages.map(({ name, code, country_code }) => (
                  <li
                    className="dropdown"
                    style={{ cursor: 'pointer' }}
                    onClick={() => i18next.changeLanguage(code)}
                    key={country_code}
                  >
                    <a>
                      <span className={`flag-icon flag-icon-${country_code}`}></span>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
