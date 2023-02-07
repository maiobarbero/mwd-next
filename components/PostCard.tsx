import Link from 'next/link'
import Image from 'next/image'
import DummyImg from '@/public/dummy.jpg'

interface Props {
	title: string
	excerpt: string
	slug: string
}
const PostCard = ({ title, excerpt, slug }: Props) => {
	return (
		<Link
			href={`blog/${slug}`}
			key={slug}
			className='rounded-3xl shadow-xl mb-4 bg-haliteBlue-200 dark:bg-haliteBlue-900 hover:bg-haliteBlue-600 dark:hover:bg-haliteBlue-600 text-white w-full overflow-hidden'
		>
			<Image
				src={DummyImg}
				alt={title}
				placeholder='blur'
				className=' mb-2 h-48 w-full overflow-hidden'
			/>
			<div className='px-6 py-6'>
				<h3 className=' font-bold text-2xl text-ellipsis'>{title}</h3>
				<p className=' text-base'>{excerpt}</p>
			</div>
		</Link>
	)
}
export default PostCard
