# **Especificação do Projeto MixBalancer**

## **Descrição Geral**
O **MixBalancer** é uma aplicação web projetada para facilitar a organização de partidas e times para jogos competitivos. A aplicação permite que os usuários criem, gerenciem jogadores, formem times balanceados e acompanhem partidas.

---

## **Especificação Não Técnica**

### **Público-Alvo**
- Jogadores de **Counter-Strike 2 (CS2)** que participam de jogos organizados ou "mixes".
- Comunidades de jogos competitivos que precisam de ferramentas para balanceamento de times.

### **Objetivos**
1. Facilitar a criação e gerenciamento de jogadores e times.
2. Balancear automaticamente os times com base no nível de habilidade dos jogadores.
3. Registrar e acompanhar partidas, incluindo placares e status.
4. Oferecer uma experiência simples, intuitiva e eficiente.

### **Principais Funcionalidades**
- **Autenticação**: Registro, login e gerenciamento de usuários.
- **Gerenciamento de Jogadores**: Criação, listagem, edição e exclusão.
- **Gerenciamento de Times**: Criação, listagem, edição, exclusão e adição de jogadores.
- **Partidas**: Registro de partidas com times participantes, placar e status.
- **Balanceamento Automático**: Criação de times equilibrados com base no nível de habilidade.

---

## **Especificação Técnica**

### **Front-end**
- **Framework**: React com Next.js (TypeScript).
- **Estilização**: Tailwind CSS e ShadCN UI para componentes estilizados.
- **Gerenciamento de Estado**: Context API (AuthContext).
- **Consumo de APIs**: Integração com serviços REST para comunicação com o backend.

### **Back-end**
- **Framework**: .NET 8 com C#.
- **Autenticação**: JWT (JSON Web Token).
- **Banco de Dados**: PostgreSQL.
- **Estrutura de Código**: Clean Architecture, separando responsabilidades entre camadas:
  - **Application**: Serviços e DTOs.
  - **Domain**: Entidades e interfaces.
  - **Infrastructure**: Repositórios e configuração do banco de dados.
  - **API**: Endpoints para expor funcionalidades.

### **Principais Endpoints**
#### **Auth**
- `POST /api/auth/login`: Realiza login e retorna o token JWT.
- `POST /api/auth/register`: Registra um novo usuário.

#### **Players**
- `POST /api/players`: Cria um novo jogador.
- `GET /api/players`: Lista jogadores existentes.
- `PUT /api/players/{id}`: Atualiza informações de um jogador.
- `DELETE /api/players/{id}`: Remove um jogador.

#### **Teams**
- `POST /api/teams`: Cria um novo time.
- `GET /api/teams`: Lista times existentes.
- `PUT /api/teams/{id}`: Atualiza informações de um time.
- `DELETE /api/teams/{id}`: Remove um time.
- `POST /api/teams/{id}/add-player`: Adiciona um jogador a um time.
- `POST /api/teams/{id}/remove-player`: Remove um jogador de um time.

#### **Matches**
- `POST /api/matches`: Cria uma nova partida.
- `GET /api/matches/{id}`: Obtém detalhes de uma partida.
- `PUT /api/matches/{id}`: Atualiza status ou placar de uma partida.
- `GET /api/matches`: Lista todas as partidas.

### **Autenticação**
- Token JWT armazenado no `localStorage` no cliente.
- Proteção de rotas no front-end para páginas de jogadores, times e partidas.

### **Estrutura do Front-end**
mixbalancer-frontend/
```
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── players/page.tsx
│   │   ├── teams/page.tsx
│   │   ├── matches/page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── players/
│   │   │   ├── PlayerList.tsx
│   │   │   └── PlayerForm.tsx
│   │   ├── teams/
│   │   │   ├── TeamList.tsx
│   │   │   └── TeamForm.tsx
│   │   └── matches/
│   │       ├── MatchList.tsx
│   │       └── MatchForm.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   ├── playerService.ts
│   │   ├── teamService.ts
│   │   └── matchService.ts
│   ├── context/
│   │   └── AuthContext.tsx
│   └── hooks/
│       └── useAuth.ts
├── public/
├── styles/
│   └── globals.css
├── next.config.js
└── package.json
```

### **Integração com ShadCN UI**
- Componentes usados:
  - **Button**: Para ações como "Salvar", "Login".
  - **Input**: Para formulários.
  - **Card**: Para exibir listas (Jogadores, Times, Partidas).
  - **Alert**: Para mensagens de sucesso ou erro.

---

## **Próximos Passos**
1. Implementar **filtros e paginação** para listas (jogadores, times e partidas).
2. Melhorar a **experiência do usuário** com feedback visual (ex.: spinners).
3. Adicionar **testes unitários e de integração** no back-end e front-end.
4. Integrar com serviços externos, caso aplicável (ex.: APIs de jogos).
