console.log(`Trabalhando com listas`);

console.log(`Cidades que já visitei`);

const bombinhas = `Bombinhas`;
const saoLuis = `São Luís`;
const ribeiraoPreto = `Ribeirão Preto`;
const lapa = `Lapa`;
const morretes = `Morretes`;

console.log(bombinhas, saoLuis, ribeiraoPreto, lapa, morretes);

const cidadesQueJaVisitei = new Array(
  `Bombinhas`,
  `São Luís`,
  `Ribeirão Preto`,
  `Lapa`,
  `Morretes`
);

cidadesQueJaVisitei.push(`Dois Vizinhos`);

console.log(`cidadesQueJaVisitei`);

console.log(`A cidade mais linda`);
console.log(cidadesQueJaVisitei[3]);

console.log(`Meus amigos me disseram que eu nunca fui para Lapa, eu estava bêbado e eles mentiram pra mim.`);

cidadesQueJaVisitei.splice(3, 0);

console.log(cidadesQueJaVisitei);

            