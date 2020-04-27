import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            title: 'Hello'
        }
    },
    onLoad() {
        console.log('haha ,n')
    },
    methods: {
        go() {
            uni.navigateTo({
                url: '/pages/index/index'
            });
        }
    }
});
