export default {
    content: [    "./index.html","./src/**/*.{html,js,tsx,mdx,jsx,ts}"],
    theme: {

        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },

            keyframes: {
                'background-shine': {
                    from: {
                        backgroundPosition: '0 0'
                    },
                    to: {
                        backgroundPosition: '-200% 0'
                    }
                },
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%'
                    }
                },
                'logo-cloud': {
                    from: {
                        transform: 'translateX(0)'
                    },
                    to: {
                        transform: 'translateX(calc(-100% - 4rem))'
                    }
                },
                orbit: {
                    '0%': {
                        transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
                    },
                    '100%': {
                        transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
                    }
                },
                gradient: {
                    to: {
                        backgroundPosition: 'var(--bg-size) 0'
                    }
                },
                shimmer: {
                    '0%, 90%, 100%': {
                        'background-position': 'calc(-100% - var(--shimmer-width)) 0'
                    },
                    '30%, 60%': {
                        'background-position': 'calc(100% + var(--shimmer-width)) 0'
                    }
                },
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                buttonheartbeat: {
                    '0%': {
                        'box-shadow': '0 0 0 0 theme("colors.blue.500")',
                        transform: 'scale(1)'
                    },
                    '50%': {
                        'box-shadow': '0 0 0 7px theme("colors.blue.500/0")',
                        transform: 'scale(1.05)'
                    },
                    '100%': {
                        'box-shadow': '0 0 0 0 theme("colors.blue.500/0")',
                        transform: 'scale(1)'
                    }
                },
                'image-glow': {
                    '0%': {
                        opacity: '0',
                        'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)'
                    },
                    '10%': {
                        opacity: '0.7',
                        'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)'
                    },
                    '100%': {
                        opacity: '0.4'
                    }
                },
                'fade-in': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'none'
                    }
                },
                'fade-up': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'none'
                    }
                },
                marquee: {
                    from: {
                        transform: 'translateX(0)'
                    },
                    to: {
                        transform: 'translateX(calc(-100% - var(--gap)))'
                    }
                },
                'marquee-vertical': {
                    from: {
                        transform: 'translateY(0)'
                    },
                    to: {
                        transform: 'translateY(calc(-100% - var(--gap)))'
                    }
                },
                'shiny-text': {
                    '0%, 90%, 100%': {
                        'background-position': 'calc(-100% - var(--shiny-width)) 0'
                    },
                    '30%, 60%': {
                        'background-position': 'calc(100% + var(--shiny-width)) 0'
                    }
                },
                pulse: {
                    '0%, 100%': {
                        boxShadow: '0 0 0 0 var(--pulse-color)'
                    },
                    '50%': {
                        boxShadow: '0 0 0 8px var(--pulse-color)'
                    }
                },
                'collapsible-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-collapsible-content-height)'
                    }
                },
                'collapsible-up': {
                    from: {
                        height: 'var(--radix-collapsible-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                'float-up-down': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                },
                'slide-in-left': {
                    '0%': {
                        transform: 'translateX(-100%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: '1'
                    }
                },
                'slide-in-bottom': {
                    '0%': {
                        transform: 'translateY(100%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    }
                },
                'flip-in': {
                    '0%': {
                        transform: 'rotateY(-180deg)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'rotateY(0)',
                        opacity: '1'
                    }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                flip: {
                    '0%': { transform: 'rotateY(-180deg)' },
                    '100%': { transform: 'rotateY(0)' },
                },
            },
            animation: {
                'logo-cloud': 'logo-cloud 30s linear infinite',
                orbit: 'orbit calc(var(--duration)*1s) linear infinite',
                gradient: 'gradient 8s linear infinite',
                shimmer: 'shimmer 8s infinite',
                buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
                'background-shine': 'background-shine 2s linear infinite',
                'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
                'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
                'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
                marquee: 'marquee var(--duration) infinite linear',
                'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
                'shiny-text': 'shiny-text 8s infinite',
                pulse: 'pulse var(--duration) ease-out infinite',
                'collapsible-down': 'collapsible-down 0.2s ease-out',
                'collapsible-up': 'collapsible-up 0.2s ease-out',
                'bounce-slow': 'bounce 2s infinite ease-in-out',
                'float': 'float-up-down 2s ease-in-out infinite',
                'slide-left': 'slide-in-left 1s ease-out',
                'slide-bottom': 'slide-in-bottom 1s ease-out',
                'flip': 'flip-in 0.5s ease-out',
                'fade-in-up': 'fadeInUp 1s ease-out',
                'slide-in-right': 'slideInRight 0.8s ease-out',
                'slide-in-left': 'slideInLeft 0.8s ease-out',
            }
        }

    },
    plugins: [require("tailwindcss-animate")],
};
