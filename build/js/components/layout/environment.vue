<template>
	<div class="application--environment">
		<div class="application--environment-version">{{version}}</div>
		<div class="application--environment-name">{{name}}</div>
	</div>
</template>

<script>
export default {
	data: function() {
    return {
      version: Myra.environment.version,
      name: Myra.environment.name
    };
  }
}
</script>