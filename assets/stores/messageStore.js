import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', () => {
    const idStore = ref(0)
    const comments = ref([])
    const next = ref("")
    const prev = ref("")
    const q = ref("")
    const totalComments = ref(0)
    const page = ref(0)
    const activeComment = ref("")
    const subject = ref("")
    const msg = ref("")

    const maxPage = computed(() => {
        return Math.ceil(+totalComments.value / 10);
    })

    const paginate = computed(() => {
        let start = (page.value - 1) * 10 + 1;
        let end = page.value * 10;

        if (end > totalComments.value) {
            end = totalComments.value; // Ne dépasse pas le nombre total d'items
        }

        if (totalComments.value === 0) {
            start = 0
            end = 0
        }

        return `${start} - ${end}`;
    })

    return {
        idStore,
        comments,
        prev,
        next,
        q,
        totalComments,
        page,
        paginate,
        maxPage,
        activeComment,
        subject,
        msg
    }
})