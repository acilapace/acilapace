<template>
  <div class="index">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Home from '@/components/Home.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'index',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>
