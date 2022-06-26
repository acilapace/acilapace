<template>
  <div id="supporto">
    <Header/>
    <div class="container col-xxl-8 px-1 py-4">
      <div class="row mb-3">
        <div class="col-lg-12" align="center">
          <h1 class="display-5 fw-bold" style="position: relative;">{{ $t('supportoes.supportoEconomicosociale') }}</h1>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-4 ml-2 mr-2 mb-3">
        <div class="col-10 col-sm-8 col-lg-6 mb-3">
          <img src="../assets/donate.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('supportoes.supportoAiBisognosi') }}</h1>
          <p class="lead text-justify">{{ $t('supportoes.lassociazioneOrganizzaDue') }}</p>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-4 ml-2 mr-2 mb-3">
        <div class="col-10 col-sm-8 col-lg-6 mb-3">
          <img src="../assets/cemetry.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('supportoes.trasportoDelleSalme') }}</h1>
          <p class="lead text-justify">{{ $t('supportoes.dataLaMancanza') }}</p>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-4 ml-2 mr-2 mb-3">
        <div class="col-10 col-sm-8 col-lg-6 mb-3">
          <img src="../assets/mosque.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('supportoes.costruzioneDiMoschee') }}</h1>
          <p class="lead text-justify">{{ $t('supportoes.lassociazioneContribuisceA') }}</p>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-4 ml-2 mr-2">
        <div class="col-10 col-sm-8 col-lg-6 mb-3">
          <img src="../assets/zakat.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('supportoes.elemosinaDiFineRamadan') }}</h1>
          <p class="lead text-justify">{{ $t('supportoes.lassociazioneRaccoglieOgni') }}</p>
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
  name: 'SupportoES',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
  #supporto {
    font-family: 'Montserrat', sans-serif;
  }

  .row {
    border-radius: .70rem!important;
  }
</style>
