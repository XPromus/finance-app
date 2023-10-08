<script lang="ts">
    export let placeholder: string = "";
    export let value: string = "";
</script>

<input bind:value={value} class="border border-black rounded px-1" type="text" name="" id="" placeholder={placeholder}>