<template>
  <UDropdownMenu :items="items">
    <UButton icon="i-lucide-ellipsis" color="neutral" variant="link" />
  </UDropdownMenu>
</template>
<script setup lang="ts">
defineProps<{ items: Array<any> }>();
</script>
