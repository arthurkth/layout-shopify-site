(()=> {
  const carousel = document.querySelector('.testimonials__slider')
  new Glider(carousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: {
      prev: '.testimonials__button-preview',
      next: '.testimonials__button-next',
    },
    scrollLock: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    
    ]
  })
})()