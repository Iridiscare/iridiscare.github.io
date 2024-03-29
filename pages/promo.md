---
title: "Comparte en instagram y te regalamos un baño de sonido GRATIS"
description: Conoce las terapias, técnicas y trucos para tener claridad mental en épocas complicadas de cambio
intro_image: "images/illustrations/stress-levels.svg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: true
permalink: /promo
layout: default
bodyClass: "page-home"
sitemap: false
---


<div class="strip">
  <div class="container-sm pt-2 px-3">
    <div class="feature-product-title pb-2">
      <h4 class="animate__animated animate__pulse">Te regalamos un Baño de Sonido al compartir en Instagram tu flyer</h4>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 pb-4">
        <img alt="" class="animate__animated animate__bounceInLeft feature-product img-fluid" width="100%" src="/assets/images/promo.webp" />
      </div>
      <div class="col-12 col-md-6 col-lg-6 animate__animated animate__bounceInRight">
        <p style="font-size: 18px">Si te has encontrado un flyer nuestro en la calle. Te regalamos <b>un baño de sonido personalizado + una prueba de estrés</b> valorado en 29,99€. Es super sencillo. </p>
        <p style="font-size: 18px">Haz una <b>foto de tu flyer, compártela en Instagram</b> mencionándo nuestra cuenta, @iridiscare, y te regalamos un baño de sonido para que te relajes y por ayudarnos a darnos a conocer.</p>
        <p style="font-size: 18px">Así de fácil.</p>
        <div>
          <p class="copy" style="font-size: 18px"><i data-feather='check' class="feature-icon"></i> <i>Haz una <b>foto del flyer</b></i></p>
          <p class="copy" style="font-size: 18px"><i data-feather='check' class="feature-icon"></i> <i><b>Súbela a Instagram</b></i></p>
          <p class="copy" style="font-size: 18px"><i data-feather='check' class="feature-icon"></i> <i>Te contactamos por DM</i></p>
        </div>
        <p style="font-size: 18px">Solo las <b>primeras 25 personas</b>. </p>
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="https://www.instagram.com/iridiscare"><i data-feather='instagram'></i> Compartir en Instagram</a>
      </div>
    </div>
    <br>
  </div>
</div>

<div class="intro">
  <div class="container-sm px-3">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-4 pb-2">
        <div class="container py-2">
          <img style="position: relative;left: -20px;" width="100%" alt="{{ site.title }}" src="{{ site.logo.desktop | relative_url }}" />
        </div>
        <h4>Imagina reducir tus niveles de estrés.</h4>
        <h4>¿Cómo te sentirías?</h4>
        <p>Ayudamos a calmar la mente y sistema nervioso a través de la IA, las ciencias contemplativas y la terapia de sonido personalizada.</p>
      </div>
      <div class="col-12 col-md-12 col-lg-8 pb-3 pt-4 pt-lg-10 pt-md-10">
        <div class="row justify-content-center">
          <div class="col-12 col-md-4 col-lg-4 pb-4">
            <div class="feature-content">
              <h5 class="feature-product-title">
                Anzalizamos y cuantificamos tu estrés.
              </h5>
              <div class="feature-image pt-3">
                <img alt="Iridis te analiza la voz" class="feature-product img-fluid" width="100%" src="/assets/images/product/voice.webp" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4 pb-4">
            <div class="feature-content">
              <h5 class="feature-product-title">
                Diseñamos sonidos personalizados.
              </h5>
              <div class="feature-image pt-3">
                <img alt="Iridis extrae las frecuecnias de tu voz" class="feature-product img-fluid" width="100%" src="/assets/images/product/analysis.webp" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4 pb-4">
            <div class="feature-content">
              <h5 class="feature-product-title">
                Calma la mente con un baño de sonido.
              </h5>
              <div class="feature-image pt-3">
                <img alt="Iridis crea un baño de sonido para reducir tu estrés" class="feature-product img-fluid" width="100%" src="/assets/images/product/soundbath_2.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="strip">
  <div class="container-sm pb-6 px-">
    <div class="row">
      <div class="col-12">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            {% for item in site.data.testimonials %}
            {% if item.active %}
              <div class="carousel-item active">
            {% else %}
              <div class="carousel-item">
            {% endif %}
                <div class="text-center">
                  <p class="testimonial-quote">"{{item.quote}}"</p>
                  <h3 class="testimonial-author">{{item.author}}</h3>
                </div>
              </div>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="strip">
  <div class="container-sm pb-6 px-3">
    <div class="feature-product-title">
      <h5>2 servicios para reducir tu estrés y mejorar tu salud mental.</h5>
    </div>
  </div>
  <div class="container-sm pb-6 px-3">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-lg-5">
        <a href="https://calendly.com/iridis-care/sesion-antiestres-30" style="text-decoration: none;">
          <div class="feature-product p-3 mb-4" style="background: white">
            <h5><span class="blob purple-1"></span> SoundBath</h5>
            <p>Prueba de estrés más <b>baño de sonido de 45 minutos para conectar contigo mismo y relajarte.</b> </p>
            <p style="color:grey; font-size: 16px">Perfecto si llevas un días con estrés o deseas tener una meditación profunda.</p>
            <a class="feature-button button button-primary btn-lg" href="https://calendly.com/iridis-care/sesion-antiestres-30">
              Reservar baño de sonido
            </a>
          </div>
        </a>
      </div>
      <div class="col-12 col-md-5 col-lg-5">
        <a href="/soundmind" style="text-decoration: none;">
          <div class="feature-product p-3 mb-4" style="background: white">
            <h5><span class="blob purple"></span>  SoundMind</h5>
            <p>Programa de 4 semanas con <b>baño de sonido semanal más curso de gestión emocional</b>.</p>
            <p style="color:grey; font-size: 16px">Para que veas resultados a largo plazo y aprendas a gestionar tus emociones.</p>
            <a class="feature-button button button-primary btn-lg" href="/soundmind/sesion">
              Reservar 1ª sesión
            </a>
          </div>
        </a>
      </div>
    </div>
    <div class="row justify-content-center">
      <a href="/corporate" style="font-size: 20px" class="pt-2">
        Servicio para empresas <i data-feather='chevron-right' class="feature-icon"></i>
      </a>
    </div>
  </div>
