import React from "react";
import { Button } from "react-bootstrap";

function TableComp(props) {
  return (
    <div class="container mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nama Barang</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Jenis</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data) => {
            return (
              <tr>
                <th scope="row">{data.id}</th>
                <td colspan="1">{data.namaBarang}</td>
                <td>{data.jumlah}</td>
                <td>{data.jenis}</td>
                <td>
                  <Button variant="primary me-2">Update</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComp;
