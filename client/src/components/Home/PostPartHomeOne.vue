<template>
  <div class="widthc">
    <div >
      <div >
        <!-- <span class="prev slick-arrow" style="display: block"
            ><i class="fal fa-angle-left"></i
          ></span> -->
       
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {  },
  data: () => ({
    //post area
    settings: {
      autoplay: true,
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    },
  }),
  methods: {
    //post area
    next() {
      this.$refs.postSlider.next();
    },
  },
};
</script>

<style>
.widthc{
height:15px !important;
}
</style>
