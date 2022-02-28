<template>
  <div>
    <PostForm @add-post="addPost"/>
    <PostList :posts="posts" @deletePost="deletePost" />
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostList from '../components/PostList.vue'
export default {
  data(){
return{
posts: []
};
  },
  components: {
    PostForm,
    PostList
  },
  methods:{
    deletePost(id){
console.log("my id:"+id)
    },

    addPost(postContent){
console.log("post :"+postContent);
    }
    //fetch posts
  },
  created(){
this.posts =[
  {
        id:"id01",
        content:"ola ana"
  },
    {
        id:"id02",
        content:"ola segunda-feira"
  },
      {
        id:"id03",
        content:"bom dia!"
  }
]
  }
};
</script>

<style lang="scss" scoped>

</style>