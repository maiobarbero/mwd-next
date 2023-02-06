import fs from 'fs'
import matter from 'gray-matter'
import { DateTime } from 'luxon'
import { PostMetadata } from '@/components/PostInterfaces'

export const getPosts = (limit: number = -1): PostMetadata[] => {
	const dir = 'posts'
	const files = fs.readdirSync(dir)
	const markdownPosts = files.filter(post => post.endsWith('.mdx'))

	if (limit === -1) limit = markdownPosts.length

	const posts = markdownPosts
		.map(filename => {
			const fileContents = fs.readFileSync(`posts/${filename}`, 'utf-8')
			const matterResult = matter(fileContents)

			return {
				slug: filename.replace('.mdx', ''),
				title: matterResult.data.title,
				excerpt: matterResult.data.excerpt,
				date: matterResult.data.date,
				tags: matterResult.data.tags,
				locale: matterResult.data.locale,
			}
		})
		.sort((a, b) => {
			const beforeDate = DateTime.fromFormat(a.date, 'm-d-yyyy')
			const afterDate = DateTime.fromFormat(b.date, 'm-d-yyyy')
			return +afterDate - +beforeDate
		})
		.filter((p, idx) => idx < limit)

	return posts
}

export default getPosts