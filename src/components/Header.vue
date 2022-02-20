<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark">       
            <div class="col-lg-4">
                <b-navbar-brand @click="goToPage('index')"><img id="logo" src="../assets/logo_asslapace.png" alt="logo_asslapace">&nbsp; ASSOCIAZIONE LA PACE</b-navbar-brand>
            </div>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <div class="col-lg-6">
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item @click="goToPage('index')">HOME</b-nav-item>
                        <b-nav-item-dropdown text="ATTIVITA'" left>
                            <b-dropdown-item @click="goToPage('Scuola')">Scuola di Lingua Araba ed Educazione Islamica</b-dropdown-item>
                            <b-dropdown-item @click="goToPage('Integrazione')">Integrazione</b-dropdown-item>
                            <b-dropdown-item @click="goToPage('SupportoES')">Supporto Economico-sociale</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="ISLAM" left>
                            <b-dropdown-item @click="goToPage('DiscorsiVenerdi')">Discorsi del Venerdì</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item @click="goToPage('Chi_Siamo')">CHI SIAMO</b-nav-item>
                        <b-nav-item @click="goToPage('Contatti')">CONTATTACI</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
            <div class="col-lg-2">
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown text="LANG" right>
                            <b-dropdown-item href="#">IT</b-dropdown-item>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">FR</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String
    },
    methods: {
        goToPage(page) {
            this.$router.push({ name: page })
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    #navbar {
        background-color: #1e6d1f;
        font-family: 'Montserrat', sans-serif;
    }

    #logo {
        width: 15%;
        height: 15%;
    }
</style>
