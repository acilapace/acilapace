<template>
  <div id="scuola">
    <Header/>
    <div class="container col-xxl-8 px-1 py-5">
      <div class="row mb-3">
          <div class="col-lg-12" align="center">
              <h1 class="display-5 fw-bold" style="position: relative;">Scuola di Lingua Araba ed Educazione Islamica</h1>
          </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-5 ml-2 mr-2 mb-3">
          <div class="col-10 col-sm-8 col-lg-6 mb-3">
              <img src="../assets/arabic_school.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Scuola di Lingua Araba</h1>
              <p class="lead text-justify"> - La società odierna è fortemente globalizzata rispetto al passato. Ciò ha creato per l'essere umano nuove sfide da affrontare, è dunque necessario possedere le competenze giuste per poter stare al passo con queste ultime. Una delle competenze più importanti è la conoscenza di più lingue.</p>
              <p class="lead text-justify"> - Lo scopo della scuola di lingua araba è dunque quello di sviluppare nello studente la consapevolezza dell'importanza di questa lingua, non solo perchè è una delle più parlate al mondo, ma soprattutto perchè dà la possibilità di leggere e comprendere il Corano e di imparare la religione islamica direttamente da fonti in lingua originale.</p>
              <p class="lead text-justify"> - La scuola si pone come obiettivo minimo quello di insegnare le conoscenze base per leggere testi e paragrafi di media complessità, per comunicare ed esprimersi sia verbalmente che in forma scritta, e per scoprire, passo dopo passo, le varie regole grammaticali ed ortografiche che caratterizzano la lingua araba.</p>
          </div>
      </div>
      <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-5 ml-2 mr-2">
          <div class="col-10 col-sm-8 col-lg-6 mb-3">
              <img src="../assets/islamic_school.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Scuola di Educazione Islamica</h1>
              <p class="lead text-justify"> - L'obiettivo della scuola islamica è quello di rafforzare il legame dello studente con il Corano e la Sunna del profeta Muhammad (ﷺ) e l'insegnamento dei valori e delle regole della religione musulmana.</p>
              <p class="lead text-justify"> - Lo studente acquisirà le competenze necessarie ad una sana convivenza con l'ambiente e la società circostante.</p>
              <p class="lead text-justify"> - Lo studente, infine, verrà supportato nel memorizzare il Corano, nel rafforzare il suo credo e la sua fede, nel conoscere parte della storia dell'Islam, e nell'approfondire la sua conoscenza del culto.</p>
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
