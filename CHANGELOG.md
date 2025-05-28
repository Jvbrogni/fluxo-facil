# Changelog

## [1.1.0] - 2025-05-22

### Added

- **ESLint configurado** com `.eslintrc.json`, incluindo:
  - Suporte a TypeScript (`@typescript-eslint`)
  - Regras específicas para React Native
  - Aviso para estilos inline (`react-native/no-inline-styles`)

### Changed

#### login.tsx"

- Tipagem explícita adicionada para `email`, `password` e retorno do componente (`JSX.Element`)
- `handleLogin` envolvido em `useCallback` para melhor performance
- Inputs e botões organizados com `StyleSheet.create(...)`
- Separação clara de responsabilidades visuais e funcionais

#### transaction-history.tsx

- **Separação de responsabilidades**:

  - o componente `AddTransaction`, antes autônomo, agora é chamado por uma nova tela `TransactionsScreen`, responsável por listar, adicionar e excluir transações.

- **Novo componente de tela (TransactionsScreen)**:

  - Adicionada navegação e controle de tabs (`Despesas`, `Receitas`).
  - Implementada listagem agrupada por dia usando `SectionList`.
  - Adicionada funcionalidade de exclusão de transações com atualização em `HomeService`.

- **Melhorias de UX/UI**:

  - Inclusão de ícones (`FontAwesome`, `AntDesign`, `FontAwesome6`) e feedbacks visuais.
  - Adição de botão flutuante para adicionar transação.
  - Layout e estilização aprimorados com separação clara entre lista e formulário.

- **Melhoria no ciclo de dados**:

  - Reorganização do `useEffect` para garantir atualização apenas quando o modal fecha.
  - As transações agora são atualizadas com mais segurança no estado local e global.

- **Outras melhorias**:
  - Código modularizado e mais fácil de manter.
  - Separação clara entre lógica de negócios (serviço) e interface de usuário.
  - Identação e alinhamento leve ajustados.


## 2025-05-27

### 🛠️ Added

- Configuração do **ESLint** com suporte a:
  - React
  - React Native
  - TypeScript
  - Regras recomendadas e integração com Prettier

- Configuração do **Prettier** com:
  - Regras personalizadas (`singleQuote`, `trailingComma`, etc.)
  - Suporte à formatação automática no VS Code

- Adição de scripts no `package.json`:
  - `"lint"` para rodar o ESLint
  - `"format"` para aplicar o Prettier

### 🧪 Testado

- Verificação manual com `npx eslint .` e `npx prettier . --check`
- Aplicado `--write` para corrigir formatação em todos os arquivos

## 2025-05-28

### 🧪 Added

- Configuração inicial de testes unitários com Jest:
   - Suporte a TypeScript (ts-jest).
   - Preset jest-expo configurado para projetos Expo.
   - Pasta __tests__ criada para testes organizados por serviço.

- Cobertura inicial do serviço HomeService:
   - Testes implementados com describe e it cobrindo:
   - Geração de DTO de finanças (verificação de saldo, previsão, e dados do gráfico).
   - Cálculo acumulado para gráficos.
   - Divisão de datas em partes iguais.
   - Formatação de datas em dd/MM.

### ✅ Testado

- 4 testes escritos para HomeService:
   - 3 passaram com sucesso.
   - 1 falhou inicialmente por inconsistência de fuso horário no toLocaleDateString, corrigido ajustando o horário da data de teste.

- Validação da cobertura de código com comando jest --coverage

