import React, { Component } from 'react'
import './HomeBooking.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../data/danhSachGhe.json'
import HangGhe from './HangGhe';

export default class HomeBooking extends Component {


  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe,index) => { 
      return <div key={index}>
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
     }) 
  }

  render() {
    return (
      <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url("https://ta-ogilvy.vn/wp-content/uploads/bg_hoang-phi-hong-bi-an-mot-huyen-thoai.jpg")', backgroundSize: '100%' }}>
        <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className='container-fluid'>
            <div className="row">
              <div className="col-8 text-center">
                <h1 className='text-warning display-4' style={{'font-weight':'bold'}}>BÀI TẬP ĐẶT VÉ CEYBERLEARN.VN</h1>
                <h2  style={{ fontSize: '35px',float:'center',color:'white' ,padding:'10px'}}>Màn hình</h2>
                <div className='mt-1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className='screen'></div>
                  <div className='ghe-pos' >
                  {this.renderHangGhe()}
                  </div>
                </div>
              
              </div>
              <div className="col-4">
                <h1 style={{ fontSize: '30px' }} className='text-light mt-2'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                <ThongTinDatGhe/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

