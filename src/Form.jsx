import React from "react";
import "./Form.css";

const Form = (props) => {
  const data = JSON.parse(props.data);
  const mPrefectures = Object.keys(data.prefectures).map(function (key) {
    return data.prefectures[key];
  });
  const mMunicipalities = Object.keys(data.municipalities).map(function (key) {
    return data.municipalities[key];
  });

  const handleChange = (e) => {};
  
  return (
    <div className="container">
      <b>{props.title}</b>
      <hr />
      <div>
        <label>名前：</label>
        <input type="text" />
      </div>
      <div className="spacer" />
      <div>
        <label>年齢：</label>
        <input type="text" />
      </div>
      <div className="spacer" />
      <div>
        <label>都道府県：</label>
        <select onChange={(e) => handleChange(e)}>
          {mPrefectures.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="spacer" />
      <div>
        <label>市区町村：</label>
        <select onChange={(e) => handleChange(e)}>
          {mMunicipalities.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="spacer" />
      <button>登録</button>
    </div>
  );
};

export default Form;
