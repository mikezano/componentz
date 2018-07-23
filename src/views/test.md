# B.E.M. naming convention

---

BEM stands for Block, Elements, Modifiers and is a way of naming html components

Lets start with a _block_ named **fancy-button** that represents the foundation of a component

```Html
<div class='fancy-button'></div>
```

This component will have two _element_'s represent a piece of the component

**icon** - something nice like a font-awesome icon
**text** - description text on the button

The html structure will should look as follows

```html
<div class='fancy-button'>
	<div class='fancy-button__icon'></div>
	<div class='fancy-button__text'></div>
</div>
```

And the css will be as follows:

```css
.fancy-button {
}
.fancy-button__icon {
}
.fancy-button__text {
}
```
Notice that elements get a double underscore preceeding them
