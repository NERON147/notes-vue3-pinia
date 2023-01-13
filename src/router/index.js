import { createRouter, createWebHashHistory } from 'vue-router'

import Notes from '@/views/ViewNotes.vue'
import Open from '@/views/OpenNote.vue'


const routes = [
    {
        path: '/',
        name: 'notes',
        component: Notes
    },
    {
        path: '/open/:id',
        name: 'open',
        component: Open
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router