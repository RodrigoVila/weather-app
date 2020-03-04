import React from "react";
import Card from "./Card";

let api = "718a19e59fe8c687c0ff168450145d0e";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      city: this.props.city,
      fullData: [],
      dailyData: [],
      data: []
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${api}&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading =>
          reading.dt_txt.includes("18:00:00")
        );
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        });
      });
  }

  dayCards = () => {
    return this.state.dailyData.map((reading, index) => (
      <Card reading={reading} key={index} />
    ));
  };

  render() {
    return (
      <div style={{ display: "flex", width: "100%" }}>{this.dayCards()}</div>
    );
  }
}
export default Forecast;
