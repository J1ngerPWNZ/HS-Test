import TreeNode from "./treeNode";
import {createContext, useEffect} from "react";
import {useContextHandlers} from "../hooks/hooks";

export const RootContext = createContext(null)

export default function TreeNodeWrapper({items}) {
    const [closeCallbacks, addCallback, resetCallbacks] = useContextHandlers()

    useEffect(() => {
        return resetCallbacks
    }, [])

    return <RootContext.Provider
        value={{
            closeCallbacks, addCallback
        }}>

        <ul className='tree'>
            {items.map((rootItem) => (
                <TreeNode key={rootItem.name}
                          data={rootItem}
                          isRoot
                />))}
        </ul>

    </RootContext.Provider>
}
