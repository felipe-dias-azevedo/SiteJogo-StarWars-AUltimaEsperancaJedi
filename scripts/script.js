let volumesom = 0.75 // PADRAO = 0.7
som_intro.volume = volumesom - 0.1;
som_temaleia.volume = volumesom;
som_esperanca.volume = volumesom;
som_batalha.volume = volumesom;
som_imperial.volume = volumesom;
som_morte.volume = volumesom;
som_herois.volume = volumesom;
som_traicao.volume = volumesom;
som_final.volume = volumesom;
som_sabre1.volume = volumesom
som_sabre2.volume = volumesom
som_sabre3.volume = volumesom


// set up text to print, each item in array is new line
var textos_intro = ["Há muito tempo atrás numa galáxia muito, muito distante...", "",
    "Star Wars - A Última Esperança Jedi", "",
    "Durante o grande encontro do imperador da galáxia com a última esperança jedi que existia, Luke Skywalker ao se render na Estrela da Morte para seu pai, Darth Vader, acaba encontrando seu mestre sith, Darth sidious, que numa tentativa de reunir o grande poder do pai com o filho, requisita sua ida ao lado negro da força. Porém, Luke não quer ser o imperador da galáxia, ele deseja que o império acabe e seja estabelecida a paz na galáxia. Portanto, Luke decide que durante seu encontro com Darth Vader, ele iria dar um fim no império e assim matar seu pai e lorde sidious.",
    "Porém, ao Luke conhecer o mestre sith, Darth Sidious manda Vader para que matasse seu próprio filho. E durante uma intensa batalha de sabre de luzes, Luke é derrotado, e Vader ao ver seu próprio filho clamando por ajuda, vê o quanto é fraco, incapaz de se tornar um imperador digno que lute no lado negro da força e governe a galáxia ao lado do pai, então, Vader com seu sabre de luz, arranca a cabeça de Luke, impondo assim que não haverá nenhuma outra esperança jedi…", "",
    "Com a morte de Luke Skywalker durante a batalha na Estrela da Morte, seu espirito da força vai para a presença de sua irmã, Princesa Leia Organa, justamente porque Luke sabia que havia um outro jedi na galáxia, decidindo assim treinar o novo aprendiz a fim de acabar com o império sith que estava estabelecido na galáxia, ele descobrira que era justamente sua irmã.",
    "Leia está em uma nave, esperando notícias da Millenium Falcon sobre a missão de destruir a Estrela da Morte, até que então ela percebe a presença do espírito de Luke.", "",
    "- Olá querida irmã, tenho noticias a lhe dar.",
    "- Luke! O que houve com você? Porquê você está assim deste jeito…?",
    "- Não há muito tempo para explicar isto, temos que salvar a galáxia. Você deve realizar um treinamento jedi para poder acabar com o império de Vader, e eu serei seu mestre.",
	"", "", "botao1"];

var velocidadeEscrita = 50; // time delay of print out
// (50 é o padrão do jogo)
var inicio = 0; // start printing array at this posision
var tamanhotexto = textos_intro[0].length; // the length of the text array
var rodarAbaixo = 5; // start scrolling up at this many lines

var PosicaoTexto = 0; // initialise text position
var conteudo = ''; // initialise contents variable
var linhaAtual; // initialise current row


var finalespecial = 0;
var chancegolpe = 4; // probabilidade de acertar golpes
var vida = {
	leia: 100,
	espacoleia: 0,
	vader: 100,
	espacovader: 0,
	sidious: 100,
	espacosidious: 0
}

