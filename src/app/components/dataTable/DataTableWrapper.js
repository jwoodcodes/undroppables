'use client'

import DataTable from './DataTable';

export default function DataTableWrapper({ initialData }) {
    return <DataTable data={initialData} />;
}