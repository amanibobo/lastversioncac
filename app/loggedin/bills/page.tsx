"use client"; // Client-side component

import { useEffect, useState } from 'react';

interface Bill {
  bill_id: number;
  title: string;
  description: string;
  status: string;
}

function BillPage() {
  const [bills, setBills] = useState<Bill[]>([]); // State for bill details
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error handling

  useEffect(() => {
    async function fetchBills() {
      try {
        const response = await fetch('/api/bills'); // Fetch data from the API route
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json(); // Parse JSON response
        setBills(data); // Update the bills state with the fetched data
      } catch (err) {
        setError('Failed to fetch bill details'); // Set error if fetching fails
      } finally {
        setLoading(false); // Stop loading once data is fetched or error occurs
      }
    }

    fetchBills(); // Call the function when the component mounts
  }, []);

  if (loading) {
    return <p>Loading bills... Please wait</p>; // Display loading while fetching
  }

  if (error) {
    return <p>{error}</p>; // Display error message if something went wrong
  }

  return (
    <div>
      <h1>Bill Details</h1>
      {bills.length === 0 ? (
        <p>No bills available</p> // Display if no bills are found
      ) : (
        <div>
          {bills.map((bill) => (
            <div key={bill.bill_id} style={billCardStyle}>
              <h2>{bill.title}</h2>
              <p>{bill.description || 'No description available'}</p>
              <p><strong>Status:</strong> {bill.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Example inline styles for bill cards
const billCardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

export default BillPage;
