import React, { useState, useMemo } from 'react';
import { ElementFan } from './ElementFan';
import type { Fan } from '../types/types';

interface BarreLateraleFansProps {
  fans: Fan[];
}

export const BarreLateraleFans: React.FC<BarreLateraleFansProps> = ({ fans }) => {
  const [termeRecherche, setTermeRecherche] = useState('');

  const fansFiltres = useMemo(() => {
    if (!termeRecherche.trim()) {
      return fans;
    }
    
    const termeMinuscule = termeRecherche.toLowerCase();
    return fans.filter(fan => 
      fan.nom.toLowerCase().includes(termeMinuscule) ||
      fan.statut.toLowerCase().includes(termeMinuscule)
    );
  }, [fans, termeRecherche]);

  const handleRechercheChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermeRecherche(e.target.value);
  };

  return (
    <aside className="bg-gray-900 h-full border-r border-gray-700 flex flex-col">
      {/* En-tête avec recherche */}
      <div className="p-4 border-b border-gray-700">
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Rechercher un fan" 
            className="w-full py-2 pl-4 pr-10 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base"
            value={termeRecherche}
            onChange={handleRechercheChange}
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </span>
        </div>
        <div className="text-center py-1">
          <span className="text-white font-semibold border-b-2 border-blue-500 text-sm sm:text-base">
            Tous ({fansFiltres.length})
          </span>
        </div>
      </div>

      {/* Liste des fans avec scroll */}
      <div className="flex-1 overflow-y-auto">
        {fansFiltres.map(fan => (
          <ElementFan key={fan.id} fan={fan} />
        ))}
        
        {fansFiltres.length === 0 && termeRecherche && (
          <div className="text-center text-gray-400 py-4 text-sm sm:text-base">
            Aucun fan trouvé
          </div>
        )}
      </div>
    </aside>
  );
};