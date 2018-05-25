<template>
  <div>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
    </swipe>

  </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe'
import store from '@/vuex/store'
export default {
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
  }
}
</script>
<style scoped>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
    background: url('https://img3.doubanio.com/lpic/s27102925.jpg') ;
    color: #fff;
  }

  .slide2 {
    background: url('https://img3.doubanio.com/lpic/s6989253.jpg') ;
    color: #000;
  }
  .slide3 {
    background:  url('https://img3.doubanio.com/lpic/s24468373.jpg') ;
    color: #fff;
}
</style>
