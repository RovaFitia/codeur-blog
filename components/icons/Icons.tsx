type IconProps = React.SVGProps<SVGSVGElement>;

const Icons = {
	twitter: (props: IconProps) => (
		<svg 
			{...props}
			xmlns="http://www.w3.org/2000/svg" 
			width="32" 
			height="32" 
			viewBox="0 0 24 24"
		>
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"/>
		</svg>

	), 
	github: (props: IconProps) => (
		<svg 
			{...props}
			xmlns="http://www.w3.org/2000/svg" 
			width="32" 
			height="32" 
			viewBox="0 0 24 24"
		>
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
		</svg>
	),
	discord: (props: IconProps) => (
		<svg 
			{...props}
			xmlns="http://www.w3.org/2000/svg" 
			width="32" 
			height="32" 
			viewBox="0 0 24 24"
		>
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0a9 9 0 0 1-9 9M34 12a10 10 0 1 0 10 10A10 10 0 0 0 34 12"/>
		</svg>
	),	
}

export default Icons