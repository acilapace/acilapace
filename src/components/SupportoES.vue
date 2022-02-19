<template>
  <div id="supporto">
    <Header/>
    <div class="container col-xxl-8 px-1 py-4">
      <div class="row mb-3">
        <div class="col-lg-12" align="center">
          <h1 class="display-5 fw-bold" style="position: relative;">Supporto Economico-sociale</h1>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-4 ml-2 mr-2 mb-3">
        <div class="col-10 col-sm-8 col-lg-6 mb-3">
          <img src="../assets/donate.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Supporto ai bisognosi</h1>
          <p class="lead text-justify">
            L'associazione organizza due volte al mese una raccolta fondi finalizzata al supporto di famiglie e singoli in condizioni economiche disagiate al fine di poter garantire loro almeno i pasti giornalieri.
            Ciò viene fatto mediante l'acquisto di buoni spesa da utilizzare nei supermercati presenti sul territorio.
          </p>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-4 ml-2 mr-2 mb-3">
        <div class="col-10 col-sm-8 col-lg-6 mb-3">
          <img src="../assets/cemetry.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Trasporto delle salme</h1>
          <p class="lead text-justify">Data la mancanza di cimiteri per musulmani, l'associazione contribuisce a supportare chiunque richieda supporto economico in caso di decesso e di conseguente rimpatrio della salma al paese d'origine.</p>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-4 ml-2 mr-2 mb-3">
        <div class="col-10 col-sm-8 col-lg-6 mb-3">
          <img src="../assets/mosque.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Costruzione di moschee</h1>
          <p class="lead text-justify">L'associazione contribuisce a supportare chiunque richieda supporto economico per poter costruire una moschea e/o un centro culturale islamico in Italia.</p>
        </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-4 ml-2 mr-2">
        <div class="col-10 col-sm-8 col-lg-6 mb-3">
          <img src="../assets/zakat.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Elemosina di fine Ramadan</h1>
          <p class="lead text-justify">L'associazione raccoglie ogni anno, alla fine del sacro mese di Ramadan, l'elemosina di fine Ramadan del valore di 6€ a persona. Il ricavato viene poi devoluto alle famiglie più bisognose affinchè possano anche loro celebrare la festa di fine Ramadan.</p>
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
