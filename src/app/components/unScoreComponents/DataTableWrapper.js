'use client'

import DataTable from './DataTable';

export default function DataTableWrapper({ initialData }) {
    console.log(initialData)
    return <DataTable data={initialData} />;
}