<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    code: String,
    endpoint: { type: String, default: '' },
    copy:{type:Boolean, default:true }
})

const c_name = ref('Copy')



const codeRef = ref(null)
const { $highlight } = useNuxtApp()

onMounted(() => {
    $highlight(codeRef.value)
})

const copyCode = () => {
    navigator.clipboard.writeText(props.code)
    c_name.value = 'Copied'
    setTimeout(() => {
        c_name.value = 'Copy'
    }, 5000);
}
</script>


<template>
    <div class="relative bg-[#0d1117] text-white border border-primary/40 rounded-lg overflow-x-auto">
        <div class="flex justify-between p-2 px-4 bg-primary/15 items-center">
            <span class="text-base font-bold font-mono">{{ endpoint }}</span>
            <div v-if="copy == true" class="space-x-2">
                <button @click="copyCode" class="btn btn-primary btn-outline text-gray-300 hover:text-white">📋 {{
                    c_name }}</button>
                <!-- <button class="text-sm text-gray-300 hover:text-white">✏️ Edit</button> -->
            </div>
        </div>
        <pre><code ref="codeRef" class="hljs">{{ code }}</code></pre>
    </div>
</template>

<style scoped>
.hljs {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    white-space: pre;
}
</style>