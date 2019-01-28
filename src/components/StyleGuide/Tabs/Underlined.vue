<template lang="pug">
.container
	.tabs
		input.tabs__tab#tab1(type="radio" name="tabs" checked)
		label.tabs__label(for="tab1") Tab 1
		input.tabs__tab#tab2(type="radio" name="tabs")
		label.tabs__label(for="tab2") Tab 2
		input.tabs__tab#tab3(type="radio" name="tabs")
		label.tabs__label(for="tab3") Tab 3
		input.tabs__tab#tab4(type="radio" name="tabs")
		label.tabs__label(for="tab4") Tab 4
		.tabs__content
			.content1
				| Content for Tab 1
			.content2
				| Content for Tab 2
			.content3
				img(src="https://tinyurl.com/y8n2spmr" width="200" height="200")
			.content4
				| Content for Tab 4
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Underlined' })
export default class Underlined extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';

.container {
	//display: flex;
	flex-direction: row;
}

@mixin underlined_tabs($tabCount: 4) {
	.tabs {
		&__content > div {
			display: none;
			font-size: 14px;
			padding: 10px;
			height: 300px;
			border-bottom: 1px solid lightgray;
		}
		&__tab {
			display: none;
		}
		&__label {
			display: inline;
			padding: 5px 10px;
			text-align: center;
			margin: 0 2px;
			border-bottom: 4px solid #bebebe;
			transition: all 0.2s ease-out;
		}
		&__label:hover {
			cursor: pointer;
			border-bottom: 4px solid $vue_green;
		}
		&__tab:checked + label {
			border-bottom: 4px solid $vue_green;
		}

		@for $i from 1 through $tabCount {
			#tab#{$i}:checked ~ .tabs__content .content#{$i} {
				display: block;
			}
		}
	}
} //underlined_tabs end

@include underlined_tabs();
</style>