function escrever() {
    conteudo = ' ';
    linhaAtual = Math.max(0, inicio - rodarAbaixo);
    var destino = document.getElementById("historiaJogo");

    while (linhaAtual < inicio) {
        conteudo += textos_intro[linhaAtual++] + '<br />';
    }

    if (textos_intro[linhaAtual] == "botao1" || textos_intro[linhaAtual] == "botao2" || textos_intro[linhaAtual] == "botao3" || textos_intro[linhaAtual] == "botao4" || textos_intro[linhaAtual] == "botao5" || textos_intro[linhaAtual] == "botao6" || textos_intro[linhaAtual] == "fim") {
		if (textos_intro[linhaAtual] == "botao1") {
			destino.innerHTML = conteudo + '<div class="voceaceita">Você aceita?</div><div class="btnvoceaceita"><button onclick="parteumSIM()">Sim</button><button onclick="parteumNAO()">Não</button></div>';
		} else if (textos_intro[linhaAtual] == "botao2") {
			destino.innerHTML = conteudo + '<div class="voceaceita">Você tem a paciência necessária para o treinamento?</div><div class="btnvoceaceita"><button onclick="partedoisSIM()">Sim</button><button onclick="partedoisNAO()">Não</button></div>';
		} else if (textos_intro[linhaAtual] == "botao3") {
			destino.innerHTML = conteudo + '<div class="voceaceita">Inicie Batalha contra Darth Vader</div><div class="btnvoceaceita"><button onclick="parteTresvader()">Iniciar Batalha</button></div>';
		} else if (textos_intro[linhaAtual] == "botao4") {
			destino.innerHTML = conteudo + '<div class="voceaceita">O que você faz?</div><div class="btnvoceaceita"><button onclick="finalruim()">Aceita</button><button onclick="finalmorreu1()">Nega</button></div>';
		} else if (textos_intro[linhaAtual] == "botao5") {
			destino.innerHTML = conteudo + '<div class="voceaceita">O que você faz?</div><div class="btnvoceaceita"><button onclick="escolhaMatar()">Mata</button><button onclick="escolhaPerdoar()">Perdoa</button></div>';
		} else if (textos_intro[linhaAtual] == "botao6") {
			destino.innerHTML = conteudo + '<div class="voceaceita">Inicie Batalha contra Darth Sidious</div><div class="btnvoceaceita"><button onclick="parteTressidious()">Iniciar Batalha</button></div>';
		} else {
			destino.innerHTML = conteudo + '<div class="voceaceita">FIM</div>';
		}
    } else {
        destino.innerHTML = conteudo + textos_intro[inicio].substring(0, PosicaoTexto);
    }

    if (PosicaoTexto++ == tamanhotexto) {
        PosicaoTexto = 0;
        inicio++;
        if (inicio != textos_intro.length) {
            tamanhotexto = textos_intro[inicio].length;
            setTimeout("escrever()", 300);
        }
    } else {
        setTimeout("escrever()", velocidadeEscrita);
    }
}

function iniciar() {
	som_intro.play();
	escrever();
}

