import HomeService from '@/services/home-service';
import { FinanceDataResponse } from '@/data-types/responses';
import { ECategory, EMonth } from '@/data-types/enums';

const today = new Date().toISOString();
const future = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

const mockData: FinanceDataResponse = {
  name: 'Teste',
  months: [
    {
      value: EMonth.may,
      expenses: [
        { description: 'Despesa passada', date: today, amount: 100, category: ECategory.food},
        { description: 'Despesa futura', date: future, amount: 200, category: ECategory.food},
      ],
      incomes: [
        { description: 'Receita passada', date: today, amount: 500, category: ECategory.leisure},
        { description: 'Receita futura', date: future, amount: 100, category: ECategory.leisure},
      ],
      planning: [
        { category: ECategory.food, plannedSpending: 400, spent: 100, fillColor: '#00FF00' },
      ],
    },
  ],
};

describe('HomeService', () => {
  it('deve retornar DTO com dados corretos', () => {
    const dto = HomeService.getFinanceDataDto(mockData);
    expect(dto.name).toBe('Teste');
    expect(dto.months.length).toBe(1);

    const month = dto.months[0];
    expect(month.balance).toBe(400); // 500 - 100
    expect(month.predictedBalance).toBe(400 + 100 - 200); // atual + receitas futuras - despesas futuras
    expect(month.expenses.length).toBe(2);
    expect(month.incomes.length).toBe(2);
    expect(month.planning[0].percentage).toBe(25); // 100 / 400 * 100
    expect(month.chartData.length).toBeGreaterThan(0);
  });

  it('deve gerar gráfico com valores acumulados corretamente', () => {
    const chartData = HomeService['getChartDto'](mockData.months[0].expenses);
    expect(chartData.length).toBeGreaterThan(0);
    expect(chartData[chartData.length - 1].expense).toBe(300); // 100 + 200
  });

  it('deve dividir datas corretamente', () => {
    const start = new Date('2024-01-01').toISOString();
    const end = new Date('2024-01-07').toISOString();
    const dates = HomeService['divideDatesIntoParts'](start, end);
    expect(dates.length).toBe(7);
  });

  it('deve formatar data corretamente', () => {
    const formatted = HomeService['formatDate'](new Date('2024-01-01T12:00:00'));
    expect(formatted).toBe('01/01');
  });
});
