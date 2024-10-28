import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { fetchBillDetails } from '../../utils/legiscan'; // Your LegiScan utility function

const folderPath = './bill'; // Adjust the path to where your JSON files are stored

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const files = fs.readdirSync(folderPath); // Read all files in the folder
    const bills = [];

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const data = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(data);

      if (jsonData && jsonData.bill && jsonData.bill.bill_id) {
        const billId = jsonData.bill.bill_id;
        const billDetails = await fetchBillDetails(billId); // Fetch details from LegiScan API

        if (billDetails) {
          bills.push(billDetails); // Add bill details to array
        }
      }
    }

    // Respond with the list of bills
    res.status(200).json(bills);
  } catch (error) {
    console.error('Error fetching bills:', error);
    res.status(500).json({ message: 'Failed to load bills' });
  }
}
