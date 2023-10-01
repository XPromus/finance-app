<script lang="ts">
    import { goto } from "$app/navigation";
    import NavBarButton from "./NavBarButton.svelte";

    const navigateToPage = (url: string) => {
        goto(url);
    }

</script>

<div class="w-screen sticky top-0 left-0 flex flex-row space-x-2">
    <NavBarButton text={"Übersicht"} func={() => navigateToPage("overview")} />
</div>