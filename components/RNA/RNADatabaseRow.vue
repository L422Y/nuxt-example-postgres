<template>
    <div class="rna-database-row">
        <time>{{ new Date(row.timestamp).toLocaleDateString() }}</time>
        <div>
            <a :href="row.url" target="_blank">{{ row.display_name }}</a>
            {{ row.project_id ? `(${row.project_id})` : "" }}
            <span v-html="row.description"></span>
        </div>
        <div>Sequences: {{ row.num_sequences }}, Organisms: {{ row.num_organisms }}</div>
    </div>
</template>
<script lang="ts" setup>
import type { RowInterface } from "~/types"

defineProps({
    row: {
        type: Object as PropType<RowInterface>,
        required: true
    }
})
</script>
<style scoped>
.row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
