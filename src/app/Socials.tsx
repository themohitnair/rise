import { Button } from "@/components/ui/button"
import Heading from "./Heading"

interface SocialProps {
    platform: string
    link: string
    icon: string
}

const Social: React.FC<SocialProps> = ({platform, link, icon}) => {
    return (
        <Button className="w-full py-5">
            <a href={link} className="block w-full"> {/* Ensure the anchor takes full width */}
                <div className="flex justify-between items-center w-full">
                    <div className="platform">
                        {platform}
                    </div>
                    <div className="icon">
                        <img src={icon} alt={platform} className="w-7 h-7"/>
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
        {platform: "Official Website", link: "https://www.msrit.edu/department/ise.html", icon: "/icons/college.svg"},
    ]

    return (
        <div className="socials">
            <Heading heading="Socials"/>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 mt-10 w-4/5 m-auto gap-3 ">
                {socials.map((item, key) => (
                    <div className="social" key={key}>
                        <Social platform={item.platform} link={item.link} icon={item.icon}/>
                
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Socials