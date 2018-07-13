<template lang="pug">
.container
	input#tab1(type="radio" name="tabs" checked)
	label(for="tab1") Tab 1
	input#tab2(type="radio" name="tabs")
	label(for="tab2") Tab 2
	input#tab3(type="radio" name="tabs")
	label(for="tab3") Tab 3
	input#tab4(type="radio" name="tabs")
	label(for="tab4") Tab 4
	.content
		.content1
			| Content for Tab 1
		.content2
			| Content for Tab 2
		.content3
			img(src="https://tinyurl.com/y8n2spmr" width="200" height="200")
		.content4
			| Content for Tab 4
</template>