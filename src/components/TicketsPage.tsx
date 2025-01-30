import React, { memo } from "react";
import { Box, Text, VStack, HStack, Icon, Flex } from "@chakra-ui/react";
import {
  ArrowLongDownIcon,
  MinusIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/solid";
import { Avatar } from "./ui/avatar";
import { Ticket } from "../core/types";

interface TicketsPageProps {
  tickets: Ticket[];
}

interface PriorityIcon {
  icon: typeof ArrowLongUpIcon | typeof MinusIcon | typeof ArrowLongDownIcon;
  color: string;
}

const getPriorityIcon = (priority?: string): PriorityIcon | null => {
  switch (priority) {
    case "high":
      return { icon: ArrowLongUpIcon, color: "red.500" };
    case "medium":
      return { icon: MinusIcon, color: "yellow.500" };
    case "low":
      return { icon: ArrowLongDownIcon, color: "green.500" };
    default:
      return null;
  }
};

const TicketsPage: React.FC<TicketsPageProps> = ({ tickets }) => {
  const groupedTickets = {
    backlog: tickets.filter((ticket) => ticket.status === "backlog"),
    inProgress: tickets.filter((ticket) => ticket.status === "in-progress"),
    done: tickets.filter((ticket) => ticket.status === "done"),
  };

  console.log(tickets);

  const renderTickets = (ticketList: Ticket[]) => (
    <VStack align="stretch" gap={4}>
      {ticketList.map((ticket) => {
        const priority = getPriorityIcon(ticket.priority);
        const formattedDueDate = ticket.dueDate
          ? !isNaN(new Date(ticket.dueDate).getTime())
            ? new Date(ticket.dueDate).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : null
          : null;

        return (
          <Box
            key={ticket.id}
            p={5}
            borderRadius="sm"
            background="white"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            height="200px" 
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box as="header" mb={3}>
              <Text fontWeight="bold" fontSize="lg" color="black" lineClamp={2}>
                {ticket.title}
              </Text>
            </Box>

            <Box as="section" mb={3} flex="1">
              <Text color="gray.700" lineClamp={2}>
                {ticket.description}
              </Text>
            </Box>

            <Box borderTop="1px solid" borderColor="gray.200" mt={3} pt={3}>
              <Flex justify="space-between" align="center">
                {formattedDueDate && (
                  <Text fontSize="sm" color="gray.500">
                    Due: {formattedDueDate}
                  </Text>
                )}
                {ticket.priority && priority && (
                  <HStack gap={1}>
                    <Text fontSize="sm" color="gray.500">
                      Priority:
                    </Text>
                    <Icon
                      as={priority.icon}
                      color={priority.color}
                      boxSize={5}
                    />
                  </HStack>
                )}
                <Avatar
                  name={ticket.assignee?.name}
                  colorPalette="blue"
                  src={ticket.assignee?.avatarUrl}
                  size="sm"
                />
              </Flex>
            </Box>
          </Box>
        );
      })}
    </VStack>
  );

  return (
    <>
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="white">
          Backlog
        </Text>
        {renderTickets(groupedTickets.backlog)}
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="white">
          In Progress
        </Text>
        {renderTickets(groupedTickets.inProgress)}
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="white">
          Done
        </Text>
        {renderTickets(groupedTickets.done)}
      </Box>
    </>
  );
};

export default memo(TicketsPage);
