import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
        notes: [
            {
              id: 'id1',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt magni harum iure, dignissimos maxime vel dolores odio, sed deserunt praesentium aperiam beatae voluptatibus eveniet, porro cum est? Mollitia, porro.'
            },
            {
              id: 'id2',
              content: 'This is the shorter note'
            },
          ],
        }
  }, 
  actions: {
    addNote(content) {
         let DateId = new Date().getTime()
  let id = DateId.toString()

  let noteContent = {
    id,
    content
  }

  this.notes.unshift(noteContent)
  localStorage.setItem('note', JSON.stringify(this.notes))
    },
    dellNote (index){
        this.notes.splice(index, 1)
        localStorage.setItem('note', JSON.stringify(this.notes))
      },
    setNoteFromLC(note){
        this.notes = note
    }
  },
  getters: {
    GET_NOTES: (state) => (id) => {
        return state.notes.find(note => note.id == id)
      }
  }
})