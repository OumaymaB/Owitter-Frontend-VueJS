
<template >
  <div class="ui fluid conainer">
    <div class="ui middle aligned center aligned grid" id="template">
      <div class="column">
        <h2 class="ui header">
          <div class="content">Log-in !</div>
        </h2>
        <form class="ui large form" @submit.prevent="login">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address" v-model="form.email"/>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password" v-model="form.password" />
              </div>
            </div>
          </div>
          <button class="ui fluid large button" id="login" type="submit">
            Login
          </button>
        </form>
        <div class="ui message">
          New to us ?
          <a href="/register" id="register"> Register now</a>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  data() {
    return {
        form:{
            email: "",
            password : ""
        }
    };
  },
  methods: {
    login() {
        console.log(this.form);
    },
  },
  components:{
      Footer
  }
};
</script>


<style lang="scss" scoped>
$color: #4e3976;

#template {
  width: 50%;
  position: absolute;
  top: 20%;
  left: 25%;

  #login {
    color: white;
    background-color: $color;
  }

  #register {
    color: $color;
    font-family: "Times New Roman", Times, serif;
    font-size: 20;
  }
}
</style>