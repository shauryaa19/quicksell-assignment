import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import axios from 'axios';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => {
        setTickets(response.data.tickets);
        console.log(tickets)
        setUsers(response.data.users); // Set the user data
        console.log(users)
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('groupingOption', groupingOption);
    localStorage.setItem('sortOption', sortOption);
  }, [groupingOption, sortOption]);

  useEffect(() => {
    const savedGrouping = localStorage.getItem('groupingOption');
    const savedSort = localStorage.getItem('sortOption');
    if (savedGrouping) setGroupingOption(savedGrouping);
    if (savedSort) setSortOption(savedSort);
  }, []);

  return (
    <>
      <Header setGroupingOption={setGroupingOption} setSortOption={setSortOption} />
      <KanbanBoard tickets={tickets} users={users} groupingOption={groupingOption} sortOption={sortOption} />
    </>
  );
}

export default App;
