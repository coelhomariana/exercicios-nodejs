const hoje = new Date();

const natal = new Date(2020, 11, 25, 0, 0, 0);

msProNatal = natal - hoje;

const diasProNatal = msProNatal / 1000 / 60 / 60 / 24;

console.log("Faltam", diasProNatal.toFixed(0), "dias para o natal.");
