import React from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/UserSlice';

function SyncModal(props) {
    const dispatch = useDispatch();

    return (
        <div className='modal bg-modal rounded-md text-center'>
            <div className="text-white">Dữ liệu của bạn và máy không đồng bộ, bạn muốn sử dụng dữ liệu:</div>

            <div className="btn-server p-3 bg-secondary hover:bg-primary rounded-md cursor-pointer mt-2" onClick={() => { props.SyncWithServer(); props.quit() }}>Máy chủ</div>
            <div className="btn-client p-3 bg-secondary hover:bg-primary rounded-md cursor-pointer mt-2" onClick={() => { props.SyncWithClient(); props.quit()}}>Máy khách(máy bạn đó)</div>
            hoặc
            <div className="logout p-3 bg-[red] rounded-md cursor-pointer" onClick={() => {dispatch(setToken("   ")); props.quit()}}>Đăng xuất</div>
        </div>
    )
}

export default SyncModal