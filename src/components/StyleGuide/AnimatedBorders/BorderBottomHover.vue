<template lang="pug">
div.flex
	.my-example.bottom-border-hover Hover Me
	.my-example2.bottom-border-hover Hover Me 2
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ name: "BorderBottomHover" })
export default class BorderBottomHover extends Vue {}
</script>


<style lang="scss" scoped>
@import "../../../sass/colors";


@mixin bottom-border-hover($color : orange, $underline-size: 4px) {
	$s: bottom-border-hover;
	&.#{$s} {
		display:inline-block;
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
			border-bottom: $underline-size solid $color;
			width:100%;
		}
	}
}
.my-example{
	@include bottom-border-hover();
}

.my-example2{
	@include bottom-border-hover(blue, 8px);
}
</style>