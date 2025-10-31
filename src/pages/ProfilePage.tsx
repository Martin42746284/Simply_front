import React, { useEffect, useState } from "react";
import Profile from "../components/profile";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

interface ProfileData {
  isLoading: boolean;
  error: string | null;
}

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<ProfileData>({
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Simuler le chargement des données
    const loadProfile = async () => {
      try {
        setProfileData(prev => ({ ...prev, isLoading: true }));
        // TODO: Charger les données depuis l'API
        await new Promise(resolve => setTimeout(resolve, 500));
        setProfileData(prev => ({ ...prev, isLoading: false }));
      } catch (error) {
        setProfileData(prev => ({
          ...prev,
          isLoading: false,
          error: 'Erreur lors du chargement du profil'
        }));
      }
    };

    loadProfile();
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto bg-gray-900 p-6">
        {profileData.isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
          </div>
        ) : profileData.error ? (
          <div className="text-red-500 text-center">
            {profileData.error}
          </div>
        ) : (
          <Profile />
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
