# Changelog

## [1.1.0] - 2025-05-22

### Added

- **ESLint configurado** com `.eslintrc.json`, incluindo:
  - Suporte a TypeScript (`@typescript-eslint`).
  - Regras específicas para React Native.
  - Aviso para estilos inline (`react-native/no-inline-styles`).

### Changed

- Tipagem explícita adicionada no login.
- Separação clara de responsabilidades visuais e funcionais.

---

## 2025-05-27

### 🛠️ Added

- Configuração do **ESLint** com suporte a React, React Native, TypeScript.
- Integração com Prettier.
- Scripts no `package.json` para lint e format.

---

## 2025-05-28

### 🧪 Added

- Configuração inicial de testes unitários com Jest.
  - Suporte a TypeScript (ts-jest).
  - Preset jest-expo configurado para projetos Expo.
  - Pasta __tests__ criada para testes organizados por serviço.

- Cobertura inicial do serviço HomeService:
  - Testes implementados cobrindo geração de DTO, cálculo de gráficos, divisão de datas e formatação.

### ✅ Testado

- 4 testes escritos para HomeService:
  - 3 passaram com sucesso.
  - 1 falhou inicialmente por fuso horário, corrigido ajustando o horário da data de teste.

- Validação da cobertura de código com comando `jest --coverage`.

---

## [1.2.0] - 2025-05-29

### ✨ Added

- **TransactionBuilder**:
  - Implementação do padrão Interface Fluente para construir objetos de transação de forma encadeada.
  - Centralização da lógica de criação de transações, melhorando clareza e reutilização.

- **EconomicService**:
  - Serviço externo para buscar e mapear dados econômicos da API `awesomeapi.com.br`.
  - Criação de tipagem segura (`EconomicApiResponse`) para parse correto dos dados.

- **AuthService**:
  - Extração da lógica de login para um serviço dedicado.
  - Padronização do fluxo de autenticação e preparação para escalabilidade.

- **TransactionService**:
  - Extração da lógica de exclusão de transações para um serviço externo.
  - Centralização das operações de remoção e atualização no `HomeService`.

---

### 🔧 Changed

#### login.tsx

- Extração do login para `AuthService` com chamada assíncrona limpa.
- Adição de estado `loading` com feedback visual no botão.
- Tipagem explícita para `email`, `password` e `JSX.Element`.

#### add-transaction.tsx

- Modularização de métodos (`validateFields`, `clearValue`, `backspaceValue`).
- Uso do novo `TransactionBuilder` para construção fluente de transações.
- Tipagem de props para substituir `any`.
- Melhorias gerais de clareza e legibilidade.

#### economic-indicator.tsx

- Extração da lógica de busca para `EconomicService`.
- Adição de tratamento visual para erros (ícone + mensagem).
- Tipagem robusta para resposta da API.

#### transaction-history.tsx

- Extração de lógica de exclusão para `TransactionService`.
- Melhor separação de responsabilidades entre lógica e interface.
- Garantia de atualização local e global consistente.

#### _layout.tsx e +not-found.tsx

- Revisados, sem necessidade de refatoração no momento.
- Avaliação concluída para garantir alinhamento futuro.

#### confirmation.tsx

- Revisado, mantido simples e funcional sem alterações.
- Avaliação incluída para registro.

---

### 🛠️ Improvements (geral)

- **Code Smell Review**:
  - Identificados e resolvidos pontos como métodos longos, mistura de responsabilidades e tipagem fraca.
  - Componentes passaram a delegar operações pesadas a serviços externos.

- **Modularização**:
  - Serviços centralizam regras de negócio.
  - Componentes mantêm foco apenas na interface e nos estados visuais.

- **Preparação para escalabilidade**:
  - Base de código agora mais limpa, organizada e fácil de manter.
  - Pronta para adição de testes unitários e mocks de serviços.
