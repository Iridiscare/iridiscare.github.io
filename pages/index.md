---
title: "Informe de salud emocional | Iridis by StressTech"
description: Analiza tu voz. Descubre como te sientes. Recibe recomendaciones.
permalink: /
layout: default
bodyClass: "page-home"
---

<!-- {% include sticky-cta.html %} -->

<div class="intro">
  <div class="container-sm px-2">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-6 pb-3">
        <h1 class="rainbow" >Descubre tu estado emocional analizando tu voz</h1>
        <p> Graba tu voz y descubre de forma sencilla cómo te sientes en este momento. Mejora tu bienestar emocional observando tu interior.</p>
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="/app"
        onclick="gtag('event', 'start_app_download', { event_category: 'Start App Download', event_action: 'Button Clicked to Store', event_label:'app'})">Analiza tu voz ahora</a>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <img alt="Iridis" class="img-fluid" width="100%" height="auto" src="/assets/images/app-sm.webp"/>
      </div>
    </div>
  </div>
</div>

 <div class="strip">
  <div class="container-sm pt-6 pb-6 px-2">
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
                  <p class="testimonial-author">{{item.author}}</p>
                </div>
              </div>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
<!-- 
<div class="strip-white">
  <div class="container pt-6 pb-6 px-2">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 pt-1 pb-2">
        <img alt="Iridis crea un baño de sonido para reducir tu estrés" class="feature-product img-fluid" width="100%" src="/assets/images/product/soundbath_2.webp" />
      </div>
      <div class="col-12 col-md-6 col-lg-6 pt-md-5 pt-4">
        <div class="feature-product-title">
          <h4 class="pb-2">
            El análisis de tu voz te permitirá:
          </h4>
          <p><i data-feather='check' class="feature-icon"></i> Conocer tus emociones</p>
          <p><i data-feather='check' class="feature-icon"></i> Recibir recomendaciones</p>
          <p><i data-feather='check' class="feature-icon"></i> Conectar con tu interior</p>
          <div class="pt-2">
            <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="https://tally.so/r/3XYY2e"
              onclick="gtag('event', 'start_app_download', { event_category: 'Start App Download', event_action: 'Button Clicked to Store', event_label:'app'})">Analiza tu voz ahora</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!-- 
<div class="strip">
  <div class="container-sm pb-6 pt-6 px-3">
    <div class="feature-product-title pb-2">
      <h5>Han hablado sobre Iridis</h5>
    </div>
    <div class="row justify-content-center">
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="40" width="auto" src="/assets/images/logo/abc-logo.webp" style="padding: 5px; margin-top: 3px" />
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="42" width="auto" src="/assets/images/logo/espanol-logo.svg" style="padding: 5px;" />
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="44" width="auto" src="/assets/images/logo/soundsinme-logo.png" style="padding: 5px;" />
    </div>
     <div class="row justify-content-center">
        <a href="/app" style="font-size: 18px" class="pt-4">
          <b>Cono</b>ce <b>m</b>ás <b>so</b>bre <b>l</b>a <b>a</b>pp <i data-feather='chevron-right' class="feature-icon"></i>
        </a>
    </div>
  </div>
</div>  -->