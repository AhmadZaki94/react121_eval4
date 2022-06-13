import { Routes, Route } from "react-router-dom";
import { Home } from '../Pages/Home';
import { Company } from '../Pages/Company';
import { Employee } from '../Pages/Employee';

export const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/company" element={<Company/>}></Route>
            <Route path="/employee" element={<Employee/>}></Route>
            <Route path="/employee/:id" element={<Employee/>}></Route>
        </Routes>
    )
}