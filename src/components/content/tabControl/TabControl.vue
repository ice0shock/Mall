<template>
  <div class="tab-control">
    <div v-for="(item,i) in titles" :key="i" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: Array,
    default() {
      return [];
    }
  }
};
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
}
.tab-control-item{
    flex: 1;
    line-height: 40px;
    
}
</style>