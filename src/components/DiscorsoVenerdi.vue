<template>
  <div id="discorsovenerdi">
    <Header/>
        <main role="main" class="container">
            <div class="row">
                <div class="col-md-8 blog-main mt-3">
                    <div align="center" v-if="document===null">
                        <b-spinner class="m-5" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
                    </div>
                    <div class="blog-post">
                        <h2 v-if="getLocale()=='it'" class="blog-post-title">{{ document.title }}</h2>
                        <h2 v-else class="blog-post-title text-right" dir="rtl">{{ document.title }}</h2>
                        <p v-if="getLocale()=='it'" class="blog-post-meta">
                            {{ new Date(document.created_at).getDate() }} 
                            {{ new Date(document.created_at).toLocaleString('default', { month: 'long' }) }} 
                            {{ new Date(document.created_at).getFullYear() }}
                        </p>
                        <p v-else class="blog-post-meta text-right" dir="rtl">
                            {{ new Date(document.created_at).getDate() }} 
                            {{ new Date(document.created_at).toLocaleString('default', { month: 'long' }) }}
                            {{ new Date(document.created_at).getFullYear() }} 
                        </p>
                        <p v-if="getLocale()=='it'">{{ document.content }}</p>
                        <p v-else class="text-right" dir="rtl">{{ document.content }}</p>
                    </div><!-- /.blog-post -->
                </div>
            </div>
        </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'DiscorsoVenerdi',
    components: {
        Header,
        Footer
    },
    mounted() {
        this.document_id=this.$route.params.id;
        this.getData()
    },
    methods:{
        getLocale() {
            return this.$i18n.locale;
        },
        async getData() {
            try {
                const response = await this.$http.get(
                    "https://discorsivenerdi.herokuapp.com/discorsi-venerdi/"+this.document_id
                );
                this.document = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    data() {
        return {
            document: null,
        };
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
  #discorsovenerdi {
    font-family: 'Montserrat', sans-serif;
  }

  .row {
    border-radius: .70rem!important;
  }
</style>
