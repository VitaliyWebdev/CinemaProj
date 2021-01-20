import React,{useEffect} from 'react'
import {movieService} from "./services";
import './App.css'
import {BaseLayout} from "./layouts";
import {Home} from "./pages";

export default function App (){

    return (
        <div>
<BaseLayout>
<Home/>
</BaseLayout>
        </div>
    );
}
