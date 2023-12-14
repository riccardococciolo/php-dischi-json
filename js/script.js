const { createApp } = Vue;

createApp({
    data() {
        return {
            diskList: [],
            apiUrl: "server.php",
        };
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.diskList = resp.data;
        });
    },
}).mount("#app");