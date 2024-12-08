import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className="bg-primary/10 border-gray-300 text-white py-4">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">Developed by</span>
                        <Link 
                            href="https://github.com/themohitnair" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-lg font-semibold hover:text-white transition-colors space-x-1 hover:scale-105 duration-200"
                        >
                            <FaGithub size={20} className='mr-2 ml-2'/>
                            <span>Mohit Nair</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Link 
                            href="https://github.com/themohitnair/rise" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-lg font-semibold hover:text-white transition-colors space-x-1"
                        >
                            <span className="text-sm text-gray-400">Source Code</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}