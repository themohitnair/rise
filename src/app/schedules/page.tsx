import { Metadata } from "next";
import SchedulesPage from "./Schedules";

export const metadata: Metadata = {
    title: "RIT ISE - Schedules",
    description: "Explore our daily student schedules",
};

export default function Page() {
    return <SchedulesPage />;
}