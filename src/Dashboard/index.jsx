import React from 'react'
import "./style.css"
import right from "../Icons/right.png"
import star from "../Icons/star.png"
import BarChart from '../Charts/VerticalBarChart'
import { data } from '../Charts/data'
import { FaShoppingBasket } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaCommentsDollar } from "react-icons/fa6";
import { RxTriangleUp } from "react-icons/rx";
import { RxTriangleDown } from "react-icons/rx";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdOutlineInsertChart } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuGoal } from "react-icons/lu";
import { BiDish } from "react-icons/bi";
import { TbBurger } from "react-icons/tb";
import CircularProgress from '../Charts/CircularProgress'
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

const Dashboard = () => {
  const tableData = [
    {
      customer: "Wades",
      orderNo: 1234567,
      amount: "$124.00",
      status: "Delivered"
    },
    {
      customer: "Janejack",
      orderNo: 12578934,
      amount: "$365.02",
      status: "Delivered"
    }, {
      customer: "Christin",
      orderNo: 124678,
      amount: "$45.88",
      status: "Cancelled"
    }, {
      customer: "Johnson",
      orderNo: 187542,
      amount: "$65.00",
      status: "Cancelled"
    }, {
      customer: "Hawkins",
      orderNo: 135346,
      amount: "$545.00",
      status: "Delivered"
    }, {
      customer: "Savannah",
      orderNo: 196598,
      amount: "$128.20",
      status: "Delivered"
    },
  ]

  return (
    <div>
      <div className='d-flex'>
        <div className='icons-section d-flex align-content-between flex-wrap'>
          <div>
            <div className='mt-2 d-flex justify-content-center'>
              <TbLayoutDashboardFilled size="50" className='dashIcon' color='white'/>
            </div>
            <div className='mt-4 d-flex justify-content-center'>
              <GoHomeFill className='icons-container'/>
            </div>
            <div className='mt-4 d-flex justify-content-center'>
              <MdOutlineInsertChart className='icons-container'/>
            </div>
            <div className='mt-4 d-flex justify-content-center'>
              <LuClipboardCheck className='icons-container'/>
            </div>
            <div className='mt-4 d-flex justify-content-center'>
              <TbDeviceIpadHorizontalSearch className='icons-container'/>
            </div>
            <div className='mt-4 d-flex justify-content-center'>
              <HiOutlineDocumentCheck className='icons-container'/>
            </div>
            
          </div>
          <div className='p-2 bottom-icon'>
            <IoMdLogOut color='white' className='icons-container'/>
            </div>
        </div>
        <div className='header-section'>
          <div className='d-flex justify-content-between p-lg-3 p-md-3 p-2 header-background position-relative'>
            <div>
              <FiSearch className='search-icon mt-lg-1' color='white'/>
              <input placeholder='search' className='rounded py-lg-2 py-0 px-lg-3 px-2 search' />
            </div>
            <div className=''>
              <IoSettingsOutline color='white' className='me-lg-4 me-md-4 me-1 header-icons' />
              <FaRegBell color='white' className='me-lg-4 me-md-4 me-1 header-icons' />
              <HiOutlineMail color='white' className='me-lg-4 me-md-4 me-1 header-icons' />
            </div>
          </div>
          <div className='bg-black p-3'>
            <h4 className='fw-bold text-white '>Dashboard</h4>
            <div className='row mt-4'>
              <div className='col-lg-8 col-12'>
                <div className='row'>
                  <div className='col-12 col-lg-3 col-md-3'>
                    <div className='card-section shadow mb-lg-5 mb-md-5 mb-3 p-2 rounded'>
                      <div >
                      <FaShoppingBasket color="#4060fd" size="50" className='rounded p-2' style={{backgroundColor:"#293369"}}/>
                      </div>
                      <p className='text-white fw-bold'>Total Orders</p>
                      <div className='mt-5 d-flex justify-content-between'>
                        <h1 className='text-white fw-bold'>75</h1>
                        <h5 style={{ color: "#098966" }} className='fw-bold mt-lg-3 mt-md-3 mt-2'><RxTriangleUp color='#098966' />3%</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-3 col-md-3'>
                    <div className='card-section shadow mb-lg-5 mb-md-5 mb-3 p-2 rounded'>
                      <GiShoppingBag color='#01c289' size="50"  className='rounded p-2' style={{backgroundColor:'#165246'}}/>
                      <p className='text-white fw-bold'>Total Delivered</p>
                      <div className='mt-5 d-flex justify-content-between'>
                        <h1 className='text-white fw-bold'>70</h1>
                        <h5 style={{ color: "#b14647" }} className='fw-bold mt-lg-3 mt-md-3 mt-2'><RxTriangleDown color='#b14647' />3%</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-3 col-md-3'>
                    <div className='card-section shadow mb-lg-5 mb-md-5 mb-3 p-2 rounded'>
                      <GiShoppingBag color='#f15d5d' size="50" className='rounded p-2' style={{backgroundColor:'#5f3237'}}/>
                      <p className='text-white fw-bold'>Total Cancelled</p>
                      <div className='mt-5 d-flex justify-content-between'>
                        <h1 className='text-white fw-bold'>05</h1>
                        <h5 style={{ color: "#098966" }} className='fw-bold mt-lg-3 mt-md-3 mt-2'><RxTriangleUp color='#098966' />3%</h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-3 col-md-3'>
                    <div className='card-section shadow mb-lg-5 mb-md-5 mb-3 p-2 rounded'>
                      <FaCommentsDollar color='#e74aa4' size="50"  className='rounded p-2' style={{backgroundColor:'#5b2a4a'}}/>
                      <p className='text-white fw-bold'>Total Revenue</p>
                      <div className='mt-5 d-flex justify-content-between'>
                        <h1 className='text-white fw-bold'>$2k</h1>
                        <h5 style={{ color: "#b14647" }} className='fw-bold mt-lg-3 mt-md-3 mt-2'><RxTriangleDown color='#b14647' />3%</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-12'>
                <div className='card-section shadow mb-5 rounded d-flex justify-content-around'>
                  <div className='py-lg-5 py-3 px-lg-3 mt-lg-0 mt-4'>
                    <h6 className='text-white'>Net Profit</h6>
                    <h1 className='text-white fw-bold netAmount'>$6759.25</h1>
                    <div className=''>
                      <h5 style={{ color: "#098966" }} className='fw-bold mt-3'><RxTriangleUp color='#098966' />3%</h5>
                    </div>
                  </div>
                  <div className='mt-lg-4 mt-md-4 mt-4 ms-lg-2 ms-md-2 ms-4 circularProgress'>
                  <CircularProgress/>
                  </div>

                </div>
              </div>
            </div>
            <div className='row mb-2'>
              <div className='col-lg-8 col-md-12 col-12 mb-lg-0 mb-3'>
                <div className='colorBackground rounded p-lg-3 p-md-3 p-2'>
                  <div className='d-flex justify-content-between'>
                  <h3 className='fw-bold text-white'>Activity</h3>
                  <select className='bg-secondary text-white filter'>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                  </div>
                  <BarChart data={data} />
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-12'>
                <div className='colorBackground shadow p-lg-4 p-md-4 p-2 mb-5 rounded'>
                  <div className="d-flex justify-content-between align-items-center" >
                    <div className='d-flex py-lg-3 py-md-3 py-1'>
                      <div className='rounded-circle goal p-3'>
                        <LuGoal color='#c75727' className='contents'/></div>
                      <h5 className='text-white d-flex align-items-center ms-3'>Goals</h5>
                    </div>
                    <div className='bg-secondary rounded-circle p-2' >
                    <img src={right} width="20px" height="20px"/>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className='d-flex py-3'>
                      <div className='rounded-circle dish p-3'>
                        <TbBurger color='#546cc2' className='contents'/></div>
                      <h5 className='text-white d-flex align-items-center ms-3'>Popular Dishes</h5>
                    </div>
                    <div className='bg-secondary rounded-circle p-2' >
                    <img src={right} width="20px" height="20px"/>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className='d-flex py-3'>
                      <div className='rounded-circle menu p-3'>
                        <BiDish color='#238cbc' className='contents'/></div>
                      <h5 className='text-white d-flex align-items-center ms-3'>Menu</h5>
                    </div>
                    <div className='bg-secondary rounded-circle p-2' >
                    <img src={right} width="20px" height="20px"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-8 col-12'>

                <div className='colorBackground shadow p-lg-5 p-2 mb-5 rounded'>
                  <h4 className='fw-bold text-white'>Recent Orders</h4>
                  <div className='table-responsive'>
                  <table className='table table-dark colorBackground'>
                    <thead>
                      <th>Customer</th>
                      <th>Order No.</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </thead>
                    {tableData.map((x, index) => (
                      <tbody className='colorBackground p-lg-5'>

                        <tr key={index}>
                          <td><CgProfile size="30px" color='white' className='me-2'/>{x.customer}</td>
                          <td>{x.orderNo}</td>
                          <td>{x.amount}</td>
                          <td><span className={x?.status=="Delivered" ? "delivered":"cancelled"}>{x.status}</span></td>
                        </tr>
                      </tbody>

                    ))}
                  </table>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-12'>
                <div className='colorBackground shadow p-3 mb-3 rounded'>
                  <h4 className='fw-bold text-white mb-4'>Customerr Feedback</h4>
                  <div>
                    <div className='d-flex mb-2'>
                      <CgProfile size="40px" color='white'/>
                      <h5 className='fw-bold text-white ms-2 mt-1'>Jenny Wilson</h5>
                    </div>
                    <div className='mb-2'>
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                    </div>
                    <div className='text-white'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <hr className='text-white' />
                  </div>

                  <div>
                    <div className='d-flex mb-2'>
                      <CgProfile size="40px" color='white'/>
                      <h5 className='fw-bold text-white ms-2 mt-1'>Jenny Wilson</h5>
                    </div>
                    <div className='mb-2'>
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                    </div>
                    <div className='text-white fs-6'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <hr className='text-white' />
                  </div>

                  <div>
                    <div className='d-flex mb-2'>
                      <CgProfile size="40px" color='white'/>
                      <h5 className='fw-bold text-white ms-2 mt-1'>Jenny Wilson</h5>
                    </div>
                    <div className='mb-2'>
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                      <img src={star} width="20px" height="20px" />
                    </div>
                    <div className='text-white fs-6'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <hr className='text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard