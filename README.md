# IW-2

Documentacao Simples - Jogo da Memoria Ben 10
Este documento apresenta uma visao geral do jogo da memoria com tema do Ben 10, explicando como jogar e como o sistema foi construido.
1. Como jogar
O objetivo do jogador e encontrar os 10 pares de cartas com o menor numero de tentativas possivel.
•	Ao abrir o jogo, todas as cartas aparecem viradas para baixo.
•	O jogador clica em uma carta para revelar a imagem.
•	Em seguida, clica em uma segunda carta para tentar formar um par.
•	Se as duas cartas forem iguais, elas permanecem viradas.
•	Se forem diferentes, elas voltam a ficar escondidas apos cerca de 1 segundo.
•	O jogo termina quando os 10 pares sao encontrados.
•	Depois da vitoria, o jogo mostra uma mensagem e reinicia automaticamente.
•	Tambem e possivel reiniciar a qualquer momento pelo botao "Reiniciar Jogo".
2. Informacoes mostradas na tela
•	Tentativas: conta quantas vezes o jogador abriu duas cartas para comparar.
•	Acertos: mostra quantos pares corretos ja foram encontrados, ate o maximo de 10.
3. Como o jogo funciona
O projeto foi desenvolvido com HTML, CSS e JavaScript puro. Cada tecnologia tem uma funcao especifica no funcionamento do jogo.
HTML:
Define a estrutura da pagina, incluindo o titulo, o placar, o botao de reinicio e a area onde as cartas sao exibidas.
CSS:
Cuida da parte visual. O tabuleiro usa grid responsivo, e as cartas possuem efeito de giro 3D quando sao viradas.
JavaScript:
Controla toda a logica do jogo: cria as cartas, embaralha as imagens, registra cliques, compara os pares, atualiza o placar e detecta a vitoria.
4. Fluxo da logica
•	A lista original contem 10 imagens de personagens do universo Ben 10.
•	No inicio, essa lista e duplicada para formar os pares, totalizando 20 cartas.
•	As cartas sao embaralhadas aleatoriamente antes de serem mostradas no tabuleiro.
•	Quando o jogador clica, o sistema guarda a primeira e a segunda carta selecionadas.
•	Se as imagens forem iguais, o jogo registra um acerto.
•	Se forem diferentes, o sistema bloqueia novos cliques por um instante e desvira as cartas.
•	Quando o numero de acertos chega a 10, o jogo exibe a mensagem de vitoria.
5. Estrutura do projeto
•	index.html: estrutura principal da pagina.
•	style.css: aparencia visual e responsividade.
•	script.js: regras e comportamento do jogo.
•	img/: pasta com as imagens usadas nas cartas.
6. Analise resumida
•	O jogo esta funcional e tem organizacao simples, ideal para estudo introdutorio de JavaScript.
•	A separacao entre HTML, CSS e JavaScript esta clara e facilita manutencao basica.
•	A experiencia do usuario e objetiva, com placar visivel e reinicio facil.
•	Foi identificado apenas um detalhe de codificacao de caracteres em textos com acentuacao, que aparece corrompido em alguns arquivos e pode ser ajustado salvando-os em UTF-8.
7. Conclusao
O projeto atende bem a proposta de um jogo da memoria tematico. Ele demonstra conceitos importantes de manipulacao do DOM, eventos, estruturas de controle e estilizacao com animacao em CSS.
