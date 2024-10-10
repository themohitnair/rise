import { Button } from "@/components/ui/button";
import Heading from "./Heading";
import Image from "next/image";

interface SocialProps {
    platform: string;
    link: string;
    icon: string;
}

const Social: React.FC<SocialProps> = ({ platform, link, icon }) => {
    return (
        <Button className="w-full h-12 py-4 sm:py-3 font-fira"> {/* Adjust padding based on screen size */}
            <a href={link} className="block w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="platform">
                        {platform}
                    </div>
                    <div className="icon">
                        <Image src={icon} alt={platform}/>
                    </div>
                </div>
            </a>
        </Button>
    );
};

const Socials: React.FC = () => {
    const socials = [
        {platform: "MSRIT Discord", link: "https://discord.gg/W7yMs9E9Eb", icon: "/icons/discord.svg"},
        {platform: "MSRIT Archive Hub", link: "https://discord.gg/kRkGRqC5ZX", icon: "/icons/discord.svg"},
        {platform: "r/MSRITians", link: "https://reddit.com/r/MSRITians", icon: "/icons/reddit.svg"},
        {platform: "Official Site", link: "https://www.msrit.edu/department/ise.html", icon: "/icons/college.svg"},
    ];

    return (
        <div className="socials mb-10">
            <Heading heading="Socials" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-5 m-auto gap-5">
                {socials.map((item, key) => (
                    <div className="social" key={key}>
                        <Social platform={item.platform} link={item.link} icon={item.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Socials;
