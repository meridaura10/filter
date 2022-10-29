const movement = (selector) =>{
    var elements = document.querySelectorAll(selector)
    elements.forEach(element =>{
      element.onmousedown = function(e) {
        
        moveAt(e);
        function moveAt(e) {
          element.style.left = e.clientX - 100 + 'px'
          element.style.top = e.clientY - 100 + 'px'
        }
      
        document.onmousemove = function(e) {
          moveAt(e);
        }
      
        element.onmouseup = function() {
          document.onmousemove = null;
          element.onmouseup = null;
        }
      }
    })
}