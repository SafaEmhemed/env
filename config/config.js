const config = Object.freeze({
	environment: process.env.NODE_ENV || 'development',
	theme: 'default',
	server: {
		host: 'localhost',
		port: process.env.NODE_PORT || process.env.PORT || 4000
	},
	// the very top menu
	topMenu: [
		{
			title: 'blog',
			href: '#',
			icon: 'base/Blog'
		},
		{
			title: 'hierarchy',
			href: '#',
			icon: 'base/Tree'
		},
		{
			title: 'directory',
			href: '#',
			icon: 'base/Catalog'
		},
		{
			title: 'my_uot',
			href: '#',
			icon: 'base/Inherit'
		}
	],
	mainMenu: [
		{
			title: 'About',
			href: '#about'
		},
		{
			title: 'Researches',
			href: '#researches'
		},
		{
			title: 'Admission',
			href: '#admission'
		},
		{
			title: 'Programs',
			href: '#programs'
		}
	],
	sections: [
		{
			name: 'news'
		},
		{
			name: 'admission'
		},
		{
			name: 'about'
		},
		{
			name: 'map'
		}
	],
	homepage: {
		// Sticky menu
		menu: [
			{
				title: 'news',
				href: 'news'
			},
			{
				title: 'admission',
				href: 'admission'
			},
			{
				title: 'about',
				href: 'about'
			}
		],
		statistics: [
			{
				name: 'students',
				max: 100000,
				value: 70000
			},
			{
				name: 'faculties',
				max: 30,
				value: 19
			},
			{
				name: 'programs',
				max: 120,
				value: 60
			},
			{
				name: 'postgraduate',
				max: 10000,
				value: 4000
			}
		],
		news: [
			{
				title: 'Eighty-year journey',
				text: 'The forum was attended by the President of the University of Tripoli, the Vice Dean for Scientific Affairs, the Dean of the Faculty of Arts, and a number of members of the Faculty of Arts. And the students and students of the University of Tripoli, in addition to a collection of lovers of the poet Dr. Baghdadi, the President of the University delivered a speech on this occasion alive poet Dr. Al-Baghdadi, and recounted some of the positions that have occurred, and this forum comes within the interest of the University of Tripoli to honor all creators N in various fields.',
				image: 'uploads/news/pic02.jpg'
			},
			{
				title: 'Participation of the University of Tripoli in the anti-drug celebration Participation of the University of Tripoli in the anti-drug celebration',
				text: 'The President of the University of Tripoli, accompanied by the Vice Dean for Scientific Affairs, the Dean of the Faculty of Engineering and the Director of the Legal Office participated in the celebration organized by the General Directorate for Combating Drugs and Psychotropic Substances in the Ministry of Interior. , And the University thanks the Minister of the Interior and the Director General of the Department and staff for their continuous efforts to reduce this phenomenon.',
				image: 'uploads/news/pic01.jpg'
			},
			{
				title: 'Participation of the University of Tripoli in the anti-drug celebration',
				text: 'The President of the University of Tripoli, accompanied by the Vice Dean for Scientific Affairs, the Dean of the Faculty of Engineering and the Director of the Legal Office participated in the celebration organized by the General Directorate for Combating Drugs and Psychotropic Substances in the Ministry of Interior. , And the University thanks the Minister of the Interior and the Director General of the Department and staff for their continuous efforts to reduce this phenomenon.',
				image: 'uploads/news/pic03.jpg'
			},
			{
				title: 'The ninth meeting of the study and examination committee at the University of Tripoli',
				text: 'The ninth meeting of the university study and examination committee for the academic year 2016/2017 was held on Tuesday morning, 11/7/2017. The meeting was attended by the Assistant Undersecretary for Student Affairs at the university, a member of the committee to raise the classification of the University of Tripoli, the Coordinator of Medical Economics, The meeting discussed the latest work of the Committee for the inventory and organization of scientific publications, and the mechanism of passing examinations for the academic year 2017/2018, in addition to reviewing the progress of exams for this year. The mechanism of appeals of colleges was also discussed. They are accompanied by a member of the Committee of Classifications, the latest suggestions of the Committee on upgrading the classification of the University of Tripoli.',
				image: 'uploads/news/pic04.jpg'
			}
		]
	},
	slider: {
		settings:{
			adaptiveHeight: false,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 5000,
			centerMode: false,
			swipe: true,
			dots: true,
			lazyLoad: true,
			infinite: true
		},
		images: [
			{
				link: '#',
				image: '/images/slider/1.jpg'
			},
			{
				link: '#',
				image: '/images/slider/2.jpg'
			}
		]
	},
	social: {
		facebook: {
			href: 'https://www.facebook.com/uot.edu.ly'
		},
		gplus: {
			href: 'https://plus.google.com/u/0/114099724975540999923'
		},
		linkedin: {
			href: 'https://www.linkedin.com/school/15102037/'
		},
		twitter: {
			href: 'https://twitter.com/UOTlibya'
		},

		instagram: {
			href: 'https://www.instagram.com/universityoftripoli/'
		},
		flickr: {
			href: 'http://www.flickr.com/photos/university-of-tripoli/'
		},
		'youtube-1': {
			href: 'https://www.youtube.com/channel/UC2FyeWM1NZdbVRf8HgoIppQ'
		},
		rss: {
			href: '#'
		}
	}
});

export default config;
