import { json } from '@sveltejs/kit';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import type { User } from 'firebase/auth';
import { user } from '../stores';
let currentUser: User | undefined;
user.subscribe((value) => {
	currentUser = value?.user;
});
const postsDbRef = collection(db, 'Posts');
async function getPostsFromFirebase() {
	const querySnapshot = await getDocs(postsDbRef);
	/** @type {any} */
	let queriedPosts:any = [];
	querySnapshot.forEach((doc) => {
		const response = doc.data();
		console.log(response.date);
		const el = {
			id: doc.id,
			likes: response.likes,
			text: response.text,
			date: response.date,
			title: response.title,
			username: response.username
		};
		queriedPosts.push(el);
	});
	posts = queriedPosts;
	return queriedPosts;
}

let posts:any = [];
export async function load() {
	console.log('loading...');
	if (posts.length === 0) {
		posts = getPostsFromFirebase();
	}
	return await {
		posts: posts
	};
}
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }:any) => {
		const data = await request.formData();
		const text = data.get('postForm');
		const title = data.get('title');
		const date = new Date().toDateString();
		let response = { text: text, date: date, title: title };
		const docRef = await addDoc(postsDbRef, response);
		posts.push(response);
		return { posts: posts };
	}
};
