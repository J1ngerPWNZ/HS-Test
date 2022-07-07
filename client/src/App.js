import React from 'react'

import TreeNodeWrapper from "./components/treeNodeWrapper";
import {useGetContinents} from "./hooks/api-hooks";

import './App.css';

function App() {
    const {
        data, loading, error
    } = useGetContinents()

    if (loading) {
        return <span>Loading...</span>
    }
    if (error) {
        return <span>Error {error.message}</span>
    }

    return (
        <div>
            <TreeNodeWrapper items={data.continents || []}/>
        </div>
    );
}

export default App;
