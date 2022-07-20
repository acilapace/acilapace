<template>
    <div id="discorsivenerdi">
        <Header/>
        <!-- <div class="container" align="center">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h1>QUESTA SEZIONE E' IN FASE DI MANUTENZIONE
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
            </svg></h1>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div> -->
        <div class="container mt-5 mb-5">
            <h1 align="center">Discorsi del Venerdì</h1>
            <div align="center" v-if="documents.length===0">
                <b-spinner class="m-5" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
            </div>
            <div id="discorso-venerdi" :items="documents" :per-page="perPage" :current-page="currentPage">
                <div class="row mb-2 mt-3" v-for="document in documents" v-bind:key="document.id">
                    <div class="col-md-12">
                        <div class="card flex-md-row mb-4 box-shadow h-md-250">
                            <div class="card-body d-flex flex-column align-items-start">
                                <h3 class="mb-0"> {{ document.title }}</h3>
                                <div class="mb-1 text-muted">
                                    {{ new Date(document.created_at).getDate() }} 
                                    {{ new Date(document.created_at).toLocaleString('default', { month: 'long' }) }} 
                                    {{ new Date(document.created_at).getFullYear() }}
                                </div>
                                <p v-if="getLocale()=='it'" class="card-text mb-auto">{{ document.preview }}</p>
                                <p v-else class="card-text mb-auto text-right" dir="rtl">{{ document.preview }}</p>
                                <router-link :to="{ name: 'DiscorsoVenerdi', params: { id: document.id }}">Continua a leggere...</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="pagination justify-content-center">
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="discorso-venerdi" @change="handlePageChange"></b-pagination>
            </ul>
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
    created() {
        this.getData();
        this.getSize();
    },
    mounted() {
        this.$watch(
            "$i18n.locale",
            (newLocale, oldLocale) => {
                if (newLocale === oldLocale) {
                    return;
                }
                this.getData()
            },
            { immediate: true }
        )
    },
    data() {
        return {
            perPage: 10,
            currentPage: 1,
            documents: [],
            rows: 0,
        };
    },
    methods: {
        getDiscorsoVenerdi(page, id) {
            let routeData = this.$router.resolve({ name: page, params: { id: id } });
            window.open(routeData.href, '_blank');
        },
        handlePageChange(value) {
            this.currentPage = value;
            this.getData();
        },
        getLocale() {
            return this.$i18n.locale;
        },
        async getData() {
            try {
                const response = await this.$http.get(
                    "https://discorsivenerdi.herokuapp.com/discorsi-venerdi?limit="+this.perPage+"&page="+this.currentPage +"&lang="+this.$i18n.locale
                );
                this.documents = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getSize() {
            try {
                const response = await this.$http.get(
                    "https://discorsivenerdi.herokuapp.com/discorsi-venerdi/size"
                );
                this.rows = response.data;
            } catch (error) {
                console.log(error);
            }
        }
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
