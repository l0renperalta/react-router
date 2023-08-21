import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import { useTranslation } from 'react-i18next';

function Detail() {
  const { t, i18n, ready } = useTranslation();
  const location = useLocation();

  if (!ready) return 'loading translations...';

  const { place, destination } = location.state;

  const data = t(`peru.${place - 1}.destinations.${destination - 1}`, { returnObjects: true });

  const tourDaysObject = [];
  for (const element of data.days) {
    const [, ...days] = element;
    tourDaysObject.push({
      title: element[0],
      paragraphs: days,
    });
  }

  const formatText = (inputText) => {
    const parts = inputText.split(':');

    if (parts.length === 2 && !isNaN(parts[0])) {
      return (
        <>
          <strong>{parts[0]}</strong>:{parts[1]}
        </>
      );
    } else {
      return inputText;
    }
  };

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
                          <h4>ITINERARIO</h4>
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
                          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            {/* <p className="fst-italic">{data.description}</p> */}
                            {tourDaysObject.map((e) => (
                              <>
                                <h2>{e.title}</h2>
                                {e.paragraphs.map((paragraph) => formatText(paragraph))}
                                {/* {e.paragraphs.map((paragraph) =>
                                  paragraph.split('').some((e) => e === ':') ? (
                                    <p>
                                      <strong>{paragraph.split(':')[0]}:</strong> {paragraph.split(':')[1]}
                                    </p>
                                  ) : (
                                    <p>{paragraph}</p>
                                  )
                                )} */}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane" id="tab-2">
                        <div className="row">
                          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <table className="table">
                              <thead className="thead-light">
                                <tr>
                                  <th scope="col">HORARIO</th>
                                  <th scope="col">ACTIVIDADES</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.itinerary.map((e, index) => (
                                  <tr key={index}>
                                    {e[0] === '' ? (
                                      <>
                                        <td>{e[0]}</td>
                                        <td>
                                          <strong>{e[1]}</strong>
                                        </td>
                                      </>
                                    ) : (
                                      <>
                                        <td>{e[0]}</td>
                                        <td>{e[1]}</td>
                                      </>
                                    )}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane" id="tab-3">
                        <div className="row">
                          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <h4>Incluye</h4>
                            <ul>
                              {data.includes.map((e, index) => (
                                <li key={index}>
                                  <i className="bi bi-check2"></i> {e}
                                </li>
                              ))}
                            </ul>

                            <h4>No Incluye</h4>
                            <ul>
                              {data.notIncludes.map((e, index) => (
                                <li key={index}>
                                  <i className="bi bi-x-lg"></i> {e}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane" id="tab-4">
                        <div className="row">
                          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <ul>
                              {data.recomendation.map((e, index) => (
                                <li key={index}>
                                  <i className="bi bi-asterisk"></i> {e}
                                </li>
                              ))}
                              <li></li>
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
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster
                    fugiat irure amet legam anim culpa.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
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

// JSON TEMPLATE
// {
//   "id": 4,
//   "title": "TITULO",
//   "image": "src/assets/img/golden/ISLA AMANTANI 40 MF.jpg",
//   "description": "DESCRIPCION",
//   "days": [["DÍA 1: TITULO", "07:50 a.m. ACTIVIDAD"]],
//   "itinerary": [
//     ["", "PRIMER DIA:"],
//     ["07:50", "Recojo de hoteles del cercado de Puno y traslado al puerto del lago Titicaca"]
//   ],
//   "includes": ["traslado"],
//   "notIncludes": ["extras"],
//   "recomendation": ["recomendation1"]
// }
