import fs from 'fs';
import path from 'path';
import axios from 'axios';

const LEGISCAN_API_URL = 'https://api.legiscan.com/?key=65e10ebbf1e44539955780009617fddb';
const folderPath = './bill'; // Path to the folder with your JSON files

// Function to fetch bill details from the LegiScan API
export const fetchBillDetails = async (billId: number) => {
  try {
    const response = await axios.get(`${LEGISCAN_API_URL}&op=getBill&id=${billId}`);
    if (response.data && response.data.bill) {
      return response.data.bill; // Returning the "bill" data
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching bill details:', error);
    return null;
  }
};

// Function to process each JSON file
export const processJsonFiles = async () => {
  const files = fs.readdirSync(folderPath);
  const bills = [];

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    if (jsonData && jsonData.bill && jsonData.bill.bill_id) {
      const billId = jsonData.bill.bill_id;
      console.log(`Processing bill ID: ${billId}`);
      const billDetails = await fetchBillDetails(billId);

      if (billDetails) {
        bills.push(billDetails); // Collect all bill details
      }
    }
  }

  return bills; // Return the collected bills data
};
