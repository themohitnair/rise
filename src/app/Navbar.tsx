"use client"

import { useState, useEffect } from 'react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { Menu, X } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

interface NavItemProps {
    href: string
    label: string
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <a href={href} className="font-fira text-foreground hover:text-foreground/70 transition duration-200 ease-in-out">
                    {label}
                </a>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, []);

    const navItems = [
        { href: "/resources", label: "Resources" },
        { href: "/projects", label: "Projects" },
        { href: "https://github.com/themohitnair/rise", label: "Source Code"},        
    ];

    return (
        <header className="top-0 sticky border border-b-[1px] px-4 md:px-6 py-4 bg-background">
            <div className="flex items-center justify-between">
                <div className="font-fira font-extrabold text-2xl md:text-3xl">
                    <a href="/" className="text-foreground">
                        rISE
                    </a>
                </div>
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList className="flex space-x-6 md:space-x-9 font-fira">
                        { navItems.map((item, key) => (
                            <NavItem key={key} href={item.href} label={item.label} />
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    <button 
                        className="md:hidden text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="mt-4 md:hidden">
                    <ul className="flex flex-col space-y-4 font-fira">
                        {navItems.map((item, key) => (
                            <li key={key}>
                                <a href={item.href} className="text-foreground hover:text-foreground/70 transition duration-200 ease-in-out">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Navbar;