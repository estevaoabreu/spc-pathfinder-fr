function resize() {
    if (window.innerWidth < 768) {
          window.location.replace("chapter-4-causal-case-study-13-375.html");
      }
    else  if (window.innerWidth < 1280) {
          window.location.replace("chapter-4-causal-case-study-13-768.html");
      }
    else  if (window.innerWidth < 1920) {
          window.location.replace("chapter-4-causal-case-study-13-1280.html");
      }
    else {
          window.location.replace("chapter-4-causal-case-study-13-1920.html");
      }
  }
  
  window.onresize = resize;