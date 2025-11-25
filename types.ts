export interface CreditCard {
  id: string;
  name: string;
  balance: number;
  limit: number;
  utilization: number;
  apr: number;
  payoffDate: string;
  interest: number;
  status: 'Active' | 'Inactive';
}

export interface Loan {
  id: string;
  name: string;
  type: 'Student' | 'Auto' | 'Mortgage';
  balance: number;
  payment: number;
  rate: number;
  payoffDate: string;
}

export interface Bill {
  id: string;
  name: string;
  category: string;
  amount: number;
  frequency: string;
  icon: string; // Icon identifier
}

export interface Goal {
  id: string;
  name: string;
  current: number;
  target: number;
  monthlyContribution: number;
  remainingMonths: number;
}

export interface DebtSummary {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}