<template>
<div class="container">
	<h1>H1</h1>
	<h2>H2</h2>
</div>
</template>


<style scoped>
/*...in one file */
h1 {
	font-family: 'Arial';
	font-size: 100px;
}

/*...and in another */
h2 {
	font-family: 'Arial';
	font-size: 80px;
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
export default class Two extends Vue {}
</script>
