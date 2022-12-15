import { connect, Connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../services/Actions/action";

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

const mapStateToProps=state=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;