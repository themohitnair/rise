import React from 'react';
import Welcome from './Welcome';
import FeatureCard from './FeatureCard';
import { BookOpen, Rocket, Settings } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: BookOpen,
            title: 'Resources',
            description: 'Access comprehensive study materials, notes, previous year papers, and reference books curated by your seniors.',
            href: '/resources',
            gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500'
        },
        {
            icon: Rocket,
            title: 'Projects',
            description: 'Explore innovative projects built by ISE students, get inspiration, and contribute to the community.',
            href: '/projects',
            gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
        },
        {
            icon: Settings,
            title: 'Utilities',
            description: 'Handy tools including Titlepage Generators, SIS Apps, Research tools, and other academic utilities.',
            href: '/utilities',
            gradient: 'bg-gradient-to-br from-green-500 to-emerald-500'
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
            {/* Hero Section */}
            <div className="w-full max-w-4xl px-4 text-center">
                <div className="animate-fade-in-up">
                    <Welcome />
                </div>
                <p className="mt-8 text-xl leading-relaxed text-gray-300 animate-fade-in-up animation-delay-200">
                    The crowdsourced and crowd-maintained website of the 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                        {" "}Information Science and Engineering
                    </span> branch in Ramaiah Institute of Technology, Bengaluru.
                </p>
                <p className="mt-6 text-base text-gray-400 animate-fade-in-up animation-delay-400">
                    We are not officially affiliated with the college or the university. 
                    We are a group of students who are trying to make the lives of our juniors easier.
                </p>
            </div>

            <div className="w-full max-w-5xl px-4 mt-20 animate-fade-in-up animation-delay-600">
                <h2 className="text-2xl font-semibold text-center mb-8 text-gray-300">
                    What You&apos;ll Find Here
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className={`animate-fade-in-up animation-delay-${800 + index * 200}`}>
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;