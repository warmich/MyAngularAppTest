import { Skill } from './skill';

export const SKILLS: Skill[] = [
	{
		id!: 1,
		name!: "Angular",
		Description!: "Angular description or^re re eerreg zegegre egrezrgzer egzer zerzere ererferf erferfe",
		subSkills!: ["Components", "Modules", "Styles", "Services"],
		category!: { categoryId: 1, categoryName: ["HardSkill", "Front-End"] },
		picture!: "https://img2.freepng.fr/20180613/ghl/kisspng-angularjs-web-application-web-development-javascri-app-element-5b2126f82c6d18.654722331528899320182.jpg",
		evaluation!: 3.5,
		certificate!: true,
		startDate!: new Date("2021-11-01")
	},
	{
		id!: 2,
		name!: "C#",
		Description!: "C-Sharp description or^re re eerreg zegegre egrezrgzer egzer zerzere ererferf erferfe",
		subSkills!: ["Méthodes", "Class", "Linq"],
		category!: { categoryId: 2, categoryName: ["HardSkill", "Back-End"] },
		picture!: "https://img2.freepng.fr/20180613/ghl/kisspng-angularjs-web-application-web-development-javascri-app-element-5b2126f82c6d18.654722331528899320182.jpg",
		evaluation!: 4,
		certificate!: true,
		startDate!: new Date("2021-07-01")
	},
	{
		id!: 3,
		name!: "SqlExpress",
		Description!: "Sql Express description or^re re eerreg zegegre egrezrgzer egzer zerzere ererferf erferfe",
		subSkills!: ["Scaffolding", "Requêtes", "Get / Post / Put", "Services"],
		category!: { categoryId: 3, categoryName: ["HardSkill", "Data-Base"] },
		picture!: "https://img2.freepng.fr/20180805/hrv/kisspng-microsoft-sql-server-database-microsoft-corporatio-5b67a38ea0d200.1904198415335187346587.jpg",
		evaluation!: 3,
		certificate!: true,
		startDate!: new Date("2021-10-01")
	},
];