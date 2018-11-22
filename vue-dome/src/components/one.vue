<template>
    <div>
        {{message}}
		<tree :data="data"
			@toggle="toggle($event)"
			@change="change($event)">
		</tree>
    </div>
</template>
<script>
export default {
  data() {
    return {
      message: 2222222
    }
  }
}
</script>
<style>

</style>