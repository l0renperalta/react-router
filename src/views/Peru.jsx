import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Peru() {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return 'loading translations...';

  const peru = t('peru', { returnObjects: true });

  return (
    <main id="main">
      <Banner title={location.pathname.split('/')[1]} />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 posts-list">
            {peru.map((t, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img src={`${t.image.replace('src', '')}`} className="img-fluid" alt="" />
                    <span className="post-date">December 12</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">{t.title}</h3>

                    <p>{t.s_description} </p>

                    <hr />

                    <Link to="destinations" state={t.id} className="readmore stretched-link">
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

export default Peru;
