import React, { Component } from 'react';

export class CartItems extends Component {
    render() {
        return (
        <div className="summary__option" key={this.props.key}>
            <div className="summary__option__label">
                {this.propsfeature} 
            </div>
            <div className="summary__option__value">
              {this.props.name}
            </div>
            <div className="summary__option__cost">
                {this.props.cost}
            </div>
        </div>
        )
    }
}

export default CartItems
