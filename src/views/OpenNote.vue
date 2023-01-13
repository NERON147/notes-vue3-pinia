<template>

  <div class="open-wraper">
    <div class="open-header">
      <router-link :to="'/'">Главная</router-link> <span>/ </span>
    </div>

    <div class="open-note">
      <div class="open-descr">
        {{ note.notes.content }}
      </div>
    </div>
  </div>

</template>

<script setup>
import { reactive, onBeforeMount } from 'vue';
import { useStoreNotes } from '@/store/storeNotes.js'
import { useRouter } from 'vue-router';

const route = useRouter()
const storeNotes = useStoreNotes()


const note = reactive({
  notes: null
})


note.notes = storeNotes.GET_NOTES(route.currentRoute.value.params.id)


</script>

<style>

</style>