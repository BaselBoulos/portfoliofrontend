import axios from 'axios'

export const contactService = {
	contact
}

async function contact(info) {
	try {
		return await axios.post(`https://baselportfoliobackend.herokuapp.com/backend/contact-me/`, info)
	} catch (error) {
		console.log(error)
		return error
	}
}
