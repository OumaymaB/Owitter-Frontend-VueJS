<template >
  <div class="ui fluid conainer">
    <div class="ui middle aligned center aligned grid" id="template">
      <h2 class="ui header">
        <div class="ui center aligned container">Register to log-in !</div>
        <br />
      </h2>

      <form class="ui big form" @submit.prevent="register">
        <div class="two fields">
          <div class="field">
            <label>First Name</label>
            <input
              placeholder="First Name"
              type="text"
              v-model="formData.firstName"
              required
            />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              v-model="formData.lastName"
              required
            />
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label for="">E-mail</label>
            <input
              type="text"
              v-model="formData.email"
              placeholder="E-mail address"
              required
            />
          </div>
          <div class="field">
            <label for="">Password</label>
            <input
              type="password"
              v-model="formData.password"
              placeholder="*****"
              required
            />
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label for="">Profile Name</label>
            <input
              type="text"
              v-model="formData.profileName"
              placeholder="Profile Name"
              required
            />
          </div>
          <div class="field">
            <label>Birthdate</label>
            <input type="date" v-model="formData.birthdate" required />
          </div>
        </div>
        <div class="ui center aligned container">
          <button type="submit" class="ui submit button" id="register">
            Register
          </button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
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
  methods: {
    register() {
      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped>
$color: #4e3976;

#template {
  width: 50%;
  position: absolute;
  top: 20%;
  left: 25%;

  #register {
    color: white;
    background-color: $color;
    width: 50%;
  }
}
</style>


