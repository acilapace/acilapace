<template>
  <div id="discorsovenerdi">
    <Header/>
        <main role="main" class="container">
            <div class="row">
                <div class="col-md-8 blog-main mt-3">
                    <div class="blog-post">
                        <h2 class="blog-post-title">{{ document[0].title }}</h2>
                        <p class="blog-post-meta">{{ document[0].date.day }} {{ document[0].date.month }} {{ document[0].date.year }}</p>
                        
                        <p>{{ document[0].content }}</p>
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

    data() {
        return {
            document: [
                {
                    id: 0,
                    title: 'L\'ESSERE UMANO TRA IL BENE E IL MALE',
                    date: {
                        day: 8,
                        month: 'Ottobre',
                        year: 2021,
                    },
                    content: "L'Islam - come tutti i messaggi divini - dipende nella sua riforma generale dall'affinamento soprattutto dell'anima umana, poich\u00E9 dedica enormi sforzi per penetrare nelle sue profondit\u00E0 e introdurre i suoi insegnamenti nella sua essenza fino a interiorizzarli... Le religioni, per natura, considerano l'anima retta come la parte principale per curarla. Un carattere dai forti principi morali, quindi, \u00E8 l'eterna garanzia di ogni civilt\u00E0. Non si tratta n\u00E9 di sminuire n\u00E9 di sottovalutare il lavoro di coloro che cercano di costruire la societ\u00E0 e lo stato, ma piuttosto un richiamo al valore della cura spirituale nel preservare la vita e rendere felici gli esseri umani. L'anima squilibrata pu\u00F2 provocare confusione anche nel migliore dei sistemi, e pu\u00F2 penetrare questo sistema per raggiungere i suoi obiettivi maligni, l'anima generosa invece guarisce le ferite create dalle condizioni difficili, e la sua nobilt\u00E0 risplende dall\u2019interno di tali ferite migliorando il comportamento e rettificando la sua via. Un giudice onesto, con la sua giustizia, pu\u00F2 completare le mancanze del sistema giudiziario con cui governa, mentre un giudice ingiusto pu\u00F2 falsare un sistema giudiziario corretto, lo stesso vale per l'anima umana quando affronta le correnti, le idee, i desideri e gli interessi nel mondo. La cura spirituale qui \u00E8 il primo pilastro per valorizzare il bene in questa vita. Se le anime non saranno curate, gli orizzonti saranno oscurati e la tentazione prevarr\u00E0 nel presente e nel futuro del popolo, ed \u00E8 per questo che dice Allah: \u201CIn verit\u00E0 Allah non modifica la realt\u00E0 di un popolo finch\u00E9 esso non muta nel suo intimo. Quando Allah vuole un male per un popolo, nessuno pu\u00F2 allontanarlo, n\u00E9 avranno, all\u2019infuori di Lui, alcun protettore.\u201D (Ar-Ra\u2019d, 11), e dice anche quando spiega i motivi della distruzione dei popoli: \u201Ccome fu per la gente di Faraone e per quelli che avevano negato i segni di Allah. Allah li colp\u00EC per i loro peccati. In verit\u00E0 Allah \u00E8 possente e severo nel castigo. Allah non cambia la grazia che ha concesso ad un popolo fintanto che questo non cambia quello che \u00E8 nel suo cuore. Allah \u00E8 udiente, sapiente.\u201D (Al Anfal, 52-53). L'Islam - nel trattare l'anima con lo scopo di curarla - la guarda da due prospettive: la prima \u00E8 che l\u2019anima ha una natura buona, che tende al bene, e si compiace della sua realizzazione, si addolora per il male e per la sua diffusione, e vede nella verit\u00E0 l'estensione della sua esistenza e la salute della sua vita. La seconda \u00E8 che l\u2019anima contiene - oltre a questo - tendenze incontrollate, che deviano dalla retta via, danneggiano l\u2019anima e la trascinano nel vuoto. Dice Allah: \u201Cper l\u2019anima e Ci\u00F2 Che l\u2019ha formata armoniosamente ispirandole empiet\u00E0 e devozione. Ha successo invero chi la purifica, \u00E8 perduto chi la corrompe.\u201D (Ash-Shams, 7-10). Il compito dell'Islam \u00E8 assistere l'uomo, al fine di sostenere la sua natura, farla brillare e porla sulla retta via, e di eliminare le tentazioni peccaminose che perseguitano l\u2019uomo, e cercano di distruggerlo. L'Islam si \u00E8 descritto come una religione che purifica l\u2019istinto da tutte queste impurit\u00E0, dice Allah: \u201CRivolgi il tuo volto alla religione come puro monoteista, natura originaria che Allah ha connaturato agli uomini; non c\u2019\u00E8 cambiamento nella creazione di Allah. Ecco la vera religione, ma la maggior parte degli uomini non sa.\u201D (Ar-Rum, 30). Dopo che il Corano, quindi, stabilisce che la religione di Allah \u00E8 quella dell\u2019istinto (fitrah), il versetto successivo dice: \u201CRitornate a Lui, temeteLo, assolvete all\u2019orazione e non siate associatori. E neppure [siate tra] coloro che hanno scisso la loro religione e hanno formato fazioni, ognuna delle quali \u00E8 arrogante di ci\u00F2 che afferma.\u201D (Ar-Rum, 31-32). La fede, non la miscredenza, il timore di Allah, non l'immoralit\u00E0, coloro che si uniscono sotto la legge di Allah, non coloro che dividono le persone. Questi consigli sono la strada per riportare l'uomo alla sua natura retta. Il Corano ha ripetuto questo significato dicendo: \u201CInvero creammo l\u2019uomo nella forma migliore; quindi, lo riducemmo alla forma peggiore della depravazione, eccezion fatta per coloro che credono e fanno il bene: avranno ricompensa inesauribile.\u201D (At-Tin, 4-6). Quella forma migliore si concretizza nel conoscere la verit\u00E0, aderire ad essa e seguire i suoi riferimenti: \u00E8 l\u2019onest\u00E0 e la nobilt\u00E0 d\u2019animo, \u00E8 la cura del proprio modo di pensare con s\u00E9 stessi e con le persone, ed \u00E8 la ricerca della perfezione e la sua valorizzazione su tutto nella vita. Tuttavia, molte persone sono ostacolate dai loro capricci, ci\u00F2 abbassa il loro livello, e pi\u00F9 sono i capricci e pi\u00F9 questi abbasseranno il livello dell\u2019essere umano, fino a raggiungere la forma peggiore della depravazione come punizione da parte di Allah, questa \u00E8 la legge di Allah nella deviazione e la guida, dice Allah: \u201CNon si addice ad Allah traviare un popolo dopo averlo guidato, senza prima render loro evidente ci\u00F2 che devono temere. Allah \u00E8 onnisciente.\u201D (At-Tawba, 115), e dice anche: \u201CPresto allontaner\u00F2 dai segni Miei coloro che sono orgogliosi sulla terra. Quand\u2019anche vedessero ogni segno non crederanno; se vedessero la retta via, non la seguirebbero; se vedessero il sentiero della perdizione lo sceglierebbero come loro via. Ci\u00F2 in quanto tacciano di menzogna i Nostri segni e sono noncuranti di essi.\u201D (Al-A\u2019raf, 146). Chi \u00E8 che invece rimarr\u00E0 nella sua migliore forma, salvandosi dall\u2019affondare nella forma peggiore della depravazione? La risposta \u00E8: \u201Ccoloro che credono e fanno il bene\u201D. Il buon carattere, quindi, \u00E8 il frutto di una fede chiara e di azioni rette. E proprio come il buon istinto si controlla mediante la fede e la cura, non mediante la miscredenza e l\u2019indecenza, allo stesso modo si controlla anche questi capricci incontrollati. In entrambi i casi, non pu\u00F2 esserci una recinzione solida, senza un comportamento solido. Mentre il Corano descrive l'uomo come debole, esitante ed egoista, ricorda anche che l\u2019immunit\u00E0 da questi vizi \u00E8 possibile solo attraverso la religione e i suoi comandamenti, dice Allah: \u201CIn verit\u00E0 l\u2019uomo \u00E8 stato creato instabile; prostrato quando lo coglie sventura, arrogante nel benessere; eccetto coloro che eseguono l\u2019orazione, e sono costanti nella loro orazione, e sui cui beni c\u2019\u00E8 un riconosciuto diritto, per il mendicante e il diseredato; coloro che attestano la verit\u00E0 del Giorno del Giudizio e coloro che temono il castigo del loro Signore \u2013 ch\u00E9 in verit\u00E0 il castigo del loro Signore non \u00E8 cosa da cui si possa trovare riparo \u2013 e che si mantengono casti\u201D (Al-Ma\u2019arij, 19-29). \u00C8 risaputo che il buon comportamento non si forma nell'anima all'improvviso, n\u00E9 nasce solido e maturo, ma si forma nel tempo e matura per gradi. Questo \u00E8 il segreto del legame tra lo sviluppo del buon comportamento e le azioni ripetitive ordinate da Allah, come la preghiera, l'elemosina, la fede nel Giorno della Giudizio, il timore del castigo di Allah ecc. Un carattere cattivo cerca continuamente di deviare l\u2019essere umano dalla retta via, bisogna quindi capire che non sar\u00E0 un rimedio temporaneo a fermare il male che ne deriverebbe. Piuttosto, il rimedio deve essere pi\u00F9 potente di questo carattere, e deve ripristinare immediatamente l'equilibrio se viene disturbato. In conclusione, l'Islam rispetta il puro istinto, e i suoi insegnamenti sono uno specchio di questo istinto. L\u2019Islam mette in guardia contro i desideri sfrenati e pone loro dei limiti, e gli atti di adorazione che ha comandato sono un consolidamento della natura e un mezzo per controllare e limitare i desideri. Questi atti di adorazione non saranno perfetti e non compiranno la loro missione a meno che non contribuiscano tutti alla formazione di un carattere superiore e di una retta via.\r\nLa lode appartiene ad Allah."
                }
            ],
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
