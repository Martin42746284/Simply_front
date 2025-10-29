
// types/types.ts
export interface Fan {
  id: string;
  nom: string;
  initiale: string;
  urlAvatar?: string;
  statut: 'Spender' | 'Good buyer' | 'Timewaster';
  derniereActivite: string;
  totalDepense: number;
}

export interface Contenu {
  id: string;
  titre: 'Acheté' | 'En attente' | 'Refusé' | 'Gratuit' | 'Public';
  urlImage: string;
  prix: number;
}