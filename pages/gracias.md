---
layout: confirmation
title: Confirmación reserva
permalink: /confirmacion
---

<div class="intro">
  <div class="container-sm">
    <div class="justify-content-center">
      <div class="col-12 col-md-10 col-lg-10 order-2 order-md-1">
        <h1 class="title" id="title"></h1>
        <p>Nos vemos pronto. Revisa tu email para verla.</p>
        <!-- <a class="feature-button button button-primary btn-lg animate__animated animate__pulse" href="#plans">Leer artículos antiestrés</a> -->
      </div>
    </div>
  </div>
</div>
<div class="strip-white">
  <div class="container pt-2 pb-4 px-3">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6">
        <h4 class="pb-2 pt-2" id="data">
          Tu
        </h4>
        <p id="date"><i data-feather='calendar' class="feature-icon"></i> Fecha: </p>
        <p id="time"><i data-feather='clock' class="feature-icon"></i> Hora: </p>
        <p><i data-feather='map-pin' class="feature-icon"></i> Lugar: Tr. Cobarrubias 1</p>
      </div>
      <div class="col-12 col-md-6 col-lg-6 pt-2">
        <img alt="Iridis pirámide de meditación y sonido" class="feature-product img-fluid" width="100%" src="/assets/images/product/pyramid.webp" />
      </div>
    </div>
  </div>
</div>


{% include posts-latest.html %}

<script>
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get('event_type_name')
  const date = urlParams.get('event_start_time').split("T")
  const name = urlParams.get('invitee_full_name')
  var div = document.getElementById("date");
  div.innerHTML += date[0]; 
  const time = date[1].split("+")
  var div = document.getElementById("time");
  div.innerHTML += time[0]; 
  var div = document.getElementById("title");
  div.innerHTML += name + " tu sesión ha sido reservada"; 
  var div = document.getElementById("data");
  div.innerHTML += product; 
</script>

