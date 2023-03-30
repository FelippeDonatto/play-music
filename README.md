<div align="center">
  <img src="https://user-images.githubusercontent.com/7221671/228865434-48fb40fe-58f8-49b1-8a7b-0627b1846165.png" width="150" />
</div>

<h2 align="center"> Play de musica - Desafio 1 - #bora codar Rocketseat</h2>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/7221671/228866989-44e4cfa7-db6b-416c-971c-6e3679dcec9e.png" width="450" />
  <img src="https://user-images.githubusercontent.com/7221671/228866993-6ee93082-0d39-494d-bef3-40d823fedc88.png" width="450" />
</div>

<h1>Bora Codar - Play music</h1>

<p align="center">Desenvolvi essa aplicação utilizando como base o modelo sugerido no evento da Rockeseat #boraCodar e também fiz uma versão minha, aproveitando os conceitos aplicados no modelo base. Colocando alem de minha cara tecnologias como NEXT, Tailwind e incorporação de iframes do spotify.</p>

<h2>Referência</h2>

- [Template Bora Codar](https://www.figma.com/community/file/1195050524500542670)
- [GitHub BoraCoadar](https://github.com/maykbrito/boracodar)

<h2>Licença</h2>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<h2>Documentação de cores</h2>

| Cor        | Hexadecimal                                                      |
| ---------- | ---------------------------------------------------------------- |
| Violet 900 | ![#0F0D13](https://via.placeholder.com/10/0F0D13?text=+) #0F0D13 |
| Violet 500 | ![#2A2141](https://via.placeholder.com/10/2A2141?text=+) #2A2141 |
| Gray 100   | ![#E1E1E6](https://via.placeholder.com/10/E1E1E6?text=+) #E1E1E6 |
| Gray 200   | ![#C4C4CC](https://via.placeholder.com/10/C4C4CC?text=+) #C4C4CC |
| Gray 900   | ![#09090A](https://via.placeholder.com/10/09090A?text=+) #09090A |
| Blue 400   | ![#777CD9](https://via.placeholder.com/10/777CD9?text=+) #777CD9 |
| Blue 900   | ![#181926](https://via.placeholder.com/10/181926?text=+) #181926 |
| Brand 500  | ![#EFBE0E](https://via.placeholder.com/10/EFBE0E?text=+) #EFBE0E |

<h2>Instalação</h2>

Instale Play-Music-Next com npm

_Para instalar as dependencias_

```bash
  npm intall
```

_Para rodar o projeto_

```bash
  npm run dev
```

<h2>Tecnologias utilizadas</h2>

_Instalação do Tailwind para Next_

```bash
  npm install -D tailwindcss postcss autoprefixer
```

```bash
  npx tailwindcss init -p
```

_Adicionar ao arquivo tailwind.config.js_

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      violet: {
        900: '#0F0D13',
        500: '#2A2141'
      },

      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        900: '#09090A',
      },
      blue: {
        900: '#181926',
        400: '#777CD9'
      },

      brand: {
        500: '#EFBE0E'
      }
    },
    extend: {}
  },
  plugins: []
}

```

_Adicione ao seu CSS global_

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
