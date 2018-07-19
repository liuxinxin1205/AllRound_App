<template>
    <div>
        <div class="book-info">
            <div class="book-imgs">
                <img :src="dataList.image" alt="">
            </div>
            <div class="content">
                <h4>{{dataList.title}}</h4>
                <p>作者：{{dataList.author}}</p>
                <p>出版社：{{dataList.publisher}}</p>
                <p>出版日期：{{dataList.pubdate}}</p>
                <p>页数：{{dataList.pages}}页</p>
                <p class="price">参开价格：{{dataList.price}}</p>
            </div>
        </div>
        <div class="summary"> 
            <h3>简介</h3>
            <p>{{dataList.summary}}</p>
        </div>
        <div class="author">
            <h3>作者</h3>
            <p>{{dataList.author_intro}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import store from '@/vuex/store'
export default {
    store,
    data(){
        return{
            detailId:this.$route.params.bookId,
            dataList:[]
        }
    },
    created(){
        this.$store.commit('routerLinks',{
        color:'rgb(121,85,72)',
        title:'书籍'
        });
        this.getData();
    },
    methods:{
        getData(){
            axios.get(API_PROXY+'https://api.douban.com/v2/book/'+this.detailId).then((res)=>{
                this.dataList = res.data;
            }).catch((error)=>{
                console.log(error);        
            })
        }
    }
}
</script>
<style scoped>
.book-info{
    display: flex;
    border-bottom: 0.01rem solid #cccccc;
}
.book-info .book-imgs img{
    width: 2rem;
    margin: 0.2rem;
}
.book-info .content{
    margin-top: 0.2rem;
    margin-left: 0.1rem;
}
.book-info .content h4{
    font-weight: bold;
}
.book-info .content p{
    font-size: 0.28rem;
}
.book-info .content .price{
    color: #ff0000;
    font-weight: bold;
}
.summary{
    padding: 0.2rem;
    border-bottom: 0.01rem solid #cccccc;
}
.summary h3,.author h3{
    font-weight: bold;
    margin-left: 0.3rem;
}
.summary p,.author p{
    font-size: 0.28rem;
    text-indent: 0.3rem;
    display: -webkit-box;
    overflow: hidden;
    white-space: normal!important;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}
.author{
    padding: 0.2rem;
}
</style>
