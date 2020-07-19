import React from "react";
import "./App.css";
import { Input, Button } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ID: "", key: "", value: "", entries: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const serverUrl = "http://localhost:5000";
    if (event.target.id === "read") {
      // console.log(this.state.ID);
      let urlToFetch = serverUrl + "/read/" + this.state.ID;
      fetch(urlToFetch, { method: "GET" }).then((response) => {
        return response.json().then((object) => {
          this.setState({
            entries: Object.entries(object),
          });
        });
        // console.log(response)
      });
    } else if (event.target.id === "create") {
      let urlToFetch =
        serverUrl + "/create/" + this.state.key + "/" + this.state.value;
      fetch(urlToFetch, {
        method: "POST",
      }).then((response) => {
        return response.json().then((object) => {
          this.setState({
            entries: Object.entries(object),
          });
        });
      });
      console.log("create running");
    } else if (event.target.id === "update") {
      let urlToFetch =
        serverUrl +
        "/update/" +
        this.state.ID +
        "/" +
        this.state.key +
        "/" +
        this.state.value;
      fetch(urlToFetch, {
        method: "POST",
      }).then((response) => {
        return response.json().then((object) => {
          this.setState({
            entries: Object.entries(object),
          });
        });
      });
      console.log("update running");
    } else if (event.target.id === "delete") {
      let urlToFetch = serverUrl + "/delete/" + this.state.ID;
      console.log(urlToFetch);
      fetch(urlToFetch, {
        method: "DELETE",
      }).then((response) => {
        return response.json().then((object) => {
          this.setState({
            entries: Object.entries(object),
          });
        });
      });
      console.log("delete running");
    } else if (event.target.id === "upload") {
      let urlToFetch = serverUrl + "/upload";
      fetch(urlToFetch, {
        method: "POST",
      }).then((response) => {
        return response.json().then((object) => {
          this.setState({
            entries: Object.entries(object),
          });
        });
      });
      console.log("upload running");
    } else if (event.target.id === "download") {
      let urlToFetch = serverUrl + "/download";
      fetch(urlToFetch, {
        method: "POST",
      }).then((response) => {
        return response.json().then((object) => {
          this.setState({
            entries: Object.entries(object),
          });
        });
      });
      console.log("download running");
    }
  }

  handleKeys(event) {
    if (event.target.id === "ID") {
      this.setState({ ID: event.target.value });
      console.log("id change");
    } else if (event.target.id === "key") {
      this.setState({ key: event.target.value });
      console.log("key change");
    } else if (event.target.id === "value") {
      this.setState({ value: event.target.value });
      console.log("value change");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {Object.entries(this.state.entries).map(([key, value]) => (
              <li>
                <span>
                  {Object.values(this.state.entries[key][0])}:
                  {Object.keys(this.state.entries[key][1])[0]},
                  {Object.values(this.state.entries[key][1])}
                </span>
              </li>
            ))}
          </ul>
          <Input
            id="ID"
            placeholder="ID"
            onChange={(event) => this.handleKeys(event)}
            style={{ width: "50px" }}
          />
          <Input
            id="key"
            placeholder="key"
            onChange={(event) => this.handleKeys(event)}
            style={{ width: "100px" }}
          />
          <Input
            id="value"
            placeholder="value"
            onChange={(event) => this.handleKeys(event)}
            style={{ width: "100px" }}
          />
          <p>
            {this.state.ID} {this.state.key} {this.state.value}
          </p>
          <Button
            outline
            color="secondary"
            size="lg"
            onClick={this.handleClick}
            id="create"
          >
            create
          </Button>
          <Button
            outline
            color="primary"
            size="lg"
            onClick={this.handleClick}
            id="read"
          >
            read
          </Button>
          <Button
            outline
            color="warning"
            size="lg"
            onClick={this.handleClick}
            id="update"
          >
            update
          </Button>
          <Button
            outline
            color="danger"
            size="lg"
            onClick={this.handleClick}
            id="delete"
          >
            delete
          </Button>
          <Button
            outline
            color="info"
            size="lg"
            onClick={this.handleClick}
            id="upload"
          >
            upload
          </Button>
          <Button
            outline
            color="info"
            size="lg"
            onClick={this.handleClick}
            id="download"
          >
            download
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
