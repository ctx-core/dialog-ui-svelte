import type { SvelteComponent } from 'svelte'
export class CloseDialogHandle extends SvelteComponent<{
	tabindex?:string
}, {
	click:MouseEvent
}> {}
