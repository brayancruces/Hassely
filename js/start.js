/**
 * start.js
 *
 * Author: Brayan Cruces
 *
 * Project: Hassely
 *
 * Funciones principales para Formulario paso a paso
 *
 *
 */


/***** VARIABLES GLOBALES *****/

var DATA_medida = 300;


$(document).ready(function(){

  liveEvents();
  
  // Material Boostrap
  $.material.init();
  $('.materialboxed').materialbox();
  $('img').addClass('d1')

  /**
   * Step by Step Form (improve in the future)
   *
   */

  // 1. Start (Llamando a Step Form)
  $("#btnStart").click(function() {
    $( "section#home" ).fadeOut( "fast", function() {
      //Animacion completada
      $("section#step1" ).fadeIn( "slow" );
   });
  });

  // 2. Generar divisores, conjunto y Hasse
  $("#btnSendN").click(function() {
    $("section#step1").fadeOut( "fast", function() {

      var hasse = new Hasse2D();


      var numN = parseInt($("#inputNumeroN").val());

      //Divisores
      $("#loadnumN").html(numN);
      GenerarDivisores(numN,hasse);
      $("#loadDivisores").fadeIn('slow');

      hasse.goHasse();

      //Relacion
      $("#loadRelacion").html("");
      $("#loadRelacion").html(hasse.getNotacionConjuntos());


      //Hasse
      DibujarHasse(hasse);

      //Animacion completada
      $("section#step2" ).fadeIn( "slow" );
   });
  });

  // 2. Ir a paso final
  $("#btnShowHasse").click(function() {
    $( "section#step2" ).fadeOut( "fast", function() {


      //Animacion completada
      $("section#step3" ).fadeIn( "slow" );

   });
  });


 // Cambiar color Hasse
 $("#colorRandom").click(function() {
    colorHasse();
 });


})
