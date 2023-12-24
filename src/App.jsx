import './App.css';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import AboutUs from './Pages/AboutUs';
import HomeLayout from './Layouts/HomeLayout.jsx';
import NotFound from './Pages/NotFound.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
import Courses from './Pages/CoursesPage.jsx';
import Contact from './Pages/ContactUs.jsx';

import LoveBabbarDsa from './Lectures/LoveBabbarDsa.jsx';
import NodeTechnicalThapa from './Lectures/NodeTechnicalThapa.jsx';
import NodeCodeStep from './Lectures/NodeCodeStep.jsx';
import StriverDsa from './Lectures/StriverDsa.jsx';
import JavaDsaKunal from './Lectures/JavaDsaKunal.jsx';
import CoreJavaDurga from './Lectures/CoreJavaDurga.jsx';
import CppApna from './Lectures/CppApna.jsx';
import CppCwh from './Lectures/CppCwh.jsx';
import CppNeso from './Lectures/CppNeso.jsx';
import CppPw from './Lectures/CppPw.jsx';
import JavaApnaCollege from './Lectures/JavaApnaCollege.jsx';
import JavaCwh from './Lectures/JavaCwh.jsx';
import JavaNavin from './Lectures/JavaNavin.jsx';
import JavascriptAkshay from './Lectures/JavascriptAkshay.jsx';
import JavascriptCwh from './Lectures/JavascriptCwh.jsx';
import JavascriptHitesh from './Lectures/JavascriptHitesh.jsx';
import JavascriptNavin from './Lectures/JavascriptNavin.jsx';
import NextCodeStep from './Lectures/NextCodeStep.jsx';
import NextCodevolution from './Lectures/NextCodevolution.jsx';
import NextCwh from './Lectures/NextCwh.jsx';
import NextDaveGray from './Lectures/NextDaveGray.jsx';
import NextHitesh from './Lectures/NextHitesh.jsx';
import NodeCodevolution from './Lectures/NodeCodevolution.jsx';
import NodePiyush from './Lectures/NodePiyush.jsx';
import PythonCwh from './Lectures/PythonCwh.jsx';
import PythonDurga from './Lectures/PythonDurga.jsx';
import PythonNavin from './Lectures/PythonNavin.jsx';
import PythonWs from './Lectures/PythonWs.jsx';
import ReactCodevolution from './Lectures/ReactCodevolution.jsx';
import ReactCwh from './Lectures/ReactCwh.jsx';
import ReactHitesh from './Lectures/ReactHitesh.jsx';
import ReduxCodevolution from './Lectures/ReduxCodevolution.jsx';
import CwhDsa from './Lectures/CwhDsa.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/about' element={<AboutUs />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/courses' element={<Courses />}></Route>
    <Route path='/contact' element={<Contact />}></Route>

    {/* Courses Routes */}
    <Route path='/lovebabbardsa' element={<LoveBabbarDsa />}></Route>
    <Route path='/nodetechnicalthapa' element={<NodeTechnicalThapa />}></Route>
    <Route path='/nodecodestep' element={<NodeCodeStep />}></Route>
    <Route path='/striverdsa' element={<StriverDsa />}></Route>
    <Route path='/javadsakunal' element={<JavaDsaKunal />}></Route>
    <Route path='/corejavadurga' element={<CoreJavaDurga />}></Route>
    <Route path='/javascriptakshay' element={<JavascriptAkshay />}></Route>
    <Route path='/pythoncwh' element={<PythonCwh />}></Route>
    <Route path='/nodecodevolution' element={<NodeCodevolution />}></Route>
    <Route path='/reactcodevolution' element={<ReactCodevolution />}></Route>
    <Route path='/reduxcodevolution' element={<ReduxCodevolution />}></Route>
    <Route path='/nextcodevolution' element={<NextCodevolution />}></Route>
    <Route path='/javaapnacollege' element={<JavaApnaCollege />}></Route>
    <Route path='/nextcodestep' element={<NextCodeStep />}></Route>
    <Route path='/javascriptcwh' element={<JavascriptCwh />}></Route>
    <Route path='/javacwh' element={<JavaCwh />}></Route>
    <Route path='/pythonnavin' element={<PythonNavin />}></Route>
    <Route path='/reactcwh' element={<ReactCwh />}></Route>
    <Route path='/nodepiyush' element={<NodePiyush />}></Route>
    <Route path='/javanavin' element={<JavaNavin />}></Route>
    <Route path='/pythonws' element={<PythonWs />}></Route>
    <Route path='/reacthitesh' element={<ReactHitesh />}></Route>
    <Route path='/pythondurga' element={<PythonDurga />}></Route>
    <Route path='/nexthitesh' element={<NextHitesh />}></Route>
    <Route path='/cppapna' element={<CppApna />}></Route>
    <Route path='/nextcwh' element={<NextCwh />}></Route>
    <Route path='/cppneso' element={<CppNeso />}></Route>
    <Route path='/javascripthitesh' element={<JavascriptHitesh />}></Route>
    <Route path='/javascriptnavin' element={<JavascriptNavin />}></Route>
    <Route path='/cppcwh' element={<CppCwh />}></Route>
    <Route path='/nextdavegray' element={<NextDaveGray />}></Route>
    <Route path='/cpppw' element={<CppPw />}></Route>
    <Route path='/cwhdsa' element={<CwhDsa />}></Route>



    <Route path='*' element={<NotFound />}></Route>
   </Routes>
    
    </>
  );
}

export default App;
