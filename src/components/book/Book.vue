<template>
  <div>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
    </swipe>
    <div class="book-list">
      <h3>书单</h3>
      <ul>
        <li v-for="val in bookList" :key="val.id" @click="toDetail(val.id)">
          <div class="book-imgs">
            <img :src="val.image" alt="" >
          </div>
          <div class="book-info">
            <h4>{{val.title}}</h4>
            <p>作者：{{val.author[0]}}</p>
            <p>出版社：{{val.publisher}}</p>  
            <p>出版日期：{{val.pubdate}}</p>       
          </div>     
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe'
import store from '@/vuex/store'
import axios from 'axios'
export default {
  data(){
    return{
      bookList:[]
    }
  },
  store,
  components: {
            'swipe': Swipe,
            'swipeItem': SwipeItem
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
      axios.get(API_PROXY+'https://api.douban.com/v2/book/search?tag=novel').then((res)=>{
        this.bookList = this.bookList.concat(res.data.books);
      }).catch((error)=>{
        console.log(error); 
      })
    },
    toDetail(id){
      this.$router.push({name:'BookDetail',params:{bookId:id}})
    }
  }
}
</script>
<style scoped>
  .my-swipe {
    height: 1.9rem ;
    text-align: center;
  }
  .slide1 {
    background: url('https://img1.doubanio.com/view/ark_campaign_pic/large/public/6238.jpg') center/contain no-repeat;
    color: #fff;
  }
  .slide2 {
    background: url('https://img3.doubanio.com/view/ark_campaign_pic/large/public/6233.jpg') center/contain no-repeat;
    color: #000;
  }
  .slide3 {
    background:  url('https://img1.doubanio.com/view/ark_campaign_pic/large/public/6199.jpg') center/contain no-repeat;
    color: #fff;
 }
  .slide4 {
    background:  url('https://img1.doubanio.com/view/ark_campaign_pic/large/public/6197.jpg') center/contain no-repeat;
    color: #fff;
 }
 .book-list h3{
   font-weight: bold;
   margin: 0.3rem 0 0.1rem 0.3rem;
 }
 .book-list li{
   display: flex;
   border-bottom: 0.01rem solid #cccccc;
 }
 .book-list .book-imgs{
   margin: 0.2rem;
 }
 .book-list .book-imgs img{
   width: 2rem;
   border-radius: 3%;
 }
 .book-list .book-info{
   margin-top: 0.3rem;
 }
 .book-list .book-info h4{
   font-weight: bold;
 }
 .book-list .book-info p{
   font-size: 0.28rem;
 }
</style>
