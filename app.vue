<template>
  <div>
    {{ result }}
  </div>
</template>
<script lang="ts" setup>
const result = await useFetch('/api/test');
</script>
