import React from "react";
import MyInput from "./ui/inpuut/MyInput";
import MySelect from "./ui/select/MySelect";

const PostFilter=({filter,setFilter})=>{
    return(
        <div>
              <MyInput
          value={filter.query}
          onChange={e=>setfilter({...filter,query: e.target.value})}
          placeholder="search"
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
          defaultValue="sort"
          options={[
            {value: "title", name: "name"},
            {value: "body", name: "description"}
          ]}
        />
        </div>
    )
}
export default PostFilter