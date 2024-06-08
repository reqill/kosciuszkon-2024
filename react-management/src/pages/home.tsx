import { Button, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <VStack>
      <Text>Home page</Text>
      <Text>{count}</Text>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Link to="/dashboard">Go to dashboard</Link>
    </VStack>
  );
};
