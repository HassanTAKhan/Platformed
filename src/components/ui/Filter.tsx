import { HStack, Box, Flex, Select, IconButton, createListCollection } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import * as React from "react";

export interface FilterProps {
  onFilterChange: (filter: { priority: string; status: string }) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);
  const [priority, setPriority] = React.useState<string>('none');
  const [status, setStatus] = React.useState<string>('none');

  const handlePriorityChange = (value: string[]) => {
    const newPriority = value.pop() || 'none';
    setPriority(newPriority);
    onFilterChange({ priority: newPriority, status });
  };

  const handleStatusChange = (value: string[]) => {
    const newStatus = value.pop() || 'none';
    setStatus(newStatus);
    onFilterChange({ priority, status: newStatus });
  };

  const priorityCollection = createListCollection({
    items: [
      { label: "Select priority", value: "none" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" },
    ],
  });

  const statusCollection = createListCollection({
    items: [
      { label: "Select status", value: "none" },
      { label: "Backlog", value: "backlog" },
      { label: "Triage", value: "triage" },
      { label: "In Progress", value: "in-progress" },
      { label: "Done", value: "done" },
    ],
  });

  return (
    <Flex direction="column" align="center" p={6}>
      <IconButton
        onClick={() => setIsFilterVisible(!isFilterVisible)}
        mb={4}
        p={3}
      >
       Filter{isFilterVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </IconButton>
      {isFilterVisible && (
        <HStack
          align="start"
          position="relative"
          wrap="wrap"
          justify="center"
        >
          <Box width={["100%", "320px"]}>
            <Select.Root
              collection={priorityCollection}
              size="sm"
              width="100%"
              onValueChange={(event) => handlePriorityChange(event.value)}
            >
              <Select.Label>Select priority</Select.Label>
              <Select.Trigger>
                <Select.ValueText placeholder="Select priority" />
              </Select.Trigger>
              <Select.Content position="absolute" zIndex={10}>
                {priorityCollection.items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Box>
          <Box width={["100%", "320px"]}>
            <Select.Root
              collection={statusCollection}
              size="sm"
              width="100%"
              onValueChange={(event) => handleStatusChange(event.value)}
            >
              <Select.Label>Select status</Select.Label>
              <Select.Trigger>
                <Select.ValueText placeholder="Select status" />
              </Select.Trigger>
              <Select.Content position="absolute" zIndex={10}>
                {statusCollection.items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Box>
        </HStack>
      )}
    </Flex>
  );
};
