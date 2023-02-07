import Link from 'next/link'
import Image from 'next/image'
import MaioBarberoIcon from '@/public/maiobarbero-icon.png'

const Navbar = () => {
	return (
		<nav className='flex h-12 items-center py-8 px-16 justify-between my-8'>
			<Link href='/' className=' flex gap-1 items-center'>
				<Image
					src={MaioBarberoIcon}
					alt='maiobarbero.dev'
					className='h-auto  w-28'
				/>
				<h1 className=' font-thin text-4xl '>
					<span className=' font-bold'>maio</span>barbero
					<span className=' font-thin text-yellow-600'>.dev</span>
				</h1>
			</Link>
			<div className=' uppercase font-semibold'>
				<Link href='/' className=' mr-12 hover:text-yellow-300 '>
					Home
				</Link>
				<Link href='/' className=' mr-12 hover:text-yellow-300 '>
					About
				</Link>
				<Link href='/blog' className=' hover:text-yellow-300 '>
					Blog
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
