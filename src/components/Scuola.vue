<template>
  <div id="scuola">
    <Header/>
    <div class="container col-xxl-8 px-1 py-5">
      <div class="row mb-3">
          <div class="col-lg-12" align="center">
              <h1 class="display-5 fw-bold" style="position: relative;">{{ $t('scuola.scuolaDiLingua') }}</h1>
          </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-5 ml-2 mr-2 mb-3">
          <div class="col-10 col-sm-8 col-lg-6 mb-3">
              <img src="../assets/arabic_school.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('scuola.scuolaDiLinguaAraba') }}</h1>
              <ul>
                <li class="lead text-justify">{{ $t('scuola.laSociet') }}</li>
                <li class="lead text-justify">{{ $t('scuola.loScopo') }}</li>
                <li class="lead text-justify">{{ $t('scuola.laScuola') }}</li>
              </ul>
          </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-5 ml-2 mr-2">
          <div class="col-10 col-sm-8 col-lg-6 mb-3">
              <img src="../assets/islamic_school.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('scuola.scuolaDiEducazioneIslamica') }}</h1>
              <ul>
                <li class="lead text-justify">{{ $t('scuola.lobiettivoDella') }}</li>
                <li class="lead text-justify">{{ $t('scuola.loStudente') }}</li>
                <li class="lead text-justify">{{ $t('scuola.loStudente1') }}</li>
              </ul>
          </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Scuola',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
  #scuola {
    font-family: 'Montserrat', sans-serif;
  }

  .row {
    border-radius: .70rem!important;
  }
</style>
