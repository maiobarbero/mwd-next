import { remark } from 'remark'
import html from 'remark-html'
import getPosts from '@/components/utils/getPosts'
import getPostContent from '@/components/utils/getPostContent'
import { PostParams } from '@/components/PostInterfaces'

export const generateStaticParams = async () => {
	const posts = getPosts()
	return posts.map(post => ({
		slug: post.slug,
	}))
}

export default async function Post({ params }: PostParams) {
	const { slug } = params
	const post = getPostContent(slug)
	const processedContent = await remark().use(html).process(post.content)
	const contentHtml = processedContent.toString()
	console.log(post)
	return (
		<main className='container mx-auto'>
			<h1 className='text-2xl'>{post.data.title}</h1>
			<div className='flex'>
				{post.data.tags.map((tag: string) => (
					<p key={tag} className='mr-3 mt-4'>
						{tag}
					</p>
				))}
			</div>
			<p className='text-gray-600 mt-4'>
				Published on <span>{post.data.date}</span>
			</p>
			<div dangerouslySetInnerHTML={{ __html: contentHtml }} className='mt-4' />
		</main>
	)
}
