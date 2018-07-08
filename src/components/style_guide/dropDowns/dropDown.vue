
<template lang="pug">
.dd
	h2.dd-title Components
	ul.dd-menu
		li.dd-menu-item
			a(href="http://google.com") Google
		li.dd-menu-item
			a(href="http://duckduckgo.com") Duck Duck Go
		li.dd-menu-item
			a(href="http://bing.com") Bing
		li.dd-menu-item
			a(href="http://yahoo.com") Yahoo
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class DropDown extends Vue {}
</script>

<!-- https://codepen.io/kkrueger/pen/qfoLa -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../sass/colors';

@mixin drop_down_default($width:200px, $color:green){

	.dd{
		position:relative;
		.dd-title{
			color:white;
			background-color: $color;
			padding:8px 4px;
			width: $width;
			margin:0;
			//position:relative;
			font-size:16px;
			text-transform: uppercase;

			&:before{
				content: "";
				display: block;
				border-top: 5px solid $color;
				border-left: ($width / 2) solid transparent;
				border-right: ($width / 2) solid transparent;
				position: absolute;
				top: 100%;
				z-index: 101;
			}
		}
		.dd-menu{
			padding:0;
			border-left:1px solid green;
			border-right:1px solid green;
			border-bottom:1px solid green;
			margin:0;
			position: absolute;
			box-sizing:border-box;
			z-index:99;
			width:100%;
			background: hsla(0, 0%, 92%, .98);

		}
		.dd-menu-item{
			height:30px;
			overflow:hidden;
			line-height:30px;
			cursor:pointer;
			opacity:1;

			transition: 
				0.4s height cubic-bezier(.73,.32,.34,1.5),
				0.2s padding cubic-bezier(.73,.32,.34,1.5),
				0.2s margin cubic-bezier(.73,.32,.34,1.5),
				0.2s background-color,
				0.2s 0.2s opacity;

			&:hover{background: rgba(0,0,0,0.1);}
			&:first-child{margin-top:10px;}
			&:last-child{margin-bottom:10px;}
		}
	}

	.dd:not(:hover) {

		.dd-menu {
			border:none;
			background-color:hsla(0,0,85%,1);
			.dd-menu-item{
				opacity: 0;
				height:0;
				padding:0;
				margin: 0;
				color: rgba(25,25,25,0);
				transition: 
					0.5s 0.1s height,
					0.5s 0.1s padding,
					0.5s 0.1s margin,
					0.3s color;
				z-index: 99;
			}
		}
	}
}//drop_down end

@include drop_down_default(200px, $vue_green);
</style>