function parteumNAO() {
	chancegolpe--; // diminui chance de acerto
	textos_intro = [
		"- Não Luke, não estou preparada para isso… eu não acredito que eu possa ser um jedi, muito menos capaz de derrotar Vader, justo nosso próprio pai que foi capaz de matar você… Ele nem hesitaria em me matar também… eu acho que não consigo…",
		"- Irmã, a força em você é forte, eu a vejo, tenho esperança de que você seja capaz de derrotar Vader e estabelecer a paz na galáxia. Eu fui fraco, não consegui vencer a batalha, porém, através da força, eu sei que você será capaz de derrotá-lo!",
		"- Não será fácil… mas entendo que o destino da galáxia está em minhas mãos, e há somente uma única esperança de que alguém possa nos libertar das garras do império. Então… eu aceito, treine-me mestre Luke, para que eu possa me tornar um Jedi.",
		"- Certo, vá para Dagobah, você realizará o mesmo treinamento que eu tive.", "",
		"Porém Leia não soubera que a aliança rebelde havia perdido a batalha na estrela da morte, e após a morte de Luke, os rebeldes não foram capazes de encontrar o núcleo, o que impediu que eles fossem capazes de destrui-la, causando a derrota deles contra o império, massacrando grande parte dos rebeldes. Leia, desejando se tornar jedi, vai a Dagobah, para receber as devidas orientações para seu treinamento.",
		"Após sua chegada no planeta, Leia vê como o planeta é sombrio, e estranho, e não entende como Luke havia treinado ali...", "",
		"- Luke, estou aqui, por onde eu começo?",
		"- Muito bem, exatamente como pedi. Agora, você deve utilizar do ambiente para o seu treinamento...",
		"- O que você quer dizer com isto?",
		"- Para que você possa se tornar um jedi você deve saber controlar a força, aprender a como usá-la não é uma tarefa fácil, e para isto você deve utilizar do ambiente daqui.",
		"- Não vejo em como irei conseguir fazer isto...",
		"- Veja, você precisa ter controle para conseguir usar a força, ela está presente em toda a natureza, é por causa dela que as coisas funcionam, ela traz harmonia a tudo. Ter paciência é necessário para lidar com algo tão poderoso.", "", "", "botao2"
	];
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)
	// MUSICA - PRINCESS LEIA'S THEME (EP IV)
	som_temaleia.play();
	escrever();
}
function parteumSIM() {
	finalespecial++;
	textos_intro = [
		"- Sim, eu aceito, eu sou a ultima capaz de derrotar Vader, sou a última esperança que a galáxia possui e devo realizar o treinamento jedi para poder vencê-lo.",
		"- Ótimo, vá para Dagobah, você realizará o mesmo treinamento que eu tive.", "",
		"Porém Leia não soubera que a aliança rebelde havia perdido a batalha na estrela da morte, e após a morte de Luke, os rebeldes não foram capazes de encontrar o núcleo, o que impediu que eles fossem capazes de destrui-la, causando a derrota deles contra o império, massacrando grande parte dos rebeldes. Leia, desejando se tornar jedi, vai a Dagobah, para receber as devidas orientações para seu treinamento.",
		"Após sua chegada no planeta, Leia vê como o planeta é sombrio, e estranho, e não entende como Luke havia treinado ali...", "",
		"- Luke, estou aqui, mas por onde eu começo?",
		"- Muito bem, exatamente como pedi. Agora, você deve utilizar do ambiente para o seu treinamento...",
		"- O que você quer dizer com isto?",
		"- Para que você possa se tornar um jedi você deve saber controlar a força, aprender a como usá-la não é uma tarefa fácil, e para isto você deve utilizar do ambiente daqui.",
		"- Não vejo em como irei conseguir fazer isto...",
		"- Veja, você precisa ter controle para conseguir usar a força, ela está presente em toda a natureza, é por causa dela que as coisas funcionam, ela traz harmonia a tudo. Ter paciência é necessário para lidar com algo tão poderoso.", "", "", "botao2"
	];
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)
	// MUSICA - PRINCESS LEIA'S THEME (EP IV)
	som_temaleia.play();
	escrever();
};

