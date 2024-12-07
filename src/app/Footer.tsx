import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bottom-0 bg-black border text-white py-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-2 md:mb-0">
                        <Link 
                            href="https://github.com/themohitnair" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Developed by Mohit Nair
                        </Link>
                    </div>
                    <div>
                        <Link 
                            href="https://github.com/themohitnair/rise" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Source Code
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}