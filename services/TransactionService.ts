import HomeService from '@/services/home-service';
import { Alert } from 'react-native';

export const TransactionService = {
    deleteTransaction(
        transaction: any,
        transactionType: 'expenses' | 'incomes',
        transactionsData: any,
        setTransactionsData: (data: any) => void,
    ) {
        const updatedTransactions = transactionsData[transactionType].filter(
            (t: { description: string; date: string }) =>
                t.description !== transaction.description || t.date !== transaction.date,
        );

        const updatedTransactionsData = {
            ...transactionsData,
            [transactionType]: updatedTransactions,
        };

        setTransactionsData(updatedTransactionsData);

        const monthIndex = HomeService.financeData.months.findIndex(
            (month: { name: string }) => month.name === transactionsData.name,
        );

        HomeService.financeData.months[monthIndex] = {
            ...HomeService.financeData.months[monthIndex],
            [transactionType]: updatedTransactions,
        };

        Alert.alert('Sucesso', 'Transação deletada com sucesso!');
    },
};
