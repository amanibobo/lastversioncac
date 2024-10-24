// app/loggedin/bills/[id]/page.tsx
import { fetchBillDetails } from '../../../utils/legiscan';

interface Bill {
  title: string;
  description: string;
  status: string;
}

async function BillPage({ params }: { params: { id: string } }) {
  const bill = await fetchBillDetails(params.id);

  if (!bill) {
    return <p>Bill not found</p>;  // Error handling
  }

  return (
    <div>
      <h1>{bill.title}</h1>
      <p>{bill.description}</p>
      <p>{bill.status}</p>
    </div>
  );
}

export default BillPage;
