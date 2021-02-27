<template>
  <div id="app">
    <i18n>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </i18n>
  </div>
</template>

<script>
import createI18nComponent from './i18n/createI18nComponent';
import areanJsonFile from './lang/arena';
import commonJsonFile from './lang/common';
import greetingsJsonFile from './lang/greetings';
import userJsonFile from './lang/user';

export default {
  components: {
    i18n: createI18nComponent(
      areanJsonFile,
      commonJsonFile,
      greetingsJsonFile,
      userJsonFile
    )
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
