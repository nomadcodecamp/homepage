console.log('Found the console - well done!')

(($)->


  $(window).on('scroll', ->
    scrollWhere = $(@).scrollTop()
    scrollExplain = $('.explain-container').offset().top

    if scrollExplain - 60 < scrollWhere
      $('.header').addClass('background-blue')
    else
      $('.header').removeClass('background-blue')
  )


  $('.js-scroll').on('click', ->

    $('html, body').animate(
        scrollTop: $( $.attr(@, 'href') ).offset().top
      , 500)
      return false

  )

  elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    mainAudio: '../audio/elevator-music.mp3',
    endAudio: '../audio/ding.mp3',
    duration: 10000
  })


)(jQuery)
