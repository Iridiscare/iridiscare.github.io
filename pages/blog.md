---
layout: page
bodyClass: "page-basic"
title: El blog sobre reducción de estrés y terapia de sonido
description: Hablamos sobre estrés, ansiedad, terapia de sonido y cómo conectar el cuerpo y mente.
permalink: /blog/
---

<div class="row mt-4">
  {% for post in site.posts %}
  <div class="col-12 col-md-4 col-lg-4">
    <div class="feature-product" style="background-color: white; overflow: hidden;">
      <img alt="{{post.title}}" class="img-fluid" width="100%" style="margin-top: 0px; margin-bottom: 0px" src="{{post.image}}" />
      <div style="padding: 15px;">
        <h5>{{post.title}}</h5>
        <a href="{{post.url}}" style="font-size: 16px;" >Leer artículo <i data-feather='chevron-right' class="feature-icon"></i></a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>







