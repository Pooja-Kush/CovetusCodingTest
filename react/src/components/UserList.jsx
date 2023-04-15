import { useContext } from 'react';
import { AppContext } from '../contexts/AppState';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


const UserList = () => {
  const { users } = useContext(AppContext);

  const columns = [{
      dataField: 'firstName',
      text: 'First Name',
      filter: textFilter(),
      sort: true
    }, {
      dataField: 'lastName',
      text: 'Last Name',
      filter: textFilter(),
      sort: true
    }, {
      dataField: 'age',
      text: 'Age',
      filter: textFilter(),
      sort: true
    }, {
      dataField: 'gender',
      text: 'Gender',
      filter: textFilter(),
      sort: true
    }
  ];

  return (    
    <>
      <BootstrapTable keyField='id' 
      data={ users } 
      columns={ columns } 
      filter={ filterFactory() } />
    </>
  );
};


export default UserList;