const app = Vue.createApp({
    // data, methods, templates;
    //template:'<h2>This is a template</h2>'

    data() {
        return {
            toShow: false,
            a : 0,
            b : 0,
            c:0,
            books: [{
                    title: "Immortals of Meluha",
                    author: "Amish Tripathi",
                    url: "https://www.amazon.in/Immortals-Meluha-Shiva-Trilogy/dp/9380658745/ref=pd_lpo_2?pd_rd_i=9380658745&psc=1",
                    isFav: true,
                    likes : 0,
                    comments:0
                },
                {
                    title: "The Secret of Nagas",
                    author: "Amish Tripathi",
                    url: "https://www.amazon.in/Secret-Nagas-Shiva-Trilogy-2/dp/9381626340",
                    isFav: false,
                    likes : 0,
                    comments:0
                },
                {
                    title: "Oath of vayuputra",
                    author: "Amish Tripathi",
                    url: "https://www.amazon.in/Oath-Vayuputras-Shiva-Trilogy/dp/9382618341",
                    isFav: true,
                    likes : 0,
                    comments:0
                },
            ],
            loggedIn: "Person has loggedIn"
        }
    },

    methods: {
        toggleShow() {
            console.log(this.toShow);
            this.toShow = !this.toShow;
        },
        toggleFav(book){
            book.isFav = !book.isFav;
        },
        increaseLike(book){
            book.likes++;
        }
    },

    computed: {
        changeC(){
            this.c = this.a + this.b;
        }
    }
})

app.mount("#root");