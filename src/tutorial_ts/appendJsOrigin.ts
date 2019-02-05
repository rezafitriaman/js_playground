export function appendJsOrigin():void {
  // WHICH URL 
  var rawUrl = 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.42.0.24204';
  // CREATE SCRIPT TAG AND APPEND IT
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = rawUrl;
  script.id = 't4u-custom-script';
  //IF EXIST THEN REMOVE IT
  if(document.getElementById('t4u-custom-script')) {
      document.getElementById('t4u-custom-script').remove();
  }

  head.appendChild(script);
} 