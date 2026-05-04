<template>
  <div id="app" class="main-container">
    <h1>Interface Front-Office Visa</h1>

    <!-- FORMULAIRE DE RECHERCHE -->
    <div class="search-section">
      <label>Entrez votre numéro de passeport ou votre numéro de demande :</label>
      <div class="input-group">
        <input 
          v-model="searchInput" 
          type="text" 
          placeholder="Ex: A1234567 ou DEM-101"
          @keyup.enter="handleSearch"
        />
        <button @click="handleSearch">Submit</button>
      </div>
    </div>

    <!-- AFFICHAGE DES RÉSULTATS -->
    <div v-if="results.length > 0" class="results-section">
      <h3>Résultats de recherche ({{ results.length }})</h3>
      <DemandeListe :demandes="results" :highlightId="targetId" />
    </div>
    
    <div v-else-if="hasSearched" class="no-data">
      Aucun résultat trouvé pour "{{ searchInput }}".
    </div>
  </div>
</template>

<script>
import { mockDemandes } from './mockData';
import DemandeListe from './components/DemandeListe.vue';

export default {
  components: { DemandeListe },
  data() {
    return {
      searchInput: '',
      results: [],
      targetId: null,
      hasSearched: false
    }
  },
  methods: {
    handleSearch() {
      const q = this.searchInput.trim().toUpperCase();
      this.hasSearched = true;

      if (!q) {
        this.results = [];
        return;
      }

      // Filtrer les données correspondant à l'ID ou au Passeport
      let found = mockDemandes.filter(d => 
        d.id === q || d.passeport.numero === q
      );

      if (q.startsWith('DEM')) {
        // CAS RECHERCHE PAR DEMANDE : On met en avant
        this.targetId = q;
        // La demande concernée est mise en premier dans la liste
        this.results = found.sort((a, b) => (a.id === q ? -1 : 1));
      } else {
        // CAS RECHERCHE PAR PASSEPORT : Chronologique
        this.targetId = null;
        // Tri du plus récent au plus ancien
        this.results = found.sort((a, b) => new Date(b.dateDemande) - new Date(a.dateDemande));
      }
    }
  }
}
</script>

<style>
.main-container { max-width: 900px; margin: 50px auto; padding: 20px; font-family: Arial, sans-serif; }
.search-section { background: #eee; padding: 20px; border-radius: 5px; margin-bottom: 30px; }
.input-group { display: flex; gap: 10px; margin-top: 10px; }
input { flex: 1; padding: 12px; border: 1px solid #ccc; border-radius: 4px; }
button { padding: 12px 25px; background: #2c3e50; color: white; border: none; border-radius: 4px; cursor: pointer; }
button:hover { background: #34495e; }
.no-data { text-align: center; color: #7f8c8d; margin-top: 20px; }
</style>