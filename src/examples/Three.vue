<template>
<div class="container">
	<div class="overlay" v-if="showOverlay">
	</div>

	<div class="ipsum">
		<input type="text" placeholder="Enter name"/>
		<button @click="showOverlay= !showOverlay">Save</button> 
	</div>

	<!-- 
		<img src="./../assets/peanut-butter-jelly-time.gif" height="300" width="300" />
	-->

</div>
</template>


<style scoped>
.overlay {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: 10px;
	background-color: black;
	opacity: 0.5;
}
img {
	position: absolute;
	left: 50%;
	margin-left: -150px;
	z-index: 2;
}

.ipsum {
	font-family: 'Arial';
	display: flex;
	height: 40px;
	justify-content: center;
	margin-top: 100px;
}
body {
	background-color: #3b5998;
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
export default class Three extends Vue {
	public showOverlay: boolean = false;
}
</script>
