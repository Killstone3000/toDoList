
function MainList(props: any){
    
    

    return (
        props.items.map((item: any) => (
            <p className="listItem" key={item.index}>
                {item.name}
                <button className="removeBtn" key={item.index} onClick={()=>props.removeScript(item.index)}>Delete</button>
            </p>
        ))
    )
}

export default MainList