function partedoisNAO() {
	chancegolpe--; // diminui chance de acerto
	textos_intro = [
		"- Mas... Luke, não há tempo suficiente para perdermos, a galáxia está prestes a perder esperança, e eu preciso salvá-los custe o que custar, este treinamento conta com a vida de milhares de povos que irão sofrer nas garras de Vader caso continue o império. Então não, eu não tenho paciência, eu preciso ganhar dele, o que é uma tarefa muito difícil, e eu não sei se sou capaz... O futuro depende mim...",
		"- Leia, você é a última esperança jedi que existe, e você é a minha irmã, meu dever é treinar você para que se torne um jedi capaz de vencer nosso pai, não será uma tarefa fácil, mas preciso de você tenha o treinamento adequado, para que possa vencer ele e impedir que ele destrua os povos de outros planetas. Estou contando com você, e a galáxia inteira também.",
		"- Você tem razão, a galáxia depende de mim, eu darei meu melhor no treinamento, apesar que a pressão é maior por ter tantas pessoas dependendo de mim no momento, lidar com esta pressão será mais um empecilho no meu crescimento, porém, eu sinto a força, e é meu dever trazer a paz a galáxia novamente.", "",
		"Portanto, inicia-se o treinamento de Leia em Dagobah, e ela é capaz de aprimorar muito seus poderes de controlar a força adequadamente, ela a sente muito melhor, consegue usar a força para mover objetos como pedras, e outros droides mais leves, mas ainda não é capaz de realizar golpes mais potentes, porquê não foi capaz de masterizar os movimentos nem a controlar corretamente a força, persiste-se o medo de Leia, e sua insegurança quanto a possibilidade de salvar a galáxia, uma grande tarefa a ser realizada apenas para uma Princesa.",
		"Sem muito tempo restante, Leia parte do sistema Dagobah ao sistema Endor, onde localiza-se a Estrela da Morte, para acabar de uma vez por todas contra a ameaça do império a toda a galáxia. Leia pode não ter finalizado por completo seu treinamento jedi mas está surpresa com sua evolução {e apesar dos problemas com sua insegurança, Leia espera que o treinamento realizado foi suficiente e que tem o possível para derrotar Vader.",
		"Chegando à Estrela da Morte, ela é cercada por stormtroopers, que a levam a um ambiente, grande e espaçoso, que da direto a um trono, onde estava nada menos que o mestre do próprio imperador sith, Darth Sidious, e seu aprendiz, Darth Vader, que esperam que Leia junte-se ao lado deles com o objetivo de liderar o império em toda a galáxia, como pai e filha, e assim, receber o treinamento digno de um sith.", "",
		"- Vejo que veio aliar-se ao lado negro da força...",
		"- Não! Nunca irei me juntar a você! Após a morte de Luke, eu decidi buscar justiça, e acabar com seu império de uma vez por todas!",
		"- Que incompetente... achas que é capaz de vencer seu próprio pai? Seu treinamento não foi o suficiente para me vencer, desista, você é fraca! E eu a treinarei, e ao meu lado, você governará a toda galáxia...",
		"- Não! Eu irei acabar com isso de uma vez por todas, custe o que custar! meu treinamento dirá o quão forte estou agora!", "",
		"botao3"

	];
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 4; // para caber mais texto na tela (padrao do inicio = 5)
	// MUSICA - ACROSS THE STARS (EP II)
	som_esperanca.play();
	escrever();
}
function partedoisSIM() {
	finalespecial++;
	textos_intro = [
		"- Então eu estou pronta, tenho a paciência necessária para adquirir os poderes e assim ter controle da força, meu treinamento será intenso, necessito de muita concentração, porém, o esforço é necessário para que o bem vença o mal.",
		"- Exatamente. Eu sinto uma força forte em você Leia, você tem capacidade para vencer nosso pai, eu sinto que há esperança, e você pode assim salvar toda a galáxia do império."
	];
	if (chancegolpe == 4) {
		textos_intro.push("", "Portanto, inicia-se o treinamento de Leia em Dagobah, e ela é capaz de aprimorar muito seus poderes de controlar a força adequadamente, ela a sente muito melhor, consegue usar a força para mover objetos como pedras, e outros droides mais leves, mas o mais importante é que Leia foi capaz de fazer tudo que pode, seus movimentos melhoraram muito, suas habilidades são notáveis, ela é capaz de realizar golpes intensos e sabe controlar muito melhor a força, ela ainda tem medo, mas a esperança de que pode salvar a galáxia é maior, uma tarefa muito importante, mas se usada com sabedoria, é capaz de ajudá-la contra o mal.",
		"Sem muito tempo restante, Leia parte do sistema Dagobah ao sistema Endor, onde localiza-se a Estrela da Morte, para acabar de uma vez por todas contra a ameaça do império a toda a galáxia. Leia pode não ter finalizado por completo seu treinamento jedi mas está surpresa com sua evolução e se sente confiante o suficiente para vencer seu pai e acabar de uma vez por todas com o império, Leia tendo a paciência necessária no treinamento, ajudou-a ter um maior controle da força, o que irá ajudá-la na batalha contra Darth Vader.",
		"Chegando à Estrela da Morte, ela é cercada por stormtroopers, que a levam a um ambiente, grande e espaçoso, que da direto a um trono, onde estava nada menos que o mestre do próprio imperador sith, Darth Sidious, e seu aprendiz, Darth Vader, que esperam que Leia junte-se ao lado deles com o objetivo de liderar o império em toda a galáxia, como pai e filha, e assim, receber o treinamento digno de um sith.", "",
		"- Vejo que veio aliar-se ao lado negro da força...",
		"- Não! Nunca irei me juntar a você! Após a morte de Luke, eu decidi buscar justiça, e acabar com seu império de uma vez por todas!",
		"- Que incompetente... achas que é capaz de vencer seu próprio pai? Seu treinamento não foi o suficiente para me vencer, desista, você é fraca! E eu a treinarei, e ao meu lado, você governará a toda galáxia...",
		"- Não! Eu irei acabar com isso de uma vez por todas, custe o que custar! meu treinamento dirá o quão forte estou agora!", "",
		"botao3")
	} else {
		textos_intro.push("", "Portanto, inicia-se o treinamento de Leia em Dagobah, e ela é capaz de aprimorar muito seus poderes de controlar a força adequadamente, ela a sente muito melhor, consegue usar a força para mover objetos como pedras, e outros droides mais leves, mas ainda não é capaz de realizar golpes mais potentes, porquê não foi capaz de masterizar os movimentos nem a controlar corretamente a força, persiste-se o medo de Leia, e sua insegurança quanto a possibilidade de salvar a galáxia, uma grande tarefa a ser realizada apenas para uma Princesa.",
		"Sem muito tempo restante, Leia parte do sistema Dagobah ao sistema Endor, onde localiza-se a Estrela da Morte, para acabar de uma vez por todas contra a ameaça do império a toda a galáxia. Leia pode não ter finalizado por completo seu treinamento jedi mas está surpresa com sua evolução e apesar dos problemas com sua insegurança, Leia espera que o treinamento realizado foi suficiente e que tem o possível para derrotar Vader.",
		"Chegando à Estrela da Morte, ela é cercada por stormtroopers, que a levam a um ambiente, grande e espaçoso, que da direto a um trono, onde estava nada menos que o mestre do próprio imperador sith, Darth Sidious, e seu aprendiz, Darth Vader, que esperam que Leia junte-se ao lado deles com o objetivo de liderar o império em toda a galáxia, como pai e filha, e assim, receber o treinamento digno de um sith.", "",
		"- Vejo que veio aliar-se ao lado negro da força...",
		"- Não! Nunca irei me juntar a você! Após a morte de Luke, eu decidi buscar justiça, e acabar com seu império de uma vez por todas!",
		"- Que incompetente... achas que é capaz de vencer seu próprio pai? Seu treinamento não foi o suficiente para me vencer, desista, você é fraca! E eu a treinarei, e ao meu lado, você governará a toda galáxia...",
		"- Não! Eu irei acabar com isso de uma vez por todas, custe o que custar! meu treinamento dirá o quão forte estou agora!", "",
		"botao3");
	}
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;
	
	rodarAbaixo = 4; // para caber mais texto na tela (padrao do inicio = 5)
	// MUSICA - ACROSS THE STARS (EP II)
	som_esperanca.play();
	escrever();
}


