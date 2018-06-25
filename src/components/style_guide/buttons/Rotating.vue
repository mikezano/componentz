<template lang="pug">
.rotating-btn
	.rotating-btn__container
		.rotating-btn__main
			span Main
			| 😊
		.rotating-btn__alt
			span  Alt
			| 😮
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Rotating extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';
@mixin rotating-btn($width, $height, $color, $fontColor, $fontSize){

	.rotating-btn{
		width:$width;
		height:$height;
		cursor:pointer;
		perspective:500px;
		color:$fontColor;
	}
	.rotating-btn .rotating-btn__container{
		height:100%;
		transform-style:preserve-3d;
		transition:0.25s;
		position:relative;
		border:1px solid blue;
		font-size: $fontSize;
	}
	.rotating-btn__container:hover{
		transform:rotateX(-90deg);
	}
	.rotating-btn__main, .rotating-btn__alt{
		width:100%;
		position:absolute;
		box-sizing:border-box;
		border: ($height * .05) solid $color;
		line-height: ($height * .95);
		text-align:center;
		background-color:lighten($color, 20%);
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.rotating-btn__main{
		transform: translate3d(0, 0, $height/2);
	}
	.rotating-btn__alt{
		transform: rotateX(90deg) translate3d(0, 0, $height/2);
	}
}//rotate_down end

$primary: map-get($colors, primary);
@include rotating-btn(200px, 60px, $primary, white, 1rem);

</style>