<!doctype html>
<html lang="en" class="notranslate petrvs" data-bs-theme="blue" id="html-petrvs">
<head>
  <meta charset="utf-8">
  <title>Petrvs</title>
  <base href="{{ $host }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
  <link rel="manifest" href="assets/site.webmanifest">

  <link href="assets/css/bootstrap-load-fonts.css" rel="stylesheet" type="text/css"> 
  <link href="assets/css/fontawesome-load-fonts.css" rel="stylesheet" type="text/css"> 



  <link rel="preconnect" href="https://fonts.cdnfonts.com">
  <link rel="preconnect" href="https://fonts.cdnfonts.com" crossorigin="">
  <link href="https://fonts.cdnfonts.com/css/rawline" rel="stylesheet">


  <script>
    /* 
    JavaScript contendo variáveis de ambiente para a aplicação de front-end. 
    Caso não seja possível carregar a configuração, então será carregada pelo environment-config
    */
    var PETRVS_GLOBAL_CONFIG_STR = `{!! $config !!}`;
    var PETRVS_GLOBAL_CONFIG = undefined;
    try {
      PETRVS_GLOBAL_CONFIG = JSON.parse(PETRVS_GLOBAL_CONFIG_STR);
    } catch (e) {
      console.log("A configuração será carregada pelo environment-config");
    }     
  </script>
  <script src="environment-config"></script>
  <script src="assets/js/bootstrap-angular.js"></script>
<link rel="stylesheet" href="styles.css"></head>
<body>
  <app-root></app-root>
<script src="runtime.js" type="module"></script><script src="polyfills.js" type="module"></script><script src="scripts.js" defer></script><script src="main.js" type="module"></script></body>
</html>
