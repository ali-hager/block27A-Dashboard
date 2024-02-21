import {useState, useEffect} from "react";

export function RevenueData(){
  const [mockTransaction, setMockTransaction] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch("https://raw.githubusercontent.com/FullstackAcademy/TheSalesDashboard.Data-JSON-/main/mockData.js?token=GHSAT0AAAAAACMT7A5H3NWXE2Z3KEGI5RNCZOWOZPQ")
        const data = await response.json();
        console.log(data)
        setMockTransaction(data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  },[]);

  return (
    <>
    <h2>Fetch Mock Transaction</h2>
    {mockTransaction.map(())}
    </>
  )