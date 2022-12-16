<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	/** @type {number} */
	export let status;

	/** @type {Error & {frame?: string} & {loc?: object}} */
	export let error;
</script>
  
<section class="section">
    <div class="container">
        {#if status == 404} <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
            <div class="has-text-centered">
                <p class="is-size-1 is-family-secondary my-4">Oops! That is a 404.</p>
                <p>{error.message}</p>
                <p class="my-2">
                    It looks like the page you are looking for does not exist. Please use the links below.
                </p>
            </div>
        {:else}
            <p class="is-size-1">
                {error.message} {status}
            </p>
        {/if}
        
        <div class="py-4 has-text-centered">
            <a href="/" class="button is-warning is-rounded">Take me home</a>
        </div>
    </div>
</section>