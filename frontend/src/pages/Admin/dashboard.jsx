import React from "react";
import api from "../../api/axios.js";
import { useState } from "react";
import axios from "../../api/axios.js";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [resData, setResData] = useState({});
  const [method, setMethod] = useState("get");
  const [newBrand, setNewBrand] = useState();

  const submit = async () => {
    console.log(method);
    try {
      const res = await axios[method](endpoint.toString(), {
        name: name,
      });
      //console.log(res.data.status);
      if (
        res.data.status === "ok" &&
        method === "post" &&
        endpoint === "/brand"
      ) {
        setName("");
      }
      setResData(res.data);
      setNewBrand(res.data.brand);
    } catch (error) {
      console.log(error.message);
    }
  };
  const methods = ["get", "post", "put", "query"];
  console.log(name);
  console.log(method);
  console.log(resData);
  return (
    <div>
      <form action="submit" method="POST">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="button"
          value="Submit"
          onClick={() => {
            submit();
          }}
        />
        <br />
        <br />
        <label htmlFor="method">Choose the method</label>
        <br />
        <select
          name="method"
          id="method"
          onClick={(e) => {
            e.preventDefault;
            setMethod(e.target.value);
          }}
        >
          {methods.map((key, index) => (
            <option value={methods[index]} key={key}>
              {methods[index].toUpperCase()}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label htmlFor="endpoint">put the endpoint</label>
        <br />
        <input
          type="text"
          id="endpoint"
          onChange={(e) => {
            setEndpoint(e.target.value);
          }}
        />
        <br />
        <br />
        <small> {resData.status}</small>
        <small>
          {" "}
          {newBrand !== undefined &&
            newBrand.length > 1 &&
            newBrand.map((key, index) => (
              <>
                <h4 key={key}>{newBrand[index].name}</h4>
              </>
            ))}
          <pre>{resData !== undefined && resData.toString()}</pre>
        </small>
      </form>
    </div>
  );
};

export default Dashboard;
