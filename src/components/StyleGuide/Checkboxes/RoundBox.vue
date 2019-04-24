<template lang="pug">
.checkbox-group
	.first.checkbox
		input#first.checkbox__button(type='radio' name='rounded', value='first')
		label.checkbox__label(for='one') First
	.second.checkbox
		input#second.checkbox__button(type='radio' name='rounded', value='second')
		label.checkbox__label(for='two') Second
	.third.checkbox
		input#third.checkbox__button(type='radio' name='rounded', value='third')
		label.checkbox__label(for='three') Third
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'RoundBox' })
export default class RoundBox extends Vue {}
</script>

<style lang="scss" scoped>
@mixin checkbox-group($scale: 1) {
	.checkbox-group {
		display: flex;
		transform: scale($scale);
	}
} // checkbox-group end

@include checkbox-group(1);
</style>