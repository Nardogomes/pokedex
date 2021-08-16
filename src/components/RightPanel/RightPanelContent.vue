<template>
	<form class="search">
		<label for="search" class="search__label">
			<h3 class="search__label--text">E.g.: Charizard</h3>
			<input id="search" type="text" class="search__input" />
		</label>

		<button class="search__button" @clich.prevent>Search</button>
	</form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
