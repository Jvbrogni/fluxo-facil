export type EconomicApiResponse = {
    USDBRL: {
        bid: string;
        pctChange: string;
    };
    EURBRL: {
        bid: string;
        pctChange: string;
    };
};

export type Indicator = {
    name: string;
    value: string;
    variation: string;
};

export const EconomicService = {
    async getIndicators(): Promise<{ usd: Indicator; eur: Indicator }> {
        const response = await fetch(
            'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL',
        );

        if (!response.ok) {
            throw new Error('Erro ao buscar dados econômicos.');
        }

        const data: EconomicApiResponse = await response.json();

        return {
            usd: {
                name: 'Dólar (USD)',
                value: parseFloat(data.USDBRL.bid).toFixed(2),
                variation: parseFloat(data.USDBRL.pctChange).toFixed(2),
            },
            eur: {
                name: 'Euro (EUR)',
                value: parseFloat(data.EURBRL.bid).toFixed(2),
                variation: parseFloat(data.EURBRL.pctChange).toFixed(2),
            },
        };
    },
};
