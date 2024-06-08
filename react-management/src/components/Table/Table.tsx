
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
  const internalColumns = editRow ? [...columns, { key: 'actions', label: 'Actions' }] : columns;

  return (
    <div className={`bg-white rounded-md shadow-md p-1 w-full`}>
      <div className="flex justify-between p-4">
        <h2 className="font-medium text-lg">{title}</h2>
        <div className="space-x-2">
          {actions?.map((action, i) => (
            <button 
              key={i} 
              onClick={action.onClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm" // Example Tailwind classes
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr>
            {internalColumns.map((column, i) => (
              <th key={i} className={`text-left ${column.isNumeric ? 'text-right' : ''}`}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              {internalColumns.map((column, i) => (
                <>
                  {column.key === 'actions' ? (
                    <td key={i} className="text-center">
                      <button 
                        onClick={() => editRow?.(item)}
                        className="border border-gray-300 hover:bg-gray-100 py-1 px-2 rounded text-sm" // Example Tailwind classes
                      >
                        Edit
                      </button>
                    </td>
                  ) : (
                    <td key={i} className={`${column.isNumeric ? 'text-right' : ''}`}>
                      {item[column.key]}
                    </td>
                  )}
                </>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={internalColumns.length + (editRow ? 1 : 0)} className="text-center py-4">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};