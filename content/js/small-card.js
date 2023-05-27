$(".counter").each(function () {
    small_card_counter(this)
});


function small_card_counter(params) {     
    const $this = $(params),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 1000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum + " +");
        //alert('finished');
      },
    }
  );
}


$('.small-card').on('mouseover',function () {
    const $this = $(this).find('.counter')
     
    small_card_counter($this)
})