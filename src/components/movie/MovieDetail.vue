<template>
    <div class="detail">
        <div class="detail-info">
            <div class="detail-img">
                <img :src="detailData.img" alt="">
            </div>
            <div class="detail-content">
                <h4 class="detail-name">{{ detailData.nm}}</h4>
                <p>{{detailData.dir}}</p>
                <p>{{detailData.ver}}</p>
                <p>{{detailData.cat}}</p>
                <P>{{detailData.src}}</P>
                <p>{{detailData.rt}}</p>
                <p>{{detailData.wish}}人想看</p>
            </div>
        </div>
        <div class="detail-star">
            <h3>主演</h3>
            <p>{{ detailData.star }}</p>
        </div>
        <div>
            <h3>简介</h3>
            <div v-html="detailData.dra"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
     data(){
        return{
           detailId:this.$route.params.movieId,
           detailData:[]
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){          
            axios.get(API_PROXY+'http://m.maoyan.com/movie/'+this.detailId+'.json').then((res)=>{
            this.detailData = res.data.data.MovieDetailModel;   
            console.log(this.detailData);  
            }).catch((res)=>{
                console.log('error');               
            })
        }
    }
}
</script>
<style scoped>
    .detail {
        padding: 0.1rem;
    }
    .detail-info {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding-bottom: 0.1rem;
    }
    .detail-img {
        flex-grow: 1;
        width: 0;
        margin: 0.1rem 0.15rem;
    }
    .detail-content {
        flex-grow: 2;
        width: 0;
    }
    .detail-name {
        font-weight: bolder;
    }
    .detail h3 {
        text-align: center;
        font-weight: bolder;
    }
    .detail-star {
        border-bottom: 1px solid #ccc;
    }
</style>