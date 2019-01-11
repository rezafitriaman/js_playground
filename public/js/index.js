window.remoteCode = function () {
  // form rawGit proxy url
  var rawUrl = 'https://www.wikipedia.org/portal/wikipedia.org/assets/js/index-309cc1c97b.js';
  // download and run the script
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = rawUrl;
  script.id = 't4u-custom-script';

  if(document.getElementById('t4u-custom-script')) {
      document.getElementById('t4u-custom-script').remove();
  }

  head.appendChild(script);

};



remoteCode();


console.log('aaaaaa')