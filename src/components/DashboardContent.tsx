import { useState, useEffect } from "react";
import { Landmark, Link2, Mail, Lock, Video, BarChart3 } from "lucide-react";
import Chart from "../charts/Charts";


const DashboardContent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const revenueCards = [
    { icon: Landmark, title: "Abonnements", value: "1478.98 $", delay: "0.1s", gradient: "from-blue-500 to-cyan-500" },
    { icon: Mail, title: "Médias push", value: "478", delay: "0.2s", gradient: "from-purple-500 to-pink-500" },
    { icon: BarChart3, title: "Tips", value: "478.98 $", delay: "0.3s", gradient: "from-emerald-500 to-teal-500" },
    { icon: Lock, title: "Médias Privés", value: "478.98 $", delay: "0.4s", gradient: "from-orange-500 to-red-500" },
    { icon: Video, title: "Lives", value: "478.98 $", delay: "0.5s", gradient: "from-violet-500 to-purple-600" },
    { icon: Link2, title: "Affiliés", value: "478.98 $", delay: "0.6s", gradient: "from-indigo-500 to-blue-600" },
  ];

  const scheduleItems = [
    { name: "Creator Name", time: "14:30 - 16:00" },
    { name: "Creator Name", time: "16:30 - 18:00" },
  ];

  const tomorrowSchedule = [
    { name: "Creator Name", time: "12:00 - 14:00" },
    { name: "Creator Name", time: "14:30 - 16:00" },
  ];

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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes slideUp {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out both;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out both;
        }

        .glassmorphism {
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(12px);
        }
      `}</style>

      {/* Header avec animation */}
      <div
        className={`mb-6 p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 backdrop-blur-xl border border-blue-500/30 ${mounted ? 'animate-fadeInDown' : 'opacity-0'}`}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          Détails de revenus
        </h2>
        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-6 mb-6">
        {/* Card Total Income */}
        <div
          className={`glassmorphism w-full md:w-1/3 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-blue-500/30 ${mounted ? 'animate-fadeInLeft' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative">
            <h1 className="text-blue-400 text-sm uppercase tracking-wide mb-4 font-bold">Total Income</h1>
            <div className="flex items-center justify-between mb-6">
              <div className="stat-value text-4xl font-black bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent">
                1478.98 $
              </div>
              <div className="avatar online">
                <div className="w-16 rounded-full ring-4 ring-blue-500 ring-offset-4 ring-offset-gray-900">
                  <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" alt="Profile" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-blue-500/20">
            <div className="text-center flex-1">
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-2">Last Month</div>
              <div className="text-white font-bold text-base">
                1471.98 $
              </div>
              <span className="text-red-400 text-xs font-semibold">↓ 7$</span>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
            <div className="text-center flex-1">
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-2">This Month</div>
              <div className="text-white font-bold text-base">
                1485.98 $
              </div>
              <span className="text-emerald-400 text-xs font-semibold">↑ 7$</span>
            </div>
          </div>
        </div>

        {/* Revenue Cards Grid */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {revenueCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${mounted ? 'animate-scaleIn' : 'opacity-0'}`}
                  style={{ animationDelay: card.delay }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl"></div>
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${card.gradient}`}></div>

                  <div className="relative p-5 border border-gray-700/50">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${card.gradient}`}>
                        <Icon className="text-white text-xl" />
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold bg-gradient-to-br ${card.gradient} bg-clip-text text-transparent" style={{
                          backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text'
                        }}>
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      {card.title}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Graphique et créneaux */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Créneaux */}
        <div
          className={`col-span-1 glassmorphism p-6 rounded-2xl shadow-xl border-2 border-purple-500/30 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Créneaux
            </h3>
            <select className="glassmorphism text-white rounded-lg px-3 py-2 text-sm border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
              <option>Aujourd'hui</option>
              <option>Cette semaine</option>
            </select>
          </div>

          <ul className="space-y-3 mb-6">
            {scheduleItems.map((item, i) => (
              <li
                key={i}
                className="glassmorphism p-3 rounded-lg flex items-center justify-between hover:bg-purple-500/10 transition-all duration-300 border border-purple-500/20"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-500"
                  />
                  <span className="font-semibold text-white text-sm">{item.name}</span>
                </div>
                <span className="text-purple-400 text-xs font-bold px-2 py-1 bg-purple-500/10 rounded">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
            <p className="italic text-xs text-pink-400 font-semibold uppercase tracking-wide">Tomorrow</p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
          </div>

          <ul className="space-y-3">
            {tomorrowSchedule.map((item, i) => (
              <li
                key={i}
                className="glassmorphism p-3 rounded-lg flex items-center justify-between hover:bg-pink-500/10 transition-all duration-300 border border-pink-500/20"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-500"
                  />
                  <span className="font-semibold text-white text-sm">{item.name}</span>
                </div>
                <span className="text-pink-400 text-xs font-bold px-2 py-1 bg-pink-500/10 rounded">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chart */}
        <div
          className={`col-span-1 lg:col-span-2 glassmorphism p-6 rounded-2xl shadow-xl border-2 border-blue-500/30 ${mounted ? 'animate-fadeInRight' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Vue d'ensemble
            </h2>
            <select className="glassmorphism text-white rounded-lg px-4 py-2 text-sm border border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
              <option>Cette semaine</option>
              <option>Ce mois</option>
              <option>Cette année</option>
            </select>
          </div>

          <div className="glassmorphism rounded-xl p-4 mb-6 border border-blue-500/20 h-64">
            <Chart
              data={[
                { name: "Jan", revenue: 400 },
                { name: "Feb", revenue: 300 },
                { name: "Mar", revenue: 500 },
                { name: "Apr", revenue: 200 },
                { name: "May", revenue: 350 },
                { name: "Jun", revenue: 450 },
              ]}
            />
          </div>



          <div className="glassmorphism rounded-xl p-4 border border-emerald-500/20">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Top Performers
            </h3>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 glassmorphism rounded-lg hover:bg-emerald-500/10 transition-all duration-300 border border-emerald-500/20"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-black text-sm`}>
                      {i}
                    </div>
                    <span className="font-semibold text-white">User {i}</span>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-br from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    ${(1000 - i * 100)}.00
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;