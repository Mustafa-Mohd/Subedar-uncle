import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: { '2xl': '1400px' }
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Nexlane palette
				copper: {
					DEFAULT: 'hsl(var(--copper))',
					light: 'hsl(var(--copper-light))',
					dark: 'hsl(var(--copper-dark))',
				},
				charcoal: {
					DEFAULT: 'hsl(var(--charcoal))',
					mid: 'hsl(var(--charcoal-mid))',
					soft: 'hsl(var(--charcoal-soft))',
				},
				ivory: {
					DEFAULT: 'hsl(var(--ivory))',
					dark: 'hsl(var(--ivory-dark))',
				},
				sage: {
					DEFAULT: 'hsl(var(--sage))',
					light: 'hsl(var(--sage-light))',
				},
			},
			fontFamily: {
				display: ['Cormorant Garamond', 'serif'],
				body: ['DM Sans', 'sans-serif'],
				grotesk: ['Space Grotesk', 'sans-serif'],
				sans: ['DM Sans', 'sans-serif'],
				serif: ['Cormorant Garamond', 'serif'],
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-copper': 'var(--gradient-copper)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-overlay': 'var(--gradient-overlay-hero)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'hard': 'var(--shadow-hard)',
				'copper': 'var(--shadow-copper)',
				'glow': 'var(--shadow-glow)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
				'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
