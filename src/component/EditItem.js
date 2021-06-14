import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { updateItem, singlegetApiData } from "../redux/Action";
export default function EditItem() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const { strProgramTypeName } = { ...id };
  // console.log(`id`, id);
  //

  const selectedData = useSelector((state) => state.reducer.singleitem);
  console.log(`selectedData`, selectedData);

  const [updatedata, setupdateItem] = useState({
    strProgramTypeName: "",
    ysnActive: "",
    intProgramTypeId: id,
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateItem(updatedata));
  };
  const handleInput = (value, name) => {
    let stateData = { ...updatedata };
    stateData[name] = value;

    setupdateItem(stateData);
  };
  return (
    <div className="card bg-light w-50 m-3 p-3">
      <form onSubmit={(e) => handleUpdate(e)}>
        <div class="form-group ">
          <label for="exampleInputEmail1">Name</label>
          <input
            value={updatedata.strProgramTypeName}
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder={selectedData.strProgramTypeName}
            onChange={(e) => handleInput(e.target.value, "strProgramTypeName")}
            name="strProgramTypeName"
            required
          />
        </div>

        <div class="form-check"></div>
        <label> Select Active</label>
        <select
          class="form-select form-select mb-3"
          aria-label=".form-select-lg example"
          onChange={(e) => handleInput(e.target.value, "ysnActive")}
          name="ysnActive"
          required
        >
          {/* <option selected>Select Active or Not</option> */}

          <option value="1">1</option>
          <option value="0"> 0</option>
        </select>

        <button type="submit" class="btn btn-warning">
          Update
        </button>
      </form>
    </div>
  );
}
