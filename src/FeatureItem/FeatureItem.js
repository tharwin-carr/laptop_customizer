import React, { Component } from 'react';
import Parts from '../Parts/Parts';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export class FeatureItem extends Component {
    render() {
        const options = this.props.items.map(item => {
        const itemHash = slugify(JSON.stringify(item))
        const htmlPartName = (slugify(item.name)).replace(/-/g, ' ');
        return (
            <Parts 
            itemHash = {itemHash}
            key = {itemHash}
            name = {htmlPartName}
            cost = {item.cost}
            displayCost = {USCurrencyFormat.format(item.cost)}
            feature = {this.props.feature}
            handleCheckItem = {(feature, item) => this.handleCheckItem(feature, item)}
            handleSelectFeature = {(feature, item) => this.props.handleSelectFeature(feature, item)}
            selected = {this.props.selected}
        />
    )})
    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
}
}

export default FeatureItem
