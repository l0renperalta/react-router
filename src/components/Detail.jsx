import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import { useTranslation } from 'react-i18next';

function Detail() {
  const { t, i18n, ready } = useTranslation();
  const location = useLocation();

  if (!ready) return 'loading translations...';

  // const tours = t(`tours`, { returnObjects: true });
  // const index = tours.findIndex((t) => t.id === location.state);
  // const data = t(`tours.${index}`, { returnObjects: true });

  const data = location.state;

  return (
    <main id="main">
      <Banner title={`Tour ${location.pathname.split('/')[2]}`} />

      <section id="project-details" className="project-details">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="position-relative h-100">
            <div className="slides-1 portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img src={data.image.replace('src', '')} alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                {/* <h2>VISIÓN GENERAL:</h2> */}
                {/* <p>{data.l_description}</p> */}

                <section id="features" className="features" style={{ paddingTop: 0, paddingBottom: 80 }}>
                  <div className="container" data-aos="fade-up">
                    <ul className="nav nav-tabs row g-2 d-flex">
                      <li className="nav-item col-3">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                          <h4>DESCRIPCION</h4>
                        </a>
                      </li>

                      <li className="nav-item col-3">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                          {' '}
                          <h4>ITINERARIO</h4>{' '}
                        </a>
                      </li>

                      <li className="nav-item col-3">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                          <h4>INCLUYE</h4>
                        </a>
                      </li>

                      <li className="nav-item col-3">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                          <h4>RECOMENDACIONES</h4>
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className="tab-pane active show" id="tab-1">
                        <div className="row">
                          <div
                            className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                          >
                            <h3>LAS ISLAS FLOTANTES DE LOS UROS</h3>
                            <p className="fst-italic">
                              Los Uros, un pueblo flotante Ubicado dentro de la Bahía del Lago Titicaca a
                              unos 6 Km aprox. de la ciudad de Puno. (25 a 30 min. de navegación en una
                              lancha a motor), actualmente existen más de 100 Islas flotantes hechas a
                              base de la planta de totora. Según la historia, los Uros fueron los
                              habitantes más antiguos de los grupos étnicos que poblaron la región de
                              Puno, esta comunidad de lengua Aimara mantienen la tradición viva; como la
                              pesca artesanal, caza y disecado de aves silvestres, la recolección de
                              huevos, los hombres son expertos constructores y conductores de balsas de
                              totora y las mujeres hábiles tejedoras de artesanías textiles y
                              manualidades. La planta de Totora.
                            </p>
                            <p>
                              Es muy importante para este pueblo ancestral de los Uros, ya que utilizan
                              para la construcción de sus habitaciones, transporte (balsas), medicina
                              natural y como combustible para preparar sus alimentos.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane" id="tab-2">
                        <div className="row">
                          <div
                            className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                          >
                            <table class="table">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">HORARIO</th>
                                  <th scope="col">ACTIVIDADES</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>08:45</td>
                                  <td>
                                    Recojo de hoteles del cercado de Puno y traslado al puerto del lago
                                    Titicaca
                                  </td>
                                </tr>
                                <tr>
                                  <td>09:00</td>
                                  <td>Salida de la embarcación con destino a las islas de Los Uros</td>
                                </tr>
                                <tr>
                                  <td>09:30</td>
                                  <td>Visita a las islas flotantes de Los Uros (2 islas)</td>
                                </tr>
                                <tr>
                                  <td>12:15</td>
                                  <td>
                                    Retorno a la ciudad de Puno y traslado a hoteles del centro de ciudad
                                    o estación de bus.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane" id="tab-3">
                        <div className="row">
                          <div
                            className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                          >
                            <h4>Incluye</h4>
                            <ul>
                              <li>
                                <i className="bi bi-check2-all"></i> Entradas a las islas de los Uros.
                              </li>
                              <li>
                                <i className="bi bi-check2-all"></i> Guía Español/Inglés.
                              </li>
                              <li>
                                <i className="bi bi-check2-all"></i> Traslados desde hotel - puerto -
                                hotel (sólo los hoteles situados en el centro)
                              </li>
                              <li>
                                <i className="bi bi-check2-all"></i> Barco a motor (con SSHH y asientos
                                tipo bus).
                              </li>
                            </ul>
                            <h4>No Incluye</h4>
                            <ul>
                              <li>
                                <i className="bi bi-x-lg"></i> Gastos Extras
                              </li>
                              <li>
                                <i className="bi bi-x-lg"></i> Uso de baños públicos.
                              </li>
                              <li>
                                <i className="bi bi-x-lg"></i> Pago extra por recojo en los siguientes
                                hoteles: Casa Andina Premium, Sonesta Posada del Inka, Xima Hotel, GHL
                                Lago Titikaka Pago extra de $5USD por persona
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane" id="tab-4">
                        <div className="row">
                          <div
                            className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                          >
                            <ul>
                              <li>
                                <i className="bi bi-record-fill"></i> Llevar ropa ligera y abrigada
                                (casaca, chompa, abrigo, guantes y gorros)
                              </li>
                              <li>
                                <i className="bi bi-record-fill"></i> Zapatillas o zapatos para las
                                visitas y caminatas
                              </li>
                              <li>
                                <i className="bi bi-record-fill"></i> Gorra o sombrero de sol
                              </li>
                              <li>
                                <i className="bi bi-record-fill"></i> Lentes de sol, Protector solar,
                                crema para labios.
                              </li>
                              <li>
                                <i className="bi bi-record-fill"></i> Impermeable para posibles lluvias.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                    cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                    legam anim culpa.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img
                      src="/assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>Tour information</h3>
                <ul>
                  <li>
                    <strong>Category</strong> <span>Web design</span>
                  </li>
                  <li>
                    <strong>Client</strong> <span>ASU Company</span>
                  </li>
                  <li>
                    <strong>Project date</strong> <span>01 March, 2020</span>
                  </li>
                  <li>
                    <strong>Project URL</strong> <a href="#">www.example.com</a>
                  </li>
                  <li>
                    <a
                      href="https://www.wetravel.com/trips/private-2-days-royal-inca-trail-to-machupicchu-peru-trek-4-good-aguas-calientes-28583025"
                      className="btn-visit align-self-start"
                    >
                      WeTravel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Detail;
