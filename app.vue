<template>
    <main>
        <h1>RNA Central: Postgres Nuxt Example</h1>
        <p>
            RNA Central is a database of non-coding RNA sequences that provides a single access point to a
            comprehensive and up-to-date set of ncRNA sequences provided by all participating databases.
        </p>
        <p>This page is an example of how to utilize a Postgres pool with <a href="https://www.nuxt.com/" target="_blank">Nuxt</a>, as a <a href="https://nitro.unjs.io/">Nitro</a> Plugin.</p>
        <p> The library
            used is <a href="https://node-postgres.com/" target="_blank">node-postgres</a>.</p>
        <hr>
        <Transition>
            <div v-if="pending && status === 'idle'">
                <button @click="execute()">Click Here to Fetch a List of RNA Central Databases</button>
            </div>
            <div v-else-if="pending">
                Please wait...
            </div>
            <div v-else>
                <div v-if="error">
                    <p>Error: {{ error }}</p>
                </div>
                <div v-else class="rows">
                    <RNADatabaseRow v-for="row in rows" :key="row.id" :row/>
                </div>
            </div>
        </Transition>
    </main>
</template>
<script lang="ts" setup>

import type { Ref } from "vue"
import type { RowInterface } from "~/types"
import RNADatabaseRow from "~/components/RNA/RNADatabaseRow.vue"

const {data, error, pending, execute, status} = await useLazyFetch<{ rows: RowInterface[] }>("/api/test", {server: false, immediate:false})
const rows: Ref<RowInterface[]> = computed(() => data.value?.rows || [])
</script>
<style scoped>
main {
    max-width: calc(100% - 2rem);
    margin: 0 auto;
    width: 720px;
}
.rows {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
}

.v-enter-active, .v-leave-active {
    transition: all 0.35s;
    max-height: 2rem;
}

.v-enter, .v-leave-to {
    opacity: 0;
    transform: scaleY(0);
    max-height: 0;
}

</style>
