import React, { useState } from "react";

interface AddEmployeModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const AddEmployeModal = ({ setIsModalOpen }: AddEmployeModalProps) => {
  const [form, setForm] = useState({
    nom: "",
    poste: "",
    email: "",
    statut: "Actif",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-200">
      <div className="bg-slate-900/90 border border-slate-700 rounded-2xl shadow-2xl p-8 w-full max-w-md text-slate-100">
        <h3 className="text-xl font-semibold mb-4">Ajouter un employé</h3>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nom complet</label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:border-blue-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Poste</label>
            <input
              type="text"
              name="poste"
              value={form.poste}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:border-blue-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:border-blue-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Statut</label>
            <select
              name="statut"
              value={form.statut}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:border-blue-500 outline-none"
            >
              <option value="Actif">Actif</option>
              <option value="Inactif">Inactif</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    Fermer
                  </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-[1.03] shadow-lg transition-all"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeModal;
