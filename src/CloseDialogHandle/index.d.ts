import type { SvelteComponentTyped } from 'svelte'
export class CloseDialogHandle extends SvelteComponentTyped<{
	tabindex?:string
}, {
	click:MouseEvent
}> {}
