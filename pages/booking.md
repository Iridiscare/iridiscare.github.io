---
title: "Reserva de sesiones"
description: Elige como quieres reservar
intro_image: "images/illustrations/stress-levels.svg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: true
permalink: /reservas
layout: default
bodyClass: "page-home"
---

<div class="intro">
  <div class="container-sm px-3">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-6">
        <h1>¿Cómo quieres reservar?</h1>
        <!-- <span class="typed-text"></span><span class="cursor">&nbsp;</span> -->
        <p>Si lo necesitas lo hacemos por ti.</p>
        <div class="animate__animated animate__bounceInLeft">
          <p class="copies"><i data-feather='mail' class="feature-icon"></i> <i>Por email</i></p>
          <p class="copies"><i data-feather='message-circle' class="feature-icon"></i> <i>Por whatsapp</i></p>
          <p style="line-height: 0; "><i data-feather='phone' class="feature-icon"></i> <i>Por teléfono</i></p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" 
          href="https://calendly.com/iridis-care/1a-sesion-antiestres" 
          onclick="gtag('event', 'book_scheduling', { event_category: 'Booking', event_action: 'Email', value: '{{site.data.seo.first_session_price}}'})">Reservar por Email</a>
          <br>
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" 
          href="https://calendly.com/iridis-care/1a-sesion-antiestres" 
          onclick="gtag('event', 'book_scheduling', { event_category: 'Booking', event_action: 'Whatsapp', value: '{{site.data.seo.first_session_price}}'})">Reservar por Whatsapp</a>
        <br>
      </div>
    </div>
  </div>
</div>




