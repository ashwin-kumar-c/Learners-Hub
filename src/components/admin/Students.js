import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Heading from '../reusables/Heading'
import { startGetStudents } from '../../actions/adminActions'
import StudentsList from './StudentsList'
import Loader from '../reusables/Loader'

const Students = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('admin-token')
        dispatch(startGetStudents(token))
    }, [])

    const studentsData = useSelector((state) => {
        return state.admin.studentsData
    })

    return (
        <div className="container">
            { studentsData.length > 0 ? (
                <>
                    <div className="row">
                        <div className="col-10">
                            <Heading
                                className="pt-5"
                                type="h3"
                                title={ `Total Students - ${studentsData.length}` }
                            />
                        </div>    
                        <div className="col-2 pt-5">
                            <Link to="/admin/students/register" className="btn btn-primary "> New Student </Link>
                        </div>    
                     </div>

                    <StudentsList/>
                </>
            ) : (
                <Loader/>
            ) }
            
        </div>
    )
}

export default Students