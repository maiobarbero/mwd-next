import { getPosts } from '@/components/utils/getPosts'
import Link from 'next/link'

export default function Blog() {
	const posts = getPosts()

	return (
		<main>
			<h1>BLOG ARCHIVE</h1>
			<ul>
				{posts.map(post => (
					<Link href={`blog/${post.slug}`} key={post.slug}>
						<li>
							{post.title} - {post.date}
						</li>
					</Link>
				))}
			</ul>
		</main>
	)
}
