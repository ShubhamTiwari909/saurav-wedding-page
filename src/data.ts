export interface WeddingEvent {
	id: string;
	dateLabel: string;
	title: string;
	description: string;
	time: string;
	venue: string;
	address: string;
	mapsUrl: string;
	image: string;
	imageAlt: string;
}

export const weddingData = {
	hero: {
		eyebrow: 'Together with our families',
		title: 'Sourav & Kajal',
		message: 'Request the pleasure of your company',
		date: '10—13 December 2027',
		image:
			'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=85',
	},
	invitation: {
		kicker: 'A celebration of love',
		message:
			'Invite you to celebrate the beginning of our forever, surrounded by the people who make our story complete.',
		date: '10—13 December 2027',
		location: 'Gandhinagar & Ahmedabad',
	},
	events: [
		{
			id: 'sangeet',
			dateLabel: 'Thursday, 10 December',
			title: 'Sangeet Sandhya',
			description: 'An evening of music, raas and garba.',
			time: '6:00 pm onwards',
			venue: 'Jiviba Party Plot',
			address: 'Koba, Gandhinagar',
			mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jiviba+Party+Plot+Koba+Gandhinagar',
			image:
				'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=82',
			imageAlt: 'Warmly lit wedding celebration with floral decorations',
		},
		{
			id: 'rituals',
			dateLabel: 'Friday, 11 December',
			title: 'Wedding Rituals',
			description: 'Traditional ceremonies at home, with family.',
			time: '1:00 pm onwards',
			venue: 'At our home',
			address: '2/A Saraswatinagar Society, opposite K.R. Raval School, Ranip, Ahmedabad',
			mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2%2FA+Saraswatinagar+Society+Ranip+Ahmedabad',
			image:
				'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=82',
			imageAlt: 'Delicate flowers and traditional wedding details',
		},
		{
			id: 'wedding',
			dateLabel: 'Saturday, 12 December',
			title: 'The Wedding',
			description: 'With your blessings, we begin our forever.',
			time: '5:00 pm onwards',
			venue: 'Rasleela Party Plot',
			address: 'Nikol, Ahmedabad',
			mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rasleela+Party+Plot+Nikol+Ahmedabad',
			image:
				'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2200&q=85',
			imageAlt: 'Indian Hindu wedding ceremony with traditional floral details',
		},
		{
			id: 'reception',
			dateLabel: 'Sunday, 13 December',
			title: 'Reception',
			description: 'An evening to celebrate with the newlyweds.',
			time: '6:30 pm onwards',
			venue: 'Madhuvan Party Plot',
			address: 'Koba, Gandhinagar',
			mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Madhuvan+Party+Plot+Koba+Gandhinagar',
			image:
				'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=82',
			imageAlt: 'Elegant evening table set for a wedding reception',
		},
	] satisfies WeddingEvent[],
	closing: {
		message: 'Do come. These days will not be the same without you.',
		signOff: 'With love,',
		names: 'Sourav & Kajal',
	},
};
