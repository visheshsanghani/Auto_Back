import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Dropdown, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';


const languageOptions = [
    { key: 'Java & OOPs', text: 'Java & OOPs', value: 'Java & OOPs' },
    { key: 'HTML & CSS', text: 'Chinese', value: 'Chinese' },

]

const Test_Select = ({ history, userData }) => {
    const [user] = useState(JSON.parse(sessionStorage.getItem('user')).UserName);
    window.addEventListener('onbeforeunload', function (event) {
        event.preventDefault();
        return alert(
            "Do not leave the page !"
        )
    });

    window.addEventListener("popstate", () => {
        history.push('/test');
    });

    return (
        <div>
            <div>

            </div>
            <div style={{ "paddingTop": "110px", "marginLeft": "420px", "fontSize": "30px" }}>
                {user &&
                    <div>
                        Hi {user} , <br /><br />
                    </div>
                }
                Select the required Test  <br /><br />
                <div >
                    <Dropdown
                        button
                        className='icon'
                        floating
                        labeled
                        icon='world'
                        options={languageOptions}
                        search
                        text='Technology'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to='/common' text="Java" />
                            <Dropdown.Item as={Link} to='/common' text="HTML CSS" />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Image src="images/Perficient_logo.jpg" size='medium' style={{ "marginTop": "205px" }} />
            </div>
        </div>
    )
}




// const Test_Select1 = ({ history, user }) => {
//     window.addEventListener("popstate", () => {
//         history.push('/test');
//     });

//     return (
//         <div>
//             <div>

//             </div>
//             <div style={{ "paddingTop": "110px", "marginLeft": "420px", "fontSize": "30px" }}>
//                 {user.event.UserName &&
//                     <div>
//                         Hi {user.event.UserName} , <br /><br />
//                     </div>
//                 }
//                 Select the required Test  <br /><br />
//                 <div >
//                     <Dropdown
//                         button
//                         className='icon'
//                         floating
//                         labeled
//                         icon='world'
//                         options={languageOptions}
//                         search
//                         text='Technology'>
//                         <Dropdown.Menu>
//                             <Dropdown.Item as={Link} to='/common' text="Java" />
//                             <Dropdown.Item as={Link} to='/common' text="HTML CSS" />
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </div>
//                 <Image src="images/Perficient_logo.jpg" size='medium' style={{ "marginTop": "205px" }} />
//             </div>
//         </div>
//     )
// }

const mapStateToProps = (state) => {
    return {
        userData: state.login.event
    }
}
export default withRouter(connect(mapStateToProps, null)(Test_Select));