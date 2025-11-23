<script setup>
import { ref, onMounted } from 'vue';
import { fetchRandomQuote } from '../composables/useQuotesApi';

const randomQuote = ref(null);
const isLoading = ref(false);

const loadRandomQuote = async () => {
  isLoading.value = true;
  randomQuote.value = null;

  const quote = await fetchRandomQuote();

  if (quote) {
    randomQuote.value = quote;
  }
  isLoading.value = false;
};

onMounted(() => {
  loadRandomQuote();
});
</script>

<template>
  <div class="random-quote-page">
    <h2>Random Quote</h2>

    <button @click="loadRandomQuote" :disabled="isLoading">
      {{ isLoading ? 'Loading...' : 'Reload' }}
    </button>
    <div style="display: flex; margin-top: 24px">
      <div v-if="randomQuote" class="quote-display">
        <p class="quote-body">"{{ randomQuote.body }}"</p>
        <p class="quote-author">— {{ randomQuote.author }}</p>
      </div>
    </div>

  </div>
</template>