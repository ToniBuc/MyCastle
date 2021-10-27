import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ImageGrid from './comps/ImageGrid';
// import Modal from './comps/Modal';
// import Title from './comps/Title';
// import UploadForm from './comps/UploadForm';
import Login from './comps/Login';
import Register from './comps/Register';
import Home from './comps/Home';
import Reset from './comps/Reset';

function App() {
  // const [selectedImage, setSelectedImage] = useState(null);

  return (
    // <div className="App">
    //   <Title/>
    //   <UploadForm/>
    //   <ImageGrid setSelectedImage={setSelectedImage}/>
    //   { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    // </div>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/reset" component={Reset} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
