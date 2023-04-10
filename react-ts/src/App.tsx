import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeLayout from './pages/Layout/HomeLayout'
import AdminLayout from './pages/Layout/AdminLayout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import Dashboard from './pages/admin/Dashboard'
import ProductManagement from './pages/admin/products/ProductManagement'
import AddProduct from './pages/admin/products/AddProduct'
import UpdateProduct from './pages/admin/products/UpdateProduct'
import { Iproduct } from './interfaces/products'
import { AddPro, GetAllPro, RemovePro, UpdatePro } from './api/products'
import { ICategory } from './interfaces/category';
import { AddCate, GetAllCate, RemoveCate, UpdateCate } from './api/category'
import CateManagement from './pages/admin/category/CateManagement'
import AddCategory from './pages/admin/category/AddCate'
import Signin from './pages/signin'
import { IUser } from './interfaces/user'
import { login } from './api/auth'
import CategoryPage from './pages/categoryPage'

function App() {
  const [count, setCount] = useState(0)

  const [products, setProducts] = useState<Iproduct[]>([])

  const [category, setCategory] = useState<ICategory[]>([])

  useEffect(() => {
    GetAllPro().then(({data}) => setProducts(data))
    GetAllCate().then(({data}) => setCategory(data))
  }, [])

  const onHandleRemovepro = (_id: string | number) => {
    RemovePro(_id).then(() => setProducts(products.filter((item: Iproduct) => item._id !==_id))) 
    // console.log(_id);
  }
  const onHandleRemoveCate = (_id: string | number) => {
    RemoveCate(_id).then(() => setCategory(category.filter((item: ICategory) => item._id !==_id))) 
    // console.log(_id);
  }

  const onHandleAddPro = (product: Iproduct) => {
    AddPro(product).then(() => GetAllPro().then(({data}) => setProducts(data)));
  }
  // const onHandleAddUser = (user: IUser) => {
  //   login(user).then(({data}) => setProducts(data));
  // }
  const onHandleAddCate = (category: ICategory) => {
    AddCate(category).then(() => GetAllCate().then(({data}) => setCategory(data)))
  }

  const onHandleUpdatePro = (product: Iproduct) => {
    UpdatePro(product).then(() => GetAllPro().then(({data}) => setProducts(data)))
  }

  const onHandleUpdateCate = (category: ICategory) => {
    UpdateCate(category).then(() => GetAllCate().then(({data}) => setCategory(data)))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
          <Route path='/products'>
          <Route index element={<ProductPage products={products}/>}/>
          <Route path=':id' element={<ProductDetailPage/>}/>
        </Route>
          <Route path='signin' element={<Signin />}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='products'>
                <Route index element={<ProductManagement products={products} onRemove={onHandleRemovepro}/>}/>
                <Route path='add' element={<AddProduct onAdd={onHandleAddPro}/>}/>
                <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdatePro}/>}/>
              </Route>
          <Route path='categorys'>
                <Route index element={<CateManagement category={category} onRemove={onHandleRemoveCate}/>}/>
                <Route path='add' element={<AddCategory onAdd={onHandleAddCate}/>}/>
                {/* <Route path='update' element={<UpdateProduct/>}/> */}
              </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
