import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: '# Heading' + 
      '\n' +
      '## sub-heading...' +
      '\n' +
      '[links](https://www.freecodecamp.org)' +
      '\n\n' + 
      'Inline code `<div></div>`' +
      '\n\n' +
      ' > Block Quotes!' +
      '\n\n' +
      '**Bolded text**' +
      '\n\n' +
      ' > Block Quotes!' + 
      '\n' +
      '- item1' +
      '\n' +
      '- item2' +
      '\n' +
      '- item3' +
      '\n' +
      '![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)'
            
    }
  }

  updateMarkdown (markdown){
      this.setState({
      markdown
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div className="container">

          <div className="card">
            <div className="card-header bg-success">
              Editor
            </div>
              <textarea id="editor" value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}></textarea>

          </div>

          <div className="card card-container">
            <div className="card-header bg-success">
              Previewer
            </div>
              <div id="preview" className="overflow-auto">
                <ReactMarkdown children={this.state.markdown} />
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
