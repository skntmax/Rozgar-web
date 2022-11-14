const loadGMaps = (callback) => {
    const existingScript = document.getElementById('main.js');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = './assets/js/main.js';
      script.id = 'main.js';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  export default loadGMaps;