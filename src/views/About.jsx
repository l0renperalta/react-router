import React from 'react';
import Banner from '../components/Banner';
import ServicesComponent from '../components/ServicesComponent';

function About() {
  return (
    <main id="main">
      <Banner title={location.pathname.split('/')[1]} />

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img" style={{ backgroundImage: `url("/assets/img/golden/LOS\ UROS\ 13.jpg")` }}></div>

            <div className="col-lg-7">
              <div className="our-story">
                <h4>2001</h4>
                <h3>Nuestra Historia</h3>
                <p>
                  Somos una empresa de operadores turísticos diseñado para proporcionar EXPERIENCIAS INOLVIDABLES a grupos de amigos, familias, parejas o personas
                  solteras que deseen conocer Perú.
                </p>
                <p>
                  <strong>CHASQUI TOURS</strong> esta por cumplir dos décadas de brindar un eficiente servicio turístico con altos estándares de calidad y seguridad a
                  nuestros clientes. Diseñamos viajes para reorientar y rejuvenecer, ofreciéndoles una vida más armoniosa con el propósito de producir cambios desde el
                  interior de cada persona.
                </p>
                <p>
                  Explorarás con otros ojos el mundo que conocemos, en cada viaje combinamos: experiencias auténticas, enseñanzas Sagradas, contacto con la Madre
                  Naturaleza y a través de ella impulsar nuestra propia existencia.
                </p>

                <div className="watch-video d-flex align-items-center position-relative">
                  <i className="bi bi-play-circle"></i>
                  <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox stretched-link">
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="section-header col-lg-6">
              <h2>MISIÓN</h2>
              <p>
                Estamos en servicio a la vida, nos hemos permitido estar a disposición de todos los seres ávidos de alimentar el alma con experiencias mágicas que
                permitan crear un mundo mejor.
              </p>
            </div>
            <div className="section-header col-lg-6">
              <h2>VISIÓN</h2>
              <p>
                Ser líderes en el ofrecimiento de viajes con programas integrales de sanación de cuerpo y espíritu para reconectar con nuestra esencia y propósito y así
                lograr una vida más plena y armoniosa, además cubriendo las perspectivas de nuestros clientes como “una experiencia mágica e inolvidable”.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="stats-counter" className="stats-counter section-bg">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="alt-services" className="alt-services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 img-bg" style={{ backgroundImage: `url("/assets/img/golden/GRUPO\ MEXICO\ 8.jpg")` }} data-aos="zoom-in" data-aos-delay="100"></div>

            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <div className="about">
                <h3>OBJETIVO</h3>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>El objetivo de la empresa es que nuestros clientes alcancen sus expectativas.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Nuestros tours son adaptables a las necesidades de cada viajero.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Trabajamos con guías profesionales y con gran experiencia en cada destino turístico.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Asesoramiento sin compromiso, estaremos encantados de ayudarte.</span>
                  </li>
                </ul>
                <h3>NUESTRO COMPROMISO</h3>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Hacer de tu viaje, un Viaje Mágico.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="alt-services-2" className="alt-services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>NUESTRA FILOSOFÍA</h3>
              <p>
                Nuestra filosofía de servicio es cuidar desde el momento que llegas hasta cuando decides volver a casa, ponemos especial cuidado en la comunicación,
                apoyados en un principio de total honestidad y respeto.
              </p>
              <p>
                Fomentamos la responsabilidad, lo cual lleva a un proceso de reflexión y crecimiento personal, haciéndonos más fuertes y sabios. Todo forma parte de la
                oportunidad que nos brindan los viajes y vernos reflejados en paisajes, sabores y personas que atesoraremos por el resto de nuestras vidas.
              </p>

              <p>
                <strong>BENEFICIOS DESPUES DEL PROGRAMA:</strong>
              </p>
              <div className="about">
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Aumentara el sentido de propósito en tu vida</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Crece tus habilidades creativas</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Nueva forma de ver al mundo y apreciarlo</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Vive en el presente y siéntete mucho más satisfecho</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Equilibra tu mente, cuerpo y alma.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>Liberarse mediante la Experiencia Mágica de viajar.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 img-bg" style={{ backgroundImage: `url("/assets/img/golden/LOS\ UROS\ 4.jpg")` }} data-aos="zoom-in" data-aos-delay="100"></div>
          </div>
        </div>
      </section>

      <ServicesComponent />

      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Nuestro Equipo</h2>
            <p>
              Contamos con un staff de profesionales de gran corazón, con vocación de servicio y altamente calificados, sumado a la oportuna reservación hará que su viaje
              sea una experiencia inolvidable.
            </p>
          </div>

          <div className="row gy-5">
            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="/assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="/assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="/assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src="/assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
              <div className="member-img">
                <img src="/assets/img/team/team-5.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Brian Doe</h4>
                <span>Marketing</span>
                <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
              <div className="member-img">
                <img src="/assets/img/team/team-6.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Josepha Palas</h4>
                <span>Operation</span>
                <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Testimonials</h2>
            <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
          </div>

          <div className="slides-2 swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
                      et. Maecen aliquam, risus at semper.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster
                      fugiat irure amet legam anim culpa.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram
                      fore quis sint minim.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt
                      elit fore quem dolore labore illum veniam.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum
                      fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
