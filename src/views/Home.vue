<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ i18n.i18n.HEADER }}</h1>
    <h2>{{ i18n.i18n.GREETING }}</h2>
    <h3>{{ i18n.i18n.MY_ARENA }}</h3>
    <h1>USERNAME: {{ name }}</h1>
    <h2>{{ i18n.i18n.GREETING_USER({ username: name }) }}</h2>
    <button @click="onClick">CLICK ME</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    console.log('home i18n', this.i18n);
  },
  inject: ['i18n'],
  data: () => ({
    name: 'eddie'
  }),
  methods: {
    onClick() {
      this.name = this.name === 'eddie' ? 'sam' : 'eddie';
    }
  }
};
</script>
