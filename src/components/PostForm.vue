<template>
  <form class="ui form" id="form" @submit.prevent="onSubmit">
    <div class="field">
      <textarea
        rows="2"
        placeholder="Say what you want..."
        v-model="content"
      ></textarea>
    </div> 
    <div class="field">
      <button type="submit" class="small ui button" id="button">
        Save 
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit('add-post',this.content);
      this.content = "";
    },
  },
};
</script>

<style lang="scss" scoped>
$color: #4e3976;

#form {
  margin-right: 40px;
}

#button {
  background-color: $color;
  color: white;
}
</style>