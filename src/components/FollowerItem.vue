<template>
  <div id="follow">
    <div class="card">
      <div class="content" id="content">
        <div class="header">@{{ follower.profileName }}</div>
        <div class="description">
          {{ follower.firstName }} {{ follower.lastName }}
        </div>
      </div>
      <div class="ui bottom attached button">Unfollow</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    follower: Object,
  },
};
</script>

<style lang="scss" scoped>
#follow {
  width: 200px;
  margin: 40px;

  #content {
    display: block;
    margin-left: 50px;
  }
}
</style>