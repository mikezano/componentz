<template>
<div class="container">
	<button @click="showAlert()">Click Me!</button>
	<h1>A Very Fancy Font</h1>
</div>
</template>


<style scoped>
h1 {
	font-family: 'Tangerine';
	font-size: 60px;
	position: absolute;
	top: 100px;
	left: 0;
	padding: 50px;
	margin: 0;
}

.container {
	display: flex;
	margin-top: 100px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Four extends Vue {
	public showAlert() {
		alert('clicked');
	}
}
</script>
