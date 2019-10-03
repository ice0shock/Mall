<template>
  <div class="TabBar">
    <slot class="tab-bar">
    </slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>
<style scoped>
  .TabBar{
    display: flex;
    position: fixed;
    background-color: #f6f6f6;
    left:0;
    right: 0;
    bottom: 0;
    height: 52px;
    width: 100%;
  }
</style>