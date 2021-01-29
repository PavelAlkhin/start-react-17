import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Layout from "./components/layout";
import bg1 from "./bg1.jpg"
import bg2 from "./bg2.jpg"
import bg3 from "./bg3.jpg"


const title = 'This is Title'
const desc = 'This is Descriptions'
const colorBg1 = 'red';
const colorBg2 = 'green';
const colorBg3 = 'blue';

const App = () => {
  return (
      <>
          <Header title={title} desc={desc}/>
          <Layout title={title} desc={desc} urlBg={bg1} colorBg={colorBg1} id='layoutCont1' useBg='color'/>
          <Layout title={title} desc={desc} urlBg={bg2} colorBg={colorBg2} id='layoutCont2' useBg='pic'/>
          <Layout title={title} desc={desc} urlBg={bg3} colorBg={colorBg3} id='layoutCont3' useBg='pic'/>
          <Footer />
      </>
  );
}

export default App;
