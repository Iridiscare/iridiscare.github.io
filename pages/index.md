---
title: "Iridis Care - Primero centro holístico de reducción de estrés"
description: Ayudamos a personas estresadas mediante el autoconocimiento, la gestión emocional y terapia de sonido personalizada.
permalink: /
layout: default
bodyClass: "page-home"
---

{% include sticky-cta.html %}

<div class="intro">
  <div class="container-sm pb-2">
    <div class="justify-content-center">
      <div class="col-12 col-md-10 col-lg-10 order-2 order-md-1">
        <h1>Mejora tu salud mental reduciendo el estrés para alcanzar la paz interior.</h1>
        <!-- <span class="typed-text"></span><span class="cursor">&nbsp;</span> -->
        <p>Ayudamos a personas con problemas de salud mental <b>mediante el autoconocimiento, la gestión emocional y la terapia de sonido personalizada.</b></p>
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="/soundmind">Conoce nuestro método</a>
      </div>
    </div>
  </div>
</div>

<div class="strip" style="background: #E9E9E9">
  <div class="container-sm pt-2 pb-2 px-3">
    <div class="row justify-content-center">
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="30" src="/assets/images/logo/abc-logo.png" style="padding: 5px; margin-top: 3px" />
      <img alt="Iridis pirámide de meditación y sonido" class="img-fluid" height="32" src="/assets/images/logo/espanol-logo.svg" style="padding: 5px;" />
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container-sm pt-8 pb-6 px-3">
    <div class="feature-product-title">
      <h4>3 servicios para tu salud mental.</h4>
    </div>
  </div>
  <div class="container-sm pb-6 px-3">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-4">
        <a href="https://calendly.com/iridis-care/sesion-antiestres-30" style="text-decoration: none;">
          <div class="feature-product p-3 mb-4">
            <h5><span class="blob purple-1"></span> SoundBaths</h5>
            <p>Baños de sonido personalizados para <b>relajarte en minutos.</b> </p>
            <a href="https://calendly.com/iridis-care/sesion-antiestres-30" style="font-size: 20px">
              Reservar sesión <i data-feather='chevron-right' class="feature-icon"></i>
            </a>
          </div>
        </a>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <a href="/knowthyself" style="text-decoration: none;">
          <div class="feature-product p-3 mb-4">
            <h5><span class="blob purple-2"></span>  KnowThyself</h5>
            <p>Curso online de <b>autoconocimiento y gestión de emociones</b>.</p>
            <a href="/knowthyself" style="font-size: 20px">
              Ver clase gratis <i data-feather='chevron-right' class="feature-icon"></i>
            </a>
          </div>
        </a>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <a href="/soundmind" style="text-decoration: none;">
          <div class="feature-product p-3 mb-4">
            <h5><span class="blob purple"></span>  SoundMind</h5>
            <p>Programa para <b>calmar la mente y reducir el estrés</b> en 30 días.</p>
            <a href="/soundmind" style="font-size: 20px">
              Ver vídeo <i data-feather='chevron-right' class="feature-icon"></i>
            </a>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container-sm pt-6 pb-6 px-3">
    <div class="feature-product-title">
      <h4>Te ayudamos a alcanzar la <b style="color: #9B51E0">paz mental aunque no sepas meditar y sin medicamentos.</b></h4>
    </div>
  </div>
</div>

<div class="strip-white" id="tech">
  <div class="container pt-6 pb-2 pt-md-6 pb-md-2 px-3">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-4 mb-2 pb-3">
        <div class="feature-content">
          <h4 class="feature-product-title">
            Análisis de voz para cuantificar el estrés.
          </h4>
          <div class="feature-image pt-4">
            <img alt="Iridis te analiza la voz" class="feature-product img-fluid" width="100%" src="/assets/images/product/voice.webp" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-2 pb-3">
        <div class="feature-content">
          <h4 class="feature-product-title">
            Plan de seguimiento personalizado.
          </h4>
          <div class="feature-image pt-4">
            <img alt="Iridis extrae las frecuecnias de tu voz" class="feature-product img-fluid" width="100%" src="/assets/images/product/analysis.webp" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-2 pb-3">
        <div class="feature-content">
          <h4 class="feature-product-title">
            Baños de sonido antiestrés.
          </h4>
          <div class="feature-image pt-4">
            <img alt="Iridis crea un baño de sonido para reducir tu estrés" class="feature-product img-fluid" width="100%" src="/assets/images/product/soundbath_2.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container-sm pt-6 pb-2 px-3">
    <div class="feature-product-title">
      <h4>Conoce a los humanos que ya han probado el método de Iridis.</h4>
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
      <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="/soundmind">Conoce el método de Iridis</a>
    </div>
  </div>
</div>

<div class="strip-white" id="space">
  <div class="container pt-6 pb-6 px-3">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 pt-md-10 pb-6">
        <h4>David Martín-Corral</h4>
        <p>38 años esculpiendo su mente. Ingeniero. Doctor en comportamiento humano. Fundador de Iridis.</p>
        <p><a href="https://www.linkedin.com/in/davidmartincorralcalvo/">Linkedin.</a></p>
      </div>
      <div class="col-12 col-md-6 col-lg-6 pt-1 pb-2">
        <img alt="Iridis pirámide de meditación y sonido" class="feature-product img-fluid" width="100%" 
        src="/assets/images/product/david.webp" />
      </div>
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container-sm pt-6 pb-6 px-3">
    <div class="feature-product-title">
      <h4>Creamos tu <b style="color: #9B51E0">plan personalizado para equilibrar tu cuerpo-mente y reducir tu estrés</b> con terapia de sonido.</h4>
    </div>
  </div>
</div>

<div class="strip-white" id="space">
  <div class="container pt-6 pb-6 px-3">
    <div class="row">
      <div class="col-12 col-md-1 col-lg-1"></div>
      <div class="col-12 col-md-10 col-lg-10">
      <h4>¿Quieres saber más?</h4>
        <iframe data-tally-src="https://tally.so/embed/meMrlx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="648" frameborder="0" marginheight="0" marginwidth="0" title="null"></iframe><script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
      </div>
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
