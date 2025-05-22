import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t-2 border-purple-600">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 text-center sm:text-left">
                {/* Name */}
                <div className="text-xl font-semibold">Rahul Son Boro</div>

                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 text-sm">
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/Project" className="hover:underline">Projects</Link>
                    </li>
                    <li>
                        <Link href="/Blog" className="hover:underline">Blog</Link>
                    </li>
                </ul>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400 text-center sm:text-left">
                <div>&copy; 2025 Rahul Son Boro. All rights reserved.</div>

                <div className="flex flex-wrap justify-center sm:justify-end gap-4">
                    <a href="#" className="hover:underline">Terms of Use</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
