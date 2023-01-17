import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import AddStudent from './AddStudent';
import TableStudent from './TableStudent';

function App() {
  const [listSV, setListSV] = useState([])
  // console.log(listSV);

  const addSinhVien = (sv) => {
    const tmpSinhVien = [...listSV, sv];
    setListSV(tmpSinhVien);
  }

  const removeSinhVien = (_sv) => {
    const tmpSinhVien = [...listSV];
    const svIndex = tmpSinhVien.indexOf(_sv);
    if (svIndex > -1) {
      tmpSinhVien.splice(svIndex, 1);
      setListSV(tmpSinhVien);
    }
  }
  
  return (
    <div className="Form">
      <div className='addForm'>
        <AddStudent addSinhVien={addSinhVien}/>
      </div>
      <div className='tableStudent'>
        <TableStudent listSV={listSV} removeSinhVien={removeSinhVien}/>
      </div>
    </div>
  );
}

export default App;
