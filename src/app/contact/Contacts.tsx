import { Button } from "@/components/ui/button";
import Heading from "../Heading";
import { Mail, Phone } from "lucide-react";

interface SocialProps {
    data: string;
    icon: React.ReactNode;
}

const Contact: React.FC<SocialProps> = ({ data, icon }) => {
    return (
        <Button className="w-full h-10 py-4 sm:py-3">
            <div className="block w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="data">
                        {data}
                    </div>
                    <div className="icon">
                        {icon}
                    </div>                    
                </div>
            </div>
        </Button>
    );
};

const Contacts: React.FC = () => {
    const contacts = [
        {data: "+1 234 567 890", icon: <Phone size={24} />},
        {data: "riserit@proton.me", icon: <Mail size={24} />},
    ];

    return (
        <div className="socials mb-10">
            <Heading heading="Contact Us"/>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-5 m-auto gap-5">
                {contacts.map((item, key) => (
                    <div className="social" key={key}>
                        <Contact data={item.data} icon={item.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts