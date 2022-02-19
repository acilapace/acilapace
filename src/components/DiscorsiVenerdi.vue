<template>
  <div id="discorsivenerdi">
    <Header/>
        <div class="container">
            <div class="row mb-2 mt-3" v-for="document in documents" v-bind:key="document.id">
                <div class="col-md-12">
                    <div class="card flex-md-row mb-4 box-shadow h-md-250">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">
                                {{ document.title }}
                            </h3>
                            <div class="mb-1 text-muted">{{ document.date.day }} {{ document.date.month }} {{ document.date.year }}</div>
                            <p class="card-text mb-auto">{{ document.content }}</p>
                            <router-link :to="{ name: 'DiscorsoVenerdi', params: { id: document.id }}">Continua a leggere...</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'DiscorsiVenerdi',
    components: {
        Header,
        Footer
    },

    methods: {
        getDiscorsoVenerdi(page, id) {
            this.$router.push({ name: page, params: { id: id } })
        }
    },

    data() {
        return {
            documents: [
                {
                    id: 0,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 1,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 2,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 3,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 4,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 5,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 6,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 7,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 8,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
                {
                    id: 9,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: 'L\'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall\'affinamento soprattutto dell\'anima umana, poiché dedica enormi sforzi per penetrare nelle sue profondità e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l\'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi…'
                },
            ],
        };
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
  #discorsivenerdi {
    font-family: 'Montserrat', sans-serif;
  }

  .row {
    border-radius: .70rem!important;
  }
</style>
