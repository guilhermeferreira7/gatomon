# Gatomon

## AA2

### Correções da AA1:

AA1 já estava ok

### Persistência de Dados:

Firebase nas paginas de Login e Criar conta. AsyncStorage para armazenar os dados de login e são excluidos quando o usuário faz logout.

### Alert, Modal e ActionSheet:

Alert na pagina de login e criar conta para informar que alguma coisa está incorreta. Alert também na pagina de comprar cards.

### Backlog:

As páginas de login e criar conta agora funcionam corretamente. É possível criar uma conta no firebase e só é possível efetuar login se já existir uma conta. A tela da loja mostra somente algumas cards aleatóriamente e não todas. Na página do perfil de usuário (que é acessado quando clica no icone no canto superior direito), mostra um botão para logout.

### Acesso à API Remota:

Os cards são gerados a partir de uma api https://neko-atsume.emshea.com

### Recurso inédito:

Pretendo criar algum jogo muito simples para conseguir coletar moedas para o aplicativo fazer mais sentido.

### Cronograma:

- Até 06/06: Terminar as funcionalidades para criar e editar usuários
- Até 13/06: Funcionalidades para comprar cards, listar cards comprados de cada usuário, funcionalidade de mostrar mais informações de cada card
- Até 20/06: Funcionalidade de ranking
- Até 27/06: Se possível, fazer a funcionalidade do jogo, se não, implementar outras funcionalidades e polir mais o que já está implementado.

## Funcionalidades

- Login
- Criar/editar conta para diferentes usuários
- Listar coleção
- Forma de adquirir moeda virtual
- Loja com alguns itens que se alternam de tempo em tempo
- Página com ranking

## Protótipos

### Página de login

<img src="docs/login.jpg" height="400"/>

### Página de cadastro

<img src="docs/criar-conta.jpg" height="400"/>

### Página inicial

<img src="docs/pagina-inicial.jpg" height="400"/>

### Listagem da coleção

<img src="docs/colecao.jpg" height="400"/>

### Informações do perfil

<img src="docs/perfil.jpg" height="400"/>

### Loja

<img src="docs/loja.jpg" height="400"/>

### Ranking

<img src="docs/ranking.jpg" height="400"/>

### Interface de jogo

<img src="docs/interface-jogo.jpg" height="400"/>
