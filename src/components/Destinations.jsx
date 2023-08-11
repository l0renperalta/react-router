import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Destinations() {
  const { t, i18n, ready } = useTranslation();
  const location = useLocation();

  if (!ready) return 'loading translations...';

  const id = location.state;

  const data = t(`peru.${id - 1}.destinations`, { returnObjects: true });

  return (
    <main id="main">
      <Banner title={`Tour ${location.pathname.split('/')[2]}`} />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 posts-list">
            {data.map((t, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img src={`${t.image.replace('src', '')}`} className="img-fluid" alt="" />
                    <span className="post-date">December 12</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">{t.title}</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">John Doe</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                      </div>
                    </div>

                    <p>{t.s_description} </p>

                    <hr />

                    <Link to="detail" state={{ place: id, destination: t.id }} className="readmore stretched-link">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Destinations;
