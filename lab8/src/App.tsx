import './App.css'
import { BrowserRouter as Router, Routes, Route, Link }
   from 'react-router-dom';
import Home from './components/home';
import Posts from './components/posts';
import AddPost from './components/addPost';
import NotFound from './components/NotFound';
import Charts
 from './components/Charts';
function App() {
   return (
       <Router>
           <nav style={{ margin: 10 }}>
              <Link to="/" style={{ padding: 5 }}>
                   Home
               </Link>
              <Link to="/api/posts" style={{ padding: 5 }}>
                   Posts
               </Link>
               <Link to="/api/AddPosts" style={{ padding: 5 }}>
                   AddPosts
               </Link>
               <Link to="/charts" style={{ padding: 5 }}>
                     Charts
                </Link>
           </nav>
           <Routes>
              <Route path="/api/AddPosts" element={<AddPost />} />
              <Route path="/api/posts" element={<Posts />} />
              <Route path="/charts" element={<Charts />} />
               <Route path="/" element={<Home />} />
               <Route path="*" element={<NotFound />} />
              
           </Routes>
       </Router>
 );
}
export default App
