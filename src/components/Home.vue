<template>
    <div id="main">
        <div id="welcome" class="px-4 py-5 text-center">
            <img id="logo" src="../assets/logo_asslapace.png" alt="logo_asslapace">
            <h1 class="display-5 fw-bold text-light" style="position: relative;">ASSOCIAZIONE CULTURALE ISLAMICA "LA PACE"</h1>
            <div class="col-lg-6 mx-auto">
                <h3 class="text-light">"O uomini, vi abbiamo creato da un maschio e una femmina e abbiamo fatto di voi popoli e tribù, affinché vi conosceste a vicenda. Presso Allah, il più nobile di voi è colui che più Lo teme. In verità Allah è sapiente, ben informato." (Corano, 49:13)</h3>
            </div>
        </div>
        <div class="px-4 py-4 text-center"></div>
        <div class="container-fluid">
            <div class="row" style="margin-bottom: 20px;">
                <div class="col-lg-12" align="center">
                    <h1 class="display-5 fw-bold" style="position: relative;">Attività Principali</h1>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <!--div class="col-lg-3 ml-2 mr-2 mt-2 mb-2 shadow bg-light rounded" align="center">
                    <img src="../assets/school.png" alt="Insegnamento lingua araba ed educazione islamica" width="140" height="140">
                    <h2>Scuola di Lingua Araba ed Educazione Islamica</h2>
                    <p>L'Associazione "La Pace" offre ai ragazzi dai 5 ai 15 anni corsi base di insegnamento della lingua araba accompagnati da corsi di educazione al credo islamico.</p>
                    <p><a class="btn btn-secondary" @click="goToPage('Scuola')" role="button">Scopri di più &raquo;</a></p>
                </div-->
                <div class="col-lg-3 ml-2 mr-2 mt-2 mb-2">
                    <div class="card shadow">
                        <img src="../assets/school_2.jpg" alt="Insegnamento lingua araba ed educazione islamica" style="border-radius: 5%">
                        <div class="card-body" align="center">
                            <h2>Scuola di Lingua Araba ed Educazione Islamica</h2>
                            <p class="card-text">L'Associazione "La Pace" offre ai ragazzi dai 5 ai 15 anni corsi base di insegnamento della lingua araba accompagnati da corsi di educazione al credo islamico.</p>
                            <a class="btn btn-secondary" @click="goToPage('Scuola')" role="button">Scopri di più &raquo;</a>
                        </div>
                    </div>
                </div>
                <!--div class="col-lg-3 ml-2 mr-2 mt-2 mb-2 shadow bg-light rounded" align="center">
                    <img src="../assets/handshake.png" alt="Integrazione sociale" width="140" height="140">
                    <h2>Integrazione</h2>
                    <p>L'Associazione "La Pace" svolge diverse attività di volontariato nel bassanese, collaborando con gli enti locali al fine di migliorare l'integrazione tra comunità di etnie e tradizioni differenti in una società multiculturale.</p>
                    <p><a class="btn btn-secondary" @click="goToPage('Integrazione')" role="button">Scopri di più &raquo;</a></p>
                </div-->
                <div class="col-lg-3 ml-2 mr-2 mt-2 mb-2">
                    <div class="card shadow">
                        <img src="../assets/handshake_2.jpg" alt="Insegnamento lingua araba ed educazione islamica" style="border-radius: 5%">
                        <div class="card-body" align="center">
                            <h2>Integrazione</h2>
                            <p class="card-text">L'Associazione "La Pace" svolge diverse attività di volontariato nel bassanese, collaborando con gli enti locali al fine di migliorare l'integrazione tra comunità di etnie e tradizioni differenti in una società multiculturale.</p>
                            <a class="btn btn-secondary" @click="goToPage('Integrazione')" role="button">Scopri di più &raquo;</a>
                        </div>
                        
                    </div>
                </div>
                <!--div class="col-lg-3 ml-2 mr-2 mt-2 mb-2 shadow bg-light rounded" align="center">
                    <img src="../assets/donate.png" alt="Supporto economico" width="140" height="140">
                    <h2>Supporto Economico-sociale</h2>
                    <p>L'Associazione "La Pace" supporta le famiglie più bisognose all'interno della comunità mediante donazioni volontarie da parte dei fedeli.</p>
                    <p><a class="btn btn-secondary" @click="goToPage('Supporto')" role="button">Scopri di più &raquo;</a></p>
                </div-->
                <div class="col-lg-3 ml-2 mr-2 mt-2 mb-2">
                    <div class="card shadow">
                        <img src="../assets/donate.jpg" alt="Insegnamento lingua araba ed educazione islamica" style="border-radius: 5%">
                        <div class="card-body" align="center">
                            <h2>Supporto Economico-sociale</h2>
                            <p class="card-text">L'Associazione "La Pace" supporta economicamente chiunque ne abbia bisogno all'interno della comunità mediante donazioni volontarie da parte dei fedeli.</p>
                            <a class="btn btn-secondary" @click="goToPage('SupportoES')" role="button">Scopri di più &raquo;</a>
                        </div>
                    </div>
                </div>
            </div><!-- /.row -->
            <div class="px-4 py-4 text-center"></div>
            <div class="row">
                <div class="col-lg-12" align="center" style="margin-bottom: 20px;">
                    <h1 class="display-5 fw-bold" style="position: relative;">Orari Preghiera</h1>
                </div>
            </div>
            <div class="row">
                <div v-if="isMobile()" class="col-lg-12" align="center">
                    <iframe src="https://mawaqit.net/it/m/assalam-cassola?showNotification=0&showSearchButton=0&showFooter=0&showFlashMessage=0&view=mobile" frameborder="0" scrolling="no" class="mobile" height=500px></iframe>                    
                </div>
                <div v-else class="col-lg-12" align="center">
                    <iframe src="https://mawaqit.net/it/w/assalam-cassola?showOnly5PrayerTimes=0" frameborder="0" scrolling="no" width=80% height=800px></iframe>
                </div>
            </div> 
            <!--div class="row">
                <div class="col-lg-12" align="center" style="margin-bottom: 20px; margin-top: 20px">
                    <h1 class="display-5 fw-bold" style="position: relative;">Discorso del Venerdì</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12" align="center">
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D4273507559413940%26id%3D726330077465057&show_text=true&width=500" width="500" height="283" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div-->      
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        goToPage(page) {
            this.$router.push({ name: page })
        },
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    #main {
        font-family: 'Montserrat', sans-serif;
    }
    #welcome {
        height: 100%;
        position: relative;
        background-image: url("../assets/mosque-4196145_1920 (1).jpg");
        background-size: fill;
        background-repeat: no-repeat;
        background-position: 50% 90%;
        overflow: auto;
        box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.424);
    }

    #logo {
        /* width: 10%;
        height: 10% */
        width: 150px;
        height: 150px;
    }

    .btn-secondary {
        background-color: #1e6d1f;
    }

    .card {
        border-radius: 5%
    }
</style>