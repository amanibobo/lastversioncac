import fs from 'fs';
import path from 'path';
import axios from 'axios';

const LEGISCAN_API_URL = 'https://api.legiscan.com/?key=65e10ebbf1e44539955780009617fddb';
const folderPath = './bill'; // Path to the folder with your 50+ JSON files

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
const processJsonFiles = async () => {
  const files = fs.readdirSync(folderPath);
  
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    
    // Read the JSON file
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    if (jsonData && jsonData.bill && jsonData.bill.bill_id) {
      const billId = jsonData.bill.bill_id;
      
      console.log(`Processing bill ID: ${billId}`);
      
      // Fetch the details for each bill ID
      const billDetails = await fetchBillDetails(billId);
      
      if (billDetails) {
        console.log(`Bill details fetched for bill ID ${billId}:`, billDetails);
        
        // Here you can process/save the fetched bill details as needed
        // For example, save the data to a new file or database
      }
    } else {
      console.log(`Bill ID not found in file: ${file}`);
    }
  }
};

// Execute the process
processJsonFiles();
