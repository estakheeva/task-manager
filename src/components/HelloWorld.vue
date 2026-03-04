<template>
  <h1>{{ msg }}</h1>
</template>
 
<script setup>
defineProps({
  msg: String
})
</script>

<style scoped>
h1 {
  color: teal;
  text-align: center;
  margin-top: 50px;
}
</style>