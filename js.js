
ShowOverlay = function (overlayName, animationName) {
    overlayName = "overlay-" + overlayName;
    var cssClasses = document.getElementById(overlayName).className.split(" ");
    var last = cssClasses.slice(-1)[0];
    if (last.lastIndexOf("animate") == -1) {
      document.getElementById(overlayName).className =
        document.getElementById(overlayName).className + " " + animationName;
    }
    if (window.loadAsyncSrc != undefined) {
      loadAsyncSrc();
    }
  };

  HideOverlay = function (overlayName, animationName) {
    overlayName = "overlay-" + overlayName;
    var cssClasses = document.getElementById(overlayName).className.split(" ");
    var last = cssClasses.slice(-1)[0];
    if (last.lastIndexOf("animate") != -1) {
      cssClasses.splice(-1);
      cssClasses.push(animationName);
      document.getElementById(overlayName).className = cssClasses.join(" ");

      cssClasses.splice(-1);
      setTimeout(function () {
        document.getElementById(overlayName).className = cssClasses.join(" ");
      }, 0);
    }
    var vids = document.getElementsByTagName("video");
    if (vids) {
      for (var i = 0; i < vids.length; i++) {
        var video = vids.item(i);
        video.pause();
      }
    }
  };

  closeOutsideOverlay = function (overlay_slug) {
    var overlay_id = `overlay-${overlay_slug}`;
    const overlayElement = document.getElementById(overlay_id);
    overlayElement.addEventListener(
      `click`,
      function (event) {
        var overlay_id = `overlay-${overlay_slug}`;
        var e = event || window.event;
        var overlayContainer = overlayElement.getElementsByClassName(`${overlay_slug}`);
        if (e.target === overlayElement) {
          HideOverlay(`${overlay_slug}`, "animate-disappear");
        }
      },
      false
    );
  };

  CloseOnOverlayClick = function (overlay_slug) {
    var overlay_id = `overlay-${overlay_slug}`;
    document.getElementById(overlay_id).addEventListener(
      `click`,
      function (event) {
        {
          var overlay_id = `overlay-${overlay_slug}`;
          var e = event || window.event;
          var overlayElement = document.getElementById(overlay_id);
          var overlayContainer = overlayElement.getElementsByClassName(`${overlay_slug}`);
          var clickedDiv = e.toElement || e.target;
          var dismissButton = clickedDiv.parentElement.id == overlay_id;
          var clickOutsideOverlay = false;
          if (overlayContainer.length > 0) {
            {
              clickOutsideOverlay = !overlayContainer[0].contains(clickedDiv) || overlayContainer[0] == clickedDiv;
            }
          }
          if (dismissButton || clickOutsideOverlay) {
            {
              HideOverlay(`${overlay_slug}`, "animate-disappear");
            }
          }
        }
      },
      false
    );
  };

  function toggleTip(){
    let tip=document.getElementById('tip');
    tip.classList.toggle('hidden');
  };

  function toggleText(i){
    let text1 = document.getElementById("textoH1");
    let text2 = document.getElementById("textoH2");
    let text3 = document.getElementById("textoH3");
    let text = document.getElementById("textoH"+i);

    if (text1 != text)
      text1.classList.add("hiddenTexto");
      if (text2 != text)
    text2.classList.add("hiddenTexto");
    if (text3 != text)
    text3.classList.add("hiddenTexto");

    if (!text.classList.contains("hiddenTexto"))
      text.classList.add("hiddenTexto");
    else 
      text.classList.remove("hiddenTexto");
  }

  function toggleText1280(i){
    let text1 = document.getElementById("textoH4");
    let text2 = document.getElementById("textoH5");
    let text3 = document.getElementById("textoH6");
    let text = document.getElementById("textoH"+i);

    if (text1 != text)
      text1.classList.add("hiddenTexto");
      if (text2 != text)
    text2.classList.add("hiddenTexto");
    if (text3 != text)
    text3.classList.add("hiddenTexto");

    if (!text.classList.contains("hiddenTexto"))
      text.classList.add("hiddenTexto");
    else 
      text.classList.remove("hiddenTexto");
  }

  function toggleTextTablet(i){
    let text1 = document.getElementById("textoH7");
    let text2 = document.getElementById("textoH8");
    let text3 = document.getElementById("textoH9");
    let text = document.getElementById("textoH"+i);

    if (text1 != text)
      text1.classList.add("hiddenTexto");
      if (text2 != text)
    text2.classList.add("hiddenTexto");
    if (text3 != text)
    text3.classList.add("hiddenTexto");

    if (!text.classList.contains("hiddenTexto"))
      text.classList.add("hiddenTexto");
    else 
      text.classList.remove("hiddenTexto");
  }

  function toggleTextMobile(i){
    let text1 = document.getElementById("textoH10");
    let text2 = document.getElementById("textoH11");
    let text3 = document.getElementById("textoH12");
    let text = document.getElementById("textoH"+i);

    if (text1 != text)
      text1.classList.add("hiddenTexto");
      if (text2 != text)
    text2.classList.add("hiddenTexto");
    if (text3 != text)
    text3.classList.add("hiddenTexto");

    if (!text.classList.contains("hiddenTexto"))
      text.classList.add("hiddenTexto");
    else 
      text.classList.remove("hiddenTexto");
  }

  function toggleAcordeaoChapI(i){
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapII(i){
    let box1 = document.getElementById("box3");
    let box2 = document.getElementById("box4");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIII(i){
    let box1 = document.getElementById("box5");
    let box2 = document.getElementById("box6");
    let box3 = document.getElementById("box7");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");
    if (box3 != box)
      box3.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIV(i){
    let box1 = document.getElementById("box8");
    let box2 = document.getElementById("box9");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapV(i){
    let box = document.getElementById("box"+i);
    
    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIB(i){
    let box1 = document.getElementById("box11");
    let box2 = document.getElementById("box12");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIIB(i){
    let box1 = document.getElementById("box13");
    let box2 = document.getElementById("box14");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIIIB(i){
    let box1 = document.getElementById("box15");
    let box2 = document.getElementById("box16");
    let box3 = document.getElementById("box17");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");
    if (box3 != box)
      box3.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIVB(i){
    let box1 = document.getElementById("box18");
    let box2 = document.getElementById("box19");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIC(i){
    let box1 = document.getElementById("box21");
    let box2 = document.getElementById("box22");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIIC(i){
    let box1 = document.getElementById("box23");
    let box2 = document.getElementById("box24");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIIIC(i){
    let box1 = document.getElementById("box25");
    let box2 = document.getElementById("box26");
    let box3 = document.getElementById("box27");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");
    if (box3 != box)
      box3.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIVC(i){
    let box1 = document.getElementById("box38");
    let box2 = document.getElementById("box39");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }
  

  function toggleAcordeaoChapID(i){
    let box1 = document.getElementById("box31");
    let box2 = document.getElementById("box32");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIID(i){
    let box1 = document.getElementById("box33");
    let box2 = document.getElementById("box34");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIIID(i){
    let box1 = document.getElementById("box35");
    let box2 = document.getElementById("box36");
    let box3 = document.getElementById("box37");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");
    if (box3 != box)
      box3.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }

  function toggleAcordeaoChapIVD(i){
    let box1 = document.getElementById("box38");
    let box2 = document.getElementById("box39");
    let box = document.getElementById("box"+i);

    if (box1 != box)
      box1.classList.add("esconder");
    if (box2 != box)
      box2.classList.add("esconder");

    if (!box.classList.contains("esconder"))
      box.classList.add("esconder");
    else 
      box.classList.remove("esconder");
  }