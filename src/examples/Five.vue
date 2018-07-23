<template>
<div class="container">
	<div class="a">A</div>
	<div class="b">B</div>
</div>
</template>


<style scoped>
.container {
	font-family: 'Arial';
	font-size: 60px;
	border: 1px solid black;
	width: 100px;
	top: 100px;
	left: 100px;
	position: absolute;
}

/*
.b{
  position:absolute;
  top:0;right:0;
}
*/
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Five extends Vue {
	public showAlert() {
		alert('clicked');
	}
}
</script>
