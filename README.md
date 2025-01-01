# Template de Projeto NestJS com MySQL

Este é um template para criar projetos usando **NestJS**. Ele já vem com uma estrutura de pastas organizada e preparada para desenvolvimento de APIs.

## Estrutura de pastas

**app:** Contém os módulos e funcionalidades principais da aplicação.

> [!WARNING]
> Não remover o módulo de `healthcheck` e caso haja comunicação com outros microserviços, adicionar verificação de healthcheck na parte de dependências.

**core:** Agrupa configurações e funcionalidades da aplicação, tal como swagger, tratamento de erro, banco de dados, comunicação com outros microserviços, etc.

**shared:** Contém recursos genéricos e reutilizáveis por toda a aplicação como pipes, guards, etc.

## Como Usar Este Template

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Remova o diretório `.git` para desvincular o histórico de commits:

   - No Windows

     ```bash
     rmdir -Recurse -Force .git
     ```

   - No Linux

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
