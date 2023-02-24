window.onload = function(){
    time = 7000
    slider = document.querySelectorAll('.slider-top > div')
    slide_d = []
    slider.forEach((e) => {slide_d.push(window.getComputedStyle(e).getPropertyValue('display'))})
    count = slider.length
    current_slide = count - 1
    classes = document.styleSheets[1].cssRules
    function slide(direction = 1){
      slider[current_slide].style.display = 'none'
      current_slide = current_slide + direction
      current_slide = current_slide > count - 1 ? 0
      :  current_slide < 0 ? current_slide = count -1 : current_slide
      slider[current_slide].style.display = slide_d[current_slide]
    }
    window.setInterval(slide, time)
    slider_buttons = document.querySelectorAll('[name^="sr-top-bt"')
    slider_buttons.forEach((button) => {
      button.onclick = (e) => {
        direction = (e.target.closest('button').name.slice(-1).charCodeAt(0) - 108)/6*2-1
        slide(direction)
      }
    })
    slide(count)
  }
