import React from 'react';
import {connect} from 'react-redux';
import {usedXP, totalXP} from '../reducers';
import {changeData} from '../actions';
import {bindActionCreators} from 'redux';
import popup from 'react-popup';
import {XPPopup} from './index';


class XPCounter extends React.Component {

    popupXP = () => {
        popup.create({
            title: `XP`,
            className: 'alert',
            content: ( <XPPopup /> )
        });
    };

    render() {
        const {usedXP, totalXP} = this.props;
        return(
            <div className='module'>
                <div className='singleAttribute xpBox xpAvailable' onClick={this.popupXP}>
                    <div className='xpBox-Text'>{totalXP - usedXP}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        totalXP: totalXP(state),
        usedXP: usedXP(state),
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(XPCounter);