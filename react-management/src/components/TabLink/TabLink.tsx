import { Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
};

export const TabLink = ({ text, to }: Props) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Button
          backgroundColor={isActive ? 'blue.100' : 'transparent'}
          transition={'all 0.15s ease-in-out'}
          borderBottomRadius={0}
        >
          <Text color={isActive ? 'blue.600' : 'gray.600'} transition={'all 0.15s ease-in-out'}>
            {text}
          </Text>
        </Button>
      )}
    </NavLink>
  );
};
