<template>
  <section class="error-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="error-thumb text-center">
            <img src="@/assets/images/404.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="error-content text-center">
            <h3 class="title">Page not found</h3>
            <p>
              Sorry the page you were looking for cannot be found. Try searching
              for the best match or browse the links below:
            </p>
            <ul>
              <li>
                <a class="main-btn" href @click.prevent="$router.go(-1)"
                  >GO Back</a
                >
              </li>
              <li>
                <router-link class="main-btn btn-2" to="/contact"
                  >CONTACT US</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
