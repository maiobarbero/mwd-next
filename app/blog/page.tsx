import PostCard from '@/components/PostCard'
import { PostClass } from '@/components/utils/PostClass'

export default function Blog() {
	const PostHelper = new PostClass()
	const posts = PostHelper.getAllPosts(6)

	return (
		<main>
			<h1 className='text-white'>BLOG ARCHIVE</h1>
			<div className='container my-12 mx-auto px-4 md:px-12'>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{posts.map(post => (
						<PostCard
							title={post.title}
							excerpt={post.excerpt}
							slug={post.slug}
							key={post.slug}
						/>
					))}
				</div>
			</div>
		</main>
	)
}
