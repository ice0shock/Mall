<template>
    <div class="recommend">
         <div v-for="(item,i) in recommends" :key="i" class="recommend-item">
             <a :href="item.link">
                 <img :src="item.image" alt="">
                 <div>{{item.title}}</div>
             </a>
         </div>
    </div>
</template>
<script>
export default {
    name:"Recommend",
    props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
    }
}
</script>
<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        width: 100%;
        font-size: 16px;
        padding: 10px 0 30px;
        border-bottom: 8px solid #eee;
    }
    .recommend-item{
        flex:1;
    }
    .recommend-item img{
        width: 65px;
        height: 65px;
        margin-bottom: 3px;
    }
</style>