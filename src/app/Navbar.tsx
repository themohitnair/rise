'use client'

import { useState, useEffect } from 'react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

interface NavItemProps {
    href: string
    label: string
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <a href={href} className="text-foreground hover:text-foreground/70 transition duration-200 ease-in-out">
                    {label}
                </a>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    const navItems = [
        { href: "/courses", label: "Courses"},
        { href: "/resources", label: "Resources" },
        { href: "/projects", label: "Projects" },
        { href: "/schedules", label: "Schedules" },
        { href: "/voise", label: "VoISE" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <header className="sticky top-0 border-b px-4 md:px-6 py-4 bg-background">
            <div className="flex items-center justify-between">
                <div className="font-extrabold text-2xl md:text-3xl">
                    <a href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-red-500">
                        RIT ISE
                    </a>
                </div>
                <div className="flex items-center">
                    <NavigationMenu className="hidden md:block">
                        <NavigationMenuList className="flex space-x-6 md:space-x-9">
                            {navItems.map((item, index) => (
                                <NavItem key={index} href={item.href} label={item.label} />
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <button 
                        className="md:hidden text-foreground ml-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="mt-4 md:hidden">
                    <ul className="flex flex-col space-y-4 items-end">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className="text-foreground hover:text-foreground/70 transition duration-200 ease-in-out">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}