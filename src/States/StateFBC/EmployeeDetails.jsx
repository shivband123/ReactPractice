import React from 'react'

const Employee = (props) => {
  let data=props.empDetails1
  console.log(data);
  return (
    <div>
      <table className='tableBlock' border={"2px"} cellPadding={"2px"} cellSpacing={"4px"}>
      <tr>
        <th>EMP ID</th>
        <th>EMP NAME</th>
        <th>EMP SAL</th>
        <th>EMP DESIGNATION</th>
        <th>EMP GENDER</th>
        <th>EMP EDUCATION</th>
        <th>EMP EXP</th>
        <th>EMP COMPANIES</th>
        <th>EMP IMG</th>
        <th>EMP SKILLS</th>
        <th>EMP CITY</th>
      </tr>
      {data.map((x)=>{
        return(
          <tr>
            <td>{x.emp_id}</td>
            <td>{x.emp_Name}</td>
            <td>{x.emp_sal}</td>
            <td>{x.emp_designation}</td>
            <td>{x.emp_gender}</td>
            <td>{x.emp_eduction}</td>
            <td>{x.emp_exp}</td>
            <td>
              <ul>
                <li> {x.emp_company.previous}</li>
              <li> {x.emp_company.current}</li>
              </ul>
            </td>
            <td>
              <img src= {x.emp_img} alt=""  width={"100px"}/>
            </td>
            <td>
              <ul>
              {x.emp_Skills.map((x)=>{
                return<li>{x}</li>
              })}
              </ul>
            </td>
            <td> {x.emp_city}</td>

          </tr>
        )
      })}
      </table>
    </div>
  )
}

export default Employee

