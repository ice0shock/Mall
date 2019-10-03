<template>
  <div>
    <tabBar>
      <tabBarItem path="/home">
        <img src="../../../assets/img/tabbar/home.png" alt slot="item-icon" />
        <img src="../../../assets/img/tabbar/home_active.png" alt slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </tabBarItem>
      <tabBarItem path="/category">
        <img src="../../../assets/img/tabbar/category.png" alt slot="item-icon" />
        <img src="../../../assets/img/tabbar/category_active.png" alt slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </tabBarItem>
      <tabBarItem path="/cart">
        <img src="../../../assets/img/tabbar/cart.png" alt slot="item-icon" />
        <img src="../../../assets/img/tabbar/cart_active.png" alt slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/profile">
        <img src="../../../assets/img/tabbar/profile.png" alt slot="item-icon" />
        <img src="../../../assets/img/tabbar/profile_active.png" alt slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </tabBarItem>
    </tabBar>
  </div>
</template>
<script>
import tabBar from "components/common/tabbar/TabBar";
import tabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "mainTabBar",
  components: {
    tabBar,
    tabBarItem
  }
};
</script>
<style scoped>
</style>