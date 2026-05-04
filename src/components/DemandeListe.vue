<template>
  <div class="demande-liste">
    <div 
      v-for="demande in demandes" 
      :key="demande.id" 
      :class="['card', { 'highlight': demande.id === highlightId }]"
    >
      <div class="card-header">
        <span class="ref">Réf: <strong>{{ demande.id }}</strong></span>
        <span class="badge">{{ demande.statutActuel }}</span>
      </div>

      <div class="card-body">
        <div class="info-sec">
          <p><strong>Demandeur:</strong> {{ demande.personne.nom }} {{ demande.personne.prenom }}</p>
          <p><strong>Passeport:</strong> {{ demande.passeport.numero }}</p>
        </div>
        <div class="info-sec">
          <p><strong>Visa:</strong> {{ demande.typeVisa.libelle }}</p>
          <p><strong>Nature:</strong> {{ demande.typeDemande.libelle }}</p>
        </div>
      </div>

      <div class="card-footer">
        <h6>Historique du statut :</h6>
        <ul>
          <li v-for="(h, idx) in demande.historique" :key="idx">
            {{ h.date }} : {{ h.event }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    demandes: Array,
    highlightId: String
  }
}
</script>

<style scoped>
.card { border: 1px solid #ddd; margin-bottom: 20px; border-radius: 8px; background: #fff; }
.highlight { border: 2px solid #3498db; box-shadow: 0 0 10px rgba(52,152,219,0.3); background-color: #f7fbff; }
.card-header { padding: 10px; background: #f8f9fa; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; }
.card-body { padding: 15px; display: flex; gap: 20px; border-bottom: 1px solid #eee; }
.card-footer { padding: 10px; font-size: 0.85rem; }
.badge { background: #2ecc71; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; }
ul { list-style: none; padding-left: 0; margin: 5px 0; }
</style>