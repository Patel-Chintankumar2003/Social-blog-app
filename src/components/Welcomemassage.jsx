

const Welcomemassage = ({onGetPostsClick}) => {

    return<>
    <center>
    <h1 className="mt-3">There is no posts</h1>
    <button 
    type="button" 
    className="btn btn-primary "
    onClick={onGetPostsClick}       
    >
        Get post from server</button>
    </center>
    
    </>
}
export default Welcomemassage;