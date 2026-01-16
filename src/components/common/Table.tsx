import React from 'react';
import type { ReactNode } from 'react';

export interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => ReactNode);
    className?: string; 
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyExtractor: (item: T) => string | number;
    onRowClick?: (item: T) => void;
    isLoading?: boolean;
    emptyMessage?: string;
}

function Table<T>({
    data,
    columns,
    keyExtractor,
    onRowClick,
    isLoading,
    emptyMessage = "No data available",
}: TableProps<T>) {
    if (isLoading) {
        return (
            <div className="w-full p-8 text-center text-gray-500">
                Loading data...
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="w-full p-8 text-center text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                {emptyMessage}
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50/50">
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                scope="col"
                                className={`
                                    px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider
                                    ${col.className || ''}
                                `}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item) => (
                        <tr
                            key={keyExtractor(item)}
                            onClick={() => onRowClick?.(item)}
                            className={`
                                transition-colors duration-150
                                ${onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
                            `}
                        >
                            {columns.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`
                                        px-6 py-4 whitespace-nowrap text-sm text-gray-700
                                        ${col.className || ''}
                                    `}
                                >
                                    {typeof col.accessor === 'function'
                                        ? col.accessor(item)
                                        : (item[col.accessor] as ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
