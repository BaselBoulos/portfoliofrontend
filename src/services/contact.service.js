import axios from 'axios'

export const contactService = {
	contact
}

async function contact(info) {
	try {
		await axios.post(`http://127.0.0.1:8000/backend/contact-me/`, info)
	} catch (error) {
		console.log()
	}
}
