import "./App.css";
const api = {
  key: "4e251e1b6010131d31c4bdb0414c4a5a",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year= d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  };

  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeHolder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Los Angeles, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15°c
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