/* parte de batalha */

function parteTresvader() {
	historiaJogo.innerHTML = `<section>
            <div class="vidas">
                
                <h1>Vida de Leia:</h1>
                <section>
                    <div id="vida1"></div><div id="vidaespaco1" class="vidaespaco"></div>
                </section>
                
                <h1>Vida de Darth Vader:</h1>
                <section>
                    <div id="vida2"></div><div id="vidaespaco2" class="vidaespaco"></div>
                </section>
                
            </div>
            <div class="botaogolpe" id="botaogolpe">
                <button class="btnGolpeVader" onclick="golpeVader()">Golpe</button>
            </div>
		</section>`
		
		// MUSICA - LOVE PLEDGE AND THE ARENA (EP II)
		som_batalha.play();
}

function golpeVader() {
	// SOM DE SABRE DE LUZ (FAZER RANDOM COM SONS DIFERENTES)
	let sorteio2 = parseInt(Math.random() * 3 + 1);
	if (sorteio2 == 1) {
		som_sabre1.play();
	} else if (sorteio2 == 2) {
		som_sabre2.play();
	} else {
		som_sabre3.play();
	}
	
	let sorteio = parseInt(Math.random() * 101)
	if (sorteio % chancegolpe == 0) {
		// vader acerta
		let valor_golpe = parseInt(Math.random() * 26 + 10) // sorteia valor golpe
		vida.leia -= valor_golpe // tira vida de leia
		vida.espacoleia += valor_golpe // atualiza barra sem vida
		alert(`Vader acerta um golpe e tira ${valor_golpe} de vida de Leia`)
		vida1.style.width = `${vida.leia}%`;
		vidaespaco1.style.display = 'block';
		vidaespaco1.style.width = `${vida.espacoleia}%`;
	} else {
		// leia acerta
		let valor_golpe = parseInt(Math.random() * 21 + 10) // sorteia valor golpe
		vida.vader -= valor_golpe // tira vida de vader
		vida.espacovader += valor_golpe // atualiza barra sem vida
		alert(`Leia acerta um golpe e tira ${valor_golpe} de vida de Vader`)
		vida2.style.width = `${vida.vader}%`
		vidaespaco2.style.display = 'block';
		vidaespaco2.style.width = `${vida.espacovader}%`
	}
	if (vida.leia <= 0 || vida.vader <= 0) {
		if (vida.leia <= 0) {
			alert("Vader vence a batalha contra Leia")
			vida1.style.display = 'none';
			vidaespaco1.style.width = '100%';
			vidaespaco1.style.border = '4px #f2f2f2 solid';

			botaogolpe.innerHTML = '';
			botaogolpe.innerHTML = '<button class="btnGolpeVader" onclick="continuarLeiaPerde()">Prosseguir História</button>';
			
			// leiaPerde() // FUNÇÃO PARA PROSSEGUIR
		} else {
			alert("Leia vence a batalha contra Vader")
			vida2.style.display = 'none';
			vidaespaco2.style.width = '100%';
			vidaespaco2.style.border = '4px #f2f2f2 solid';
			vida.leia = 100;
			vida.espacoleia = 0;
			// LEMBRAR DE RESETAR VIDA DE LEIA

			botaogolpe.innerHTML = '';
			botaogolpe.innerHTML = '<button class="btnGolpeVader" onclick="continuarVaderPerde()">Prosseguir História</button>';
			
			// vaderPerde(); // FUNÇÃO PARA PROSSEGUIR
		};
	};
};

