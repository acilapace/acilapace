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
                <div v-if="mobileCheck() == false" class="col-lg-12" align="center">
                    <iframe src="https://mawaqit.net/it/w/assalam-cassola?showOnly5PrayerTimes=0" frameborder="0" scrolling="no" width=80% height=800px></iframe>
                </div>
                <div v-else class="col-lg-12" align="center">
                    <iframe src="https://mawaqit.net/en/m/assalam-cassola?showNotification=0&showSearchButton=0&showFooter=0&showFlashMessage=0&view=mobile" frameborder="0" scrolling="no" class="mobile"></iframe>
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
        mobileCheck() {
            /*let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;*/
            //return navigator.userAgentData.mobile;
            return false;
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
        width: 10%;
        height: 10%
    }

    .btn-secondary {
        background-color: #1e6d1f;
    }

    .card {
        border-radius: 5%
    }
</style>