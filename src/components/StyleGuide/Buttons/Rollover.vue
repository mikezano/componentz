<template lang="pug">
.good
	.rollover
		.rollover__container
			.rollover__main GOOD
			.rollover__sub 
				| 💚
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Rollover extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';

@mixin rollover($size, $backgroundColor, $textColor){
	$selector: rollover;
	.rollover{
		width: 2 * $size;
		height:$size;
		overflow:hidden;
		color:$textColor;
		text-align:center;
		&__container{
			background-color:$backgroundColor;
			transition: all .5s ease-in-out;
		}
		&:hover{
			.rollover__container{
				margin-top: -1 * $size;
				cursor:pointer;
			}
		}
		&__main{
			height:$size;
			line-height:$size;
			font-size: $size/2;
		}
		&__sub{
			height:$size;
			line-height:$size;
			font-size: $size/3;
		}
	}
}//rollover end
.good{ @include rollover(50px, $bs_blue, white);}
</style>