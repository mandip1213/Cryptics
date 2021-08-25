import david from "../images/david.jpg";
import amrit from "../images/amrit.JPG";
import kushal from "../images/kushal.jpg"
import aavash from "../images/aavash.jpg"
import src from "../images/profile.png"


const personalData = [

	{
		name: "Aavash Chhetri",
		id: 1,
		media: {

			linkedin: "https://www.linkedin.com/in/aavash-chhetri-319977204/",
			github: "https://github.com/A-atmos",
		},
		image: aavash

	},
	{
		name: "Amrit Sharma",
		id: 2,

		media: {
			linkedin: "https://www.linkedin.com/in/aavash-chhetri-319977204/",
			github: "https://github.com/Amrit99999",
		},
		image: amrit || src

	},
	{
		name: "David Gurung",
		id: 3,
		media: {
			facebook: "https://www.facebook.com/david.gurung.501151/",
			github: "https://github.com/gurungdavid",
		},
		image: david

	},
	{
		name: "Kushal poudel",
		id: 4,
		media: {
			facebook: "https://www.facebook.com/kushal.paudel.35/",
			github: "https://github.com/Kushal576",
		},
		image: kushal

	},
	{
		name: "Mandip Thapa",
		id: 5,
		media: {
			linkedin: "https://www.linkedin.com/in/mandip-thapa-99655a211/",
			github: "https://github.com/mandip1213",
		},
		image: src

	},
]

export default personalData