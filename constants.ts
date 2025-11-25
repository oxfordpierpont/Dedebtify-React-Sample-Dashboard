import { CreditCard, Loan, Bill, Goal, DebtSummary } from './types';

export const DEBT_SUMMARY: DebtSummary[] = [
  { category: 'Credit Cards', amount: 9625.50, percentage: 3.2, color: '#EF4444' }, // Red
  { category: 'Loans', amount: 51250.00, percentage: 17.1, color: '#F59E0B' }, // Orange/Yellow
  { category: 'Mortgage', amount: 238500.00, percentage: 79.7, color: '#3B82F6' }, // Blue
];

export const CREDIT_CARDS: CreditCard[] = [
  {
    id: '1',
    name: 'Capital One Quicksilver',
    balance: 4500.00,
    limit: 8000.00,
    utilization: 56.3,
    apr: 23.0,
    payoffDate: 'March 2028',
    interest: 1380.00,
    status: 'Active'
  },
  {
    id: '2',
    name: 'Discover It Cash Back',
    balance: 1875.50,
    limit: 5000.00,
    utilization: 37.5,
    apr: 16.5,
    payoffDate: 'Jan 2027',
    interest: 312.00,
    status: 'Active'
  },
  {
    id: '3',
    name: 'Chase Freedom Unlimited',
    balance: 3250.00,
    limit: 10000.00,
    utilization: 32.5,
    apr: 19.0,
    payoffDate: 'Feb 2027',
    interest: 462.50,
    status: 'Active'
  }
];

export const LOANS: Loan[] = [
  {
    id: '1',
    name: 'Federal Student Loan',
    type: 'Student',
    balance: 32750.00,
    payment: 380.00,
    rate: 5.5,
    payoffDate: 'June 2034'
  },
  {
    id: '2',
    name: 'Honda Civic Auto Loan',
    type: 'Auto',
    balance: 18500.00,
    payment: 525.00,
    rate: 5.0,
    payoffDate: 'October 2028'
  }
];

export const BILLS: Bill[] = [
  { id: '1', name: 'Cell Phone', category: 'Utilities', amount: 85.00, frequency: 'monthly', icon: 'smartphone' },
  { id: '2', name: 'Netflix Subscription', category: 'Subscriptions', amount: 15.99, frequency: 'monthly', icon: 'tv' },
  { id: '3', name: 'Gym Membership', category: 'Entertainment', amount: 35.00, frequency: 'monthly', icon: 'dumbbell' },
  { id: '4', name: 'Car Insurance', category: 'Insurance', amount: 145.00, frequency: 'monthly', icon: 'car' },
  { id: '5', name: 'Internet Service', category: 'Utilities', amount: 79.99, frequency: 'monthly', icon: 'wifi' },
  { id: '6', name: 'Electric Bill', category: 'Utilities', amount: 125.00, frequency: 'monthly', icon: 'zap' },
];

export const GOALS: Goal[] = [
  {
    id: '1',
    name: 'Pay Off Credit Cards',
    current: 9625.50,
    target: 9625.50, // 100%
    monthlyContribution: 0,
    remainingMonths: 0,
  },
  {
    id: '2',
    name: 'Vacation to Hawaii',
    current: 1200.00,
    target: 5000.00, // 24%
    monthlyContribution: 200,
    remainingMonths: 19,
  },
  {
    id: '3',
    name: 'Emergency Fund',
    current: 3500.00,
    target: 10000.00, // 35%
    monthlyContribution: 250,
    remainingMonths: 26,
  }
];