---
title: "SoundMind30 de Iridis"
description: El método para calmar la mente y reducir el estrés en 30 días
intro_image: "images/illustrations/stress-levels.svg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: true
permalink: /soundmind
layout: default
bodyClass: "page-home"
---

<div class="intro">
  <div class="container-sm pb-2">
    <div class="justify-content-center">
      <div class="col-12 col-md-10 col-lg-10 order-2 order-md-1">
        <h1>El método para calmar la mente y reducir el estrés en 30 días.</h1>
        <!-- <span class="typed-text"></span><span class="cursor">&nbsp;</span> -->
        <p>Conoce en este vídeo cómo conseguimos reducir el estrés en un 88% de los casos.</p>
        <div class="animate__animated animate__git bounceInLeft">
          <p class="copies"><i data-feather='check' class="feature-icon"></i> <i>Relájate sin esfuerzo</i></p>
          <p class="copies"><i data-feather='check' class="feature-icon"></i> <i>Mejora tu capacidad cognitiva</i></p>
          <p style="line-height: 0; "><i data-feather='check' class="feature-icon"></i> <i>Calma el vacío interior</i></p>
        </div>
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="#" onclick="openForm()">Ver vídeo gratis para saber más</a>
        <!-- <br>
        <a class="gift animate__pulse" href="/promo"><i data-feather='gift' class="feature-icon"></i>Sesión GRATIS con tu FLYER</a> -->
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
  <div class="container-sm pt-6 pb-4 px-3">
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
      <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="#" onclick="openForm()">Ver vídeo gratis para saber más</a>
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container pt-6 pb-6 px-2">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 pt-1 pb-2">
        <img alt="Iridis crea un baño de sonido para reducir tu estrés" class="feature-product img-fluid" width="100%" src="/assets/images/product/soundbath_2.webp" />
      </div>
      <div class="col-12 col-md-6 col-lg-6 pt-md-5 pt-4">
        <div class="feature-product-title">
          <h4 class="pb-2">
            Aprende los tres factores más importantes para:
          </h4>
          <p><i data-feather='check' class="feature-icon"></i> Calmar la mente</p>
          <p><i data-feather='check' class="feature-icon"></i> Reducir el estrés</p>
          <p><i data-feather='check' class="feature-icon"></i> Conocerte mejor</p>
          <div class="pt-2">
            <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="#" onclick="openForm()">Ver vídeo gratis para saber más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="strip-white">
  <div class="container-sm pt-6 pb-6 px-2">
    <div class="feature-product-title">
      <h4>El método para personas estresadas que...</h4>
    </div>
    <div class="row pt-2">
      <div class="col-12 col-md-1 col-lg-1"></div>
      <div class="col-12 col-md-5 col-lg-5">
        <p><i data-feather='check' class="feature-icon"></i> Se agobian fácilmente</p>
        <p><i data-feather='check' class="feature-icon"></i> Sufren de ansiedad</p>
        <p><i data-feather='check' class="feature-icon"></i> Quieren sentirse mejor</p>
      </div>
      <div class="col-12 col-md-5 col-lg-5">
        <p><i data-feather='check' class="feature-icon"></i> No paran la mente</p>
        <p><i data-feather='check' class="feature-icon"></i> No quieren medicarse</p>
        <p><i data-feather='check' class="feature-icon"></i> No consiguen relajarse</p>
      </div>
    </div>
    <div class="row justify-content-center pt-2">
       <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="#" onclick="openForm()">Ver vídeo gratis para saber más</a>
    </div>
  </div>
</div> 

<div class="strip-white" id="space">
  <div class="container pt-6 pb-6 px-3">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 pt-md-10 pb-6">
        <div class="feature-product-title">
          <h4>Descubre cómo superó nuestro fundador sus problemas de salud mental.</h4>
          <div class="pt-2">
            <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="#" onclick="openForm()">Ver vídeo gratis para saber más</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6 pt-1 pb-2">
        <img alt="Iridis pirámide de meditación y sonido" class="feature-product img-fluid" width="100%" 
        src="/assets/images/landings/david.webp" />
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
      <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="#" onclick="openForm()">Ver vídeo gratis para saber más</a>
    </div>
  </div>
</div>

<div class="form-popup" id="myForm">
  <div class="form-popup-button" onclick="closeForm()"><i data-feather='x' class="feature-icon"></i></div>
  <h4 style="text-align: center;" class="pt-2">¡Introduce tu email y obtén acceso inmediato al vídeo!</h4>
  <!-- <a href="https://iridis-care.notion.site/Privacy-policy-fc763c0497f745d1866bcf75b422ed70"> <p style="font-size: 14px; color: gray; line-height: 20px; margin-bottom: 5px">Lea la información detallada sobre protección y tratamiento de datos.</p></a> -->
  <p style="font-size: 14px; color: gray; line-height: 20px; margin-bottom: 40px">Al inscribirte, de darás de alta en nuestra newsletter.</p>
  {% include form.html 
    cta='Inscribirme y ver vídeo gratis'
    list='https://4267f462.sibforms.com/serve/MUIEANs2BrQvGn6O5XffhN46GGQaUZjKQAXQ5XgG6JGa29ZL3C4IuSfwCPBMRAb-_mkCvSYOqqA0f5ry5Z0lQl0AG3YFr26_SiHFtFW5NCFnZRztv5IgZM2zFV6jcKK-pzKhN5nGzgqWIpYrxx-WWvEopbLJ1Z7RapyC6HA_oStWAzhoUkFxW2Q2ixA4l4qkq2F0u9otapgCfT5b'
  %}
</div>



