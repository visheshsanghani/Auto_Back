import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { admin_login } from '../../actions';


class AdminHome extends React.Component {
    componentDidMount() {
        if (this.props.admin !== true) {
            this.props.history.push('/admin')
        }
    }

    logout = () =>{
        sessionStorage.removeItem('admin');
        this.props.admin_login();
        this.props.history.push('/admin');
    }
    
    render() {
        return (
            <div>
                AdminHome
                <br />
                <Link to='/adminadd'>Addminadd</Link>
                <Button negative className="ui centered" size='mini' style={{ marginLeft: "350px" }} onClick={this.logout} content="Log - Out" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { admin : state.admin }
}

const dispatchStateToProps = {
    admin_login : admin_login
}

export default withRouter(connect(mapStateToProps, dispatchStateToProps)(AdminHome));