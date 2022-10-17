import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/action/BookingAction'


class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button><span style={{ fontSize: '30px' }} className='text-light'>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button><span style={{ fontSize: '30px' }} className='text-light'>Ghế đang đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button><span style={{ fontSize: '30px' }} className='text-light'>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border="2">
                        <thead>
                            <tr className='text-light' style={{ fontSize: '20px' }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                        }} className='btn btn-danger'>X</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                          return tongTien += gheDangDat.gia;
                                    },0).toLocaleString()}</td>
                                <td>
                                <button className='btn btn-danger'>Thanh Toán</button>
                                </td>
                            </tr>


                        </tfoot>
                    </table>

                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BookingReducer.danhSachGheDangDat
    }
}




export default connect(mapStateToProps)(ThongTinDatGhe)
