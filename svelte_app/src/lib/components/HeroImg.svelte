<script>
	import {onMount, tick} from 'svelte'

    let index = $state(0);
    let interval = $state();

    const start = () => interval = setInterval(() => index = (index + 1) % 3, 5000)
    const stop = () => clearInterval(interval)
    const pickAnother = (num1) => {
        let num2 = num1;
        while (num2 === num1) {
            num2 = Math.floor(Math.random() * (71 - 1 + 1)) + 1;
        }
        return num2;
    }
    onMount(() => {
        start()
        return () => stop() //executed when component is destroyed
    })
    let prev = $state(Math.floor(Math.random() * (71 - 1 + 1)) + 1);
    let curr = $derived(pickAnother(prev));
    let next = $derived(pickAnother(curr));
    let images = $derived([
        `assets/me/me_${prev}.jpg`,
        `assets/me/me_${curr}.jpg`,
        `assets/me/me_${next}.jpg`
    ]);
    $effect(() => {
        if (index === 1) {
            tick().then(() => setTimeout(() => prev = pickAnother(next), 7500))
        }
    });

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