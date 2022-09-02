import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import DoctorSidebar from './DoctorSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearErrors } from '../../actions/userAction';

const DoctorList = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { isAuthenticated, user , error} = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch(getRegisteredPatient())
    if (error) {
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      history("/login");
    }
    // dispatch(getAppointedPatient());
  }, [dispatch,  error]);


  return (
    <>
     { user.type ==="doctor"?
    (
      <DoctorSidebar />
    ):(
      <Sidebar/>
    )
}
      <div className="main-content">
      <Header/>
      <div className="recent-grid">
          <div className="projects">
            <div className="card">
              <div className="card-header">
                <h3>
                  <br />
                  <br />
                  Doctors List:
                </h3>
              </div>
              <div className="card-body">
                <table width="100%">
                  <thead>
                    <tr>
                      <td>Doctor Name</td>
                      <td>Department</td>
                      <td>Age</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>vanshita sharma</td>
                      <td>neurologist</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>vanshita sharma</td>
                      <td>neurologist</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>vanshita sharma</td>
                      <td>neurologist</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>vanshita sharma</td>
                      <td>neurologist</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>vanshita sharma</td>
                      <td>neurologist</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>vanshita sharma</td>
                      <td>neurologist</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>vanshita sharma</td>
                      <td>neurologist</td>
                      <td>19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default DoctorList