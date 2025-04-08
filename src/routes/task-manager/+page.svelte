<script>
	let count = 0;

	//reactive statement
	//executes whenever dependancy is changed, in this case variable count
	$: {
		if (count > 10) {
			console.log('I am winner, now that it is ' + count);
		}
	}

	//reactive declaration
	$: doubled = count * 2;
</script>

<div class="text-white">
	<div>
		I am a task manager page - {count}
	</div>
	<div>Doubled value: {doubled}</div>
	<button
		on:click={() => {
			count++;
		}}> Increment
    </button>
</div>
