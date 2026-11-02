# Teste Front-End Econverse

Página Home da Econverse feita em React, TypeScript e Sass, com vitrine de produtos, carrossel e modal de detalhes.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- Sass com CSS Modules
- Vitest e Testing Library
- Nenhuma biblioteca de UI. O carrossel, o modal e os componentes foram escritos do zero.

## Como rodar

Requisitos: Node 22.12 ou superior (há um `.nvmrc`) e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Checagem de tipos e build de produção em `dist/` |
| `npm run preview` | Serve o build local |
| `npm test` | Roda os testes |
| `npm run lint` | Roda o ESLint |

## Estrutura

```
src/
  components/
    layout/      BenefitsBar, Header, Newsletter, Footer
    home/        Hero, CategoryShortcuts, PartnerBanners, BrandList
    product/     ProductShowcase, ProductCard, ProductModal, CategoryTabs
    ui/          Carousel, QuantityStepper, Toast, Logo, icons
  hooks/         useProducts
  services/      productService
  styles/        variáveis, mixins e estilos globais
  types/         tipos do produto
  utils/         formatCurrency
```

Cada componente tem seu arquivo `.tsx` e seu `.module.scss`. As três vitrines usam o mesmo componente `ProductShowcase`.

## Decisões

- **CORS.** O servidor do JSON de produtos não envia cabeçalho CORS. No desenvolvimento, o Vite faz proxy da rota `/api/produtos`. Em produção, se a requisição à URL original falhar, o app usa a cópia local `public/produtos.json`.
- **Modal.** Usa o elemento nativo `<dialog>`. Isso garante foco preso no modal, fechamento com ESC e `aria-modal`. O clique no fundo também fecha. Ao fechar, o foco volta ao botão que abriu.
- **Carrossel.** Usa `scroll-snap` e `scrollBy`. As setas ficam desabilitadas nos limites. São 4 cards no desktop, 2 no tablet e 1 no celular.
- **Preço antigo.** O JSON não tem esse campo. O valor riscado é o preço atual mais 3%, só para reproduzir o layout. O parcelamento mostra o preço dividido em 2 vezes.
- **Funcionalidades.** A busca do header filtra os produtos pelo nome. O botão Comprar do modal soma a quantidade ao contador do carrinho e mostra um aviso. O newsletter valida os campos.
- **Abas de categoria.** O JSON não tem categoria. As abas mudam só o estado visual.
- **Cores.** O Figma usa azul e amarelo. A imagem de exemplo da vitrine no README do teste usa rosa. Segui o Figma.
- **Imagens.** As fotos do hero e dos banners vêm do arquivo do Figma. Ícones e logo são SVG ou texto próprios.

## SEO e acessibilidade

- HTML semântico: `header`, `nav`, `main`, `section`, `footer`, listas para cards e títulos em ordem.
- `lang="pt-BR"`, `title`, `meta description` e Open Graph.
- Imagens com `alt`, `width` e `height`. Imagens abaixo da dobra usam `loading="lazy"`.
- Todos os controles funcionam pelo teclado e têm foco visível.

## Deploy

O workflow `.github/workflows/deploy.yml` publica no GitHub Pages a cada push na branch `main`.
