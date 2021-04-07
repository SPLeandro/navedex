# Navedex - Desafio

https://naversdex.herokuapp.com/

O sistema, desenvolvido utilizando React, consiste em uma web app para visualização e criação dos navers, possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participou.

## Layout web
O layout foi desenvolvido baseado nas telas passadas pelo [figma](https://www.figma.com/file/II8UDFm2uJFZaD0FOPcinP/Teste-Fornt-End). Além de seguir os tamanhos constatados nos esquemas para o tamanho de tela 1280x720, foi adicionada uma certa responsividade para promover a acessibilidade em dispositiveis móveis.

## Layout web in mobile

Para promover a acessibilidade por meio dos dispositivos móveis, há uma certa responsividade dos componentes, possibilitando o uso de todas as funcionalidades disponíveis.

![login](https://i.ibb.co/0qFC09Z/login.png)
![home](https://i.ibb.co/1X07Zbd/home.png)
![newNaver](https://i.ibb.co/P1YXx2P/newNaver.png)
![showNaver](https://i.ibb.co/jMQ32K2/detail.png)
![deleteNaver](https://i.ibb.co/zJLx0w9/delete.png)

## Funcionalidades

Além do desenvolvimento fidedigno do layout, também possui todas funcionalidades requeridas, sendo elas:
- Login
- Listagem
- Visualização 
- Criação/Edição
- Exclusão

## Tecnologias utilizadas
### Front end
- ReactJS (HTML / CSS / JS)
- React Router Dom
- React Modal
- React Icons
- Axios

### Backend
Para as requisições dos dados dos navers, foi utilizado o axios para realizar a integração com a api fornecida e realizar as chamdas http. 

## Deploy
- [Heroku](https://naversdex.herokuapp.com/)

## Como executar o projeto


### Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/SPLeandro/navedex

# entrar na pasta do projeto
cd navedex

# instalar dependências
npm install

# executar o projeto
npm start
```

## Observações
Para mostrar um alerta personalizado e amigável ao usuário, necessitei criar um componente e utilizar o React-Modal, entretanto, por não utilizar Context e disponibilizar a função de maneira "global", precisei repetir o processo da chamada do alerta em cada página que o utiliza, o que gerou uma certa duplicidade de código.


## Autor

- Leandro Pereira dos Santos
- Lsaantos@outlook.com
- [Linkedin](https://www.linkedin.com/in/psleandro)
