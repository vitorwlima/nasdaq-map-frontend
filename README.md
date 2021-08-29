# nasdaq-map-frontend
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Como acessar
Acesse a versão hospedada no vercel por aqui: https://nasdaq-map.vercel.app/

## Preview

https://user-images.githubusercontent.com/82615423/131267670-a97512e0-e81c-47c7-a2bf-d011d778c424.mp4


## Sobre o projeto
Nasdaq Map é uma aplicação feita para verificar e acompanhar ações da bolsa Nasdaq. Feito em NextJS, as informações de cada ação são pegas pelo lado do servidor (SSR) para disponibilizar as informações ao usuário. Para estilização, componentes reutilizáveis feitos com styled-components, seguindo o padrão estabelecido pelo "tema", que contém tamanhos de fonte e espaçamento determinados. Por fim, temos o gerenciamento de estado feito com redux (redux-toolkit, nesse caso), o qual guarda as informações do usuário autenticado e da ação que está sendo mostrada em tela no momento.

## Como rodar o projeto

Este é um projeto fullstack, logo para rodar localmente tendo a experiência completa é necessário configurar o backend também: https://github.com/vitorwlima/nasdaq-map-backend

1. Baixe o projeto em sua máquina
```shell
git clone https://github.com/vitorwlima/nasdaq-map-frontend.git
cd nasdaq-map-frontend
yarn
```

2. Insira um arquivo .env na raiz do projeto com os seguintes valores:
```shell
NEXT_PUBLIC_SERVER = Url do servidor backend
NEXT_PUBLIC_API_KEY = Sua senha da API do IEX
```

3. Rode o projeto
```shell
yarn dev
```
