---
title: "Cómo controlar la ansiedad y el estrés"
description: Conoce las terapias, técnicas y trucos para tener claridad mental en épocas complicadas de cambio
intro_image: "images/illustrations/stress-levels.svg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: true
permalink: /video
layout: landing
bodyClass: "page-home"
---

<div class="intro">
  <div class="container-sm px-3">
    <div class="col-12">
      <div class="row justify-content-center pb-4" style="text-align: center;">
        <p class="animate__animated animate__pulse">¡Vídeo de 1 Min. Solo para Personas Estresadas, con Ansiedad y que Necesitan Relajarse!</p>
        <h5 class="animate__animated animate__pulse pb-1">Cómo reducir la ansiedad y el estrés a un nivel saludable, fácilmente y en 17 minutos gracias a nuestro Sistema Antiestrés</h5>
        <a href="#" class="feature-button button button-primary btn-lg animate__animated animate__pulse" onclick="openForm()">Quiero Verlo Ahora</a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 pb-2">
        <img alt="Iridis te analiza la voz" class="feature-product img-fluid" width="100%" src="/assets/images/landings/video.png" onclick="openForm()" />
      </div>
      <div class="col-12 col-md-6 col-lg-6 animate__animated animate__bounceInRight">
        <div class="pb-2">
          <p class="copy" style="font-size: 18px"><i data-feather='check' class="feature-icon"></i> Sin depender de ansiolíticos con los efectos secundarios que conllevan.</p>
          <p class="copy" style="font-size: 18px"><i data-feather='check' class="feature-icon"></i> Sin tener que recurrir a psicólogos y esperar a que te den cita.</p>
          <p class="copy" style="font-size: 18px"><i data-feather='check' class="feature-icon"></i> Sin tener que hacer complicadas meditaciones, técnicas de relajación, yoga o leer libros de autoayuda.</p>
          <p class="copy" style="font-size: 18px"><b>Con un sistema con el que te Garantizamos que te Relajarás.</b></p>
        </div>
        <div class="row justify-content-center">
          <a href="#" class="feature-button button button-primary btn-lg animate__animated animate__pulse" onclick="openForm()">Quiero verlo ahora</a>
        </div>
      </div>
    </div>
    <div class="col-12 pt-4">
      <div class="row justify-content-center">
        <p class="animate__animated animate__pulse"  style="font-size: 18px; text-align: center; color: gray"><u>Presentado por David Martín-Corral, doctor experto en comportamiento humano, salud digital y autor del libro "Viviendo en una sociedad enferma".</u></p>
      </div>
    </div>
  </div>
</div>
<div class="form-popup" id="myForm">
    <div class="form-popup-button" onclick="closeForm()"><i data-feather='x' class="feature-icon"></i></div>
    <h4 style="text-align: center;" class="pt-2">¡Introduce Tu Correo Electrónico Y Obtén Acceso Inmediato Al Vídeo!</h4>
    <a href="https://iridis-care.notion.site/Privacy-policy-fc763c0497f745d1866bcf75b422ed70"> <p style="font-size: 14px; color: gray; line-height: 20px; margin-bottom: 5px">Lea la información detallada sobre protección y tratamiento de datos.</p></a>
    <p style="font-size: 14px; color: gray; line-height: 20px; margin-bottom: 40px">Al inscribirte, de darás de alta en nuestra newsletter.</p>
    {% include form.html cta='Quiero verlo ahora'%}
</div>
<script>
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
</script>
