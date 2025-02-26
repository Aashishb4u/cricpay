import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Features', path: '/features' },
        { label: 'Technical Connector', path: '/technical-connector' },
        { label: 'About us', path: '/about' },
    ];

    const othersSubItems = [
        { label: 'API Integration', path: '/api-integration' },
        { label: 'Crypto Currency', path: '/cryptocurrency' },
        { label: 'Our vision', path: '/our-vision' },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-white w-full fixed top-0 z-50 font-poppins shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-24">
                    {/* Logo and Brand */}
                    <div className="flex-shrink-0 ">
                        <Link to="/" className="block">
                            <img
                                src="/assets/logo.jpg"
                                alt="CricPay Logo"
                                className="w-auto  h-20 lg:h-24 object-contain transition-all duration-200"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex md:items-center md:space-x-4 lg:space-x-6">
                        <div className="flex items-center space-x-4 lg:space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`transition-colors duration-200 md:text-base lg:text-lg ${isActive(item.path)
                                            ? 'text-[#920323] font-semibold'
                                            : 'text-gray-700 hover:text-[#920323]'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Others Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-gray-700 hover:text-[#920323] transition-colors duration-200 text-base lg:text-lg">
                                    Others
                                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 
                                    transform opacity-0 invisible scale-95 
                                    group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                                    transition-all duration-200 ease-out origin-top-left z-50 p-2">
                                    <div className="py-2">
                                        {othersSubItems.map((item) => (
                                            <Link
                                                key={item.label}
                                                to={item.path}
                                                className="block px-4 py-2 text-sm rounded-md lg:text-base transition-colors duration-150"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link to="/newsletter">
                                <button className="border-[1px] border-[#e9345b] bg-transparent text-[#e9345b] px-4 py-2 rounded-full text-lg hover:bg-[#e9345b] hover:text-white transition-all duration-300">
                                    Get in Touch
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button and CTA */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        <button
                            onClick={() => navigate("/newsletter")}
                            className="border-2 border-[#920323]/40 bg-[#e9345b] text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-opacity-70 transition-all duration-200"
                        >
                            Get in touch
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-gray-600 p-2 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`fixed inset-0 bg-white bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMenu}>
                <div
                    className={`fixed right-0 top-0 h-full w-64 bg-[#ffff] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-end p-4">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 hover:text-gray-500 p-2"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-1 px-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`px-4 py-2 text-base font-medium transition-colors duration-200 ${isActive(item.path)
                                            ? 'text-[#920323] font-semibold'
                                            : 'text-gray-700 hover:text-gray-500'
                                        }`}
                                    onClick={toggleMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile Others Items */}
                            <div className="px-4 py-2">
                                <p className="text-gray-300 font-medium mb-2">Others</p>
                                {othersSubItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className="block text-gray-400 hover:text-white py-2 pl-4 text-sm transition-colors duration-200"
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;