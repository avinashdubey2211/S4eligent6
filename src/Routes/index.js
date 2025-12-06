import ProductPage from "../Components/Products/ProductPage";
import AllProducts from "../Components/Products/AllProducts";
import LandingPage from "../Pages/LandingPage";
import UserAccount from "../Authentication/UserAccount";
import WishList from "../Pages/WishList";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import TermsAndConditions from "../Pages/TermsAndConditions";
import ShippingPolicy from "../Pages/ShippingPolicy";
import CancellationPolicy from "../Pages/CancellationPolicy";
import Categories from "../Pages/Categories";
import CategorySubCategoryProducts from "../Components/CategoryWiseProduct";
import BlogPage from "../Pages/BlogPage/BlogPage";
import BlogDetailPage from "../Components/Products/BlogDetailPage/BlogDetailPage";
import News from "../Pages/News/News";
import News_Detail from "../Components/Products/News_Detail/News_Detail";
import Site_Map from "../Components/Products/Site_Map/Site_Map";
import TermCondition from "../Components/Products/TermCondition/TermCondition";
import Privacy_Policy from "../Components/Products/ Privacy&Policy/ Privacy_Policy";
import ReturnPolicy from "../Components/Products/ReturnPolicy/ReturnPolicy";
import ProductDetail from "../Components/Products/ProductDetail";

const routes = [
  {
    id: 1,
    path: "/",
    element: <LandingPage />,
  },
  {
    id: 2,
    path: "/home",
    element: <LandingPage />,
  },
  {
    id: 3,
    path: "/product/:id/:variant_id",
    element: <ProductPage />,
  },
  {
    id: 4,
    path: "/all-products",
    element: <AllProducts />,
  },
  {
    id: 5,
    path: "/user-account",
    element: <UserAccount />,
  },
  {
    id: 6,
    path: "/wish-list",
    element: <WishList />,
  },
  {
    id: 7,
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    id: 8,
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    id: 9,
    path: "/terms-and-policy",
    element: <TermsAndConditions />,
  },
  {
    id: 10,
    path: "/shipping-policy",
    element: <ShippingPolicy />,
  },
  {
    id: 11,
    path: "/cancellation-policy",
    element: <CancellationPolicy />,
  },
  {
    id: 12,
    path: "/categories",
    element: <Categories />,
  },

  {

    id: 20,
    path: "/:title/page",
    element: <CategorySubCategoryProducts />,
    title: "Products"


  },
    {

    id: 21,
    path: "/blogpage",
    element: <BlogPage />,
    title: "Products"


  },
  {

    id: 22,
    path: "/blog_detail_page",
    element: <BlogDetailPage />,
    title: "Products"


  },
  {

    id: 23,
    path: "/news",
    element: <News />,
    title: "Products"


  },
   {

    id: 24,
    path: "/news_detail",
    element: <News_Detail/>,
    title: "Products"


  },
   {

    id: 25,
    path: "/site_Map",
    element: <Site_Map/>,
    title: "Products"


  },
  {

    id: 26,
    path: "/termcondition",
    element: <TermCondition/>,
    title: "Products"


  },
  {

    id: 27,
    path: "/privacy_policy",
    element: <Privacy_Policy/>,
    title: "Products"


  },
  {

    id: 27,
    path: "/returnpolicy",
    element: <ReturnPolicy/>,
    title: "Products"


  },
   {

    id: 28,
    path: "/productdetail",
    element: <ProductDetail/>,
    title: "Products"


  },
  //  {

  //   id: 28,
  //   path: "/aboutus",
  //   element: <AboutUs/>,
  //   title: "Products"


  // }

 



];
export default routes;
