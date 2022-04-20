import '../App.css';
// import Home from './pages/home/indexx';
// import Gif from './components/gif';
import LopData from './Looping';

function Loop() {     
    return (  
      <div className="container">  
          <table className="table table-bordered">  
              <tr>  
                 <th>Rating</th>
                 <th>Title</th>  
                  <th>GIF</th>    
              </tr>  
              {LopData.filter(name => name.rating === 'g' ).map((datalop) => (  
                <tr>  
                  <td>{datalop.rating}</td>  
                  <td>{datalop.title}</td>  
                  <td><img src={datalop.webp}></img></td>  
                </tr>  
              ))}  
      
          </table>  
      
      </div>  
    );  
  }  
 
  export default Loop;