import { Skill } from './skill';

export const SKILLS: Skill[] = [
	{
		id!: 1,
		name!: "Angular",
		description!: "Angular description or^re re eerreg zegegre egrezrgzer egzer zerzere ererferf erferfe",
		subSkills!: ["Components", "Modules", "Styles", "Services"],
		category!: { categoryId: 1, categoryName: ["HardSkill", "Front-End"] },
		picture!: "https://www.pngrepo.com/png/303230/180/angular-icon-logo.png",
		evaluation!: 3.5,
		certificate!: true,
		startDate!: new Date("2021-11-01")
	},
	{
		id!: 2,
		name!: "C#",
		description!: "C-Sharp description or^re re eerreg zegegre egrezrgzer egzer zerzere ererferf erferfe",
		subSkills!: ["Méthodes", "Class", "Linq"],
		category!: { categoryId: 2, categoryName: ["HardSkill", "Back-End"] },
		picture!: "https://www.pngrepo.com/png/353622/180/c-sharp.png",
		evaluation!: 4,
		certificate!: true,
		startDate!: new Date("2021-07-01")
	},
	{
		id!: 3,
		name!: "SqlExpress",
		description!: "Sql Express description or^re re eerreg zegegre egrezrgzer egzer zerzere ererferf erferfe",
		subSkills!: ["Scaffolding", "Requêtes", "Get / Post / Put", "Services"],
		category!: { categoryId: 3, categoryName: ["HardSkill", "Data-Base"] },
		picture!: "https://www.pngrepo.com/png/303229/180/microsoft-sql-server-logo.png",
		evaluation!: 3,
		certificate!: true,
		startDate!: new Date("2021-10-01")
	},
];