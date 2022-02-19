<template>
  <div id="integrazione">
    <Header/>
    <div class="container col-xxl-8 px-1 py-5">
        <div class="row mb-3">
            <div class="col-lg-12" align="center">
                <h1 class="display-5 fw-bold" style="position: relative;">Integrazione</h1>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/iftaar.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Iftaar di gruppo</h1>
                <p class="lead text-justify">Ogni anno, durante il mese di Ramadan, i membri dell'associazione organizzano per i fedeli un pasto di gruppo per rompere il digiuno e vivere in comunità l'atmosfera di questo mese sacro.</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/calcio.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Tornei sportivi</h1>
                <p class="lead text-justify">Ogni anno, nel periodo estivo, vengono organizzati dei tornei di calcetto o di pallavolo dove partecipano squadre composte dalle varie etnie e nazionalità che compongono l’associazione.</p>
            </div>
        </div>
        <hr>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/camminopace.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Cammino di Pace</h1>
                <p class="lead text-justify">Ogni anno viene organizzato, in collaborazione con l'amministrazione comunale, un cammino per le vie e le piazze di Bassano, con l’obiettivo di costruire una comunità aperta all’accoglienza e alla convivenza. Anche l’associazione partecipa per essere un organo attivo nella società in cui vive.</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/cittaragazzi.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Città dei ragazzi</h1>
                <p class="lead text-justify">Un giorno dedicato ai ragazzi, dove il centro storico di Bassano si trasforma in un laboratorio a cielo aperto. I ragazzi hanno così la possibilità di trascorrere una giornata giocando e divertendosi.</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/socialday.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Social Day</h1>
                <p class="lead text-justify">Come anche altre associazioni presenti nel bassanese, anche noi partecipiamo al Social Day. Un giorno dedicato al lavoro di volontariato per devolvere il ricavato a dei progetti di solidarietà.</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/dialogando.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Dialogando: percorsi di cittadinanza</h1>
                <p class="lead text-justify">Una tavola rotonda dove si discute, si approfondisce e si promuove il dialogo tra le varie realtà del territorio ed in particolar modo quelle legate al fenomeno della migrazione e dell’integrazione.</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/dialogando.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Gruppo MTW</h1>
                <p class="lead text-justify">Il Gruppo Meeting The World è un insieme di giovani composto da persone di nazionalità, cultura e religione molto diverse, in grado di promuovere concretamente i valori di integrazione, tolleranza e vicinanza solidale.</p>
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
  name: 'Integrazione',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    #integrazione {
        font-family: 'Montserrat', sans-serif;
    }

    hr {
        border-top: 1px solid rgba(0,0,0,0)
    }

    .row {
        border-radius: .70rem!important;
    }
</style>
