import { createRouter, createWebHistory } from 'vue-router'
import QuotesListView from '../pages/QuotesListView.vue'
import RandomQuoteView from '../pages/RandomQuoteView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quotes',
            component: QuotesListView
        },
        {
            path: '/random',
            name: 'random-quote',
            component: RandomQuoteView
        }
    ]
})

export default router