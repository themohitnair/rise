import Contribute from "./Contribute";
import Info from "./Info";
import Socials from "./Socials";
import Welcome from "./Welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'RIT ISE - Home',
}

export default function Home() {
    const text = [
        "The official website of the Information Science and Engineering branch in Ramaiah Institute of Technology, Bengaluru. All resources and notes on this platform are intended to be crowdsourced by the students of the ISE branch.",    
    ]
    return (    
        <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
            <Welcome/>
            {text.map((item, index) => (
                <div className="mt-6 text-center" key={index}>
                <Info text={item} />
                </div>
            ))}

            <Contribute/>
            <Socials/>
        </div>
    );
}
