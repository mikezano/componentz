<template lang="pug">
  h1 Test Page {{message}}
</template>

<script lang="ts">
// import routes from '@/models/routes';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
  public message: string = 'Hi';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
