"use client"

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu"

interface NavItemProps {
    href: string
    label: string
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <a href={href} className="font-fira text-black hover:text-gray-700">
                    {label}
                </a>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}

const Navbar: React.FC = () => {
    const navItems = [
        { href: "/resources", label: "Resources" },
        { href: "https://github.com/themohitnair/rise", label: "Source Code"},        
    ]

    return (
        <header className="top-0 flex sticky border h-14 border-b-[1px] px-2 items-center justify-between">
            <div className="font-fira font-extrabold text-3xl">
                <a href="/">
                    rISE
                </a>
            </div>
            <NavigationMenu className="px-2">
                <NavigationMenuList className="flex space-x-9 font-fira">
                    { navItems.map((item, key) => (
                        <NavItem key={key} href={item.href} label={item.label} />
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

export default Navbar