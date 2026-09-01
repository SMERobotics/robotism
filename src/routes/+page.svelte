<script lang="ts">
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
</script>

<svelte:head>
	<title>20181 Lancers</title>
</svelte:head>

<main class="relative h-dvh w-full overflow-hidden">
	<img
		class="absolute inset-0 block h-full max-h-dvh w-full object-cover object-[center_90%]"
		src="/robot_2560x1440.jpg"
		alt="Shawnee Mission East 26855 Cavalry FTC 2025-2026 DECODE presented by RTX competition robot Tesseract"
	/>

	<section
		class="absolute top-[calc(50%+0rem)] right-[clamp(1.5rem,5vw,5rem)] left-[clamp(1.5rem,5vw,5rem)] z-10 flex max-w-xl -translate-y-1/2 flex-col gap-3 text-white"
		aria-labelledby="hero-title"
	>
		<h1 id="hero-title" class="text-4xl font-bold tracking-tighter sm:text-6xl">20181 LANCERS</h1>

		<p class="max-w-lg text-sm leading-6 text-white/90 sm:text-base">
			proudly innovating for Shawnee Mission East since 2021.
		</p>

		<div class="mt-2 flex flex-col gap-3 sm:flex-row">
			<button
				class="relative inline-flex cursor-pointer items-center justify-center overflow-hidden border border-white bg-white px-4 py-3 text-xs tracking-tighter text-black after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
				type="button"
			>
				watch the reveal
			</button>
			<button
				class="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden border border-transparent px-4 py-3 text-xs tracking-tighter text-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
				type="button"
			>
				meet the team
				<ChevronRight
					class="ml-2 size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
					strokeWidth={2}
					aria-hidden="true"
				/>
			</button>
		</div>
	</section>
</main>

<main class="relative h-dvh w-full overflow-hidden bg-black">
	<div class="mx-auto max-w-[1600px]">
		<section class="py-64 z-10">
			<div class="text-7xl leading-none font-bold tracking-tighter text-white">
				<h1><span class="font-normal text-white/20">/////</span>TOGETHER</h1>
				<h1><span class="font-normal text-white/20">\\\\</span>WE</h1>
				<h1><span class="font-normal text-white/20">///</span>INNOVATE</h1>
			</div>
			<p class="mt-5 ml-30 text-white/90">
				FTC team 20181 is one friend group from Prairie Village who innovates<br />
				because a future where the next generation is empowered to create is<br />
				more exciting than one where we are not.
			</p>
			<button
				class="relative mt-8 ml-30 inline-flex cursor-pointer items-center justify-center overflow-hidden border border-white bg-white px-4 py-3 text-xs tracking-tighter text-black after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
				type="button"
			>
				see the results
			</button>
		</section>
		<img
			class="absolute top-46 right-[calc(120px+max(0px,calc((100vw-1600px)/2)))] w-[50vw] max-w-[800px] hidden xl:block"
			src="/team_3000x2000.jpg"
			alt="FTC team 20181 standing together with their robot"
			width="3000"
			height="2000"
			loading="lazy"
			decoding="async"
		/>
	</div>
</main>
