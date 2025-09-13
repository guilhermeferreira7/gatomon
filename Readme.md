# Gatomon

## Do que se trata o aplicativo

- Foi desenvolvido para a disciplina de Programação de Dispositivos Móveis (TSI - UTFPR) usando React Native junto com Expo.
- Gatomon surgiu da ideia de ser um app para colecionar/gerenciar cartas. Os dados das cartas são de um jogo de colecionar gatinhos chamado [Neko Atsume](https://www.nekoatsume.com/en/). Os dados são de uma [API](https://neko-atsume.emshea.com/) criado pela [Emily Shea](https://emshea.com/).

- Principais funcionalidades (nem todas foram implementas ainda):
  - Criar usuários e salvar os dados no Firebase
  - Validação de login
  - Loja de cartas
  - Tela de listagem de cartas
  - Tela para mostrar e editar informações do usuário
  - Tela com ranking de usuários (por quantidade de cartas e por poder total)
  - Tela principal com algumas informações do usuário e botões para navegação

### To do

- [x] Login
- [x] Criar/editar conta para diferentes usuários
- [x] Listar informações das cards
- [x] Editar usuário
- [x] Adicionar todos os atributos dos usuários (cards, moedas, funções de controle dos atributos)
- [x] Adicionar e mudar foto de perfil dos usuários
- [x] Listar coleção
- [x] Acesso a API
- [x] Forma de adquirir moeda virtual
- [x] Loja com alguns itens aleatórios da API

### Prints

<img src="docs/print1.jpg" height="400"/>

<img src="docs/print2.jpg" height="400"/>

<img src="docs/print3.jpg" height="400"/>

- [x] Correções AA2 (3)
- [x] Recurso inédito (2)
- [x] Conclusão outros requisitos (2)
- [x] Tradução i18n (2)
- [x] Apk (1)

### Persistência de Dados:

Firebase nas paginas de Login e Criar conta. AsyncStorage para armazenar os dados de login e são excluidos quando o usuário faz logout.

### Protótipos (ideia inicial)

#### Página de login

<img src="docs/login.jpg" height="400"/>

#### Página de cadastro

<img src="docs/criar-conta.jpg" height="400"/>

#### Página inicial

<img src="docs/pagina-inicial.jpg" height="400"/>

#### Listagem da coleção

<img src="docs/colecao.jpg" height="400"/>

#### Informações do perfil

<img src="docs/perfil.jpg" height="400"/>

#### Loja

<img src="docs/loja.jpg" height="400"/>

#### Ranking

<img src="docs/ranking.jpg" height="400"/>

#### Interface de jogo

<img src="docs/interface-jogo.jpg" height="400"/>
