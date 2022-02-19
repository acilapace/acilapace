<template>
  <div id="contatti">
    <Header/>
        <div class="container-fluid">
            <div class="row mb-3 mt-3">
                <div class="col-lg-12" align="center">
                    <h1 class="display-5 fw-bold" style="position: relative;">Contattaci</h1>
                </div>
            </div>
            <div class="row justify-content-center mb-3">
                <div class="col-lg-4 shadow bg-light border rounded ml-1 mr-1 mb-1">
                    <p></p>
                    <form>
                        <div class="form-row">
                            <div class="col">
                                <label for="nome">Nome</label>
                                <input type="text" class="form-control" id="nome" placeholder="Nome">
                            </div>
                            <div class="col">
                                <label for="cognome">Cognome</label>
                                <input type="text" class="form-control" id="cognome" placeholder="Cognome">
                            </div>
                        </div>
                        <p></p>
                        <div class="form-group">
                            <label for="email">Indirizzo email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="oggetto">Oggetto</label>
                            <input type="text" class="form-control" id="oggetto" placeholder="Oggetto">
                        </div>
                        <div class="form-group">
                            <label for="messaggio">Messaggio</label>
                            <textarea class="form-control" id="messaggio" rows="3"></textarea>
                        </div>
                        <div align="center">
                            <button type="submit" class="btn btn-secondary">Invia</button>
                        </div>
                    </form>
                    <p></p>
                </div>
                <div class="col-lg-4 ml-1 mr-1 mb-1">
                    <!--GoogleMapLoader
                        :mapConfig="mapConfig"
                        apiKey="AIzaSyCO4PWKGQxaN50WSDs5DNb4dfVruuMnu_M"
                    >
                    // insert your google maps api key to render styled map
                        <template slot-scope="{ google, map }">
                            <GoogleMapMarker
                                v-for="marker in markers"
                                :key="marker.id"
                                :marker="marker"
                                :google="google"
                                :map="map"
                            />
                        </template>
                    </GoogleMapLoader--> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.796394314662!2d11.767153729224646!3d45.767470998694115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778da14ad22ff07%3A0x85e260cce27c5d28!2sAssociazione%20Culturale%20Islamica%20La%20Pace!5e0!3m2!1sit!2sit!4v1633083010256!5m2!1sit!2sit" width="100%" height="460" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div class="row justify-content-md-center px-5 mb-3">
                <div class="col-lg-3 col-md-12 col-sm-12 d-flex align-items-center border rounded shadow ml-2 mr-2 mt-2 mb-2">
                    <div class="icon-square text-dark flex-shrink-2 text-center mr-2">
                        <b-icon-geo-alt-fill style="width: 80px; height: 80px;"></b-icon-geo-alt-fill>
                    </div>
                    <div class="mt-3">
                        <h2>Indirizzo</h2>
                        <p>Via A.Ferrarin 81, 36022, San Giuseppe di Cassola, VI</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 d-flex align-items-center border rounded shadow ml-2 mr-2 mt-2 mb-2">
                    <div class="icon-square text-dark flex-shrink-2 text-center mr-3">
                        <b-icon-envelope-fill style="width: 80px; height: 80px;"></b-icon-envelope-fill>
                    </div>
                    <div class="mt-4 mb-3">
                        <h2>Email</h2>
                        <p>asslapace94@gmail.com</p>
                    </div>
                </div>
                <!--div class="col-lg-3 col-md-12 col-sm-12 align-items-center border rounded shadow ml-2 mr-2 mt-2 mb-2">
                    <div class="row">
                        <div class="col-lg-12 mt-3">
                            <p>asslapace94@gmail.com</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 d-flex">
                            <div class="icon-square text-dark flex-shrink-2 text-center mr-3">
                                <b-icon-envelope-fill style="width: 80px; height: 80px;"></b-icon-envelope-fill>
                            </div>
                            <div class="mt-4 mb-3">
                                <h2>Email</h2>
                            </div>
                        </div>
                    </div>
                </div-->
                <div class="col-lg-3 col-md-12 col-sm-12 d-flex align-items-center border rounded shadow ml-2 mr-2 mt-2 mb-2">
                    <div class="icon-square text-dark flex-shrink-2 text-center mr-3">
                        <b-icon-telephone-fill style="width: 80px; height: 80px;"></b-icon-telephone-fill>
                    </div>
                    <div class="mt-4 mb-3">
                        <h2>Telefono</h2>
                        <p>+39 0424 35473</p>
                    </div>
                </div>
            </div>
            <div class="row mb-3 mt-5">
                <div class="col-lg-12" align="center">
                    <h1 class="display-5 fw-bold" style="position: relative;">Seguici anche su:</h1>
                </div>
            </div>
            <div class="row mb-3 mt-3">
                <div class="col-lg-12" align="center">
                    <a class="text-muted" href="https://www.facebook.com/Associazione-La-PACE-726330077465057" target=”_blank”>
                        <b-icon-facebook style="width: 80px; height: 80px;"></b-icon-facebook>
                    </a>
                    &nbsp;
                    <a class="text-muted" href="https://www.youtube.com/channel/UCDD0t0fVBYQ6VTOG-VxKe9A" target=”_blank”>
                        <b-icon-youtube style="width: 80px; height: 80px;"></b-icon-youtube>
                    </a>
                </div>
            </div>
            <!--div class="row mb-3 mt-5">
                <div class="col-lg-12" align="center">
                    <h1 class="display-5 fw-bold" style="position: relative;">Puoi trovare i nostri discorsi del venerdì a questo <a href="https://drive.google.com/drive/folders/1zkBAoQjYEun1aY6lkqcmYWs50q85t02c" target="_blank">link</a></h1>
                    <iframe src="https://drive.google.com/file/d/1-THFZM0r_g5Z0WeOjjAeBMJORPJoNs9y/preview" width="1280" height="1024" allow="autoplay"></iframe>
                </div>
            </div-->
        </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'Contatti',
    components: {
        Header,
        Footer
    },
    
    data() {
    return {
        markers: [
            {
                id: "mosque_location",
                position: { lat: 45.767471, lng: 11.7671537 }
            },
        ]
    };
  },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    #contatti {
        font-family: 'Montserrat', sans-serif;
    }

    .rounded {
        border-radius: .70rem!important;
    }
    
    .btn-secondary {
        background-color: #1e6d1f;
    }

    .text-muted {
        color: black!important;
    }
</style>
