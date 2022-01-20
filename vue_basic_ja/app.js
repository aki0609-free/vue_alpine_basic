const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            google: 'https://google.com',
            book: {
                title: 'book-title',
                url: 'https://google.com'
            },
            formInput: {
                name: 'your_name',
                placeholder: 'Please Input your name'
            },
            fontSize: '20px',
            isActive: true,
            isDisplay: false,
            members: [
                'aaa', 'bbb', 'ccc'
            ],
            book: {
                title: 'タイトル',
                author: '著者名',
                url: 'https://google.com'
            },
            books: [
                {
                    id: 1,
                    title: 'aaa',
                    author: 'bbb',
                    url: 'ccc'
                },
                {
                    id: 2,
                    title: 'aa',
                    author: 'bb',
                    url: 'cc'
                },
                {
                    id: 3,
                    title: 'a',
                    author: 'b',
                    url: 'c'
                },
            ],
            test: 'あああ<br>いいい',
            price: 1,
            number: 1
        };
    },
    methods: {
        btnClicked() {
            alert('クリック');
        },
        btnClickedEvent(e){
            console.log(e);
        },
        btnClickedArgs(val){
            alert(val);
        },
        btnClickedArgsEvent(val, event){
            console.log(val, event);
        },
    },
    computed: {
        totalPrice() {
            console.log('computedです')
            return this.price * this.number;
        },
        totalPrice_arrow: app => {
            console.log('computedです');
            return app.price * app.number;
        },
    },
    watch: {
        books: {
            handler(){
                console.log('変更されました');
            },
            deep: true,
        }
    }
});

app.mount('#app');