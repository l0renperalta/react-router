import React from 'react';

function ServicesComponent() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Services</h2>
          <p>
            Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti
            fignissimos eos quam
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h3>TOURS DE GRAN VALOR</h3>
              <p>
                Usted paga un precio justo directamente a una empresa 100% local, no tiene que ser rico,
                elija entre viajes de lujo, económicos, de día completo o de noche, viajes fuera de lo
                común, caminatas, ciclismo, observación de aves y más.
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
                CGT tiene una gran variedad de programas publicados en las distintas modalidades de
                turismo. Sin embargo, si las opciones que le ofrecemos no están de acuerdo a las
                vacaciones que siempre imaginó, estaremos encantados de trabajar con usted para diseñar
                un programa personalizado de acuerdo a sus preferencias.
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
                Una visita guiada o una caminata por el camino inca a Machupicchu es una excelente manera
                de vincularse con amigos o pasar un momento memorable con su familia. (hasta 16 personas
                en Cusco).
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
                Nuestra principal prioridad es mantener seguros a todos y cada uno de los viajeros del
                grupo. En nuestra empresa, contamos con un equipo de guías turísticos profesionales y
                excelentes conductores capacitados que, cuando se enfrentan al desafío de tomar
                decisiones rápidas, la seguridad de todos los viajeros es lo primero.
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
              <p>
                En muchos de nuestros viajes encontraras: sanadores, chamanes, y expertos locales, que
                añadirán Magia a tu Viaje.
              </p>
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
              <p>
                Para esto contamos con oficinas representantes en cada destino, con atención al cliente
                durante las 24/7.
              </p>
              <a href="service-details.html" className="readmore stretched-link">
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;
