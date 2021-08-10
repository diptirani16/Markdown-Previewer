// import logo from './logo.svg';
import './App.css';
import React from 'react';
import marked from 'marked';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // input: ''
      markdown: ""
    }
  }

  updateMarkdown (markdown){
    this.setState({
      // input: e.target.value
      markdown
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div className="container">

          <div class="card">
            <div class="card-header bg-info">
              Editor
            </div>
              {/* <textarea id="editor" onChange={this.handleChange.bind(this)}></textarea> */}
              <textarea id="editor" value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}></textarea>

          </div>

          <div class="card">
            <div class="card-header bg-info">
              Previewer
            </div>
              {/* <div id="preview">{this.state.input}</div> */}
              <div id="preview" dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}></div> 
          </div>

        </div>
      </div>
    );
  }
}

export default App;
