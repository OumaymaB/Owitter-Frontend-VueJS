<template>
  <div>
    <div class="ui center aligned container" id="header">Profile</div>

    <div id="form">
      <form class="ui big form" @submit.prevent="updateProfile">
        <div class="two fields">
          <div class="field">
            <label>First Name</label>
            <input type="text" v-model="formData.firstName" required />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input type="text" v-model="formData.lastName" required />
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label for="">E-mail</label>
            <input type="text" v-model="formData.email" required />
          </div>
          <div class="field">
            <label for="">Password</label>
            <input type="password" v-model="formData.password" required />
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label for="">Profile Name</label>
            <input type="text" v-model="formData.profileName" required />
          </div>
          <div class="field">
            <label>Birthdate</label>
            <input type="date" v-model="formData.birthdate" required />
          </div>
        </div>
        <div class="ui center aligned container">
          <button type="submit" class="ui submit button" id="update">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        profileName: "",
        birthdate: "",
      },
    };
  },
  methods:{
    updateProfile(){
      console.log(this.formData);
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #4e3976;

#header {
  display: flex;
  justify-content: left;
  color: $color;
  font-weight: bolder;
  font-size: x-large
}

#update {
  color: white;
  background-color: $color;
}

#form {
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 40px;
}
</style>