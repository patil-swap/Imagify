import credit_star from './credit_star.svg'
import cross_icon from './cross_icon.svg'
import download_icon from './download_icon.svg'
import email_icon from './email_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import lock_icon from './lock_icon.svg'
import logo from './logo.svg'
import logo1 from './logo.png'
import profile_icon from './profile_icon.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import react from './react.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_3 from './sample_img_3.png'
import star_group from './star_group.png'
import star_icon from './star_icon.svg'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import twitter_icon from './twitter_icon.svg'

export const assets = {
	credit_star,
	cross_icon,
	download_icon,
	email_icon,
	facebook_icon,
	instagram_icon,
	lock_icon,
	logo,
	logo1,
	profile_icon,
	profile_img_1,
	profile_img_2,
	react,
	sample_img_1,
	sample_img_2,
	sample_img_3,
	star_group,
	star_icon,
	step_icon_1,
	step_icon_2,
	step_icon_3,
	twitter_icon
}

export const stepsData = [
	{
		title: 'Describe your vision',
		description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
		icon: step_icon_1,
	},
	{
		title: 'Watch the Magic',
		description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds',
		icon: step_icon_2,
	},
	{
		title: 'Download & Share',
		description: 'Instantly download your creation or share it with the world directly from our platform',
		icon: step_icon_3,
	}
]

export const testimonialsData = [
	{
		image: profile_img_1,
		name: 'Donald Jackman',
		role: 'Graphic Designer',
		stars: 5,
		text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
	},
	{
		image: profile_img_2,
		name: 'Richard Nelson',
		role: 'Content Creator',
		stars: 5,
		text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
	},
	{
		image: profile_img_2,
		name: 'Richard Nelson',
		role: 'Content Creator',
		stars: 5,
		text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
	}
]

export const plans = [
	{
		id: 'Basic',
		price: 10,
		credits: 100,
		desc: 'Best for personal use.'
	},
	{
		id: 'Advanced',
		price: 50,
		credits: 500,
		desc: 'Best for business use.'
	},
	{
		id: 'Business',
		price: 250,
		credits: 5000,
		desc: 'Best for enterprise use.'
	}
]