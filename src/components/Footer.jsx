import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>Contactenos</h3>
                <p>
                  <strong>Address:</strong> Jr. Teodoro Valcárcel 153 Puno – Perú
                  <br />
                  <br />
                  <strong>Phone:</strong> +51 951 524845 (Janette)
                  <br />
                  <strong>Phone:</strong> +51 951 633063 (Marcia)
                  <br />
                  <strong>Phone:</strong> +51 969 404075 (Marisol)
                  <br />
                  <br />
                  <strong>Email:</strong> info@chasquitours.com
                  <br />
                  <strong>Email:</strong> reservas@chasquitours.com
                  <br />
                  <strong>Email:</strong> reservas2@chasquitours.com
                  <br />
                  <strong>Skype:</strong> chasquitours
                  <br />
                </p>
                <div className="social-links d-flex mt-3">
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-tiktok"></i>
                  </a>
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Paginas</h4>
              <ul>
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Nosotros</a>
                </li>
                <li>
                  <a href="#">Ofertas</a>
                </li>
                <li>
                  <a href="#">Paquetes</a>
                </li>
                <li>
                  <a href="#">Vuelos</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Peru</h4>
              <ul>
                <li>
                  <a href="#">Cusco</a>
                </li>
                <li>
                  <a href="#">Arequipa</a>
                </li>
                <li>
                  <a href="#">Puno</a>
                </li>
                <li>
                  <a href="#">Iquitos</a>
                </li>
                <li>
                  <a href="#">Ica</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Bolivia</h4>
              <ul>
                <li>
                  <a href="#">La paz</a>
                </li>
                <li>
                  <a href="#">Salar de uyuni</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Idiomas</h4>
              <ul>
                <li>
                  <a href="#">Ingles</a>
                </li>
                <li>
                  <a href="#">Español</a>
                </li>
                <li>
                  <a href="#">Portugues</a>
                </li>
                <li>
                  <a href="#">Aleman</a>
                </li>
                <li>
                  <a href="#">Frances</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal text-center position-relative">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>UpConstruction</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
                  <!-- You can delete the links only if you purchased the pro version. -->
                  <!-- Licensing information: https://bootstrapmade.com/license/ -->
                  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/ -->
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
