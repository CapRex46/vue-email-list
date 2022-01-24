new Vue ({
    el: '#app',
    data: {
        ListaEmail: []
    },
    mounted(){
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                this.ListaEmail.push(email.data.response);
            })
        }
    }
})