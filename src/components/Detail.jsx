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
                <p>{data.l_description}</p>

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
