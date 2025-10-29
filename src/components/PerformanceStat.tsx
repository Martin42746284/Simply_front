import { useState, useEffect } from 'react';
import { DollarSign, UserPlus, TrendingUp, Mail, ArrowRight, Sparkles } from 'lucide-react';

const kpiData = [
  {
    value: '5 200 €',
    label: 'Revenus du Mois',
    trend: '↑ 8%',
    isGrowth: true,
    gradient: 'from-emerald-500 to-teal-500',
    icon: DollarSign,
    delay: '0.1s',
    description: 'vs mois dernier'
  },
  {
    value: '150',
    label: 'Nouveaux Abonnés',
    trend: '↑ 12%',
    isGrowth: true,
    gradient: 'from-blue-500 to-cyan-500',
    icon: UserPlus,
    delay: '0.2s',
    description: 'cette semaine'
  },
  {
    value: '4.5%',
    label: "Taux d'Engagement Moyen",
    trend: '↑ 0.3pt',
    isGrowth: true,
    gradient: 'from-purple-500 to-pink-500',
    icon: TrendingUp,
    delay: '0.3s',
    description: 'tous créateurs'
  },
  {
    value: '215',
    label: 'Messages Traités',
    trend: 'Archiver',
    isGrowth: false,
    gradient: 'from-gray-500 to-gray-600',
    icon: Mail,
    delay: '0.4s',
    description: 'aujourd\'hui'
  },
];

const PerformanceStats = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="p-4 sm:p-6 text-gray-100 min-h-screen bg-gray-900">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out both;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .glassmorphism {
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(12px);
        }

        .kpi-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .kpi-card:hover .trend-badge {
          transform: scale(1.05);
        }
      `}</style>

      {/* Header avec animation */}
      <div
        className={`mb-6 p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 backdrop-blur-xl border border-blue-500/30 ${mounted ? 'animate-fadeInDown' : 'opacity-0'}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                Performance Générale
              </h2>
              <Sparkles className="text-purple-400 w-6 h-6 animate-pulse-glow" />
            </div>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs text-gray-400 uppercase tracking-wide">Dernière mise à jour</p>
            <p className="text-sm font-semibold text-purple-400">Il y a 5 min</p>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div
              key={index}
              className={`kpi-card relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${mounted ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{ animationDelay: kpi.delay }}
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl"></div>
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${kpi.gradient}`}></div>

              <div className="relative p-5 border border-gray-700/50">
                {/* Header avec icon et trend */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`icon-wrapper p-3 rounded-lg bg-gradient-to-br ${kpi.gradient} transition-transform duration-300`}>
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <span
                    className={`trend-badge px-2.5 py-1 rounded-full text-xs font-bold transition-transform duration-300 ${
                      kpi.isGrowth 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                        : 'bg-gray-600/20 text-gray-400 border border-gray-600/40'
                    }`}
                  >
                    {kpi.trend}
                  </span>
                </div>

                {/* Value */}
                <div className="mb-2">
                  <p className="text-3xl font-black text-white mb-1">
                    {kpi.value}
                  </p>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {kpi.label}
                  </p>
                </div>

                {/* Description */}
                <div className="mt-3 pt-3 border-t border-gray-700/50">
                  <p className="text-xs text-gray-500">{kpi.description}</p>
                </div>

                {/* Animated progress bar */}
                {kpi.isGrowth && (
                  <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${kpi.gradient} rounded-full transition-all duration-1000`}
                      style={{ 
                        width: mounted ? `${parseInt(kpi.trend)}%` : '0%',
                        transitionDelay: kpi.delay 
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Card */}
      <div
        className={`glassmorphism rounded-2xl p-6 shadow-xl border-2 border-purple-500/30 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
        style={{ animationDelay: '0.5s' }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Croissance Exceptionnelle
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Vos performances sont en hausse sur tous les indicateurs clés
              </p>
            </div>
          </div>
          
          <button className="group flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/30 whitespace-nowrap">
            Voir les Rapports Détaillés
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Mini stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-700/50">
          {[
            { label: 'Objectif Mensuel', value: '85%', color: 'text-emerald-400' },
            { label: 'Taux de Conversion', value: '3.2%', color: 'text-blue-400' },
            { label: 'Satisfaction Client', value: '4.8/5', color: 'text-purple-400' },
            { label: 'Temps de Réponse', value: '< 2h', color: 'text-pink-400' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{stat.label}</p>
              <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceStats;