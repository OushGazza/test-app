<<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = ref('')
const notice = ref('')
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/data')
    message.value = res.data.message
    notice.value = res.data.notice
  } catch (error) {
    console.error('Failed to load homepage data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <v-container
    fluid
    class="d-flex flex-column align-center justify-start"
    style="min-height: 100vh; padding-top: 80px; background-color: #f5f7fa;"
  >
    <v-sheet
      class="pa-6"
      elevation="10"
      max-width="3440"
      width="100%"
      color="white"
      rounded
    >
	
      <v-card-title class="text-h5 text-center mb-10">
        <v-icon left color="primary">mdi-home</v-icon>
        Welcome to the Home Page
      </v-card-title>

      <!-- Notice Section -->
      <v-alert
        v-if="notice && !loading"
        type="info"
        border="start"
        color="blue-lighten-3"
        class="mb-10"
        icon="mdi-bell-alert-outline"
      >
        {{ notice }}
      </v-alert>

      <!-- Message Section -->
      <div v-if="!loading" class="text-center">
        <v-icon color="green" size="28">mdi-message-text</v-icon>
        <p class="text-subtitle-1 mt-2">Message of the Day</p>
        <p class="text-h6 font-weight-bold">{{ message }}</p>
      </div>

      <!-- Loading State -->
      <div v-else class="d-flex justify-center mt-10">
        <v-progress-circular indeterminate size="32" color="primary" />
      </div>
    </v-sheet>
	<v-img
  src="https://static-cdn.jtvnw.net/jtv_user_pictures/41fb3e04-e9eb-4055-8fe1-0c71ad6e5197-profile_image-300x300.png"
  max-width="1440"
  width="100%"
  class="mt-6 rounded elevation-6"
  aspect-ratio="16/9"
  cover
></v-img>
  </v-container>
</template>


