<template>
  <div class="about-author-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="about-author-content">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Author</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  QuomodoSoft
                </li>
              </ol>
            </nav>
            <div class="author-content">
              <div class="thumb">
                <img
                  src="@/assets/images/author1.png"
                  alt=""
                  style="width: 80px; height: 80px"
                />
              </div>
              <h3 class="title">QuomodoSoft</h3>
              <ul>
                <li>News Writer</li>
                <li>
                  <span>Since: <span>April 25, 2020</span></span>
                </li>
              </ul>
              <div class="text">
                <p>
                  QuomodoSoft is an investigative reporter for Newspark, based
                  in Bangladesh. He started at The Times in 1999 covering Mayor
                  Rudolph W. Giuliani and then the Sept. 11, 2001, attacks.
                </p>
                <p>
                  He is a three-time winner of the Pulitzer Prize for
                  explanatory reporting, investigative reporting and as part of
                  team for foreign reporting. He previously worked at The
                  Bangladesh Post and The Hartford Courant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.author-content .thumb {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  overflow: hidden;
  height: 115px;
  width: 115px;
  text-align: center;
  line-height: 112px;
  border: 2px solid #e4e5e6;
}
</style>
