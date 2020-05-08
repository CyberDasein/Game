import React from "react";
import style from "./result.module.css";

const Results = (props) => {
    const { results, removeResult } = props;
   
 
  return (
    <div>
      <div className={style.alert}>
        {results.map((result) => 
        (
          <div
            key={result.id}
            className={
              result.result == "успех" ? style.alertSuccess : style.alertDanger
            }
          >
            <div>
              {result.result}
             &nbsp; {(result.koef).toFixed(1)}
              <button
                className="close"
                type="button"
                onClick={() => removeResult(result.id)}
              >
                <span>&times;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Results;
