# Template de Projeto NestJS com MySQL

Este é um template para criar projetos usando **NestJS**. Ele já vem com uma estrutura de pastas organizada e preparada para desenvolvimento de APIs.

## Como Usar Este Template

1. **Clone o repositório:**

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Remova o diretório `.git` para desvincular o histórico de commits:

a. No Windows

```bash
rmdir -Recurse -Force .git
```

b. No Linux

```bash
rm -rf .git
```

3. Configure o Git do projeto, crie um novo repositório e vincule o projeto a ele:

```bash
git init
git add .
git commit -m "init: start project"
git remote add origin <URL_DO_NOVO_REPOSITORIO>
```

4. Instale as dependências do projeto:

```bash
pnpm install
```

5. Crie um arquivo `.env` na raiz do projeto seguindo o `.env.example`

6. Inicie o servidor de desenvolvimento

```bash
pnpm run start:dev
```

## Estrutura de pastas

```plaintext
src/
├── app/
│   ├── example/
│   │   ├── mappers/
│   │   │   ├── example.mapper.ts
│   │   ├── requests/
│   │   │   ├── example.request.ts
│   │   ├── responses/
│   │   │   ├── example.response.ts
│   │   ├── example.controller.ts
│   │   ├── example.module.ts
│   │   └── example.service.ts
│   ├── healthcheck/
│   │   ├── responses/
│   │   │   ├── healthcheck.response.ts
│   │   ├── healthcheck.controller.ts
│   │   └── healthcheck.module.ts
│   └── app.module.ts
├── core/
│   ├── database/
│   │   ├── entities/
│   │   │   ├── example.entity.ts
│   │   ├── repositories/
│   │   │   ├── example.repository.ts
│   │   ├── database.module.ts
│   │   └── repository.module.ts
│   ├── error/
│   │   ├── exceptions/
│   │   │   ├── business.exception.ts
│   │   ├── filters/
│   │   │   ├── business-exception.filter.ts
│   │   │   ├── default.filter.ts
│   │   │   ├── http-exception.filter.ts
│   │   ├── responses/
│   │   │   ├── error.response.ts
│   │   └── error.config.ts
│   ├── swagger/
│   │   └── swagger.config.ts
│   └── core.module.ts
├── shared/
│   ├── pipes/
│   │   └── zod.pipe.ts
│   └── shared.module.ts
└── main.ts

```
