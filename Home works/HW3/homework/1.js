/*

    Завдання написати простий слайдер.

    Є масив із картинками з яких має складатися наш слайдер.
    За замовчуванням виводимо перший елемент нашого слайдера в блок з id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По кліку на PrevSlide/NextSlide показуємо попередній або наступний слайд відповідно.

    Для цього необхідно написати 4 функції, які будуть:

    1. Спрацювати на подію load об'єкта window та завантажувати наш слайд за замовчуванням.
    2. RenderImage -> Очищати поточний вміст блоку #slider. Створювати нашу картинку і через метод апенд чайлд вставляти її в слайдер.
    3. NextSlide -> По кліку на NextSilde передавати currentPosition поточного слайда + 1 у функцію рендеру
    4. PrevSlide -> Теж саме що попередній варіант, але на кнопку PrevSlide і передавати currentPosition - 1
      + бонус зробити так що б при досягненні останнього та першого сладу вас після кидало на перший та останній слайд відповідно.
      + Бонс анімація появи слайдів через навішування додаткових стилів

*/

  var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var currentPosition = 0;
  var sliderContainer = document.getElementById('slider');
  var butnNext = document.getElementById('NextSilde');
  var butnPrev = document.getElementById('PrevSilde');

  function renderImage(index) {
    var slide = document.createElement('img');
    slide.src = OurSliderImages[index];
    sliderContainer.innerHTML = '';
    sliderContainer.appendChild(slide);

    setTimeout(()=> slide.classList.add('animation'), 300);
  }

  function nextSlide() {
    if (currentPosition === OurSliderImages.length - 1) {
      currentPosition = 0;
    } else {
      currentPosition += 1;
    }
    
    renderImage(currentPosition);    
  }

  function prevSlide() {
    if (currentPosition === 0) {
      currentPosition = OurSliderImages.length - 1;
    } else {
      currentPosition -= 1;
    }
    renderImage(currentPosition);
  }

  window.addEventListener('load', function(){
    renderImage(currentPosition);
    
    butnNext.addEventListener('click', function(){
      nextSlide(currentPosition);
    });

    butnPrev.addEventListener('click', function(){
      prevSlide(currentPosition);
    });
  })

