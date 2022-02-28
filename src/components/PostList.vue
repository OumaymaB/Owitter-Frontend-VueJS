<template>
  <div>
    <div v-for="post in posts" :key="post.id">
 <PostItem :post="post" @deletePost="$emit('deletePost',post.id)" />
    </div>
  </div>
</template>

<script>
import PostItem from '../components/PostItem.vue'
export default {
    emits: ["deletePost"],
  props:{
posts :[]
  },
components:{
    PostItem,
}
}
</script>

<style>

</style>