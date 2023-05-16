



  const [sources,setSource]=useState([]);
  const addTitle=(event,index)=>{
    if (elements[index].type === "image" ||
    elements[index].type === "video" ||
    elements[index].type === "file"  ||
    elements[index].type === "audio" ||
    elements[index].type === "headerimage"  ||
    elements[index].type=== "coverimage"  ||
    elements[index].type === "thumb"  ||
    elements[index].type === "postquote"  

    
    ){
      if (sources.length === 0) {
        const newSource = [{        index: index,        source: event.target.value      }];
        setSource(newSource);
        console.log("updated sources", newSource);
      } else{
   sources.map((source,i)=>{
    if(source.index===index){
    const newSource = [...sources];
    const updatedSource = {
      ...newSource[i],
      index:index,
      source: event.target.value,
    };
    newSource[i] = updatedSource;
    setSource(newSource);
    
    console.log("passed by addposition if",sources)
  }else{
      const newSource = [...sources];
      newSource.push({
    
      index:index,
      source: event.target.value,
    });
    setSource(newSource);
    console.log("passed by addposition else",sources)

    }
  
  
  })}
   
    console.log("passed by addposition",sources)}
  }
  const getTitle = (index) => {
    const source = sources.find((source) => source.index === index);
    return source ? source.source : '';
  }