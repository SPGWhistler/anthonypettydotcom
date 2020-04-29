import '../assets/styles/styles.css';
import '../assets/styles/prism.css';
import '../prism';

export default class AnthonyPetty {
	constructor() {
		const fullName = 'Anthony Petty';
		const address = '1472 Hertel, Rear Upper, Buffalo, NY 14216';
		const phoneNumber = '716-489-8669';
		const eMail = 'SPGWhistler@gmail.com';
		const website = 'anthonypetty.com';
		const currentTitle = 'Team Lead at Synacor';
		const lastUpdated = BUILDTIME;

		this.createGetters([{
			name: 'ContactInfo',
			defaultValue: {fullName, address, phoneNumber, eMail, website, currentTitle, lastUpdated}
		}, {
			name: 'Summary',
			defaultValue: ``
		}, {
			name: 'AboutCurrentPosition',
			defaultValue: [
				`As an Engineering Team Lead on the Search and Advertising team,
				I guide my employees and coworkers to make the best technical decisions
				and produce the highest quality products possible given stringent requirements,
				tight deadlines, and minimal resources. I help coach my employees in their career
				decisions as well as every day challenges. In addition, it is my responsibility
				to guide business decisions, produce product documentation, and interface with
				other teams, clients, and third party vendors.`,

				`I architected and continue to support Synacor's ad products, which serve
				millions of ads a day to hundreds of millions of users. I also architected
				Synacor's search products, which provide the bulk of Synacor's revenue.`,

				`As a team lead at Synacor, it is my responsibility to understand our technical
				stack from top to bottom, be knowledgable about the direction the business is
				headed, keep my team on track delivering high quality code consistently week in
				and week out, and be available 24/7 to solve any problems that arise along the way.`,

				`I have a proven track record spanning over a decade and I'm known to be dependable,
				honest, hardworking, knowledgeable, and above all, fun to work with.`
			]
		}, {
			name: 'WorkExperience',
			defaultValue: ``
		}, {
			name: 'Education',
			defaultValue: 'Oakridge High School, 1997-2001'
		}]);

		this.outputSite();
	}
	outputSite() {
		for(const property in this) {
			const sectionName = property.split(/(?=[A-Z])/).join(' ');
			console.log(sectionName);
			console.log(this[property]);
		}
	}
	createGetters(properties) {
		let newProps = {};
		properties.forEach((property) => {
			newProps[property.name] = {
				enumerable: true, writeable: false,
				get: (({name, defaultValue}) => {
					let _name = '_' + name;
					return () => !(`_${name}` in this) ? defaultValue : this[_name];
				})(property)
			};
		});
		Object.defineProperties(this, newProps);
	}
}