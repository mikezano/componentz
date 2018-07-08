<template lang="pug">

.four-zero-four
	.container
		h1 404
		h2 Oops, the page you're looking for does not exist.
		p
			| You may want to head back to the homepage.
			br
			| If you think something is broken, report a problem.
			br
		button.btn
			a(href='https://en.wikipedia.org/wiki/HTTP_404') RETURN HOME
		button.btn
			a(href='https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif') REPORT PROBLEM
	.bg-img
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class FourZeroFour extends Vue {}
</script>

<style lang="scss" scoped>
//https://codepen.io/des_harvey/pen/rYYvdN
.four-zero-four {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	// background-color: #000;
	// background: url(https://media.giphy.com/media/rkfSsvbT3DZvO/source.gif) no-repeat center center fixed;
	// background-size: auto;
}
 
.bg-img {
  position: absolute;
  width: 400px;
  height: 400px;
  top:0;
  background: url(https://media.giphy.com/media/rkfSsvbT3DZvO/source.gif) no-repeat center center fixed;
  background-size: auto;
  background-color: #000;
  opacity: .5;
  filter: alpha(opacity=50);
}
 
.content {
  font-family: 'Avenir-Next',Avenir,Helvetica,sans-serif;
  color: #fff;
  background-color: none;
  z-index: 2;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
 
.container{ 
	//width:300px;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	// background-color: #000;
	// background: url(https://media.giphy.com/media/rkfSsvbT3DZvO/source.gif) no-repeat center center fixed;
	// background-size: 700px;
	// filter: alpha(opacity=80);
}
 
h1 {
  //font-size: 160px;
  margin-bottom: 0;
  margin-top: 0;
  color:white;
}
 
h2 {
  margin-top: 0;
  max-width: 700px;
  font-size: 30px;
  width: 90%;
  color:white;
}
 
p {
  text-align: left;
  padding-bottom: 32px;
}
 
.btn {
  display: inline-block;
  border: 1px solid #aaa;
  border-radius: 40px;
  padding: 15px 30px;
  margin-right: 15px;
  margin-bottom: 10px;
}
.btn:hover {
  color: #e2e2e2;
  background: rgba(255, 255, 255, 0.1);
}
 
@media only screen and (max-width: 480px) {
  .btn {
	background-color: white;
	color: #444444;
	width: 100%;
  }
 
  h1 {
	font-size: 120px;
  }
}
</style>