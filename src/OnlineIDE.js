import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github'; // github 테마 스타일 파일을 import합니다
import 'ace-builds/src-noconflict/theme-tomorrow'; 
import './AceEditor.css';

const OnlineIDE = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('cpp');

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  const handleRun = () => {
    setOutput('Running the code...');
  };

  const [theme, setTheme] = useState('monokai');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className={`ace-theme ${theme}`}>
      <h2>IDE</h2>
      <div>
        <label>
          Select Theme:
          <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
            <option value="monokai">Monokai</option>
            <option value="github">GitHub</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
        </label>
      </div>
      <div>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>
      <div className='ace-editor-container'>
        <AceEditor
          mode="c_cpp"
          theme={theme}
          value={code}
          onChange={handleChange}
          fontSize={14}
          width="100%"
          height="400px"
          showPrintMargin={false}
          editorProps={{ 
            $blockScrolling: true
         }}
          style={{
            fontFamily: "'Monaco', 'Consolas', 'Courier New', Courier, monospace",
            marginTop: '20px',
          }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
        />
      </div>
      <div>
        <button onClick={handleRun}>Run</button>
      </div>
    </div>
  );
};

export default OnlineIDE;