# bonde-actions-components

[![Unit Test](https://github.com/nossas/bonde-actions-components/actions/workflows/unit-test.yml/badge.svg)](https://github.com/nossas/bonde-actions-components/actions/workflows/unit-test.yml)

Componentes React usados na renderização das táticas de widget no BONDE.

## Desenvolvimento

### Pré-requisitos

1. **Node.js**: Utilize a versão `18`.
   Recomendamos o uso do [`nvm`](https://github.com/nvm-sh/nvm) para gerenciar as versões do Node.js.
   Após instalar o `nvm`, você pode selecionar a versão correta com os comandos:

   ```bash
   nvm install 18
   nvm use 18
   ```

2. **pnpm**: Utilize a versão `7.33.7`.
   Caso não tenha o `pnpm` instalado ou precise de outra versão, instale ou altere com o comando:

   ```bash
   npm install -g pnpm@7.33.7
   ```

### Comandos úteis

- Instalar dependências:

```bash
pnpm install
```

- Rodar o [Storybook](https://storybook.js.org/):

```bash
pnpm storybook
```

- Rodar os testes unitários:

```bash
pnpm test
```

- Compilar a biblioteca:

```bash
pnpm build
```
