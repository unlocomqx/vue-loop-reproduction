<template>
  <div id="app">
    Hello
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class App extends Vue {
}
</script>

<style lang="scss">
  body {
    background-color: #efefef;
  }

  #app {
    font-family: Helvetica;
    text-align: center;
    font-size: 30px;
    color: #26a720;
  }
</style>
