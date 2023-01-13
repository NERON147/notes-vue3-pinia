<template>

  <div class="notes">

    <div class="card has-background-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea v-model="note.newNote" class="textarea" placeholder="Add new note!"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button @click="addNote" class="button is-link has-background-success" :disabled="!note.newNote">
            Add note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="(note, index) in storeNotes.notes"
      :key="note.id"
      :note=note
      @dellNote=storeNotes.dellNote(index)
    />

  </div>

</template>
 
<script setup>
import { reactive } from 'vue';
import { useStoreNotes } from '@/store/storeNotes.js'
import Note from '@/components/Notes/Note.vue'

const storeNotes = useStoreNotes()

const note = reactive({
  newNote: ''
})

const addNote = () => {

  storeNotes.addNote(note.newNote)

  note.newNote = ''
}


</script>
 
<style>

</style>