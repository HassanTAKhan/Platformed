import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { HomeIcon, ViewfinderCircleIcon } from "@heroicons/react/16/solid";
import { memo } from "react";
import { Avatar } from "./ui/avatar";

const NavItem = memo(
  ({
    children,
    icon,
    active = false,
  }: {
    children: React.ReactNode;
    icon: React.ReactNode;
    active?: boolean;
  }) => {
    return (
      <Link
        href="#"
        color={active ? "white" : "gray.400"}
        bg={active ? "blue.600" : undefined}
        _hover={{ bg: !active ? "whiteAlpha.50" : undefined }}
        transitionProperty="common"
        transitionDuration="fast"
        rounded="none"
        focusRing="none"
        flex="0 0 auto"
      >
        <HStack py={4} px={6} gap={3}>
          <Icon asChild>{icon}</Icon>
          <Text fontWeight={active ? "600" : undefined}>{children}</Text>
        </HStack>
      </Link>
    );
  }
);

const NavBar = memo(() => {
  return (
    <HStack
      as="nav"
      flex="0 0 auto"
      bg="gray.800"
      borderBottom="1px solid"
      borderColor="gray.700"
      justifyContent="space-between"
    >
      <HStack gap={0} flex="0 0 auto">
        <NavItem icon={<HomeIcon />}>Home</NavItem>
        <NavItem icon={<ViewfinderCircleIcon />} active>
          Tickets
        </NavItem>
      </HStack>
      <Avatar
        name="Sage"
        colorPalette="blue"
        src="https://bit.ly/sage-adebayo"
        size="xs"
        flex="0 0 auto"
        mr={4}
      />
    </HStack>
  );
});

export default NavBar;
