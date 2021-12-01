import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let {sanpham} = this.props;
    return (
      <div>
            <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem', margin: '1rem 0px 1rem 0px'}}>
                <img style={{height: '16rem', objectFit: 'cover'}} src={sanpham.hinhAnh} class="card-img-top w-100" alt={sanpham.tenSP} />
                <div class="card-body">
                    <h5 class="card-title">{sanpham.tenSP}</h5>
                    <div className="row">
                        <div className="col-5">
                            <p class="card-text align-center">{sanpham.giaBan.toLocaleString()} VND</p>
                        </div>
                        <div className="col-7 text-center">
                              {(sanpham.available === true) ? <button onClick={()=>{
                                this.props.themGioHang(sanpham)
                            }} class="btn btn-danger">Add to cart</button> : <button disabled class="btn btn-danger">Sold out</button>}
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
