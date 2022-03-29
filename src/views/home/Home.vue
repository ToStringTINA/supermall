<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">
        购物车
      </div>
    </nav-bar>
    <home-swiper :banners="banner"/>
    <recommend-view :recommend="recommend"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from "@/network/home";
// 只有default导出，才能不用 {}
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
  //  created周期的 this 就是当前组件对象
  //  1.请求多个数据
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      console.log(res)
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: lightpink;
    color: #F1F1F1;
    font-weight: bold;
    letter-spacing: 4px;
  }
</style>