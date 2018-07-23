<template lang="pug">

.container
	vue-markdown(:source="markdown") 
</template>

<script lang="ts">
const bem = require.context('!!raw-loader!../../src/views/', true, /.*.md/);

import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Bem' })
export default class Bem extends Vue {
	public markdown: any = '';
	public mounted() {
		this.markdown = bem.keys().map(bem)[0];
	}
}
</script>

<style lang="scss" scoped>
@import '../sass/global';
</style>
