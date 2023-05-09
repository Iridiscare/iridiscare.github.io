---
title: "Iridis - Descubre si tienes estrés"
description: Calma tu mente y reduce el estrés con sonidos personalizados a partir de las frecuencias de tu voz.
permalink: /
layout: default
bodyClass: "page-home"
---

{% include sticky-cta.html %}

<div class="intro">
  <div class="container-sm px-2">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-6 pb-3">
        <h1 class="rainbow" >Descubre si tienes estrés al instante</h1>
        <p>Te ayudamos a cuidar de tu salud mental, conectar con tu interior y controlar el estrés analizando tu voz.</p>
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="https://tally.so/r/mOaRRK"
        onclick="gtag('event', 'start_app_download', { event_category: 'Start App Download', event_action: 'Button Clicked to Store', event_label:'app'})">Descargar la app de Iridis <i data-feather='download' style="padding: 1px; margin-bottom: 3px; margin-left: 2px;"></i></a>
        <br>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <img alt="Iridis app" class="img-fluid" width="100%" src="/assets/images/app-sm.webp" />
      </div>
    </div>
  </div>
</div>

<div class="strip">
  <div class="container-sm pb-6 px-2">
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
                  <h6 class="testimonial-author">{{item.author}}</h6>
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
    <div class="feature-product-title pb-2">
      <h5>Han hablado sobre Iridis.</h5>
    </div>
    <div class="row justify-content-center">
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="40" src="/assets/images/logo/abc-logo.png" style="padding: 5px; margin-top: 3px" />
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="42" src="/assets/images/logo/espanol-logo.svg" style="padding: 5px;" />
    </div>
     <div class="row justify-content-center">
        <a href="/app" style="font-size: 18px" class="pt-4">
          Conoce más sobre la app <i data-feather='chevron-right' class="feature-icon"></i>
        </a>
    </div>
  </div>
</div>

{% include chat.html %}