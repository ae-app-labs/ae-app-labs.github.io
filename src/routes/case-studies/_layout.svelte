<script>
    export let segment;
</script>

<div class="primary-bg">
    {#if segment}
        <div class="container">
            <nav class="breadcrumb is-right is-subtle-link" aria-label="breadcrumbs">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/case-studies">Case Studies</a></li>
                <li class="is-active"><span class="pl-2">{segment}</span></li>
            </ul>
            </nav>
        </div>
    {/if}
</div>

<slot/>