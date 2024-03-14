import { Sales } from '@/components/dashboard/sales';
import PageWrapper from '@/components/page-wrapper';

export default function Dashboard() {
  return (
    <PageWrapper title="Dashboard">
      <Sales />
    </PageWrapper>
  );
}
