<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark">       
            <div class="col-lg-4">
                <b-navbar-brand @click="goToPage('index')"><img id="logo" src="../assets/logo_asslapace.png" alt="logo_asslapace">&nbsp;{{ $t('header.nbspAssociazioneLaPace') }}</b-navbar-brand>
            </div>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <div class="col-lg-6" id="nav-items">
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item @click="goToPage('index')">{{ $t('header.home') }}</b-nav-item>
                        <b-nav-item-dropdown :text="$t('header.attivita')" left>
                            <b-dropdown-item @click="goToPage('Scuola')">{{ $t('header.scuolaDiLingua') }}</b-dropdown-item>
                            <b-dropdown-item @click="goToPage('Integrazione')">{{ $t('header.integrazione') }}</b-dropdown-item>
                            <b-dropdown-item @click="goToPage('SupportoES')">{{ $t('header.supportoEconomicosociale') }}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown :text="$t('header.islam')" left>
                            <b-dropdown-item @click="goToPage('DiscorsiVenerdi')">{{ $t('header.discorsiDelVenerd') }}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item @click="goToPage('Chi_Siamo')">{{ $t('header.chiSiamo') }}</b-nav-item>
                        <b-nav-item @click="goToPage('Contatti')">{{ $t('header.contattaci') }}</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
            <div class="col-lg-2">
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown :text="$t('header.lang')" right>
                            <b-dropdown-item href="#" @click.prevent="setLocale('it')"><flag iso="it" />&nbsp;IT</b-dropdown-item>
                            <b-dropdown-item href="#" @click.prevent="setLocale('ar')"><flag iso="sa" />&nbsp;AR</b-dropdown-item>
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
    mounted() {
        this.$watch(
            "$i18n.locale",
            (newLocale, oldLocale) => {
                if (newLocale === oldLocale) {
                    return;
                }
                localStorage.setItem("lang", newLocale);
                document.dir = newLocale === "ar" ? "rtl" : "ltr";
            },
            { immediate: true }
        )
    },
    methods: {
        goToPage(page) {
            this.$router.push({ name: page })
        },
        setLocale(locale) {
            this.$i18n.locale = locale;
            // Uncomment the below lines if you need language prefixes to be shown in the URL
            // example: en.website.com (additional router configuration required)
            // this.$router.push({
            //   params: { lang: locale }
            // })
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

    #nav-items {
        margin-left: 2rem !important;
    }

    #logo {
        width: 15%;
        height: 15%;
    }
</style>
