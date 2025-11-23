<script setup>
import { ref, onMounted } from 'vue';
import { fetchQuotes } from '../composables/useQuotesApi';

const quotes = ref([]);
const currentPage = ref(1);
const lastPage = ref(false);
const isLoading = ref(false);

const loadQuotes = async (page) => {
  if (isLoading.value) return;
  isLoading.value = true;
  const data = await fetchQuotes(page);
  isLoading.value = false;

  if (data && data.quotes) {
    quotes.value.push(...data.quotes);
    currentPage.value = data.page;
    lastPage.value = data.last_page;
  }
};

onMounted(() => {
  loadQuotes(currentPage.value);
});

const loadNextPage = () => {
  if (!lastPage.value) {
    loadQuotes(currentPage.value + 1);
  }
};
</script>

<template>
  <div class="quotes-list">
    <h2>Quotes list</h2>

    <ul>
      <li v-for="quote in quotes" :key="quote.id" class="quote-item">
        <p class="quote-body">"{{ quote.body }}"</p>
        <p class="quote-author">— {{ quote.author }}</p>
      </li>
    </ul>

    <button @click="loadNextPage" :disabled="lastPage || isLoading">
      {{ isLoading ? 'Loading...' : 'Load more' }}
    </button>
    <p v-if="lastPage">This is the last page :)</p>
  </div>
</template>