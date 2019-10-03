<template>
  <div class="home">
    <navBar class="nav-home">
      <div slot="center">购物街</div>
    </navBar>

    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" class="swiper-img" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <recommend :recommends="recommends" />

    <feature />

    <tabControl :titles="['流行','时尚','新款']" />
    <ul>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
    </ul>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";

import recommend from "views/Home/childComp/Recommend";
import feature from "views/Home/childComp/Feature";

import tabControl from "components/content/tabControl/TabControl";

export default {
  name: "home",
  components: {
    navBar,
    recommend,
    feature,
    tabControl
  },
  data() {
    return {
      swiperOption: {
        // autoplay: true,
        autoplay: {
          stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      banners: [],
      recommends: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  },
  methods: {},
  created() {
    this.$http.get("/home/multidata").then(res => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  }
};
</script>
<style scoped>
.home {
  padding-top: 44px;
}
.nav-home {
  background-color: #fa79a0;
  color: white;
  font-size: 20px;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
}
.swiper-img {
  width: 100%;
  height: 200px;
}
</style>