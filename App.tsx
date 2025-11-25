import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DebtBreakdownChart from './components/DebtBreakdownChart';
import CreditCardItem from './components/CreditCardItem';
import { BillWidget, GoalWidget, SavingsPromo } from './components/Widgets';
import { CREDIT_CARDS, LOANS, BILLS, GOALS } from './constants';
import { Plus, Bell, Search, Filter, ArrowUpRight, Car, GraduationCap, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // Responsive Container Logic:
    // Mobile: min-h-screen, let content flow naturally (no overflow-hidden on body).
    // Desktop (lg): Fixed height calculated to fit WP Admin area, inner scrolling enabled.
    <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-[calc(100vh-32px)] bg-[#101010] font-sans isolate relative">
      
      {/* Sidebar handles its own mobile state */}
      <Sidebar mobileOpen={mobileMenuOpen} setMobileOpen={setMobileMenuOpen} />

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col md:flex-row lg:my-3 lg:mr-3 bg-[#F3F4F6] lg:rounded-[32px] lg:overflow-hidden shadow-2xl relative z-0">
        
        {/* Left/Middle Column (Main Dashboard) */}
        {/* Mobile: default overflow. Desktop: overflow-y-auto */}
        <div className="flex-1 flex flex-col h-auto lg:h-full lg:overflow-y-auto custom-scrollbar scroll-smooth relative z-0">
          
          {/* Header */}
          <header className="px-5 py-4 md:px-8 md:pt-8 md:pb-6 bg-white sticky top-0 z-20 border-b border-gray-100">
            <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                    {/* Mobile Hamburger */}
                    <button 
                        onClick={() => setMobileMenuOpen(true)}
                        className="p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden focus:ring-2 focus:ring-blue-500"
                    >
                        <Menu size={24} />
                    </button>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Welcome back!</h1>
                        <p className="text-gray-500 text-xs md:text-sm mt-0.5">Here's your current financial overview</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                    <button className="p-2 md:p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors hidden sm:block">
                        <Search size={20} />
                    </button>
                    <button className="p-2 md:p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                </div>
            </div>

            {/* Quick Actions Toolbar - Scrollable on mobile */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
                <button className="flex items-center gap-2 bg-[#3B82F6] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all whitespace-nowrap active:scale-95">
                    <Plus size={16} /> Create Snapshot
                </button>
                <ActionButton label="View Cards" />
                <ActionButton label="View Loans" />
                <ActionButton label="View Bills" />
                <ActionButton label="View Goals" />
            </div>
          </header>

          <div className="p-4 md:p-8 space-y-6 md:space-y-8 pb-20 md:pb-8">
            {/* Debt Chart Section */}
            <section className="bg-white p-4 md:p-6 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 text-lg">Debt Breakdown</h3>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Filter size={18} />
                    </button>
                </div>
                <DebtBreakdownChart />
            </section>

            {/* Two Column Grid for Lists - Stacks on mobile, 2 cols on XL screens */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
                
                {/* Credit Cards Column */}
                <section>
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="font-bold text-gray-900 text-lg">Active Credit Cards</h3>
                        <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-lg">3 Active</span>
                    </div>
                    <div>
                        {CREDIT_CARDS.map(card => (
                            <CreditCardItem key={card.id} card={card} />
                        ))}
                    </div>
                </section>

                {/* Loans Column */}
                <section>
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="font-bold text-gray-900 text-lg">Loans</h3>
                        <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-lg">2 Active</span>
                    </div>
                    <div className="space-y-4">
                        {LOANS.map(loan => (
                            <div key={loan.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 sm:gap-0">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${loan.type === 'Student' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                            {loan.type === 'Student' ? <GraduationCap size={18} /> : <Car size={18} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">{loan.name}</h4>
                                            <span className="text-xs text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded mt-1 inline-block">Rate: {loan.rate}%</span>
                                        </div>
                                    </div>
                                    <span className="font-bold text-gray-900 text-xl sm:text-base">-${loan.balance.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-50">
                                    <div className="text-gray-500">
                                        Payment: <span className="font-bold text-gray-800">${loan.payment}/mo</span>
                                    </div>
                                    <div className="text-gray-500">
                                        Payoff: <span className="font-bold text-gray-800">{loan.payoffDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar details) */}
        {/* On Mobile: Stacks below main content. On Desktop: Fixed width on right. */}
        <div className="w-full md:w-80 lg:w-[380px] bg-white p-6 md:p-8 flex flex-col border-l border-gray-100 lg:overflow-y-auto z-10 custom-scrollbar border-t md:border-t-0 shrink-0">
           
           {/* Goals Section */}
           <div className="mb-10">
              <div className="flex justify-between items-end mb-6">
                  <h3 className="font-bold text-gray-900 text-lg">Goals Progress</h3>
                  <button className="text-xs font-bold text-blue-500 hover:text-blue-600 flex items-center gap-1">
                      See All <ArrowUpRight size={12} />
                  </button>
              </div>
              <GoalWidget goals={GOALS} />
           </div>

            {/* Monthly Bills */}
           <div className="mb-8 flex-1">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-gray-900 text-lg">Upcoming Bills</h3>
                 <span className="text-xs text-gray-400">Monthly</span>
              </div>
              <BillWidget bills={BILLS} />
           </div>

           {/* Promo Card */}
           <div className="mt-8 lg:mt-auto">
              <SavingsPromo />
           </div>

        </div>

      </main>
    </div>
  );
};

const ActionButton = ({ label }: { label: string }) => (
    <button className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all whitespace-nowrap shadow-sm">
        {label}
    </button>
)

export default App;
