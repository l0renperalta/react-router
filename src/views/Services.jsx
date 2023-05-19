import React from 'react';
import Banner from '../components/Banner';

function Services() {
  return (
    <main id="main">
      <Banner title={location.pathname.split('/')[1]} />

      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <h3>TOURS DE GRAN VALOR</h3>
                <p>
                  Usted paga un precio justo directamente a una empresa 100% local, no tiene que ser rico, elija entre viajes de lujo, económicos, de día completo o de
                  noche, viajes fuera de lo común, caminatas, ciclismo, observación de aves y más.
                </p>
                <a href="service-details.html" className="readmore stretched-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-person-hiking"></i>
                </div>
                <h3>VIAJES A LA MEDIDA: (Tarjeta de Promoción)</h3>
                <p>
                  CGT tiene una gran variedad de programas publicados en las distintas modalidades de turismo. Sin embargo, si las opciones que le ofrecemos no están de
                  acuerdo a las vacaciones que siempre imaginó, estaremos encantados de trabajar con usted para diseñar un programa personalizado de acuerdo a sus
                  preferencias.
                </p>
                <a href="service-details.html" className="readmore stretched-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-people-roof"></i>
                </div>
                <h3>GRUPOS PRIVADOS Y PEQUEÑOS</h3>
                <p>
                  Una visita guiada o una caminata por el camino inca a Machupicchu es una excelente manera de vincularse con amigos o pasar un momento memorable con su
                  familia. (hasta 16 personas en Cusco).
                </p>

                <a href="service-details.html" className="readmore stretched-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-earth-americas"></i>
                </div>
                <h3>LA SEGURIDAD</h3>
                <p>
                  Nuestra principal prioridad es mantener seguros a todos y cada uno de los viajeros del grupo. En nuestra empresa, contamos con un equipo de guías
                  turísticos profesionales y excelentes conductores capacitados que, cuando se enfrentan al desafío de tomar decisiones rápidas, la seguridad de todos los
                  viajeros es lo primero.
                </p>
                <a href="service-details.html" className="readmore stretched-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <h3>Espiritualidad</h3>
                <p>En muchos de nuestros viajes encontraras: sanadores, chamanes, y expertos locales, que añadirán Magia a tu Viaje.</p>
                <a href="service-details.html" className="readmore stretched-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-bed"></i>
                </div>
                <h3>Atencion al cliente</h3>
                <p>Para esto contamos con oficinas representantes en cada destino, con atención al cliente durante las 24/7.</p>
                <a href="service-details.html" className="readmore stretched-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-cards" className="services-cards">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <h3>Quasi eaque omnis</h3>
              <p>Eius non minus autem soluta ut ui labore omnis quisquam corrupti autem odit voluptas quos commodi magnam occaecati.</p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check2"></i> <span>Ullamco laboris nisi ut aliquip</span>
                </li>
                <li>
                  <i className="bi bi-check2"></i> <span>Duis aute irure dolor in reprehenderit</span>
                </li>
                <li>
                  <i className="bi bi-check2"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <h3>Et nemo dolores consectetur</h3>
              <p>Ducimus ea quam et occaecati est. Temporibus in soluta labore voluptates aut. Et sit soluta non repellat sed quia dire plovers tradoria</p>

              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check2"></i> <span>Enim temporibus maiores eligendi</span>
                </li>
                <li>
                  <i className="bi bi-check2"></i> <span>Ut maxime ut quibusdam quam qui</span>
                </li>
                <li>
                  <i className="bi bi-check2"></i> <span>Officiis aspernatur in officiis</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <h3>Staque laboriosam modi</h3>
              <p>Velit eos error et dolor omnis voluptates nobis tenetur sed enim nihil vero qui suscipit ipsum at magni. Ipsa architecto consequatur aliquam</p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check2"></i> <span>Quis voluptates laboriosam numquam</span>
                </li>
                <li>
                  <i className="bi bi-check2"></i> <span>Treva libero sunt quis veniam ut</span>
                </li>
                <li>
                  <i className="bi bi-check2"></i> <span>Debitis eos est est corrupti</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <h3>Dignissimos suscipit iste</h3>
              <p>Molestiae occaecati assumenda quia saepe nobis recusandae at dicta ducimus sequi numquam commodi est in consequatur ea magnam quia itaque</p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check2"></i> <span>Veritatis qui reprehenderit quis</span>
                </li>
                <li>
                  <i className="bi bi-check2"></i> <span>Accusantium vel numquam sunt minus</span>
                </li>
                <li>
                  <i className="bi bi-check2"></i> <span>Voluptatem pariatur est sationem</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="alt-services-2" className="alt-services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Non quasi officia eum nobis et rerum epudiandae rem voluptatem</h3>
              <p>
                Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at non. Ducimus maxime minima iste magni sit praesentium assumenda minus. Amet rerum saepe
                tempora vero.
              </p>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Nemo Enim
                    </a>
                  </h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Dine Pad
                    </a>
                  </h4>
                  <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Tride clov
                    </a>
                  </h4>
                  <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 img-bg" style={{ backgroundImage: `url("/assets/img/golden/GRUPO\ MEXICO\ 8.jpg")` }} data-aos="zoom-in" data-aos-delay="100"></div>
          </div>
        </div>
      </section>

      <section id="alt-services" className="alt-services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 img-bg" style={{ backgroundImage: `url("/assets/img/golden/LOS\ UROS\ 4.jpg")` }} data-aos="zoom-in" data-aos-delay="100"></div>

            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
              <p>
                Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis
                dolores excepturi
              </p>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Nemo Enim
                    </a>
                  </h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Dine Pad
                    </a>
                  </h4>
                  <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Tride clov
                    </a>
                  </h4>
                  <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
                </div>
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
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
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
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
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
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
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
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
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
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
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

export default Services;
