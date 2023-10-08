<script lang="ts">
    import { goto } from "$app/navigation";
    import NavBarButton from "./NavBarButton.svelte";

    const navigateToPage = (url: string) => {
        goto(url);
    }

</script>

<div class="w-screen sticky top-0 left-0 flex flex-row space-x-2 px-2 py-1 bg-green-500">
    <NavBarButton text={"Overview"} func={() => navigateToPage("overview")} />
    <NavBarButton text={"Preview"} func={() => {navigateToPage("preview")}} />
    <NavBarButton text={"Settings"} func={() => {navigateToPage("settings")}} />
    <NavBarButton text={"Admin Backend"} func={() => {window.open("http://localhost:8089/_/")}}/>
</div>