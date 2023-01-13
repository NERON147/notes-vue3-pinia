import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {useStoreNotes} from '@/store/storeNotes.js'
import App from './App.vue'
import router from '@/router'

import './assets/main.css'

const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.mount('#app')

const storeNotes = useStoreNotes()

const notes = JSON.parse(localStorage.getItem('note'))

if(notes) {
  storeNotes.setNoteFromLC(notes)
}