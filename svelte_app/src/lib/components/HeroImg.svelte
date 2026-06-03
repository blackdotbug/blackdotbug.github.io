<script>
	import { onMount } from 'svelte'

    const COUNT = 71;   // number of portraits: assets/me/me_1.jpg … me_71.jpg
    const DELAY = 5000; // ms each portrait shows before crossfading to the next

    // a portrait number in 1..COUNT, avoiding any already on screen
    const pick = (exclude = []) => {
        let n;
        do {
            n = Math.floor(Math.random() * COUNT) + 1;
        } while (exclude.includes(n));
        return n;
    }

    // Filled in on mount (client only). Picking random faces during init would run
    // on both the prerender and the browser, producing different markup and a
    // hydration mismatch — so we start empty and seed three distinct faces on mount.
    let slots = $state([]);
    let index = $state(0); // which stacked slot is currently visible
    let images = $derived(slots.map((n) => `assets/me/me_${n}.jpg`));

    onMount(() => {
        while (slots.length < 3) slots.push(pick(slots));
        const id = setInterval(() => {
            index = (index + 1) % slots.length;
            // Refresh the one slot that is hidden AND not mid-transition: the slot
            // after the visible one. It won't be shown again until it has a fresh
            // face, so swapping its src here is invisible and never interrupts a fade.
            const idle = (index + 1) % slots.length;
            slots[idle] = pick(slots);
        }, DELAY);
        return () => clearInterval(id); // executed when component is destroyed
    })
</script>
<div id="frame" class="relative width-full height-full min-h-[650px] max-w-[650px] overflow-clip m-auto">
    {#each images as image, i}
        <img 
            class:current-img={index === i}
            class="absolute top-0 left-0 bottom-0 right-0 m-auto opacity-0 me" 
            src={image} 
            alt="me, randomly chosen"
        >        
    {/each}
    <img class="absolute top-0 left-0 bottom-0 right-0 m-auto" src="assets/frame_b.png" alt="ornate gold frame">
</div>

<style>
    img.me {
		transition: opacity 500ms ease-in-out;
    }
    .current-img {
		opacity: 1;
	}
</style>