import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import directory_data from './directory-data.js';
import './directory.styles.scss'

class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: directory_data, // stores homepage data
              
        }
    }

    render() {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
            </div>
        );
    }
}

export default Directory;