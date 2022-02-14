import "./Quiz.css";
function Quiz({ changeing, qustions, Next, Prev, count, dataLen }) {
  let val = "";
  let change = (e) => {
    val = e.target.value;
    qustions.val = val;
    changeing(qustions);
  };
  return (
    <div className="section">
      <div className="form">
        <h1>
          <span>
            Q<sub>{qustions.id}</sub>
          </span>{" "}
          {qustions.title} ?
        </h1>
        {qustions.option.map((ele, index) => {
          
          return (
            <div className="answor" key={index} name={`group${qustions.id}`}>
              {qustions.val == ele ? (
                  
                <input
                  onClick={change}
                  checked={true}
                  type={"radio"}
                  id={index}
                  value={ele}
                  name={`group${qustions.id}`}
                />
              ) : (
                <input
                  onClick={change}
                  type={"radio"}
                  id={index}
                  value={ele}
                  
                  name={`group${qustions.id}`}
                />
              )}
              <label htmlFor={index}>{ele}</label>
            </div>
          );
        })}

        <div className="buttons">
          <button
          className="prev"
            disabled={count == 0}
            style={count == 0 ? { display: "s" } : { display: "block" }}
            onClick={Prev}
          >
            Prev
          </button>
          <button disabled={count == dataLen - 1} onClick={Next} className={"next"}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