function continuarLeiaPerde() {
	// usuario perde batalha
	textos_intro = [
		"Leia recebe um golpe crítico e não é mais capaz de lutar, desta forma, Darth Vader vê o crescimento de sua filha, e vê que nela a força é grande, assim querendo que ela possa governar a galáxia ao seu lado, como pai e filha",
		"- Leia, junte-se ao lado negro da força! E juntos poderemos governar a galáxia, assim trazendo a ordem o fim daqueles que não concordarem conosco!",
		"- Uh...", "", "",
		"botao4"
	];
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)
	
	escrever();
}

function continuarVaderPerde() {
	// usuario ganha batalha
	textos_intro = [
		"Durante a batalha de sabres de luz, Darth Vader recebe um golpe crítico, onde clama por piedade para sua filha",
		"- Leia...! Não..! A força em você é muito poderosa...! Me perdoe...", "", "",
		"botao5"
	]; // escolhaMatar ou escolhaPerdoar
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)
	
	escrever();
}

function finalruim() { // TERMINAR DE ESCREVER FINAL RUIM
	som_batalha.pause();
	// usuario aceita se aliar
	textos_intro = [
		"- Sim... eu aceito me juntar ao seu lado, e assim juntos possamos governar a galáxia...", "",
		"Leia aceita o pedido de Vader, e assim é estabelececido a continuação do império na galáxia onde Leia alia-se ao lado negro da força com seu pai impondo assim a continuação do reinado sith.",
		"Os povos que não concordarem com a tirania que os Lordes Sith imporem serão dizimados, havendo assim uma ordem na galáxia com a falta de sua liberdade e a impossibilidade de decisão por parte dos povos de vários sistemas na galáxia.", "",
		"fim"
	];
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)

	// MUSICA - IMPERIAL MARCH (EP V)
	som_imperial.play();
	escrever();
}
function finalmorreu1() { // TERMINAR DE ESCREVER FINAL VOCE MORREU
	som_batalha.pause();
	// usuario nega se aliar
	textos_intro = [
		"- Não!! Eu jamais me juntarei a você e ao lado negro da força! Isto nunca irá acontecer!!",
		"- Então não vejo outra escolha... não vejo outra alternativa a não ser matar você. Leia, você é fraca, e nunca será capaz de dominar a força!",
		"- Eu falhei... eu fiz o que pude... mas não fui capaz de te vencer... a galáxia está perdida daqui em diante...", "",
		"E assim, Darth Vader mata Leia, sua própria filha, assim como matou Luke Skywalker pela falta de poder que os dois não tiveram ao enfrentar seu pai, e assim a galáxia persiste em um império sem Esperança aos povos, que serão governados pela tirania dos Sith pela eternidade.", "",
		"fim"
	];

	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)

	// MUSICA - IMPERIAL MARCH (EP V)
	som_imperial.play();
	escrever();
}
function escolhaMatar() {
	som_batalha.pause();
	textos_intro = ["- Não! Nunca irei me juntar a você! Jamais! Hoje será o fim dos tempos ao seu império e a você...", "",
	"Assim, Leia com seu sabre de luz mata seu pai, acabando com seu império. A sede de vingança não faz parte de um Jedi, porém você acaba com a possibilidade que Darth Vader construa um Império novamente.",
	"Após a morte de seu pai, Darth Sidious decide deter Leia para que ela não possa acabar com o império de forma alguma.", "",
	"- Sua insolente, você nunca irá vencer um mestre sith, quem treinou seu pai durante o lado negro da força, fui eu quem o tornou poderoso, e eu que irei destruir você!", "",
	"botao6"
	];
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)

	// MUSICA - THE IMMOLATION SCENE (EP III)
	som_morte.play();
	escrever();
}
function escolhaPerdoar() {
	som_batalha.pause();
	finalespecial++;
	textos_intro = ["Leia não finaliza Vader, por ser seu pai, ela o perdoa, revelando seu caráter Jedi que nunca busca a vingança, mas Vader não suporta os ferimentos que obteve e acaba morrendo por causa desta intensa batalha.",
	"Após a morte de Darth Vader, é então que Darth Sidious decide deter Leia para que ela não possa acabar com o império de forma alguma.", "",
	"- Sua insolente, você nunca irá vencer um mestre sith, quem treinou seu pai durante o lado negro da força, fui eu quem o tornou poderoso, e eu que irei destruir você!", "",
	"botao6"
	]; // E futuramente torna-se o espirito da força para você. !!!!!!! NO FINAL
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)

	// MUSICA - THE IMMOLATION SCENE (EP III)
	som_morte.play();
	escrever();
}
function parteTressidious() {
	historiaJogo.innerHTML = `<section>
	<div class="vidas">
		
		<h1>Vida de Leia:</h1>
		<section>
			<div id="vida1"></div><div id="vidaespaco1" class="vidaespaco"></div>
		</section>
		
		<h1>Vida de Darth Sidious:</h1>
		<section>
			<div id="vida2"></div><div id="vidaespaco2" class="vidaespaco"></div>
		</section>
		
	</div>
	<div class="botaogolpe" id="botaogolpe">
		<button class="btnGolpeVader" onclick="golpeSidious()">Golpe</button>
	</div>
</section>`

// MUSICA - LOVE PLEDGE AND THE ARENA (EP II) {talvez 2:35-3:45}
som_batalha.play();
}

