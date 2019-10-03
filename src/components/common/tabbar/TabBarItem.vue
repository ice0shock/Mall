<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      // isActive: false
    };
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
     isActive(){
       return this.$route.path.includes(this.path)
     }
  },
};
</script>
<style scoped>
.tab-bar-item img {
  width: 24px;
  height: 24px;
  padding-top: 3px;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  vertical-align: 0;
}
.active {
  color: #fa7aa1;
}
</style>