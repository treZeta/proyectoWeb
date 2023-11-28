export const useCounterStore = defineStore('planesStore', () => {
    const planes = ref([])
    const planesSequence = ref(0)
  
    return { plaes, planesSequence }
  })