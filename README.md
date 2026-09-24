<h1 align="center">patrick@dev:~$ portfólio</h1>

<p align="center">
  Portfólio pessoal de <b>Patrick Santos Ribeiro</b>, Desenvolvedor Full Stack com foco em IA aplicada.<br />
  Estética de terminal, dark mode e conteúdo real: experiência, projetos para clientes e projetos open source.
</p>

<p align="center">
  <a href="https://patricksantosribeiro.vercel.app"><b>🌐 Ver o site no ar</b></a>
</p>

<p align="center">
  <img src="public/og-image.jpg" alt="Prévia do portfólio" width="820" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
</p>

---

## Seções

| Seção | O que mostra |
| :--- | :--- |
| `home` | Apresentação, texto digitado, download do currículo e contato |
| `sobre_mim()` | Resumo profissional e stack por área |
| `experiencia()` | Trajetória em formato de histórico de commits |
| `formacao()` | Graduações, pós, cursos e idiomas |
| `projetos()` | Projetos para clientes, com galeria de telas, e projetos open source |
| `servicos()` | O que a Selintech entrega |
| `contato()` | E-mail, WhatsApp, LinkedIn e GitHub |

## Destaques do projeto

- **Conteúdo separado da interface:** experiências, projetos, stack e formação ficam em `src/data/`. Para atualizar o site, basta editar esses arquivos.
- **Tema centralizado** em `src/theme/theme.ts` com styled-components.
- **Responsivo** e com `prefers-reduced-motion` respeitado nas animações dos cards.
- **SEO e compartilhamento:** metatags Open Graph e Twitter com imagem de prévia, canonical e `theme-color`.

## Estrutura

```
src/
├── assets/          # foto e capturas dos projetos
├── components/      # uma pasta por seção (index.tsx + style.tsx)
├── data/            # conteúdo do site: experiences, projects, skills, education
├── styles/          # estilos globais e cabeçalho de seção
├── theme/           # cores e fontes
└── utils/           # mapa de ícones das tecnologias
public/
├── og-image.jpg     # imagem de prévia para redes sociais
└── curriculo-patrick-santos-ribeiro.pdf
```

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (tsc + vite)
npm run preview  # testa o build localmente
```

## Contato

[LinkedIn](https://www.linkedin.com/in/patrick-santos-162899207/) · [GitHub](https://github.com/PatrickSantos-htk) · patricksantosribeiro2017@gmail.com
