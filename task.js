<div>
      <div id="container" style={
        {
          width: "700px",
          height: "400px",
          rowGap: "30px",
          color: "white",
          borderRadius: "30px",
          display: "flex",
          alingItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#2d123b",
        }
      }>
        <p id="text" style={
          {
            fontSize: "18px",
          }
        }>Online Timer & Stopwatch</p>
        <div id="displayTime" style={
          {
            fontSize: "100px",
          }
        }>
          <span id="hour">00</span>:<span id="minute">00</span>:<span id="second">00</span>
        </div>
        <div id="buttons" style={{
          display: "flex",
          columnGap: "16px",
        }}>
          <button onclick="watchStart()" style={
            {
              height: " 40px",
              width: "130px",
              fontSize: "18px",
              border: "none",
              borderRadius: "9999px",
              backgroundColor: "white",
              color: "black",
            }
          }>Start</button>
          <button onclick="watchStop()" style={
            {
              height: " 40px",
              width: "130px",
              fontSize: "18px",
              border: "none",
              borderRadius: "9999px",
              backgroundColor: "white",
              color: "black",
            }
          }>Stop</button>
          <button onclick="watchReset()" style={
            {
              height: " 40px",
              width: "130px",
              fontSize: "18px",
              border: "none",
              borderRadius: "9999px",
              backgroundColor: "white",
              color: "black",
            }
          }>Reset</button>
        </div>
      </div>
    </div>