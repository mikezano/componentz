<template>
<div class="container">
	<div class="red">
	Red
	<div class="green">Green</div>
	<div class="blue">Blue</div>
	</div>
</div>
</template>

<style scoped>
.green {
	color: green;
}

/*
.blue{color:blue;}
.red .blue{color:red;}
*/

div {
	font-family: 'Sigmar One';
	font-size: 80px;
	margin: 0;
	padding: 0;
	line-height: 80px;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class One extends Vue {}
</script>
