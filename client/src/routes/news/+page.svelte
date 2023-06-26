<script>
	import Broadsheet from './components/broadsheet.svelte';

	const NAV_BAR_LABELS = [
		'Terrasphere',
		'Pew-Pew States',
		'Warpigs',
		'Kashopolis',
		'Debtromancy',
		'Orkthink',
		'Druglords',
		'Ballbosses',
		'Kulture'
	];
</script>

<div class="container">
	<div class="wrapper">
		<div class="header">
			<div class="left-container">
				<div id="menu">☰</div>
				<div id="search">🔍</div>
			</div>
			<div class="c w">
				<div class="regions f c">
					<div>P.P.S.</div>
					<div>TERRA</div>
					<div>KANADUR</div>
					<div>ORKSAÑOL</div>
				</div>
				<div class="title">The New Ork Times</div>
			</div>
		</div>
		<div class="nav">
			{#each NAV_BAR_LABELS as label}
			<div>{label}</div>
			{/each}
		</div>
		<div class="content">
			<Broadsheet />
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Chomksy';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/Chomsky.woff2') format('woff2'), url('/fonts/Chomsky.woff') format('woff');
	}
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/OpenSans-Regular.ttf') format('truetype');
	}

	.left-container {
		width: 3rem;
		filter: grayscale(1);
	}
	* {
		box-sizing: border-box;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 1000px;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 0 2rem; */
		height: 10vh;
		width: 100%;
		border-bottom: 1px solid rgb(220, 220, 220);
	}

	.title {
		font-size: 3.8rem;
		font-weight: 500;
		text-align: center;
		font-family: Chomksy;
		letter-spacing: -2px;
	}

	.regions {
		font-size: 0.6rem;
		font-family: 'Open Sans';
	}
	.regions > * {
		margin: -1.2rem 0.5rem 0rem;
		cursor: pointer;
	}
	.regions > *:hover {
		font-weight: bold;
	}

	.nav {
		width: 100%;
		/* height: 2rem; */
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 4px double black;
	}

	.nav > * {
		margin: 0.9rem 0.5rem 0.5rem;
		font-weight: 500;
		font-family: 'Open Sans';
		cursor: pointer;
	}
	.nav > *:hover {
		font-weight: bold;
	}

	.content {
		display: flex;
		width: 100%;
	}

	.f {
		display: flex;
	}

	.c {
		align-items: center;
		justify-content: center;
	}

	.w {
		width: 100%;
	}
</style>
