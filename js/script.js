const { createApp } = Vue;

createApp({
    data() {
        return {
            diskList: [],
            apiUrl: "server.php",
            diskHighlighted: null,
        };
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.diskList = resp.data;
        });
    },
    methods: {
        clickedDisk(id) {
            axios.get(this.apiUrl).then((resp) => {
                this.diskHighlighted = resp.data[id];
            });
        }
    },
}).mount("#app");