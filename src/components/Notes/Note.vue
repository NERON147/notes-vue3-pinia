<template>

    <div class="card mb-4">

        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>
                        {{ charLeng }} characters
                    </small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <router-link class="card-footer-item" :to="`/open/${note.id}`">
                Open
            </router-link>
            <a class="card-footer-item" @click.prevent="dellNote">Delete</a>
        </footer>
    </div>

</template>

<script setup>
import { computed } from 'vue'


const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['dellNote'])

const charLeng = computed(() => {
    return props.note.content.length
})

const dellNote = () => {
    emit('dellNote')
}

</script>

<style>

</style>