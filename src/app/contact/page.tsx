import Socials from "./Socials";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'RIT ISE - Contact',
    description: "Some important links"
}

export default function Home() {
    return (    
        <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto mt-20">
            <Socials/>
        </div>
    );
}
