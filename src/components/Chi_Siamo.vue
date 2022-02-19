<template>
  <div id="chisiamo">
    <Header/>
        <div class="container">
            <div class="row mb-3 mt-3">
                <div class="col-lg-12" align="center">
                    <h1 class="display-5 fw">Chi Siamo</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12" align="center">
                    <h2 class="display-5 fw">La nostra storia</h2 >
                    <p class="text-justify">
                        L'Associazione Culturale Islamica "La Pace" nasce ufficialmente nel 26 luglio del 1994 per venire incontro alle esigenze della crescente popolazione musulmana nel territorio di avere un luogo di culto ove praticare la propria religione.
                        L'idea nacque nei primi anni 90' tra le mura di un condominio in Via Teatro Vecchio a Bassano del Grappa, prevalentemente abitato da immigrati di religione musulmana, i quali inizialmente, per poter pregare, utilizzavano uno spazio al
                        piano terra originariamente adibito al deposito di biciclette. Successivamente, con l'aumento dei fedeli e la conseguente mancanza di spazio, si è deciso di procedere con l'affitto di un appartamento in via Zanella, San Giuseppe di Cassola,
                        il quale era precedentemente utilizzato come luogo di culto per i Testimoni di Geova. Qui si stabilì ufficialmente l'associazione e venne redatto uno statuto descrittivo di quest'ultima. Con il tempo, la popolazione musulmana nel territorio
                        crebbe ancor di più, e con essa emersero ulteriori esigenze oltre a quelle legate al culto, in particolare, l'insegnamento e il mantenimento della conoscenza della lingua araba nella nuova generazione. Essendo lo spazio non più sufficiente
                        a sostenere il gran numero di fedeli, nè era adatto all'introduzione di una scuola per la lingua araba e l'educazione islamica, nel 1999 si è aperta una raccolta fondi per acquistare uno spazio nuovo che fosse più ampio. 
                        Nel 2001, dopo circa 2 anni, è stato acquistato uno spazio di 400mq in via Ferrarin, ovvero l'attuale sede dell'associazione. Nel 2007, lo spazio, di nuovo, non era più sufficiente, in quanto la comunità musulmana frequentante la moschea aveva
                        raggiunto circa 600 individui, inoltre la scuola raggiunse, per un certo periodo, circa 500 iscrizioni. Nel 2009 dunque, successivamente ad un'ulteriore raccolta fondi, venne acquistato un'altro spazio di 400mq adiacente a quello comprato in 
                        precedenza, raggiungendo una dimensione totale di 800mq, che è l'attuale dimensione della sede. 
                    </p>
                    <p class="text-justify">
                        Lungo questi anni, l'associazione si è sviluppata come organizzazione non lucrativa di utilità sociale (ONLUS). Essa ha carattere socio-culturale, religioso e volontario. Si ispira nella sua azione ai principi del dialogo e della collaborazione. 
                        Coopera, nei suoi limiti, al fine di favorire la conoscenza reciproca tra popolazioni provenienti da diversi paesi nel mondo e la promozione di una convivenza pacifica. L'associazione infatti, accoglie comunità provenienti da circa 12 nazioni differenti,
                        dal Nordafrica, all'Africa subsahariana, dall'Europa orientale al Medioriente, fino all'Asia meridionale. L'associazione ha cercato di creare un ambiente nel quale le diverse comunità potessero conoscersi e familiarizzare tra di loro e al tempo stesso
                        integrarsi più facilmente nella società italiana. Ciò è avvenuto non solo mediante varie attività di collaborazione con gli enti locali e i rappresentanti della chiesa cattolica della provincia, ma anche intervenendo per il recupero dei soggetti
                        che si trovino in uno stato di disagio ed emarginazione sociale.
                    </p>
                    <hr>
                    <h2 class="display-5 fw">I nostri obiettivi</h2 >
                    <p class="text-justify">
                        1. Il rafforzamento della fede e della cultura islamica e il fornire aiuto spirituale, intellettuale e materiale finalizzato ad un miglior rapporto con il Creatore ("gloria a lui l'Altissimo") per gli associati stessi, i loro correligionari e la società tutta;
                    </p>
                    <p class="text-justify">
                        2. Testimoniare la presenza dei credenti nelle attività produttive e culturali in Italia, come portatori di un messaggio di pace e di giustizia per tutta la società;
                    </p>
                    <p class="text-justify">    
                        3. Unire i musulmani, avvicinare e far conoscere tra loro le famiglie musulmane e rendere effettivo il loro inserimento nella società;
                    </p>
                    <p class="text-justify">
                        4. Favorire il confronto, il dialogo e la conoscenza reciproca tra i diversi, per consolidare la convivenza in una società multiculturale;
                    </p>
                    <p class="text-justify">
                        5. Proteggere la comunità musulmana dalla criminalità e integrarla nella società italiana;
                    </p>
                    <p class="text-justify">
                        6. Curare altresì l'organizzazione di tutte le manifestazioni del culto islamico, convegni, dibattiti, attività scolastiche, ecc.
                    </p>
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
