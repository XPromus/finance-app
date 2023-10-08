<script lang="ts">
    export let value: Date;
    export let text: string;
</script>

<div class="flex flex-row space-x-2 border border-black rounded px-1 bg-white">
    {text}
    <input bind:value={value} type="date" name="" id="">
</div>
