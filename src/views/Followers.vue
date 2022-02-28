<template>
  <div>
    <div class="ui center aligned container" id="header">Followers</div>

    <div class="ui large icon input" id="search">
      <input type="text" placeholder="Search large..." v-model="searchWord" value=""/>
      <i class="search icon"></i>
    </div>
    <div v-if="this.searchWord">
      <p>search result for : {{this.searchWord}}</p>
    </div>
    <div v-else>
      <FollowerList :followers="followers" />
    </div>
  </div>
</template>

<script>
import FollowerList from "../components/FollowerList.vue";
export default {
  data() {
    return {
      followers: [],
      searchWord: "",
    };
  },
  components: { FollowerList },
  created() {
    this.followers = [
      {
        id: "id1",
        firstName: "ouma",
        lastName: "boud",
        profileName: "ouma98",
      },
      {
        id: "id2",
        firstName: "ouma",
        lastName: "boud",
        profileName: "ouma98",
      },
      {
        id: "id3",
        firstName: "ouma",
        lastName: "boud",
        profileName: "ouma98",
      },
      {
        id: "id4",
        firstName: "ouma",
        lastName: "boud",
        profileName: "ouma98",
      },
      {
        id: "id5",
        firstName: "ouma",
        lastName: "boud",
        profileName: "ouma98",
      },
    ];
  },
};
</script>

<style lang="scss" scoped>
$color: #4e3976;

#header {
  display: flex;
  justify-content: left;
  color: $color;
  font-weight: bolder;
  font-size: x-large;
}

#search {
  margin: 20px;
  position: relative;
  left: 20%;
}
</style>