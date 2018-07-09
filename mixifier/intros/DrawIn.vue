<template lang="pug">
.draw-in
	svg.draw-in__svg
		symbol#text
			text.draw-in__ads( x="50%" y="98%" text-anchor="middle") AD&S
		use.text(xlink:href='#text')
	.draw-in__presents Presents
	.draw-in__dots
		.draw-in__dot
		.draw-in__dot
		.draw-in__dot
</template>