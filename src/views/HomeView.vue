<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'

const route = useRoute()
const demandeId = computed(() => route.query.demandeId)

const showQrInfo = ref(false)

onMounted(() => {
  if (demandeId.value) {
    showQrInfo.value = true
  }
})
</script>

<template>
  <main>
    <!-- Message d'accueil depuis un QRCode -->
    <div v-if="showQrInfo" class="qr-info-banner">
      <p>Bienvenue! Vous avez scanné le QRCode de la demande #<strong>{{ demandeId }}</strong></p>
    </div>
    
    <TheWelcome />
  </main>
</template>

<style scoped>
.qr-info-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s ease-out;
}

.qr-info-banner p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.qr-info-banner strong {
  color: #ffd700;
  font-size: 18px;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
