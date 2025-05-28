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

- **Melhorado o controle de estado com imutabilidade**:

  - Substituído `setTransactionsData({ ... })` por `updatedTransactionsData`, garantindo melhor legibilidade e separação lógica.

- **Validação de tipo para transações**:

  - Adicionados tipos explícitos ao `filter` e `reduce` para garantir integridade das operações e facilitar leitura da estrutura da transação (`description`, `date`, `amount`, `category`).

- **Correção do template literal inválido**:

  - Corrigido `formatCurrency` e `sectionData` que estavam com interpolação fora de crase. Ex:
    ```ts
    return R$ ${value.toFixed(2)} → return \`R$ ${value.toFixed(2)}\`
    ```

- **Melhoria na atualização de dados no HomeService**:

  - Atualização feita com spread (`{ ...HomeService.financeData.months[monthIndex] }`) para manter imutabilidade do objeto ao atualizar uma transação.

- **Outras melhorias**:
  - Tipagem explícita de `useState` para `activeTab`
  - Remoção de código duplicado
  - Identação e alinhamento leve ajustados


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

---

