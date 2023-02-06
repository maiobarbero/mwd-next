import fs from 'fs'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'

export const getPostContent = (slug: string) => {
	const dir = 'posts'
	const file = `${dir}/${slug}.mdx`

	try {
		const content = fs.readFileSync(file, 'utf-8')
		const matterResult = matter(content)
		return matterResult
	} catch (error) {
		notFound()
	}
}
export default getPostContent