</div>

<div class="strip">
  <div class="container-sm pt-4 pb-6 px-3">
    <div class="feature-product-title pb-6">
      <h5>El método ideal para personas que...</h5>
    </div>
    <div class="row">
      <div class="col-12 col-md-1 col-lg-1"></div>
      <div class="col-12 col-md-5 col-lg-5">
        <p><i data-feather='check' class="feature-icon"></i> Se agobian sin motivo</p>
        <p><i data-feather='check' class="feature-icon"></i> Sufren de ansiedad</p>
        <p><i data-feather='check' class="feature-icon"></i> Con estrés crónico</p>
      </div>
      <div class="col-12 col-md-5 col-lg-5">
        <p><i data-feather='check' class="feature-icon"></i> No paran la mente</p>
        <p><i data-feather='check' class="feature-icon"></i> No quieren medicarse</p>
        <p><i data-feather='check' class="feature-icon"></i> Quieren sentirse mejor</p>
      </div>
    </div>
  </div>
</div> 

<div class="strip">
  <div class="container-sm pb-6 px-3">
    <div class="feature-product-title pb-6">
      <h5>Han hablado sobre el método de Iridis.</h5>
    </div>
    <div class="row justify-content-center">
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="40" src="/assets/images/logo/abc-logo.png" style="padding: 5px; margin-top: 3px" />
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="42" src="/assets/images/logo/espanol-logo.svg" style="padding: 5px;" />
    </div>
  </div>
</div>

<div class="strip">
  <div class="container-sm pt-4 pb-4 px-3">
    <div class="feature-product-title">
      <h5>Un baño de sonido personalizado te ayudará a...</h5>
    </div>
  </div>
  <div class="container-sm pb-2 px-3">
    <div class="row justify-content-center">
      <div class="col-12 col-md-1 col-lg-1"></div>
      <div class="col-12 col-md-5 col-lg-5">
        <p><i data-feather='check' class="feature-icon"></i> Parar la mente</p>
        <p><i data-feather='check' class="feature-icon"></i> Reducir el estrés</p>
        <p><i data-feather='check' class="feature-icon"></i> Calmar la ansiedad</p>
      </div>
      <div class="col-12 col-md-5 col-lg-5">
        <p><i data-feather='check' class="feature-icon"></i> Dormir mejor</p>
        <p><i data-feather='check' class="feature-icon"></i> Mejorar la memoria</p>
        <p><i data-feather='check' class="feature-icon"></i> Controlar las emociones</p>
      </div>
    </div>
  </div>
</div>

<div class="strip">
  <div class="container-sm pt-6 pb-6 px-3">
    <div class="feature-product-title pb-4">
      <h5>Damos servicio online y físico en <a href="https://goo.gl/maps/F5Sj6BCUyF9wXQ3v9">Tr.ª Cobarrubias, 1, Toledo</a></h5>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12249.149997078619!2d-4.0236003!3d39.8677976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ed1e1af21569dac!2sIridis%20Care%20-%20Reduce%20tu%20estr%C3%A9s!5e0!3m2!1ses!2ses!4v1672861399929!5m2!1ses!2ses" width="100%" height="450" style="border: none; border-radius: 24px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

<div class="strip">
  <div class="container-sm pb-6 px-3">
    <div class="feature-product-title">
      <h5>Reserva uno de nuestros 2 servicios.</h5>
    </div>
  </div>
  <div class="container-sm pb-6 px-3">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-lg-5">
        <a href="https://calendly.com/iridis-care/sesion-antiestres-30" style="text-decoration: none;">
          <div class="feature-product p-3 mb-4" style="background: white">
            <h5><span class="blob purple-1"></span> SoundBath</h5>
            <p>Prueba de estrés más <b>baño de sonido de 45 minutos para conectar contigo mismo y relajarte.</b> </p>
            <p style="color:grey; font-size: 16px">Perfecto si llevas un días con estrés o deseas tener una meditación profunda.</p>
            <a class="feature-button button button-primary btn-lg" href="https://calendly.com/iridis-care/sesion-antiestres-30">
              Reservar baño de sonido
            </a>
          </div>
        </a>
      </div>
      <div class="col-12 col-md-5 col-lg-5">
        <a href="/soundmind" style="text-decoration: none;">
          <div class="feature-product p-3 mb-4" style="background: white">
            <h5><span class="blob purple"></span>  SoundMind</h5>
            <p>Programa de 4 semanas con <b>baño de sonido semanal más curso de gestión emocional</b>.</p>
            <p style="color:grey; font-size: 16px">Para que veas resultados a largo plazo y aprendas a gestionar tus emociones.</p>
            <a class="feature-button button button-primary btn-lg" href="/soundmind/sesion">
              Reservar 1ª sesión
            </a>
          </div>
        </a>
      </div>
    </div>
    <div class="row justify-content-center">
      <a href="/corporate" style="font-size: 20px" class="pt-2">
        Servicio para empresas <i data-feather='chevron-right' class="feature-icon"></i>
      </a>
    </div>
  </div>
</div>
