import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';

interface TableProps<T> {
  columns: { key: keyof T | string; label: string; isNumeric?: boolean }[];
  data: T[];
  actions?: { label: string; onClick: () => void }[];
  title: string;
  editRow?: (row: T) => void;
}

export const Table = <T extends Record<any, any>>({
  data,
  columns,
  actions,
  title,
  editRow,
}: TableProps<T>) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const internalColumns = editRow ? [...columns, { key: 'actions', label: 'Actions' }] : columns;

  return (
    <TableContainer bgColor={bgColor} borderRadius="md" shadow="md" padding={1} width="100%">
      <HStack justifyContent="space-between" px={4}>
        <Text fontWeight={500} fontSize={18}>
          {title}
        </Text>
        {actions?.map((action, i) => (
          <Button key={i} onClick={action.onClick} variant="solid" size="sm">
            {action.label}
          </Button>
        ))}
      </HStack>
      <ChakraTable variant="simple" size="sm" width="100%">
        <Thead>
          <Tr>
            {internalColumns.map((column, i) => (
              <Th key={i} isNumeric={column.isNumeric}>
                {column.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item, index) => (
            <Tr key={index}>
              {internalColumns.map((column, i) => (
                <>
                  {column.key === 'actions' ? (
                    <Td key={i}>
                      <Button variant="outline" size="sm" onClick={() => editRow?.(item)}>
                        Edit
                      </Button>
                    </Td>
                  ) : (
                    <Td key={i} isNumeric={column.isNumeric}>
                      {item[column.key]}
                    </Td>
                  )}
                </>
              ))}
            </Tr>
          ))}
        </Tbody>
        {data.length === 0 && (
          <Tr>
            <Td colSpan={columns.length + (editRow ? 1 : 0)}>
              <Text textAlign="center">No data</Text>
            </Td>
          </Tr>
        )}
      </ChakraTable>
    </TableContainer>
  );
};
