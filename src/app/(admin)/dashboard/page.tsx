import { Incomes } from '@/components/dashboard/incomes';
import { Sales } from '@/components/dashboard/sales';
import PageWrapper from '@/components/page-wrapper';

export default function Dashboard() {
  return (
    <PageWrapper title="Dashboard">
      <div className="space-y-6 xl:space-y-0 xl:grid xl:grid-flow-col xl:auto-cols-fr xl:gap-6">
        <Incomes />
        <Sales />
      </div>
    </PageWrapper>
  );
}
