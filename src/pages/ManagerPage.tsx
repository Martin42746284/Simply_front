import AlertsAndRecs from "../components/Alert";
import MediaPlanning from "../components/MediaPlaning";

import ModeratorActivity from "../components/Moderator";
import Navbar from "../components/navbar";
import PerformanceStats from "../components/PerformanceStat";
import Sidebar from "../components/sidebar";
import UrgentMessaging from "../components/UrgentMessaging";

const CreateursPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
               <div className="flex-1 overflow-auto bg-gray-900">
                    <PerformanceStats />
                    <UrgentMessaging />
                    <MediaPlanning />
                    <ModeratorActivity />
                    <AlertsAndRecs />
                </div>
            </div>
        </div>
    );
};

export default CreateursPage;
