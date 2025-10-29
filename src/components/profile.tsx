import { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Building, Calendar, Save, Camera, Bell, Lock, Eye, Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Input Field Component
interface InputFieldProps {
  label: string;
  icon: React.ElementType;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, icon: Icon, value = '' }) => (
  <div className="group">
    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Icon className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
      </div>
      <input
        type="text"
        defaultValue={value}
        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  </div>
);

// Personal Information Card
const PersonalInformationCard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`glassmorphism rounded-2xl p-6 shadow-xl border-2 border-purple-500/30 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        Informations Personnelles
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField label="First Name" icon={User} value="Sarah" />
        <InputField label="Last Name" icon={User} value="K." />
        <InputField label="Email Address" icon={Mail} value="sarah.k@example.com" />
        <InputField label="Phone Number" icon={Phone} value="+33 6 12 34 56 78" />
        <InputField label="Bio" icon={User} />
        <InputField label="Job" icon={Building} value="Administrator" />
        <InputField label="Country" icon={MapPin} value="France" />
        <InputField label="City" icon={MapPin} value="Paris" />
        <InputField label="Postal Code" icon={MapPin} value="75001" />
        <InputField label="Birthday" icon={Calendar} value="01/01/1990" />
      </div>

      <button className="group mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold w-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/30">
        <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
        Enregistrer les Modifications
      </button>
    </div>
  );
};

// Toggle Switch Component
interface ToggleSwitchProps {
  label: string;
  icon: React.ElementType;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, icon: Icon }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 glassmorphism rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${enabled ? 'from-purple-500 to-pink-500' : 'from-gray-700 to-gray-800'} transition-all`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-200">{label}</span>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
          enabled ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-700'
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            enabled ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};

// Social Icon Component
interface SocialIconProps {
  icon: React.ElementType;
  gradient: string;
  link?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, gradient, link }) => (
  <a
    href={link || '#'}
    className="group relative"
  >
    <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
  </a>
);

// Account Preferences Card
interface AccountPreferencesCardProps {
  title: string;
  socialLinks?: boolean;
}

const AccountPreferencesCard: React.FC<AccountPreferencesCardProps> = ({ title, socialLinks = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`glassmorphism rounded-2xl p-6 shadow-xl border-2 border-blue-500/30 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
        {title}
      </h3>

      {socialLinks ? (
        <div className="grid grid-cols-2 gap-4">
          <SocialIcon icon={Facebook} gradient="from-blue-600 to-blue-700" />
          <SocialIcon icon={Twitter} gradient="from-sky-500 to-blue-500" />
          <SocialIcon icon={Instagram} gradient="from-pink-500 to-purple-600" />
          <SocialIcon icon={Linkedin} gradient="from-blue-700 to-blue-900" />
        </div>
      ) : (
        <div className="space-y-3">
          <ToggleSwitch label="Notifications Email" icon={Bell} />
          <ToggleSwitch label="Authentification 2FA" icon={Lock} />
          <ToggleSwitch label="Mode Privé" icon={Eye} />
          <ToggleSwitch label="Sécurité Renforcée" icon={Shield} />
        </div>
      )}
    </div>
  );
};

// Main Profile Component
const Profile = () => {
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

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out both;
        }

        .glassmorphism {
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(12px);
        }
      `}</style>

      {/* Header */}
      <div
        className={`mb-6 p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 backdrop-blur-xl border border-blue-500/30 ${mounted ? 'animate-fadeInDown' : 'opacity-0'}`}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          Mon Profil
        </h2>
        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
      </div>

      {/* Profile Section */}
      <div
        className={`glassmorphism rounded-2xl p-6 shadow-xl border-2 border-purple-500/30 mb-6 ${mounted ? 'animate-scaleIn' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center ring-4 ring-purple-500/50 ring-offset-4 ring-offset-gray-900 shadow-xl">
              <User className="w-16 h-16 text-white" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-110 transition-transform">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">Sarah K.</h3>
            <p className="text-purple-400 font-semibold mb-4">Administrator</p>
            <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30">
              Changer la Photo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="glassmorphism rounded-xl p-3 border border-gray-700/50">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">248</p>
              <p className="text-xs text-gray-400">Posts</p>
            </div>
            <div className="glassmorphism rounded-xl p-3 border border-gray-700/50">
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">1.5K</p>
              <p className="text-xs text-gray-400">Followers</p>
            </div>
            <div className="glassmorphism rounded-xl p-3 border border-gray-700/50">
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">89%</p>
              <p className="text-xs text-gray-400">Engagement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information - 2/3 */}
        <div className="lg:col-span-2" style={{ animationDelay: '0.2s' }}>
          <PersonalInformationCard />
        </div>

        {/* Preferences - 1/3 */}
        <div className="space-y-6" style={{ animationDelay: '0.3s' }}>
          <AccountPreferencesCard title="Préférences du Compte" />
          <AccountPreferencesCard title="Réseaux Sociaux" socialLinks={true} />
        </div>
      </div>
    </div>
  );
};

export default Profile;