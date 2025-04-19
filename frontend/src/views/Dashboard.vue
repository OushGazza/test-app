<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = ref('')
const notice = ref('')
const newMessage = ref('')
const newNotice = ref('')
const loading = ref(false)
const success = ref(false)

onMounted(async () => {
  const res = await axios.get('http://localhost:3001/api/data')
  message.value = res.data.message
  notice.value = res.data.notice
})

// Submit both message and notice
const updateAll = async () => {
  loading.value = true
  success.value = false
  try {
    const res = await axios.post('http://localhost:3001/api/data', {
      message: newMessage.value,
      notice: newNotice.value,
    })
    message.value = res.data.newData.message
    notice.value = res.data.newData.notice
    newMessage.value = ''
    newNotice.value = ''
    success.value = true
  } catch (error) {
    console.error('Failed to update:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container fluid class="d-flex flex-column align-center justify-start" style="min-height: 100vh; padding-top: 80px; background-color: #f9f9f9;">
    <v-sheet
      class="pa-6"
      elevation="10"
      max-width="900"
      width="100%"
      rounded
      color="white"
    >
      <v-card-title class="text-h5 text-center mb-6">
        <v-icon left color="primary">mdi-pencil</v-icon>
        Update Homepage Content
      </v-card-title>

      <v-form>
        <v-text-field
          v-model="newMessage"
          label="New Message"
          variant="outlined"
          prepend-icon="mdi-message-text"
          clearable
        />
        <v-text-field
          v-model="newNotice"
          label="New Notice"
          variant="outlined"
          prepend-icon="mdi-bell-alert"
          clearable
          class="mt-4"
        />

        <v-btn
          @click="updateAll"
          color="primary"
          block
          class="mt-4"
          :loading="loading"
          :disabled="!newMessage && !newNotice"
        >
          Update Message & Notice
        </v-btn>
      </v-form>

      <v-alert
        v-if="success"
        type="success"
        class="mt-6"
        border="start"
        color="green-lighten-3"
        icon="mdi-check-circle"
      >
        Successfully updated!
      </v-alert>

      <v-divider class="my-6" />

      <div class="text-center">
        <v-icon color="blue">mdi-information</v-icon>
        <p class="text-subtitle-1 mt-2">Current Message:</p>
        <p class="text-h6 font-weight-bold">{{ message }}</p>

        <v-divider class="my-4" />

        <v-icon color="orange">mdi-bell</v-icon>
        <p class="text-subtitle-1 mt-2">Current Notice:</p>
        <p class="text-h6 font-weight-bold">{{ notice }}</p>
      </div>
    </v-sheet>
  </v-container>
</template>



