
//
// constructor(){
//   super();
//   this.state = {
//     gPosts: []
//   }
// }
//
// componentDidMount(){
//   const myInit = {
//     method: "GET",
//     headers: {
//        "Content-Type": "application/json",
//        'Accept': 'application/json'
//     }
//   };
//
//   fetch("https://api.github.com/users/fransbernhard/repos", myInit)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       this.setState({ gPosts: data });
//     })
//     .catch(function(err) {
//       console.log('Error cannot get products: ' + err.message);
//     });
//
//    this.props.fetchPostsWithRedux()
// }

// {this.props.instaPosts.map((post, i) =>
//   <li key={i}><a href={post.svn_url}>{post.name}</a></li>
// )}


// <InstagramPost />
// instaPosts={this.props.instaPosts}
// <GitHubPost gPosts={this.state.gPosts}/>

// function mapStateToProps(state){
// 	return {
//   	info: state.info
//   }
// }
//
// let Instagram = connect(mapStateToProps, {fetchInfo})(Container);
//
// export default Instagram;
