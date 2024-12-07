import { Button } from "@/components/ui/button";

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
    const socials: SocialProps[] = [
        // Empty array for now
    ];

    return (
        <div className="socials mb-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-5 m-auto gap-5">
                {socials.length > 0 ? (
                    socials.map((item, key) => (
                        <div className="social" key={key}>
                            <Social platform={item.platform} link={item.link} icon={item.icon} />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full">
                        <p className="text-center text-muted-foreground py-8">
                            No social links available at the moment.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Socials