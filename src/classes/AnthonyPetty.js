export default class AnthonyPetty {
	constructor() {
		const fullName = 'Anthony Petty';
		const currentTitle = 'Team Lead at Synacor';
		const address = '65 Argyle Ave, Upper, Buffalo, NY 14226';
		const phoneNumber = '716-489-8669';
		const eMail = '<a href="mailto:anthony@anthonypetty.com">anthony@anthonypetty.com</a>';
		const website = '<a href="http://anthonypetty.com/">anthonypetty.com</a>';
		const gitHub = '<a href="https://github.com/SPGWhistler">GitHub</a>';

		this.createGetters([{
			name: 'ContactInfo',
			defaultValue: {fullName, currentTitle, address, phoneNumber, eMail, website, gitHub},
		}, {
			name: 'Summary',
			defaultValue:
				`Engineering Team Lead with a passion for solving problems using modern technologies,
				building highly scalable software, and doing it in a way that end users actually enjoy.`
		}, {
			name: 'Skills',
			defaultValue: [
				'Javascript (es20xx)', 'PHP', 'Git', 'MySQL', 'Node', 'Puppeteer', 'Selenium', 'Angular', 'Perl',
				'Bash', 'Zsh', 'EC2', 'Scrum', 'TDD', 'Apache', 'Graphite'
			],
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
			],
		}, {
			name: 'WorkExperience',
			defaultValue: [{
				company: 'Synacor, Inc',
				duration: '11 years (in total)',
				positions: [{
					title: 'Team Lead',
					duration: 'April 2018 - Present (2 years)',
					description: [
						`In addition to being the principal architect for several
						important products, individual contributor, and all other
						responsibilities of a Principal Engineer, I am now responsible
						for managing a small number of employees.`,

						`In my role as team lead, I provide career guidance, semi-annual
						and annual reviews, decision making, code reviews, business guidance,
						project planning, and many other responsibilities.`
					]
				}, {
					title: 'Principal Software Engineer',
					duration: 'February 2015 - April 2018 (3 years, 3 months)',
					description: [
						`Lead the S&A engineering team with making architectural decisions
						for our products, taking differing opinions into account.`,

						`Produce a high level of code quality via code reviews and technical guidelines,
						guiding teammates on best practices.`,

						`Develop and maintain product documentation and testing guidelines,
						as well as automated test suites and frameworks.`
					]
				}, {
					title: 'Senior Software Engineer',
					duration: 'November 2013 - February 2015 (1 year, 4 months)',
					description: [
						`Build and maintain the ads platform and search platform at Synacor using
						php, javascript, perl, and other software technolgies.`
					]
				}]
			},
			{
				company: 'Wylei, Inc',
				duration: '8 months',
				positions: [{
					title: 'Senior Engineer',
					duration: 'April 2013 - November 2013 (8 months)',
					description: [
						`As the only Senior Engineer at Wylei, I was responsible for a variety of
						areas including architecture, development, testing, and deployment of
						our core product: Wylei.js, technical support, maintenance, and development
						of legacy mobile products, as well as building and maintaining several
						mobile-first company websites.`,
						
						`My responsibilities covered most aspects of the software lifecycle:
						architecture and design, server setup (Amazon EC2 and IIS), software
						stack (C#, PHP, node.js, and others), development (C#, PHP, and Javascript),
						deployment (git), and testing and maintenance (node.js and mocha).`
					]
				}]
			},{
				company: 'Synacor, Inc',
				duration: '11 years (in total)',
				positions: [{
					title: 'Senior Software Engineer',
					duration: 'Feburary 2012 - April 2013 (1 year, 3 months)',
					description: [
						`On the Search and Advertising team, I developed and maintained a
						Search Engine Results Page (SERP) which integrated results from Google,
						Ask, and several other vendors that generates tens of millions of dollars
						in revenue annually and gets millions of hits per month. I also developed
						the software that displayed and manages ads across 40+ portals and websites.`
					]
				}, {
					title: 'Software Engineer',
					duration: 'March 2009 - February 2012 (3 years)',
					description: [
						`Designed SERP 2.0. Interfaced with other teams and rebuilt Synacor's advertising infrastructure.`
					]
				}]
			},{
				company: 'Stock20.com',
				duration: '4 years',
				positions: [{
					title: 'Web Developer',
					duration: 'May 2005 - March 2009 (3 years, 11 months)',
					description: [
						`Built and maintained a stock music website which served as a hub for
						thousands of media professionals worldwide and allowed them to purchase,
						download, and manage a library of hundreds of songs. Additionally, it allowed
						them to manage their license agreement documentation for each of those songs.`
					]
				}]
			}]
		}, {
			name: 'Education',
			defaultValue: 'Oakridge High School, 1997-2001'
		}]);

		this.outputSite();
	}
	outputSite() {
		let html = '';
		for(const property in this) {
			let val = this[property];
			html += outputHelper.output(property, val);
		}
		outputHelper.renderElements(html);
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

import '../assets/styles/styles.css';
import '../assets/styles/prism.css';
import '../prism';
import OutputHelper from './OutputHelper';
const outputHelper = new OutputHelper();