function golpeSidious() { // VERIFICAR SE PERSISTE FALTA DE ALTERAÇÃO
	// SOM DE SABRE DE LUZ (FAZER RANDOM COM SONS DIFERENTES)
	let sorteio2 = parseInt(Math.random() * 3 + 1);
	if (sorteio2 == 1) {
		som_sabre1.play();
	} else if (sorteio2 == 2) {
		som_sabre2.play();
	} else {
		som_sabre3.play();
	}

	let sorteio = parseInt(Math.random() * 101)
	if (sorteio % chancegolpe == 0) {
		// sidious acerta
		let valor_golpe = parseInt(Math.random() * 31 + 15) // sorteia valor golpe
		vida.leia -= valor_golpe // tira vida de leia
		vida.espacoleia += valor_golpe // atualiza barra sem vida
		alert(`Darth Sidious acerta um golpe e tira ${valor_golpe} de vida de Leia`)
		vida1.style.width = `${vida.leia}%`;
		vidaespaco1.style.display = 'block';
		vidaespaco1.style.width = `${vida.espacoleia}%`;
	} else {
		// leia acerta
		let valor_golpe = parseInt(Math.random() * 21 + 10) // sorteia valor golpe
		valor_golpe = valor_golpe * 0.9 // sidious torna poderes de leia mais fracos!!!
		vida.sidious -= valor_golpe // tira vida de sidious
		vida.espacosidious += valor_golpe // atualiza barra sem vida
		alert(`Leia acerta um golpe e tira ${valor_golpe.toFixed(0)} de vida de Darth Sidious`)
		vida2.style.width = `${vida.sidious}%`
		vidaespaco2.style.display = 'block';
		vidaespaco2.style.width = `${vida.espacosidious}%`
	}
	if (vida.leia <= 0 || vida.sidious <= 0) {
		if (vida.leia <= 0) {
			alert("Darth Sidious vence a batalha contra Leia")
			vida1.style.display = 'none';
			vidaespaco1.style.width = '100%';
			vidaespaco1.style.border = '4px #f2f2f2 solid';

			botaogolpe.innerHTML = '';
			botaogolpe.innerHTML = '<button class="btnGolpeVader" onclick="finalmorreu2()">Prosseguir História</button>';
			
			// leiaPerde() // FUNÇÃO PARA PROSSEGUIR
		} else {
			alert("Leia vence a batalha contra Darth Sidious")
			vida2.style.display = 'none';
			vidaespaco2.style.width = '100%';
			vidaespaco2.style.border = '4px #f2f2f2 solid';

			botaogolpe.innerHTML = '';
			botaogolpe.innerHTML = '<button class="btnGolpeVader" onclick="finalbom()">Prosseguir História</button>';
			
			// vaderPerde(); // FUNÇÃO PARA PROSSEGUIR
		};
	};

	// SOM DE SABRE DE LUZ (FAZER RANDOM COM SONS DIFERENTES)
};

