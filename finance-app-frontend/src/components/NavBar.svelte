<script lang="ts">
    import { text } from "@sveltejs/kit";
    import NavBarButton from "./NavBarButton.svelte";
</script>

<div class="w-screen bg-slate-500 py-5 sticky top-0 left-0 flex flex-row space-x-2">
    <NavBarButton text={"Übersicht"} func={() => {console.log("Test")}} />
</div>