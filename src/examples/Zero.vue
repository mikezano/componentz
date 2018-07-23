<template>
<div class="container">
	<div>1 Hello World</div>
	<!--
	<div class="my-element">2 Hello World</div>

	<div class="my-element my-element2">
	3 Hello World
	</div>

	<div id="my-element">4 Hello World</div>

	<div id="my-element" class="my-element">
	5 Hello World
	</div>
-->
</div>
</template>

<style scoped>
div {
	color: orange;
	font-size: 40px;
	text-align: center;
}

.my-element {
	color: green;
}

.my-element2 {
	color: blue;
}

#my-element {
	color: red;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Zero extends Vue {}
</script>
