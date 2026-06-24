import { useMemo, useState } from "react";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import "./style/App/App.css"
import "./style/style.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/inpuut/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/ui/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/ui/modal/MyModal";
import { usePost } from "./hooks/usePost";

export default function App() {
  const [value1, setValue1] = useState("")
  const [posts, setPosts] = useState([
    { id: 1, title: " cc javaSckript", body: ' aa deervalue' },
    { id: 3, title: " bb javaSckript 33", body: 'bb deervalue' },
    { id: 2, title: " aa javaSckript 22", body: 'c c deervalue' },

  ])
  // const [title,setTitle]=useState('')
  // const [body,setBody]=useState('')
  // const bodyInputRef=useRef()
  // const [selectSort, setSelectSort]=useState("")
  // const [searchQuery, setSearchQuery]=useState('')
  const [filter,setFilter]=useState({sort:'', query:''})
  const [modal, setModal]=useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  // const sortPosts=(sort)=>{
  //   setSelectSort(sort)
  //   // setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  // }

  // const sortedPost=getSortedPost()//[...posts].sort((a,b)=>a[selectSort].localeCompare(b[selectSort]))
  
  // function getSortedPost(){
  //   console.log("a")
  //   if (selectSort){
  //     return [...posts].sort((a,b)=>a[selectSort].localeCompare(b[selectSort]))
  //   }
  //   return posts
  // }
  
  // const sortedPost=useMemo(()=>{
  //   console.log("a")
  //   if (filter.sort){
  //     return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
  //   }
  //   return posts;
  // },[filter.sort,posts]) // selectedSort

  // const sortedandsearchPosts=useMemo(()=>{
  //   return sortedPost.filter(post=> post.title.toLowerCase().includes(filter.query))
  // },[filter.query,sortedPost])
  const sortedandsearchPosts=usePost(posts,filter.sort,filter.query);


  return (<>
    <div>
      <h1>Начало с чистого листа</h1>
      <p>Теперь можно добавлять новые страницы и компоненты.</p>
      <Counter />
    </div>
    <div className="App">
      <MyButton style={{marginTop:30}} onClick={()=> setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin:'5px 0px',padding:'5px'}}/>
      <div>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {/* <MyInput
          value={searchQuery}
          onChange={e=>setSearchQuery(e.target.value)}
          placeholder="search"
        />
        <MySelect
          value={selectSort}
          onChange={sortPosts}
          defaultValue="sort"
          options={[
            {value: "title", name: "name"},
            {value: "body", name: "description"}
          ]}
        /> */}
        {/* <select name="" id="">
          <option value="value1"> name</option>
          <option value="value2"> desckription  </option>
        </select> */}
      </div>
      
      {/* {sortedandsearchPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedandsearchPosts} title={"список листов "} />
        : <h1 style={{textAlign:"center"}}>kjkljkjkjljlkjlkjkljlkjlkjljlkjj</h1>
      } */}
      <PostList remove={removePost} posts={sortedandsearchPosts} title={"список листов "}/>
    </div>
  </>);
}
