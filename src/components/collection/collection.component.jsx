import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import './collection.styles.scss';
import Item from '../items/item.component';

const Collection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {
                items
                .filter((item, index) => (index < 4))
                .map(({id, ...otherItemProps}) => (
                    <Item key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default Collection;