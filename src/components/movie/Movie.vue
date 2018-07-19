<template>
  <div>
    <ul>
      <li @click="toDetail(val.id)" class="items" v-for="val in datas" :key="val.id">
        <div class="item-img">
          <img :src="val.img" alt="">
        </div>
        <div class="item-info">
          <h4>{{val.nm}}</h4>
          <p>观众评：{{val.sc}}</p>
          <p>主演：{{val.star}}</p>
          <p>{{val.showInfo}}</p>
        </div>
        <div v-if="val.preSale == 0" class="item-sale" >购票</div>
        <div v-else-if="val.preSale == 1" class="item-preSale">预售</div>
      </li>
    </ul>
    <div>
      <img src="@/assets/img/loading.gif" alt="" v-show="isLoading">
    </div>
    <div>
      <h5 v-show="isEnd">已经到底了</h5>
    </div>
  </div>
</template>
<script>
import store from '@/vuex/store'
import axios from 'axios'
export default {
  store,
  data(){
    return{
      datas:[],
      isLoading:false,
      isEnd:false,
      imax:false
    }
  },
  methods:{
    getData(){
      axios.get(API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&offset='+this.datas.length+'&limit=10')
      .then((res)=>{
        this.datas = this.datas.concat(res.data.data.movies);
        console.log(this.datas);
        
        this.isLoading=false; 
        if(res.data.data.movies.length == 0){
          this.isEnd=true;
        }      
      }).catch(()=>{
      })
    },
    toDetail(id){
        this.$router.push({name:'MovieDetail',params:{movieId:id}})
      }
  },
  created (){
      this.$store.commit('routerLinks',{
        color:'#e54847',
        title:'电影'
      });
      this.getData();
  },
  mounted(){
    window.onscroll = ()=>{
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      if(scrollTop+clientHeight == scrollHeight){
          if(!this.isLoading){
            if(this.isEnd){
              
          }else{
            this.isLoading = true;
            this.getData();
          }
        }
      }     
    } 
  }
}
</script>
<style scoped>
.items{
  border-bottom: 1px solid #ccc;
  display: flex;
}
.item-img{
  margin: .2rem .2rem;
  flex-grow: 1;
  width: 0;
}
.item-img img{
  border-radius:3%; 
}
.item-info{
  flex-grow: 2;
  width: 0;
  margin-top: .2rem;
}
.item-info p{
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap;
}
.item-info h4{
  font-weight: bold;
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap;
}
.item-sale{
  width: 1rem;
  height: .55rem;
  line-height: .55rem;
  text-align: center;
  margin-top: 0.65rem;
  margin-right: 0.3rem;
  background-color: #f03d37;
  color: #fff;
  border-radius: 10%;
  white-space: nowrap;
}
.item-preSale{
   width: 1rem;
  height: .55rem;
  line-height: .55rem;
  text-align: center;
  margin-top: 0.65rem;
  margin-right: 0.3rem;
  background-color: #3c9fe6;
  color: #fff;
  border-radius: 10%;
  white-space: nowrap;
}
</style>


