const submissionComponent = {
    template: `
        <div style="display: flex; width: 100%">
            <figure class="media-left">
                <img :src="item.submissionImage" class="image is-64x64">
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>
                            <a href="#" class="has-text-info">{{item.title}}</a>
                            <span class="tag is-small">
                                #{{item.id}}
                            </span>
                        </strong>
                        <br>
                        {{ item.description }}
                        <br>
                        <small class="is-size-7">
                            Submitted by:
                            <img :src="item.avatar" alt="" class="image is-24x24">
                        </small>
                    </p>
                </div>
            </div>
            <div class="media-right">
                <span @click="upvote(item.id)" class="icon is-small">
                    <i  class="fa fa-chevron-up"></i>
                    <strong class="has-text-info">{{item.votes }}</strong>
                </span>
            </div>
        </div>
    `,
    props: ["item","submissions"],
    methods: {
        upvote(itemId){
            const item = this.submissions.find(
                (item) => item.id === itemId
            );
            item.votes++;
        }
    }
};
const upvoteApp = {
    data(){
        return{
            submissions: Seed.submissions
        };
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a,b) => {
                return b.votes - a.votes;
            });
        },
    },
    components : {
        "Submission" : submissionComponent,
    },
};


Vue.createApp(upvoteApp).mount("#app");