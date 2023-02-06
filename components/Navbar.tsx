import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='flex bg-gray-700 h-12 items-center p-5'>
			<Link href='/' className='text-white bold mr-4'>
				Home
			</Link>
			<Link href='/blog' className='text-white bold mr-4'>
				Blog
			</Link>
		</nav>
	)
}

export default Navbar
