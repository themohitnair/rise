'use client'

import { useState, useEffect } from 'react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
    href: string
    label: string
    isActive: boolean
}

const NavItem: React.FC<NavItemProps> = ({ href, label, isActive }) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link 
                    href={href} 
                    className={`relative py-2 transition duration-200 ease-in-out
                        ${isActive 
                            ? "text-primary" 
                            : "text-foreground hover:text-gray-500"
                        }`}
                >
                    {label}
                    {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                    )}
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const navItems = [
        { href: "/resources", label: "Resources" },
        { href: "/projects", label: "Projects" },
        { href: "/utilities", label: "Utilities" },
        { href: "/contact", label: "Contact" },        
    ]

    return (
        <header className="sticky top-0 px-4 md:px-6 py-4 bg-transparent z-50 backdrop-blur">
            <div className="flex items-center justify-between">
                <div className="font-extrabold text-2xl md:text-3xl">
                    <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-red-500">
                        RIT ISE
                    </Link>
                </div>
                <div className="flex items-center">
                    <NavigationMenu className="hidden md:block">
                        <NavigationMenuList className="flex space-x-6 md:space-x-9">
                            {navItems.map((item, index) => (
                                <NavItem 
                                    key={index} 
                                    href={item.href} 
                                    label={item.label} 
                                    isActive={pathname === item.href}
                                />
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
                                <Link 
                                    href={item.href} 
                                    className={`relative py-2 transition duration-200 ease-in-out
                            ${pathname === item.href 
                                ? "text-primary" 
                                : "text-foreground hover:text-primary"
                            }`}
                                >
                                    {item.label}
                                    {pathname === item.href && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}