// src/mockData.js
export const mockDemandes = [
  {
    id: "DEM-101",
    dateDemande: "2026-04-01",
    numeroPasseport: "A1234567",
    typeDemande: { id: 1, libelle: "Nouvelle demande" },
    typeVisa: { id: 2, libelle: "Tourisme" },
    statutActuel: "Approuvé",
    personne: {
      nom: "Rakoto",
      prenom: "Jean",
      nationalite: "Malagasy"
    },
    passeport: {
      numero: "A1234567",
      dateExpiration: "2028-06-30"
    },
    historique: [
      { date: "2026-04-01", event: "Demande soumise" },
      { date: "2026-04-05", event: "En cours de traitement" },
      { date: "2026-04-10", event: "Visa délivré" }
    ]
  },
  {
    id: "DEM-102",
    dateDemande: "2025-10-12",
    numeroPasseport: "A1234567",
    typeDemande: { id: 3, libelle: "Renouvellement" },
    typeVisa: { id: 1, libelle: "Affaires" },
    statutActuel: "Archivé",
    personne: {
      nom: "Rakoto",
      prenom: "Jean",
      nationalite: "Malagasy"
    },
    passeport: {
      numero: "A1234567",
      dateExpiration: "2028-06-30"
    },
    historique: [
      { date: "2025-10-12", event: "Demande archivée" }
    ]
  }
];