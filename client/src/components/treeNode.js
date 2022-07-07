import {Button} from "antd";
import {useHandleNodeExpand} from "../hooks/hooks";
import {useContext, useEffect} from "react";
import {RootContext} from "./treeNodeWrapper";

export default function TreeNode({data, isRoot}) {
    const [isExpanded, toggleExpand, close] = useHandleNodeExpand()
    const {closeCallbacks, addCallback} = useContext(RootContext)

    const {name, children = []} = data
    const haveNested = !!children.length;

    const onClick = haveNested ? toggleExpand : () => closeCallbacks.forEach((cb) => cb())

    useEffect(() => {
        if (isRoot && haveNested) {
            addCallback(close)
        }
    }, [])

    return <li style={{marginLeft: 20}}>
        <Button type="primary" onClick={onClick}>{name}</Button>
        <ul>{isExpanded && haveNested && children.map(children => (
            <TreeNode key={children.name} data={children}/>))}
        </ul>
    </li>
}
