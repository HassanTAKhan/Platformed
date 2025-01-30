import { useState, useEffect } from "react";
import TicketsPage from "./TicketsPage";
import PageLayout from "./PageLayout";
import { Ticket } from "../core/types";
import { Filter } from "./ui/Filter";

interface TicketContainerProps {
  tickets: Ticket[];
}

export const TicketsPageContainer: React.FC<TicketContainerProps> = ({
  tickets,
}) => {
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>(tickets);
  const [filterValue, setFilterValue] = useState<{ priority: string; status: string }>({
    priority: 'none',
    status: 'none',
  });

  useEffect(() => {
    let filtered = tickets;

    if (filterValue.priority !== 'none') {
      filtered = filtered.filter(ticket => ticket.priority === filterValue.priority);
    }

    if (filterValue.status !== 'none') {
      filtered = filtered.filter(ticket => ticket.status === filterValue.status);
    }

    setFilteredTickets(filtered);
  }, [filterValue, tickets]);

  return (
    <>
      <Filter onFilterChange={setFilterValue} />
      <PageLayout>
        <TicketsPage tickets={filteredTickets} />
      </PageLayout>
    </>
  );
};
