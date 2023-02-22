---
title: "Iridis Care - Primer centro de reducción de estrés con terapia de sonido"
description: El método para relajarse, reducir el estrés y calmar la mente en 30 días
intro_image: "images/illustrations/stress-levels.svg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: true
permalink: /
layout: default
bodyClass: "page-home"
---
{% include sticky-cta.html %}

<div class="intro">
  <div class="container-sm pb-2">
    <div class="justify-content-center">
      <div class="col-12 col-md-10 col-lg-10 order-2 order-md-1">
        <h1>El método para relajarse, reducir el estrés y calmar la mente en 30 días</h1>
        <!-- <span class="typed-text"></span><span class="cursor">&nbsp;</span> -->
        <p>Conoce en este vídeo cómo conseguimos reducir el estrés en un 88% de los casos</p>
        <div class="animate__animated animate__git bounceInLeft">
          <p class="copies"><i data-feather='check' class="feature-icon"></i> <i>Relájate sin esfuerzo</i></p>
          <p class="copies"><i data-feather='check' class="feature-icon"></i> <i>Mejora tu capacidad cognitiva</i></p>
          <p style="line-height: 0; "><i data-feather='check' class="feature-icon"></i> <i>Calma el vacío interior</i></p>
        </div>
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="registro">Ver vídeo gratis para saber más</a>
        <!-- <br>
        <a class="gift animate__pulse" href="/promo"><i data-feather='gift' class="feature-icon"></i>Sesión GRATIS con tu FLYER</a> -->
      </div>
    </div>
  </div>
</div>

<div class="strip" style="background: #E9E9E9">
  <a class="gift animate__pulse" href="#guia">
    <div class="container-sm pt-2 pb-2 px-3">
      <div class="row justify-content-center">
        <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="30" src="/assets/images/logo/abc-logo.png" style="padding: 5px; margin-top: 3px" />
        <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="32" src="/assets/images/logo/espanol-logo.svg" style="padding: 5px;" />
      </div>
    </div>
  </a>
</div>

<div class="strip-white">
  <div class="container-sm pt-6 pb-4 px-3">
    <div class="feature-product-title">
      <h4>Conoce a los humanos que ya ha probado el método de Iridis Care</h4>
    </div>
  </div>
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
    <div class="row justify-content-center pt-4">
      <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="/registro">Ver vídeo gratis para saber más</a>
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container pt-6 pb-6 px-3">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 pt-1 pb-2">
        <img alt="Iridis crea un baño de sonido para reducir tu estrés" class="feature-product img-fluid" width="100%" src="/assets/images/product/soundbath_2.webp" />
      </div>
      <div class="col-12 col-md-6 col-lg-6 pt-md-10 pt-4">
        <div class="feature-product-title">
          <h4 class="pb-2">
            Aprende los tres factores más importantes para:
          </h4>
          <p><i data-feather='check' class="feature-icon"></i> Calmar la mente</p>
          <p><i data-feather='check' class="feature-icon"></i> Reducir el estrés</p>
          <p><i data-feather='check' class="feature-icon"></i> Conocerte mejor</p>
          <div class="pt-2">
            <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="/registro">Ver vídeo gratis para saber más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container-sm pt-6 pb-6 px-3">
    <div class="feature-product-title">
      <h4>El método para personas que...</h4>
    </div>
    <div class="row pt-2">
      <div class="col-12 col-md-2 col-lg-2"></div>
      <div class="col-12 col-md-4 col-lg-4">
        <p><i data-feather='check' class="feature-icon"></i> Se agobian fácilmente</p>
        <p><i data-feather='check' class="feature-icon"></i> Sufren de ansiedad</p>
        <p><i data-feather='check' class="feature-icon"></i> Quieren sentirse mejor</p>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <p><i data-feather='check' class="feature-icon"></i> No paran la mente</p>
        <p><i data-feather='check' class="feature-icon"></i> No quieren medicarse</p>
        <p><i data-feather='check' class="feature-icon"></i> No consiguen relajarse</p>
      </div>
    </div>
    <div class="row justify-content-center pt-2">
       <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="/registro">Ver vídeo gratis para saber más</a>
    </div>
  </div>
</div> 

<div class="strip-white" id="space">
  <div class="container pt-6 pb-6 px-3">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 pt-md-10 pb-6">
        <div class="feature-product-title">
          <h4>Descubre cómo superó nuestro fundador sus problemas de salud mental</h4>
          <div class="pt-2">
            <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="/registro">Ver vídeo gratis para saber más</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6 pt-1 pb-2">
        <img alt="Iridis pirámide de meditación y sonido" class="feature-product img-fluid" width="100%" 
        src="/assets/images/product/david.webp" />
      </div>
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container-sm pt-4 pb-4 px-3">
    <div class="feature-product-title">
      <h4>Experimenta el método de Iridis Care durante 4 semanas y consigue:</h4>
    </div>
  </div>
  <div class="container-sm pb-2 px-3">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-6">
        <p><i data-feather='check' class="feature-icon"></i> Parar la mente</p>
        <p><i data-feather='check' class="feature-icon"></i> Reducir el estrés</p>
        <p><i data-feather='check' class="feature-icon"></i> Calmar la ansiedad</p>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <p><i data-feather='check' class="feature-icon"></i> Dormir mejor</p>
        <p><i data-feather='check' class="feature-icon"></i> Mejorar la memoria</p>
        <p><i data-feather='check' class="feature-icon"></i> Liberar las emociones</p>
      </div>
    </div>
    <div class="row justify-content-center pt-4 pb-4">
      <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="/registro">Ver vídeo gratis para saber más</a>
    </div>
  </div>
</div>

 
<div class="strip-white">
  <div class="container-sm pt-6 pb-6 px-3">
    <div class="feature-product-title pb-4">
      <h4>Damos servicio online y físico en <a href="https://goo.gl/maps/F5Sj6BCUyF9wXQ3v9">Tr.ª Cobarrubias, 1, Toledo</a></h4>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12249.149997078619!2d-4.0236003!3d39.8677976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ed1e1af21569dac!2sIridis%20Care%20-%20Reduce%20tu%20estr%C3%A9s!5e0!3m2!1ses!2ses!4v1672861399929!5m2!1ses!2ses" width="100%" height="450" style="border: none; border-radius: 24px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

<!-- <div class="strip-white">
  <div class="container-sm pt-6 pb-6 px-3">
    <div class="feature-product-title pb-2">
      <h4>Preguntas frecuentes</h4>
    </div>
    {% for data in site.data.faq %}
    <div class="pb-3 accordion-item">
      <button class="accordion"><i data-feather='plus' style="margin-bottom: 5px"></i> &emsp;{{data.question}}</button>
      <div class="panel">
        <p>{{data.answer}}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</div> -->

