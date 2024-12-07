import { Metadata } from "next";
import SchedulesPage from "./Schedules";

export const metadata: Metadata = {
    title: "RIT ISE - Schedules",
    description: "Explore our daily student schedules",
};

export default function Page() {
    return (
        <div className="min-h-[calc(100vh-4rem-4rem)] w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
            <SchedulesPage />
        </div>
    )
}