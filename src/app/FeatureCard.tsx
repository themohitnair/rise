import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
    icon: Icon, 
    title, 
    description, 
    href, 
    gradient 
}) => {
    return (
        <Link href={href} className="group block">
            <Card className="border-none relative h-full backdrop-blur-sm transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${gradient}`}></div>
                
                <CardContent className="relative z-10 p-6 h-full flex flex-col">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg transition-all duration-300">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 text-gray-200 group-hover:text-white transition-colors duration-300">
                        {title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow group-hover:text-gray-400 transition-colors duration-300">
                        {description}
                    </p>
                    
                    <div className="mt-4 flex items-center text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default FeatureCard;
