<template>
  <div>
    <div class="left-anim"></div>
    <div class="right-anim"></div>
    <div class="container">
        <div class="content">
          <img src="./assets/img/banner.jpg" alt="Logo">
          <ul class="content__list">
            <li v-for="item in items" :key="item.id">
                <span class="content__song">{{ item.song }}</span>
                <button @click="incrementLikes(item)" class="content__like">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z"/>
                    </svg>
                </button>
                <span class="content__count">{{ item.likes }}</span>
            </li>
            
          </ul>
        </div>
      </div>
  </div>

</template>

<script>
import { query, collection, getDocs, orderBy, updateDoc, doc } from "firebase/firestore"
import { db } from './firebase.js'

export default (await import('vue')).defineComponent({
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    async getItems(){
      const q = query(collection(db, 'songs'), orderBy('likes', 'desc'))
      const querySnap = await getDocs(q);

      querySnap.forEach((doc) => {
        this.items.push({id: doc.id, ...doc.data()})
      })
    },
    async incrementLikes(item) {
      const docRef = doc(db, 'songs', item.id)
      await updateDoc(docRef, {
        likes: item.likes + 1
      })
      item.likes += 1
      this.items.sort((a,b) => b.likes - a.likes)
    }
  },
})

</script>



