<template>
  <div class="ui grid" id="grid">
    <div
      class="four wide column"
      v-for="follower in followers"
      :key="follower.id"
    >
      <FollowerItem :follower="follower" />
    </div>
  </div>
</template>

<script>
import FollowerItem from "../components/FollowerItem.vue";

export default {
  props: {
    followers: [],
  },
  components: {
    FollowerItem,
  },
};
</script>

<style lang="scss" scoped>
#grid {
  margin-right: 50px;
}
</style>