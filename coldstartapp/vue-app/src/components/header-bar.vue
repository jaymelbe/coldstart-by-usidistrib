<script>
import HeaderBarBrand from '@/components/header-bar-brand.vue';
import AuthLogin from '@/components/auth-login.vue';
import AuthLogout from '@/components/auth-logout.vue';

export default {
  name: 'HeaderBar',
  props: {
    auth: Boolean,
  },
  components: {
    HeaderBarBrand,
    AuthLogin,
    AuthLogout,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<template>
  <header>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <HeaderBarBrand></HeaderBarBrand>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item nav-home" to="/">Home</router-link>
          <router-link class="navbar-item nav-home" to="/icecreams">
          My ice creams
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item nav-home has-dropdown is-hoverable">
            <a class="navbar-link">Authentication</a>
            <div class="navbar-dropdown" v-if="!auth">
              <AuthLogin provider="twitter" />
              <AuthLogin provider="github" />
              <AuthLogin provider="aad" />
              <AuthLogin provider="google" />
              <AuthLogin provider="facebook" />
            </div>
            <div class="navbar-dropdown" v-if="auth">
              <AuthLogout></AuthLogout>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
