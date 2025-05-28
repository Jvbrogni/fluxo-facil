# Fluxo Fácil

**Seus gastos sob controle, sua vida mais tranquila!**

## 📖 Sobre

**Fluxo Fácil** é um aplicativo de controle financeiro desenvolvido em **React Native com Expo**.  
Com ele, você pode:

- Registrar e categorizar receitas e despesas.
- Acompanhar seu saldo em tempo real.
- Visualizar relatórios gráficos para entender melhor sua saúde financeira.
- Organizar suas finanças de forma prática e intuitiva.

## 🛠️ Tecnologias

Este projeto utiliza as seguintes tecnologias:

- **React Native**
- **Expo**
- **Firebase**
- API Externa (Awesome api)

## 🚀 Funcionalidades

- 📌 **Cadastro de Receitas e Despesas:** Adicione suas transações com descrição, valor e categoria.
- 📊 **Gráficos Interativos:** Relatórios visuais para melhor compreensão do fluxo de dinheiro.

## 🖥️ Instalação e Uso

### Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://expo.dev/)

Link Apresentação: https://www.canva.com/design/DAGS7tR0_Z4/VsS56AYXkz_51_dtW2AdIg/edit?utm_content=DAGS7tR0_Z4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## 🧾 Documentação Técnica

### 🔍 Análise dos Principais Problemas Detectados

Durante a análise do código original do projeto, foram identificados os seguintes pontos críticos:

- **Acoplamento excessivo**: Componentes misturam responsabilidades de interface e lógica.
- **Falta de separação de responsabilidades**: Manipulação de dados está entrelaçada com a renderização.
- **Ausência de tipagem forte**: Uso recorrente de `any`, dificultando a manutenção e aumentando o risco de erros.
- **Inexistência de testes automatizados**: O que compromete a confiabilidade em futuras modificações.

### 🛠️ Estratégia de Refatoração

Para solucionar os problemas identificados, foi adotada a seguinte abordagem:

- **Aplicação de princípios do Clean Code**: Renomeação de variáveis, componentização e extração de lógicas para serviços.
- **Separação da lógica de negócio**: Isolamento das funcionalidades de adição, deleção e filtragem em camadas distintas.
- **Adoção de TypeScript**: Para garantir maior robustez por meio de tipagem estática.
- **Padronização e Linting**: Integração do **ESLint** com padrão Airbnb e **Prettier** para formatação automática.
- **Implementação de testes unitários**: Uso de **Jest** para validar funcionalidades críticas do app.

### 🧰 Ferramentas Utilizadas

| Ferramenta        | Finalidade                                          |
| ----------------- | --------------------------------------------------- |
| React Native      | Plataforma mobile multiplataforma                   |
| Firebase          | Autenticação e backend em tempo real                |
| TypeScript        | Tipagem estática para maior robustez e legibilidade |
| ESLint + Prettier | Padronização e formatação de código                 |
| Jest              | Testes unitários                                    |
| expo-router       | Navegação simplificada no projeto                   |
