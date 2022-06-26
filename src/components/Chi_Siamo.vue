<template>
  <div id="chisiamo">
    <Header/>
        <div class="container">
            <div class="row mb-3 mt-3">
                <div class="col-lg-12" align="center">
                    <h1 class="display-5 fw">{{ $t('chi_siamo.chiSiamo') }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12" align="center">
                    <h2 class="display-5 fw">{{ $t('chi_siamo.laNostraStoria') }}</h2 >
                    <p class="text-justify">{{ $t('chi_siamo.lassociazioneCulturaleIslamica') }}</p>
                    <p class="text-justify">{{ $t('chi_siamo.lungoQuestiAnni') }}</p>
                    <hr>
                    <h2 class="display-5 fw">{{ $t('chi_siamo.iNostriObiettivi') }}</h2 >
                    <ol>
                      <li class="text-justify">{{ $t('chi_siamo.ilRafforzamento') }}</li>
                      <li class="text-justify">{{ $t('chi_siamo.testimoniareLa') }}</li>
                      <li class="text-justify">{{ $t('chi_siamo.unireI') }}</li>
                      <li class="text-justify">{{ $t('chi_siamo.favorireIl') }}</li>
                      <li class="text-justify">{{ $t('chi_siamo.proteggereLa') }}</li>
                      <li class="text-justify">{{ $t('chi_siamo.curareAltres') }}</li>
                    </ol>
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
  name: 'Chi_Siamo',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
  #chisiamo {
    font-family: 'Montserrat', sans-serif;
  }
</style>
