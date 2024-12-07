import { Button } from "@/components/ui/button";
import { FaBook, FaDiscord, FaReddit } from 'react-icons/fa';
import { IoSchool, IoDocument, IoInformationCircle, IoEasel, IoNewspaper } from 'react-icons/io5';

interface SocialProps {
    platform: string;
    link: string;
    icon: React.ReactNode;
}

const Social: React.FC<SocialProps> = ({ platform, link, icon }) => {
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

const Socials: React.FC = () => {
    const socials = [
        {platform: "MSRIT Discord", link: "https://discord.gg/W7yMs9E9Eb", icon: <FaDiscord size={24} />},
        {platform: "MSRIT Archive Hub", link: "https://discord.gg/kRkGRqC5ZX", icon: <FaDiscord size={24} />},
        {platform: "r/MSRITians", link: "https://reddit.com/r/MSRITians", icon: <FaReddit size={24} />},
        {platform: "Official Site", link: "https://www.msrit.edu/department/ise.html", icon: <IoSchool size={24} />},
        {platform: "Student Information", link: "https://parents.msrit.edu", icon: <IoInformationCircle size={24} />},
        {platform: "SEE Exam Results", link: "https://exam.msrit.edu", icon: <IoDocument size={24} />},
        {platform: "Sudarshana", link: "https://msrit.edu/reports.html#Sudarshana", icon: <FaBook size={24} />},
        {platform: "Pradarshana", link: "https://msrit.edu/reports.html#Pradarshana", icon: <IoEasel size={24} />},
        {platform: "VoISE 2018-19", link: "/pdfs/magazines/18-19.pdf", icon: <IoNewspaper size={24} />},
        {platform: "VoISE 2019-20", link: "/pdfs/magazines/19-20.pdf", icon: <IoNewspaper size={24} />},
        {platform: "VoISE 2020-21", link: "/pdfs/magazines/20-21.pdf", icon: <IoNewspaper size={24} />},
        {platform: "VoISE 2021-22", link: "/pdfs/magazines/21-22.pdf", icon: <IoNewspaper size={24} />}
    ];

    return (
        <div className="socials mb-10">
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