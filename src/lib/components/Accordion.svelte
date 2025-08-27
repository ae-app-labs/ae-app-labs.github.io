<script>
    export let title = "";
    export let id = ""
    let open = false;
    function toggle() {
        open = !open;
    }
</script>

<div class="accordion-item" id={id}>
    <button class="accordion-title button is-primary is-dark is-large" on:click={toggle} aria-expanded={open} title="Expand/Collapse Section">
        <span class="is-size-4">{title}</span>
        <span class="accordion-arrow">
            <span class="arrow-circle">
                {#if open}
                    <!-- Up Arrow SVG -->
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6 12L10 8L14 12" stroke="#eee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                {:else}
                    <!-- Down Arrow SVG -->
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6 8L10 12L14 8" stroke="#eee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                {/if}
            </span>
        </span>
    </button>
    {#if open}
        <div class="accordion-content">
            <slot />
        </div>
    {/if}
</div>

<style>
.accordion-title {
    width: 100%;
    border: none;
    padding: 1.4em 1.1em;
    cursor: pointer;
    outline: none;
    display: flex !important;
    align-items: center;
    justify-content: space-between;
}
.accordion-arrow {
    margin-left: 1em;
    display: flex;
    align-items: center;
}
.arrow-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a5046;
    border-radius: 50%;
    width: 36px;
    height: 36px;
}
.accordion-content {
    margin-top: 0px;
}
.accordion-item {
    margin-bottom: 1em;
    border-radius: 4px;
    overflow: hidden;
}
</style>