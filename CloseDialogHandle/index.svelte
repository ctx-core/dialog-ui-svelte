<script>
import { createEventDispatcher } from 'svelte'
export let tabindex = '0'
const dispatch = createEventDispatcher()
</script>

<a
	href=""
	class="close CloseDialogHandle {$$props.class||''}"
	tabindex="{tabindex || '0'}"
	on:click|preventDefault={$=>dispatch(/** @type {any} */'click', $)}
><slot>&#10006;</slot></a>

<style lang="scss">
:global(.CloseDialogHandle) {
	text-decoration: none;
}
</style>
