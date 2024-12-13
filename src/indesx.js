import React, { useMemo, useState } from "react";

const UseMemoRevision = () => {
  const [value, setValue] = useState(10);
  console.log(value);
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Button</button>
      {useMemo(() => {
        return <p>{value}</p>;
      },[value] )}
      {
     
        useMemo(()=>{ return <p>{[1,2,3,4,5,6]?.reduce((a,b)=>a+b,0)}</p>},[])
      }
    </div>
  );
};

export default UseMemoRevision;
