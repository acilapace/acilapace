<template>
  <div id="integrazione">
    <Header/>
    <div class="container col-xxl-8 px-1 py-5">
        <div class="row mb-3">
            <div class="col-lg-12" align="center">
                <h1 class="display-5 fw-bold" style="position: relative;">{{ $t('integrazione.integrazione') }}</h1>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/iftaar.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('integrazione.iftaarDiGruppo') }}</h1>
                <p class="lead text-justify">{{ $t('integrazione.ogniAnnoDurante') }}</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/calcio.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('integrazione.torneiSportivi') }}</h1>
                <p class="lead text-justify">{{ $t('integrazione.ogniAnnoNel') }}</p>
            </div>
        </div>
        <hr>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/camminopace.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('integrazione.camminoDiPace') }}</h1>
                <p class="lead text-justify">{{ $t('integrazione.ogniAnnoViene') }}</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border rounded g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/cittaragazzi.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('integrazione.cittDeiRagazzi') }}</h1>
                <p class="lead text-justify">{{ $t('integrazione.unGiornoDedicato') }}</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/socialday.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('integrazione.socialDay') }}</h1>
                <p class="lead text-justify">{{ $t('integrazione.comeAncheAltre') }}</p>
            </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2 mb-3">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/dialogando.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('integrazione.dialogandoPercorsiDiCittadinanza') }}</h1>
                <p class="lead text-justify">{{ $t('integrazione.unaTavolaRotonda') }}</p>
            </div>
        </div>
        <!-- <div class="row flex-lg-row-reverse align-items-center shadow bg-light border g-5 py-5 ml-2 mr-2">
            <div class="col-10 col-sm-8 col-lg-6 mb-3">
                <img src="../assets/dialogando.jpg" class="d-block mx-lg-auto shadow img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3" align="center">{{ $t('integrazione.gruppoMtw') }}</h1>
                <p class="lead text-justify">{{ $t('integrazione.ilGruppoMeeting') }}</p>
            </div>
        </div> -->
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
