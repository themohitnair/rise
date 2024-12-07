import { Button } from "@/components/ui/button";
import { FaDiscord, FaReddit } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import Heading from "../Heading";

interface SocialProps {
    platform: string;
    link: string;
    icon: React.ReactNode;
}

const Contact: React.FC<SocialProps> = ({ platform, link, icon }) => {
    return (
        <Button className="w-full h-10 py-4 sm:py-3">
            <a href={link} className="block w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="platform">
                        {platform}
                    </div>
                    <div className="icon">
                        {icon}
                    </div>
                </div>
            </a>
        </Button>
    );
};

const Contacts: React.FC = () => {
    const socials = [
        {platform: "MSRIT Discord", link: "https://discord.gg/W7yMs9E9Eb", icon: <FaDiscord size={24} />},
        {platform: "MSRIT Archive Hub", link: "https://discord.gg/kRkGRqC5ZX", icon: <FaDiscord size={24} />},
        {platform: "r/MSRITians", link: "https://reddit.com/r/MSRITians", icon: <FaReddit size={24} />},
        {platform: "Official Site", link: "https://www.msrit.edu/department/ise.html", icon: <IoSchool size={24} />},
    ];

    return (
        <div className="socials mb-10">
            <Heading heading="Contact Us"/>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-5 m-auto gap-5">
                {socials.map((item, key) => (
                    <div className="social" key={key}>
                        <Contact platform={item.platform} link={item.link} icon={item.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts