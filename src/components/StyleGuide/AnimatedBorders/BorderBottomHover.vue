<template lang="pug">
div.flex
	.my-example.bottom-border-hover Hover Me
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ name: "BorderBottomHover" })
export default class BorderBottomHover extends Vue {}
</script>


<style lang="scss" scoped>
@import "../../../sass/colors";
$border-width: 20px;

@mixin bottom-border-hover() {
	$s: bottom-border-hover;
	&.#{$s} {
		display:inline;
		position: relative;
		
		&::before{
			content:'';
			position:absolute;
			transition: width 0.5s ease-in-out;
			width:0;
			height:100%;
		}
		&:hover::before{
			cursor:pointer;
			border-bottom:2px solid orange;
			width:100%;
		}
	}
}
.my-example{
	@include bottom-border-hover();
}
</style>