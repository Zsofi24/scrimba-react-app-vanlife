import React from "react"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import "./server"
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanInfo from "./pages/Host/HostVanInfo"
import NotFound from "./pages/Error/NotFound";



function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="vans" element={<Vans />}></Route>
          <Route path="vans/:id" element={<VanDetail />}></Route>

          {/* <Route path="/host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />}></Route>
            <Route path="/host/income" element={<Income />}></Route>
            <Route path="/host/reviews" element={<Reviews />}></Route>
          </Route> */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />}/>
            <Route path="vans" element={<HostVans />}/>

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
