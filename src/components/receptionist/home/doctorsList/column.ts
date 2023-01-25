import { format } from 'date-fns'
export const column = [
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'First_name',
        accessor: 'first_name'
    },
    {
        Header: 'Last_name',
        accessor: 'last_name'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'Gender',
        accessor: 'gender'
    },
    {
        Header: 'DOB',
        accessor: 'DOB',
        Cell: ({value}:{value:any}) => {return format(new Date(value),"dd,mm,yyyy")}
    },
    {
        Header: 'Ip_address',
        accessor: 'ip_address'
    }
]