function finalmorreu2() {
	som_batalha.pause();
	// PERDEU PARA DARTH SIDIOUS
	textos_intro = [
		"- Insolente... veja como é fraca! nunca será capaz de vencer um verdadeiro Sith! Hahahaha!",
		"- Não...! Eu não fui forte o suficiente para vencer você! Fui um fracasso para todos os jedis...",
		"- Hahahaha, você nunca foi capaz de me vencer!! E agora você terá o seu fim! Uma insolente dessas nunca seria capaz de governar a galáxia adequadamente...", "",
		"E assim, Darth Sidious mata Leia, pela falta de poder que ela não tivera ao enfrentar o mestre de seu pai, e assim a galáxia persiste em um império sem Esperança aos povos, que serão governados pela tirania dos Sith pelo resto dos tempos.", "",
		"fim"
	];

	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)

	// MUSICA - IMPERIAL MARCH (EP V)
	som_imperial.play();
	escrever();
}
function finalbom() {
	som_batalha.pause();
	// GANHOU DE DARTH SIDIOUS
	if (finalespecial == 3 && chancegolpe == 4) { // se escolheu decisoes boas e teve maior chance de golpe
		// FINAL ESPECIAL

		textos_intro = [
			"Leia vence o Lorde Sidious, e assim destrói o Império Sith dando início ao processo de estabelecimento de uma República, porém...",
			"Anakin Skywalker, pai de Leia, torna-se o espírito da força para sua filha, e assim ele a conta que é possível retornar os clones e assim torná-los do bem novamente!",
			"E assim, Leia executa a ORDEM 66 novamente! Que liberta TODOS os stormtroopers, então eles se aliam ao lado do bem novamente e irão proteger a nova estabelecida República Jedi. E assim os famosos clones voltaram! E não seguirão mais os líderes do lado negro da força!"
		];

		// MUSICA - BATTLE OF THE HEROES (EP III)
		som_herois.play();
	} else if (finalespecial == 0 && chancegolpe == 2) { // se escolheu somente decisoes ruins e teve a pior chance de golpe
		// FINAL MUITO RUIM

		textos_intro = [
			"Leia através de seu desejo de vingança, acaba matando seu pai e seu mestre, Darth Sidious, porém acaba se tornando a própria mestre sith.",
			"Leia decide renovar o império, e sozinha se torna a imperatriz da galáxia! Trazendo a ordem e o fim dos povos que não concordarem com suas ordens!"
		];
		
		// MUSICA - QUIN GON'S NOBLE END (EP I)
		// OU
		// MUSICA - ANAKIN'S BETRAYAL (EP III)
		som_traicao.play();
	} else { // FINAL NORMAL / BOM

		textos_intro = [
			"Leia vence Lorde Sidious, e destrói o Império Sith acabando assim com a maior tirania que a galáxia já enfrentou nos últimos tempos! Leia torna-se uma grande Jedi e traz a esperança a todos os povos da galáxia!",
			"Leia Skywalker desativa todos os stormtroopers, portanto eles não irão mais incomodar ninguém, e haverá paz na galáxia, por enquanto."	
		];
		
		// MUSICA TRADICIONAL FINAL SW - (EP IV)
		som_final.play();
	}
	textos_intro.push("", "fim")
	inicio = 0;
	tamanhotexto = textos_intro[0].length;
	PosicaoTexto = 0;

	rodarAbaixo = 6; // para caber mais texto na tela (padrao do inicio = 5)

	escrever();
}
