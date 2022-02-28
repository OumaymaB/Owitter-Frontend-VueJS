<template>
  <div class="ui feed" id="post_item">
    <div class="event">
      <div class="content">
        <div class="summary">
          <a class="user"> Elliot Fu </a>
        </div>
        <div class="meta">{{ post.content }}</div>
      </div>
      <button class="circular ui icon button" @click="deletePost(post.id)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  methods:{
    deletePost(id){
this.$emit('deletePost',id);
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #4e3976;

#post_item {
  border-bottom: 2px solid $color;
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  margin-right: 40px;
}
</style>