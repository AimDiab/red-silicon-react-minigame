import './App.css'
import DirectoryComponent from './components/DirectoryComponent'
import TerminalComponent from './components/TerminalComponent'
import DirectoryService from './services/DirectoryService';
import FileService from './services/FileService';

function App() {

  // Instantiating my services to make them available to any components that need them as props
  let directoryService = new DirectoryService();
  let fileService = new FileService();
  
  // FUTURE IMPROVEMENT: If I had more time I would refine styles and ensure the application is responsive on mobile devices

  return (
    <>
    <TerminalComponent>
      <DirectoryComponent directoryService={directoryService} fileService={fileService}></DirectoryComponent>
    </TerminalComponent>
      
    </>
  )
}

export default App
